import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = { 
  colors: {
    primary: "#3cc83b",
    second: "#893bc8",
    white: "#fff",
    dark: "#09010f",
    darkSecond: "#1c1820",
    gray200: "#746c7a",
    gray300: "#524b57",
    gray100: "#AFB2B1"
  },
};

type CustomThemeProviderProps = {
  children: ReactNode;
}

export function CustomThemeProvider({ children }: CustomThemeProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      { children }
    </ThemeProvider>
  )
}