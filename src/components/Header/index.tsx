import React from "react";
import { Div, Container } from "../shared";
import { Title } from "./Header.styled";
import LightDarkToggle from "../LightDarkToggle";

interface Props {
  theme: string;
  toggleTheme: any;
}

const Header = (props: Props) => {
  return (
    <Div background={"element"} boxShadow=" 0 0 8px 0 rgba(0, 0, 0, 0.1)">
      <Container>
        <Div display="flex" justifyContent="space-between" alignItems="center">
          <Title>Where in the world?</Title>
          <LightDarkToggle
            theme={props.theme}
            toggleTheme={props.toggleTheme}
          />
        </Div>
      </Container>
    </Div>
  );
};

export default Header;
