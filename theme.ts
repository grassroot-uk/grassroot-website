// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  initialColorMode: "light",
  useSystemColorMode: false,
  brand: {
    800: "#09592d",
    600: "#1fbd66",
    300: "#c7ee3a",
  },
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
});
export default theme;
