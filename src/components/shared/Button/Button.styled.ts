import styled from "styled-components";

interface ButtonProps {
  padding?: string;
  margin?: string;
  width?: string;
}

export const Button = styled.div<ButtonProps>`
  display: inline-block;
  padding: ${(props) => props.padding};
  font-size: 14px;
  font-weight: 600;
  border-radius: 5px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);
  background: ${(props) => props.theme.colors.elements};
  border: none;
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
`;

Button.defaultProps = {
  padding: "0.5rem 2rem",
  margin: "0",
  width: "none",
};
