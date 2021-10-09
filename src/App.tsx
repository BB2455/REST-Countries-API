import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Country from "./pages/Country";
import GlobalStyles from "./global.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Header } from "./components";

const App: React.FC = () => {
  const [theme, setTheme] = useState<string>("light");
  const [countryData, setCountryData]: any[] = useState<object>({});
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);
  // const [currentCountry, setCurrentCountry] = useState("")

  const fetchData = async (): Promise<void> => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3/all?fields=name,region,capital,flags,subregion,tld,currencies,languages,borders,cioc,population,cca3`
      );
      const data = await response.json();
      setCountryData(data);
    } catch (error) {
      console.warn("Fetch Error: ", error);
    }
    setHasLoaded(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleTheme = (): void => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Router>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Switch>
          <Route path="/:country">
            <Country Data={countryData} Loaded={hasLoaded} />
          </Route>
          <Route path="/" exact>
            <Home Data={countryData} Loaded={hasLoaded} />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
