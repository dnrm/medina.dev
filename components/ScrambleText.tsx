"use client";

import { Fragment, useEffect, useRef } from "react";
import { GLYPHS, rand } from "./AsciiHero";

const RADIUS = 45; // px from cursor to letter center
const TICK_MS = 60;

// Letters near the cursor shuffle into ASCII glyphs; the rest stay put.
export default function ScrambleText({ text }: { text: string }) {
  const root = useRef<HTMLSpanElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const timer = useRef<ReturnType<typeof setInterval>>();
  useEffect(() => () => clearInterval(timer.current), []);

  const letters = () => Array.from(root.current?.querySelectorAll<HTMLSpanElement>("[data-c]") ?? []);

  function tick() {
    for (const s of letters()) {
      const r = s.getBoundingClientRect();
      const near = Math.hypot(r.left + r.width / 2 - mouse.current.x, r.top + r.height / 2 - mouse.current.y) < RADIUS;
      s.textContent = near ? rand(GLYPHS) : s.dataset.c!;
    }
  }

  function enter() {
    // lock each letter's width so glyph swaps don't shift the layout
    for (const s of letters()) s.style.width = `${s.getBoundingClientRect().width}px`;
    clearInterval(timer.current);
    timer.current = setInterval(tick, TICK_MS);
  }

  function leave() {
    clearInterval(timer.current);
    for (const s of letters()) {
      s.textContent = s.dataset.c!;
      s.style.width = "";
    }
  }

  return (
    <>
      <span style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>{text}</span>
      <span
        ref={root}
        aria-hidden
        onPointerEnter={enter}
        onPointerLeave={leave}
        onPointerMove={(e) => {
          mouse.current = { x: e.clientX, y: e.clientY };
        }}
      >
        {text.split(" ").map((word, w) => (
          <Fragment key={w}>
            {w > 0 && " "}
            <span style={{ whiteSpace: "nowrap" }}>
              {[...word].map((c, i) => (
                <span key={i} data-c={c} style={{ display: "inline-block", textAlign: "center" }}>
                  {c}
                </span>
              ))}
            </span>
          </Fragment>
        ))}
      </span>
    </>
  );
}
