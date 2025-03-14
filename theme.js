import { extendTheme } from "@chakra-ui/react";
import { withProse } from "@nikolovlazar/chakra-ui-prose";

// Add color mode config
const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme(
  {
    config,
    styles: {
      global: (props) => ({
        body: {
          bg: props.colorMode === "dark" ? "gray.800" : "white",
          color: props.colorMode === "dark" ? "white" : "gray.800",
        },
      }),
    },
  },
  withProse({
    baseStyle: {
      ul: {
        listStylePos: "inide",
      },
      a: {
        textDecor: "underline",
      },
      h1: {
        marginBottom: "0px !important",
        fontFamily: "Work Sans, sans-serif",
        letterSpacing: "-1px"
      },
      hr: {
        marginBottom: "1em !important",
      },
      p: {
        textAlign: 'justify',
        lineHeight: "1.5"
      }
    },
  })
);

export default theme;
