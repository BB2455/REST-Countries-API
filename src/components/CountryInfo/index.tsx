import React from "react";
import { Div, Button } from "../shared";
import {
  FlagImage,
  DataItem,
  DataTitle,
  CountryTitle,
  BorderTitle,
} from "./CountryInfo.styled";

interface Props {}

const CountryInfo = (props: Props) => {
  return (
    <Div display="flex" justifyContent="space-between" alignItems="center">
      <FlagImage src="" />
      <Div>
        <CountryTitle>Canada</CountryTitle>
        <Div display="flex" justifyContent="space-between" width="600px">
          <Div width="250px">
            <DataItem>
              <DataTitle>Native Name: </DataTitle>Canada
            </DataItem>
          </Div>
          <Div width="250px">
            <DataItem>
              <DataTitle>Top Level Domain: </DataTitle>.ca
            </DataItem>
          </Div>
        </Div>
        <Div display="flex" padding="4rem 0 0 0" alignItems="center">
          <BorderTitle>Border Countries: </BorderTitle>
          <Button margin="0 0 0 1rem" href="/" title="" />
          <Button margin="0 0 0 1rem" href="/france" title="France" />
          <Button margin="0 0 0 1rem" href="/america" title="America" />
        </Div>
      </Div>
    </Div>
  );
};

export default CountryInfo;
