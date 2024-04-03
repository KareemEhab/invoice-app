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
      darkBg: "#141625",
      lightBg: "#F8F8FB",
      600: "#DFE3FA",
      700: "#373B53",
      800: "#888EB0",
      900: "#858BB2",
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
      light: "#FF9797",
    },
    status: {
      paid: {
        dark: "#33D69F",
        light: "#33D69F",
      },
      pending: {
        dark: "#FF8F00",
        light: "#FF8F00",
      },
      draft: {
        dark: "#DFE3FA",
        light: "#373B53",
      },
    },
    statusbg: {
      paid: {
        dark: "rgba(51, 214, 159, 0.0571)",
        light: "rgba(51, 214, 159, 0.0571)",
      },
      pending: {
        dark: "rgba(255, 143, 0, 0.0571)",
        light: "rgba(255, 143, 0, 0.0571)",
      },
      draft: {
        dark: "rgba(223, 227, 250, 0.0571)",
        light: "rgba(55, 59, 83, 0.0571)",
      },
    },
  },
});

export default theme;
