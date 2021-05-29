import { MovieContextProvider } from "./contexts/movie-context";
import { MoviesFavoritesContextProvider } from "./contexts/movies-favorites-context";
import { Routes } from "./routes";
import { CustomThemeProvider } from "./styles";
import { GlobalsStyles } from "./styles/globals";

function App() {
  return (
    <CustomThemeProvider>
      <GlobalsStyles />
      <MovieContextProvider>
        <MoviesFavoritesContextProvider>
          <Routes />
        </MoviesFavoritesContextProvider>
      </MovieContextProvider>
    </CustomThemeProvider>
  );
}

export default App;
