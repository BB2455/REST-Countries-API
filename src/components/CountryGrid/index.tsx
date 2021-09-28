import React from "react";
import { Grid } from "./CountryGrid.styled";
import { CountryCard } from "../../components";

interface Props {}

const CountryGrid = (props: Props) => {
  return (
    <Grid>
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </Grid>
  );
};

export default CountryGrid;
