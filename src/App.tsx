import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
