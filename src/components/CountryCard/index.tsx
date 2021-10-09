import React from "react";
import {
  CardContainer,
  CardDetails,
  CardImage,
  CardName,
  CardDescription,
  CardDetail,
} from "./CountryCard.styled";
import { Link } from "react-router-dom";

interface Props {
  Name: string;
  Region: string;
  Capital: string;
  flag: string;
  Population: string;
}

const CountryCard = (props: Props) => {
  return (
    <Link
      to={props.Name}
      style={{ textDecoration: "none", color: "inherit" }}
      title={props.Name}
    >
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
    </Link>
  );
};

export default CountryCard;
