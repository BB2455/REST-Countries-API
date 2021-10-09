import styled from "styled-components";
import { device } from "../../Devices";

export const SearchContainer = styled.div`
  padding: 3rem 0 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.sm} {
    flex-direction: column;
    align-items: start;
    gap: 3rem;
  }
`;
