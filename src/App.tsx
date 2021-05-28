import { MovieContextProvider } from "./contexts/movie-context";
import { Home } from "./screens/home";
import { CustomThemeProvider } from "./styles";
import { GlobalsStyles } from "./styles/globals";

function App() {
  return (
    <CustomThemeProvider>
      <GlobalsStyles />
      <MovieContextProvider>
        <Home />
      </MovieContextProvider>
    </CustomThemeProvider>
  );
}

export default App;
