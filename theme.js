import { background, extendTheme } from "@chakra-ui/react";
import { withProse } from "@nikolovlazar/chakra-ui-prose";
import { useColorModeValue } from "@chakra-ui/react";


const theme = extendTheme(
  {},
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
        textAlign: 'justify'
      }
    },
  })
);

export default theme;
