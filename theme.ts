// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    1000: "#3B7328",
    900: "#5BB23F",
    700: "#0CC765",
    400: "#97DF7C"
  },
  brandBackground: {
    900: "#2C4355",
  },
  brandAccent: {
    900: "#FC785F",
  },
};

const theme = extendTheme({ colors });
export default theme;
