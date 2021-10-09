import styled from "styled-components";
import { device } from "../../Devices";

export const InputBar = styled.form`
  width: 400px;
  background: ${(props) => props.theme.colors.elements};
  color: ${(props) => props.theme.colors.input};
  border-radius: 5px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  cursor: text;
  display: flex;
  position: relative;
  font-size: 14px;
  @media ${device.sm} {
    width: 100%;
    font-size: 1.25rem;
    border-radius: 10px;
  }
`;

export const Input = styled.input`
  color: ${(props) => props.theme.colors.input};
  border: none;
  padding: 1rem 0 1rem 3rem;
  font-size: inherit;
  font-weight: 600;
  background: none;
  &::placeholder {
    color: ${(props) => props.theme.colors.input};
  }
  width: 100%;
  height: 100%;
  z-index: 2;
  @media ${device.sm} {
    padding: 2rem 0 2rem 8rem;
  }
`;

export const Icon = styled.div`
  position: absolute;
  left: 20px;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  @media ${device.sm} {
    left: 4rem;
  }
`;
