import styled from "styled-components";
import { device } from "../../Devices";

const Container = styled.div`
  margin: 0 auto;
  width: 1320px;
  @media ${device.xl} {
    width: 1140px;
  }
  @media ${device.lg} {
    width: 960px;
  }
  @media ${device.md} {
    width: 720px;
  }
  @media ${device.sm} {
    width: 540px;
  }
  @media ${device.xs} {
    width: 95%;
  }
`;

export default Container;
