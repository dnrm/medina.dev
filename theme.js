import { background, extendTheme } from "@chakra-ui/react";
import { withProse } from "@nikolovlazar/chakra-ui-prose";

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
    },
  })
);

export default theme;
