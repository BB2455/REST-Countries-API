import styled from "styled-components";
import { device } from "../../Devices";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.elements};
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  height: 100%;
  &:hover {
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.5);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 162px;
  border-radius: 5px 5px 0 0;
  @media ${device.sm} {
    height: 300px;
  }
  @media ${device.xs} {
    height: auto;
  }
`;

export const CardDetails = styled.div`
  padding: 1.5rem 1.5rem 2.5rem 1.5rem;
  @media ${device.sm} {
    padding: 3.5rem 3rem 5.75rem 3rem;
  }
`;

export const CardName = styled.h1`
  font-size: 1rem;
  font-weight: 800;
  margin-bottom: 1rem;
  @media ${device.sm} {
    font-size: 2rem;
  }
`;

export const CardDescription = styled.p`
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 0.5rem;
  @media ${device.sm} {
    font-size: 1.5rem;
  }
`;

export const CardDetail = styled.span`
  font-weight: 600;
`;
