"use client";

import { useEffect, useRef } from "react";

const SRC = "/brooklyn.jpg";
const RAMP = " .:-=+*#%@";
export const GLYPHS = "!<>-_\\/[]{}=+*^?#01";
const HOVER_RGB = "59,130,246"; // blue.500
export const rand = (s: string) => s[(Math.random() * s.length) | 0];
const FONT_PX = 12; // ponytail: ~15k glyphs/frame at 1440×900; raise if full-screen frames drop
const HOVER_R = 80; // px
const INTRO_MS = 1200;
const SKY_CUT = 0.25; // brightest 25% (sky, haze) becomes empty space
const GAMMA = 1.6; // >1 thins out midtones so only dark structures go dense
const EDGE_GAIN = 1.0; // how strongly outlines (Sobel) override tone

export default function AsciiHero({ alt }: { alt: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const img = new Image();

    let cols = 0, rows = 0, cw = 0;
    let lum = new Float32Array(0); // 0..1 normalized luminance per cell
    let rgb = new Uint8ClampedArray(0); // pixel color per cell
    let heat = new Float32Array(0); // hover intensity per cell
    let start = 0, raf = 0, visible = true;
    const mouse = { x: -1e4, y: -1e4 };

    function build() {
      if (!img.complete || !img.naturalWidth) return;
      const dpr = devicePixelRatio || 1;
      const { width: w, height: h } = canvas.getBoundingClientRect();
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = `${FONT_PX}px ui-monospace, SFMono-Regular, Menlo, monospace`;
      ctx.textBaseline = "top";
      cw = ctx.measureText("M").width;
      cols = Math.floor(w / cw);
      rows = Math.floor(h / FONT_PX);
      if (!cols || !rows) return;

      // "cover" crop of the photo to the canvas aspect, sampled down to one pixel per cell
      const aspect = w / h, ia = img.naturalWidth / img.naturalHeight;
      const sw = ia > aspect ? img.naturalHeight * aspect : img.naturalWidth;
      const sh = ia > aspect ? img.naturalHeight : img.naturalWidth / aspect;
      const off = document.createElement("canvas");
      off.width = cols;
      off.height = rows;
      const octx = off.getContext("2d", { willReadFrequently: true })!;
      octx.drawImage(img, (img.naturalWidth - sw) / 2, (img.naturalHeight - sh) * 0.6, sw, sh, 0, 0, cols, rows);
      rgb = octx.getImageData(0, 0, cols, rows).data;

      lum = new Float32Array(cols * rows);
      let lo = 1, hi = 0;
      for (let i = 0; i < lum.length; i++) {
        const l = (0.2126 * rgb[i * 4] + 0.7152 * rgb[i * 4 + 1] + 0.0722 * rgb[i * 4 + 2]) / 255;
        lum[i] = l;
        lo = Math.min(lo, l);
        hi = Math.max(hi, l);
      }
      for (let i = 0; i < lum.length; i++) lum[i] = (lum[i] - lo) / (hi - lo || 1);

      // Turn brightness into "ink" (dark = dense glyph) so the bridge and skyline read as a
      // silhouette against an empty sky, then boost outlines with a Sobel edge pass.
      const ink = new Float32Array(cols * rows);
      const at = (x: number, y: number) =>
        lum[Math.min(rows - 1, Math.max(0, y)) * cols + Math.min(cols - 1, Math.max(0, x))];
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const gx = at(x + 1, y - 1) + 2 * at(x + 1, y) + at(x + 1, y + 1) - at(x - 1, y - 1) - 2 * at(x - 1, y) - at(x - 1, y + 1);
          const gy = at(x - 1, y + 1) + 2 * at(x, y + 1) + at(x + 1, y + 1) - at(x - 1, y - 1) - 2 * at(x, y - 1) - at(x + 1, y - 1);
          const edge = Math.min(1, Math.hypot(gx, gy) * EDGE_GAIN);
          const tone = Math.pow(Math.max(0, (1 - at(x, y) - SKY_CUT) / (1 - SKY_CUT)), GAMMA);
          ink[y * cols + x] = Math.max(tone, edge);
        }
      }
      lum = ink;
      heat = new Float32Array(cols * rows);
    }

    function frame(now: number) {
      raf = requestAnimationFrame(frame);
      if (!visible || !cols) return;
      if (!start) start = now;
      const t = now / 1000;
      const intro = reduced ? 1 : Math.min(1, (now - start) / INTRO_MS);
      const front = intro * (rows + 4);
      const base = getComputedStyle(canvas).color;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = base;
      const hot: number[] = [];

      for (let y = 0; y < rows; y++) {
        if (y > front) break;
        const scrambling = y > front - 4;
        const water = !reduced && y > rows * 0.62;
        for (let x = 0; x < cols; x++) {
          const i = y * cols + x;
          const px = x * cw, py = y * FONT_PX;
          const d = Math.hypot(px - mouse.x, py - mouse.y);
          heat[i] += (Math.max(0, 1 - d / HOVER_R) - heat[i]) * 0.15;
          if (heat[i] > 0.08) { hot.push(i); continue; }

          // gentle horizontal drift on the river rows (right half of the photo)
          const sx = water && x > cols * 0.5 ? Math.min(cols - 1, Math.max(0, x + Math.round(Math.sin(t * 1.5 + y * 0.6)))) : x;
          let k = Math.round(lum[y * cols + sx] * (RAMP.length - 1));
          if (!reduced && Math.random() < 0.002) k = Math.max(0, Math.min(RAMP.length - 1, k + (Math.random() < 0.5 ? -1 : 1)));
          const ch = scrambling ? rand(GLYPHS) : RAMP[k];
          if (ch !== " ") ctx.fillText(ch, px, py);
        }
      }

      // hovered cells: blue + scramble
      ctx.fillStyle = `rgb(${HOVER_RGB})`;
      for (const i of hot) {
        const x = i % cols, y = (i / cols) | 0;
        ctx.globalAlpha = 0.4 + 0.6 * heat[i];
        const ch = Math.random() < heat[i] * 0.35 ? rand(GLYPHS) : RAMP[Math.max(3, Math.round(lum[i] * (RAMP.length - 1)))];
        ctx.fillText(ch, x * cw, y * FONT_PX);
      }
      ctx.globalAlpha = 1;
    }

    const move = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const leave = () => { mouse.x = mouse.y = -1e4; };
    canvas.addEventListener("pointermove", move);
    canvas.addEventListener("pointerleave", leave);
    img.onload = build;
    img.src = SRC;
    const ro = new ResizeObserver(build);
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(canvas);
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <>
      <canvas ref={ref} aria-hidden style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block", color: "var(--chakra-colors-fg-muted)" }} />
      <span style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>{alt}</span>
    </>
  );
}
