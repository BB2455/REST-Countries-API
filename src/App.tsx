import React, { useState } from "react";
import Home from "./pages/Home";
import GlobalStyles from "./global.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";

const App: React.FC = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = (): void => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Home theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

export default App;
