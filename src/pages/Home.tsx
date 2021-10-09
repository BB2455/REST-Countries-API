import React, { useState, useEffect, ChangeEvent } from "react";
import { Container } from "../components/shared";
import { Helmet } from "react-helmet";
import CountryGrid from "../components/CountryGrid";
import { Search } from "../components";

interface Props {
  Data: [];
  Loaded: boolean;
}

const Home = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [regionFilter, setRegionFilter] = useState<string>("");
  const [currentCountries, setCurrentCountries] = useState<object[]>([]);

  const searchBarChanged = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  const filterRegionChanged = (region: string): void => {
    setRegionFilter(region);
  };

  useEffect(() => {
    if (search === "" && regionFilter === "") {
      setCurrentCountries(props.Data);
      return;
    }
    let toBeFilteredData: any[] = props.Data;
    if (regionFilter !== "") {
      toBeFilteredData = toBeFilteredData.filter(
        (country) => country.region === regionFilter
      );
    }
    if (search !== "") {
      toBeFilteredData = toBeFilteredData.filter(
        (country) =>
          country.name.official.toLowerCase().includes(search.toLowerCase()) ||
          country.name.common.toLowerCase().includes(search.toLowerCase())
      );
    }
    setCurrentCountries(toBeFilteredData);
  }, [search, regionFilter, props.Data]);

  return (
    <Container>
      <Helmet>
        <title>Where In The World</title>
      </Helmet>
      <Search
        currentSearch={search}
        searchChanged={searchBarChanged}
        filterChanged={filterRegionChanged}
        currentRegion={regionFilter}
      />
      <CountryGrid Data={currentCountries} Loaded={props.Loaded} />
    </Container>
  );
};

export default Home;
