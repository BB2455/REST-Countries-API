import React from "react";
import { Div, Button } from "../shared";
import {
  FlagImage,
  DataItem,
  DataTitle,
  CountryTitle,
  BorderTitle,
} from "./CountryInfo.styled";

interface Props {
  CountryData: any;
  Data: any;
}

const CountryInfo = (props: Props) => {
  const getNativeName = (): string => {
    try {
      return Object.values<any>(props.CountryData.name.nativeName)[0].official;
    } catch {
      return props.CountryData.name.official;
    }
  };

  const getCurrencies = (): string => {
    let currencies: string[] = [];
    try {
      Object.values(props.CountryData.currencies).map((currency: any) => {
        currencies.push(currency.name);
      });
    } catch {
      return "N/A";
    }
    return currencies.join(", ");
  };

  const getLanguages = (): string => {
    let languages: string[] = [];
    try {
      Object.values(props.CountryData.languages).map((language: any) => {
        languages.push(language);
      });
    } catch {
      return "N/A";
    }
    return languages.join(", ");
  };

  const getBorderCountryLink = (borderCode: string): string => {
    return "";
  };

  return (
    <Div display="flex" justifyContent="space-between" alignItems="center">
      <FlagImage src={props.CountryData.flags[0]} />
      <Div>
        <CountryTitle>{props.CountryData.name.official}</CountryTitle>
        <Div display="flex" justifyContent="space-between" width="600px">
          <Div width="250px">
            <DataItem>
              <DataTitle>Native Name: </DataTitle>
              {getNativeName()}
            </DataItem>
            <DataItem>
              <DataTitle>Population: </DataTitle> {props.CountryData.population}
            </DataItem>
            <DataItem>
              <DataTitle>Region: </DataTitle>
              {props.CountryData.region}
            </DataItem>
            <DataItem>
              <DataTitle>Sub Region: </DataTitle>
              {props.CountryData.subregion}
            </DataItem>
            <DataItem>
              <DataTitle>Capital: </DataTitle>
              {props.CountryData.capital[0]}
            </DataItem>
          </Div>
          <Div width="250px">
            <DataItem>
              <DataTitle>Top Level Domain: </DataTitle>
              {props.CountryData.name.official}
            </DataItem>
            <DataItem>
              <DataTitle>Currencies: </DataTitle>
              {getCurrencies()}
            </DataItem>
            <DataItem>
              <DataTitle>Languages: </DataTitle>
              {getLanguages()}
            </DataItem>
          </Div>
        </Div>
        <Div display="flex" padding="4rem 0 0 0" alignItems="center">
          <BorderTitle>Border Countries: </BorderTitle>
          {props.CountryData.borders.map((borderCountry: any) => (
            <Button
              margin="0 0 0 1rem"
              href={getBorderCountryLink(borderCountry)}
              title={borderCountry}
            />
          ))}
        </Div>
      </Div>
    </Div>
  );
};

export default CountryInfo;
