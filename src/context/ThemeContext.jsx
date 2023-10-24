import { createContext, useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
export const ThemeToggleContext = createContext();

const lightTheme = {
  background: {
    default: "#f6f6f6",
    secondary: "#fff",
  },
  text: {
    primary: "#000000de",
    secondary: "#808080",
    // secondary: "#ce0000",
  },
};
const darkTheme = {
  background: {
    default: "#051922",
    secondary: "#012738",
  },
  text: {
    primary: "#fff",
    secondary: "#f0f0f0",
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
    warning: {
      main: "#ffc300",
    },

    background:
      mode === "dark"
        ? { ...darkTheme.background }
        : { ...lightTheme.background },

    text: mode === "dark" ? { ...darkTheme.text } : { ...lightTheme.text },
  },
});

const savedTheme = localStorage.getItem("theme");

function ThemeContext({ children }) {
  const [mode, setMode] = useState(savedTheme || "dark");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
      },
    }),
    [],
  );
  const theme = useMemo(() => {
    localStorage.setItem("theme", mode);
    return createTheme(getDesignTokens(mode));
  }, [mode]);
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
