/* eslint-disable no-unused-vars */
import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      100: "#E6FFFA",
      200: "#B2F5EA",
      300: "#81E6D9",
    },
    secondaryColor: {
      100: "#F0FFF4",
    },
    textColorSoft: {
      100: "#9AE6B4",
    },
    textColorBold: {
      100: "#319795",
    },
  },
});

export default theme;
