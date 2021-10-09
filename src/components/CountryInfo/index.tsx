import React from "react";
import { Div, Button } from "../shared";
import {
  FlagImage,
  DataItem,
  DataTitle,
  CountryTitle,
  BorderTitle,
  CountryContainer,
  InfoContainer,
  BorderContainer,
  BorderItemContainer,
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
        return currencies.push(currency.name);
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
        return languages.push(language);
      });
    } catch {
      return "N/A";
    }
    return languages.join(", ");
  };

  const getBorderCountryButton = (borderCode: string) => {
    const grabbedCountry = props.Data.find(
      (country: any) => country.cca3 === borderCode
    );

    const countryLink =
      grabbedCountry !== null || grabbedCountry !== undefined
        ? encodeURI(grabbedCountry.name.common)
        : "";
    const countryName =
      grabbedCountry !== null || grabbedCountry !== undefined
        ? grabbedCountry.name.common
        : "";

    return (
      <Button
        title={borderCode}
        name={countryName}
        key={borderCode}
        padding="0.5rem 1.5rem"
        href={countryLink}
        width="100%"
      />
    );
  };

  return (
    <CountryContainer>
      <FlagImage src={props.CountryData.flags[0]} />
      <Div width="100%" padding="0 0 3rem 0">
        <CountryTitle>{props.CountryData.name.common}</CountryTitle>
        <InfoContainer>
          <Div width="50%">
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
          <Div width="50%">
            <DataItem>
              <DataTitle>Top Level Domain: </DataTitle>
              {props.CountryData.tld}
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
        </InfoContainer>
        <BorderContainer>
          <BorderTitle>Border Countries: </BorderTitle>
          <BorderItemContainer>
            {props.CountryData.borders.map((borderCountry: any) =>
              getBorderCountryButton(borderCountry)
            )}
          </BorderItemContainer>
        </BorderContainer>
      </Div>
    </CountryContainer>
  );
};

export default CountryInfo;
