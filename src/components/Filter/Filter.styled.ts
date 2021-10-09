import styled from "styled-components";
import { device } from "../../Devices";

interface VisibilityProps {
  visibility?: string;
}

export const FilterContainer = styled.div`
  width: 200px;
  position: relative;
  font-size: 14px;
  @media ${device.sm} {
    width: 400px;
    font-size: 1.25rem;
  }
  @media ${device.xs} {
    width: 100%;
  }
`;

export const DropDownIcon = styled.span`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  @media ${device.sm} {
    right: 2.5rem;
  }
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
  font-size: inherit;
  font-weight: 600;
  text-align: start;
  position: relative;
  cursor: pointer;
  @media ${device.sm} {
    border-radius: 10px;
    padding: 2rem 4rem 2rem 3rem;
  }
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
  @media ${device.sm} {
    padding: 2rem 0;
    border-radius: 10px;
  }
`;

DropDownBox.defaultProps = {
  visibility: "visible",
};

export const DropDownItem = styled.button`
  background: none;
  color: ${(props) => props.theme.colors.text};
  border: none;
  font-size: inherit;
  font-weight: 600;
  padding: 4px 1.5rem;
  cursor: pointer;
  text-align: start;
  &:hover {
    font-weight: 800;
  }
  z-index: 5;
  @media ${device.sm} {
    padding: 1rem 3rem;
  }
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
