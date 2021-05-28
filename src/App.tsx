import { Home } from "./screens/home";
import { CustomThemeProvider } from "./styles";
import { GlobalsStyles } from "./styles/globals";

function App() {
  return (
    <CustomThemeProvider>
      <GlobalsStyles />
      <Home />
    </CustomThemeProvider>
  );
}

export default App;
