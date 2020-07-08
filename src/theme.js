import React from "react";
import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  MuiTable: {
    shadows: ["none"],
  },
  MuiTableContainer: {
    shadows: ["none"],
  },
  Paper: {
    shadows: ["none"],
  },
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
    swhite: {
      main: "#ffffff",
    },
    dividerColor: {
      main: "#5B5B5B",
    },
  },
});

export default theme;
