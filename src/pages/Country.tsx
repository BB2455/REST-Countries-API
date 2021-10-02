import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Container, Div, Button } from "../components/shared";
import { CountryInfo } from "../components";

interface Props {
  Data: [];
  Loaded: boolean;
}

const Country = (props: Props) => {
  let { country }: any = useParams();
  return (
    <Container>
      <Helmet>
        <title>Where In The World | {country}</title>
      </Helmet>
      <Div padding="5rem 0">
        <Button href="/" />
      </Div>
      <CountryInfo />
    </Container>
  );
};

export default Country;
