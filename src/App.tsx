import { CustomThemeProvider } from "./styles";
import { GlobalsStyles } from "./styles/globals";

function App() {
  return (
    <CustomThemeProvider>
      <GlobalsStyles />
    </CustomThemeProvider>
  );
}

export default App;
