import { createTheme, responsiveFontSizes } from "@mui/material/styles";
const base = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#C31815",
      dark: "#1f1f20",
    },
    secondary: {
      main: "#ffffff",
    },
    divider: "black",
  },
  typography: {
    fontFamily: ["Mukta", "sans-serif"].join(","),
    h1: {
      fontFamily: "Inter",
    },
    h2: {
      fontFamily: "IBM Plex Serif",
      fontWeight: 500,
    },
    h4: {
      fontFamily: ["IBM Plex Serif", "serif"].join(","),
      fontWeight: 500,
    },
    h6: {
      fontFamily: ["IBM Plex Serif", "serif"].join(","),
      fontWeight: 600,
    },
    button: {
      fontFamily: ["Mukta", "sans-serif"].join(","),
      fontSize: "1rem",
    },
  },
  props: {
    MuiAppBar: {
      color: "transparent",
    },
  },
});

const theme = responsiveFontSizes(base);
export default theme;
