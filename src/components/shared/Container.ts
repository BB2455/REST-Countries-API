import styled from "styled-components";

interface props {
  padding?: string;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  background?: string;
}

const Container = styled.div<props>`
  padding: ${(props) => props.padding};
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  background: ${(props) =>
    props.background === "element"
      ? props.theme.colors.elements
      : props.background};
`;

Container.defaultProps = {
  padding: "0 5rem",
  display: "block",
  justifyContent: "",
  alignItems: "",
  background: "none",
};

export default Container;
