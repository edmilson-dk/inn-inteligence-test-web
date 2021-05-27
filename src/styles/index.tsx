import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {};

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