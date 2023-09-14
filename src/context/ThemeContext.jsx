import { createContext, useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { amber, deepOrange, grey } from "@mui/material/colors";
import { CssBaseline } from "@mui/material";
export const ThemeToggleContext = createContext();

const lightTheme = {
  background: {
    default: "#f6f6f6",
    secondary: "#fff",
  },
  text: {
    primary: "#000000de",
  },
};
const darkTheme = {
  background: {
    default: "#051922",
    secondary: "#012738",
  },
  text: {
    primary: "#fff",
  },
};

const getDesignTokens = (mode) => ({
  components: {
    MuiTypography: {
      defaultProps: {
        color: "text.primary",
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        sx: { color: "#fff" },
      },
    },
  },
  palette: {
    mode,
    primary: {
      main: "#009cf0",
    },
    secondary: {
      main: "#b4acac",
    },
    error: {
      main: "#ce0000",
    },
    background:
      mode === "dark"
        ? { ...darkTheme.background }
        : { ...lightTheme.background },

    text: mode === "dark" ? { ...darkTheme.text } : { ...lightTheme.text },
  },
});

function ThemeContext({ children }) {
  const [mode, setMode] = useState("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [],
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeToggleContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
}

export default ThemeContext;
