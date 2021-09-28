import styled from "styled-components";

interface VisibilityProps {
  visibility?: string;
}

export const DropDownIcon = styled.span`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
`;

export const DropDownButton = styled.button`
  width: 100%;
  min-width: 120px;
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.elements};
  border: none;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 1rem 2rem 1rem 1.5rem;
  font-size: 14px;
  font-weight: 600;
  text-align: start;
  position: relative;
  cursor: pointer;
`;

export const DropDownBox = styled.div<VisibilityProps>`
  width: 100%;
  min-width: 120px;
  background: ${(props) => props.theme.colors.elements};
  border-radius: 5px;
  z-index: 5;
  padding 0.5rem 0;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  visibility: ${(props) => props.visibility};
`;

DropDownBox.defaultProps = {
  visibility: "visible",
};

export const DropDownItem = styled.button`
  background: none;
  color: ${(props) => props.theme.colors.text};
  border: none;
  font-size: 14px;
  font-weight: 600;
  padding: 4px 1.5rem;
  cursor: pointer;
  text-align: start;
  &:hover {
    font-weight: 800;
  }
  z-index: 5;
`;

interface DisplayProps {
  display: string;
}

export const DropDownBack = styled.button<DisplayProps>`
  background: none;
  border: none;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 3;
  top: 0;
  right: 0;
  display: ${(props) => props.display};
`;

DropDownBack.defaultProps = {
  display: "none",
};
