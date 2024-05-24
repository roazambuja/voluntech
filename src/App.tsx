import { ThemeProvider } from "styled-components";
import "./App.css";
import Logo from "./assets/logo.svg";
import { colors } from "./styles/colors";

function App() {
  return (
    <ThemeProvider theme={colors}>
      <div className="App">
        <header className="App-header">
          <img src={Logo} alt="Logo da aplicação Voluntech" />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
