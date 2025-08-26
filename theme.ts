import { createSystem, defaultConfig } from "@chakra-ui/react";
import { withProse } from "@nikolovlazar/chakra-ui-prose";

// Add color mode config
const config = {
  initialColorMode: "system" as const,
  useSystemColorMode: true,
};

export const system = createSystem(
  defaultConfig,
  {
    theme: {
      tokens: {},
    },
    globalCss: {
      "html, body": {
        bg: "gray.800",
        color: "white",
        // fontFamily: "Geist, sans-serif",
      },
    },
  },
  withProse({
    baseStyle: {
      ul: {
        listStylePos: "inside",
      },
      a: {
        textDecor: "underline",
      },
      h1: {
        // fontFamily: "Geist, sans-serif",
        marginBottom: "0px !important",
        letterSpacing: "-1px",
      },
      hr: {
        marginBottom: "1em !important",
      },
      p: {
        textAlign: "justify",
        lineHeight: "1.5",
      },
    },
  })
);
