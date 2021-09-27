import styled from "styled-components";

interface props {
  padding?: string;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  background?: string;
  boxShadow?: string;
  width?: string;
  position?: string;
}

const Div = styled.div<props>`
  padding: ${(props) => props.padding};
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  background: ${(props) =>
    props.background === "element"
      ? props.theme.colors.elements
      : props.background};
  box-shadow: ${(props) => props.boxShadow};
  width: ${(props) => props.width};
  position: ${(props) => props.position};
`;

Div.defaultProps = {
  padding: "0",
  display: "block",
  justifyContent: "",
  alignItems: "",
  background: "none",
  boxShadow: "none",
  width: "none",
  position: "static",
};

export default Div;
