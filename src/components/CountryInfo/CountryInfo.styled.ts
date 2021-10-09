import styled from "styled-components";
import { device } from "../../Devices";

export const CountryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: start;
  justify-content: center;
  gap: 6rem;
  @media ${device.md} {
    display: flex;
    flex-direction: column;
  }
`;

export const FlagImage = styled.img`
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);
  width: 100%;
`;

export const CountryTitle = styled.h1`
  font-weight: 800;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  @media ${device.md} {
    font-size: 1.75rem;
  }
`;

export const DataItem = styled.h2`
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 1rem;
  @media ${device.md} {
    font-size: 16px;
  }
`;

export const DataTitle = styled.span`
  font-weight: 800;
`;

export const BorderTitle = styled.h4`
  display: block;
  font-weight: 800;
  font-size: 14px;
  margin: 1rem;
  @media ${device.md} {
    font-size: 16px;
  }
`;

export const BorderContainer = styled.div`
  display: flex;
  margin: 4rem 0 0 0;
  align-items: baseline;
  white-space: nowrap;
  @media ${device.md} {
    flex-direction: column;
  }
`;

export const BorderItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 80px);
  width: 100%;
  gap: 1rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media ${device.sm} {
    flex-direction: column;
    gap: 3rem;
  }
`;
