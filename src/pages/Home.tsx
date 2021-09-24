import React from "react";
import { Container } from "../components/shared";
import { Helmet } from "react-helmet";

interface Props {}

const Home = (props: Props) => {
  return (
    <Container>
      <Helmet>
        <title>Where In The World</title>
      </Helmet>
      <Container
        padding="0"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <h1>Search</h1>
        <h2>Filter</h2>
      </Container>
    </Container>
  );
};

export default Home;
