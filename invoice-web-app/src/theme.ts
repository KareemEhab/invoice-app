import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "League Spartan, sans-serif",
    body: "League Spartan, sans-serif",
  },
  colors: {
    white: {
      700: "#F9FAFE",
      800: "#FFFFFF",
    },
    gray: {
      bg: "#F8F8FB",
      600: "#DFE3FA",
      700: "#373B53",
      800: "#888EB0",
    },
    black: {
      400: "#252945",
      500: "#1E2139",
      600: "#0C0E16",
      700: "#141625",
    },
    purple: {
      700: "#9277FF",
      800: "#7C5DFA",
      900: "#7E88C3",
    },
    red: {
      main: "#EC5757",
      light: "#9277FF",
    },
  },
});

export default theme;
