import React from "react";
import { Div, Container } from "../components/shared";
import { Helmet } from "react-helmet";
import SearchBar from "../components/SearchBar";

interface Props {}

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
        <p>Filter</p>
      </Div>
    </Container>
  );
};

export default Home;
