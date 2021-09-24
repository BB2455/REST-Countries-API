import React, { useState } from "react";
import Home from "./pages/Home";
import Country from "./pages/Country";
import GlobalStyles from "./global.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components";

const App: React.FC = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = (): void => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Router>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Switch>
          <Route path="/country/:country">
            <Country />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
