import React from "react";
import { Div, Container } from "../components/shared";
import { Helmet } from "react-helmet";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import CountryGrid from "../components/CountryGrid";

interface Props {
  Data: [];
  Loaded: boolean;
}

const Home = (props: Props) => {
  return (
    <Container>
      <Helmet>
        <title>Where In The World</title>
      </Helmet>
      <Div
        padding="3rem 0"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <SearchBar />
        <Filter />
      </Div>
      <CountryGrid Data={props.Data} Loaded={props.Loaded} />
    </Container>
  );
};

export default Home;
