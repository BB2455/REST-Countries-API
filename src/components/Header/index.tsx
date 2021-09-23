import React from "react";
import { Container } from "../shared";
import { Title } from "./Header.styled";
import LightDarkToggle from "../LightDarkToggle";

interface Props {
  theme: string;
  toggleTheme: any;
}

const Header = (props: Props) => {
  return (
    <Container
      padding="2rem 4rem"
      background={"element"}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Title>Where in the world?</Title>
      <LightDarkToggle theme={props.theme} toggleTheme={props.toggleTheme} />
    </Container>
  );
};

export default Header;
