import styled from "styled-components";

export const Toggle = styled.button`
  border: none;
  cursor: pointer;
  background: none;
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
`;
