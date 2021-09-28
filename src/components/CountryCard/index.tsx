import React from "react";
import {
  CardContainer,
  CardDetails,
  CardImage,
  CardName,
  CardDescription,
  CardDetail,
} from "./CountryCard.styled";

interface Props {}

const CountryCard = (props: Props) => {
  return (
    <CardContainer>
      <CardImage src={""} alt={""}></CardImage>
      <CardDetails>
        <CardName>Germany</CardName>
        <CardDescription>
          <CardDetail>Population:</CardDetail> 81,770,900
        </CardDescription>
        <CardDescription>
          <CardDetail>Region:</CardDetail> Europe
        </CardDescription>
        <CardDescription>
          <CardDetail>Capital:</CardDetail> Berlin
        </CardDescription>
      </CardDetails>
    </CardContainer>
  );
};

export default CountryCard;
