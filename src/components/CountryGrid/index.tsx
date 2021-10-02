import React from "react";
import { Grid } from "./CountryGrid.styled";
import { CountryCard } from "../../components";

interface Props {
  Data: any[];
  Loaded: boolean;
}

const CountryGrid = (props: Props) => {
  return (
    <Grid>
      {props.Data.length > 0 ? (
        props.Data.map((country) => (
          <CountryCard
            key={country.name.common}
            Name={country.name.official}
            Population={country.population}
            Region={country.region}
            Capital={country.capital[0]}
            flag={country.flags[1]}
          />
        ))
      ) : (
        <h1>Loading</h1>
      )}
    </Grid>
  );
};

export default CountryGrid;
