import styled from "styled-components";
import { device } from "../../Devices";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 285px);
  gap: 3.75rem;
  justify-content: center;
  padding: 3rem 0 3rem 0;
  @media ${device.sm} {
    grid-template-columns: 520px;
  }
  @media ${device.xs} {
    grid-template-columns: 90%;
  }
`;
