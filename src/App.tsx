import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { Routes } from "./routes";
import AuthProvider from "./contexts/AuthContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
