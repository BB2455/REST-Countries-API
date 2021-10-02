import React from "react";
import {
  CardContainer,
  CardDetails,
  CardImage,
  CardName,
  CardDescription,
  CardDetail,
} from "./CountryCard.styled";

interface Props {
  Name: string;
  Region: string;
  Capital: string;
  flag: string;
  Population: string;
}

const CountryCard = (props: Props) => {
  return (
    <CardContainer>
      <CardImage src={props.flag} alt={props.Name + " Flag"}></CardImage>
      <CardDetails>
        <CardName>{props.Name}</CardName>
        <CardDescription>
          <CardDetail>Region:</CardDetail> {props.Region}
        </CardDescription>
        <CardDescription>
          <CardDetail>Population:</CardDetail> {props.Population}
        </CardDescription>
        <CardDescription>
          <CardDetail>Capital:</CardDetail> {props.Capital}
        </CardDescription>
      </CardDetails>
    </CardContainer>
  );
};

export default CountryCard;
