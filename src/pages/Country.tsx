import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Container, Div, Button } from "../components/shared";
import { CountryInfo } from "../components";

interface Props {
  Data: any[];
  Loaded: boolean;
}

const Country = (props: Props) => {
  let { country }: any = useParams();
  const [currentCountry, setCurrentCountry] = useState(null);
  useEffect(() => {
    if (!props.Loaded || props.Data.length < 1) {
      return;
    }
    setCurrentCountry(() => {
      return props.Data.find((countryData) => {
        return (
          countryData.name.official.toLowerCase() === country.toLowerCase() ||
          countryData.name.common.toLowerCase() === country.toLowerCase()
        );
      });
    });
  }, [props.Data, props.Loaded, country]);

  return (
    <Container>
      <Helmet>
        <title>Where In The World | {country}</title>
      </Helmet>
      <Div padding="5rem 0">
        <Button href="/" />
      </Div>
      {!props.Loaded ? (
        <h1>Loading</h1>
      ) : currentCountry === null || currentCountry === undefined ? (
        <h1>Error</h1>
      ) : (
        <CountryInfo Data={props.Data} CountryData={currentCountry} />
      )}
    </Container>
  );
};

export default Country;
