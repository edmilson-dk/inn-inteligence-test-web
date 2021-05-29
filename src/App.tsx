import { MovieContextProvider } from "./contexts/movie-context";
import { Routes } from "./routes";
import { CustomThemeProvider } from "./styles";
import { GlobalsStyles } from "./styles/globals";

function App() {
  return (
    <CustomThemeProvider>
      <GlobalsStyles />
      <MovieContextProvider>
        <Routes />
      </MovieContextProvider>
    </CustomThemeProvider>
  );
}

export default App;
