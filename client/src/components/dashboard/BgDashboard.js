import desktop_image from "./BgDashboard.jpg";
import cell_image from "./BgDashboardCell.jpg";
import styled from "styled-components";

const BgDashboard = styled.div`
  background-image: url(${desktop_image});
  min-height: 100vh;
  max-width: 100vw;
  background-position: center top;
  backgroud-size: cover;

  top: 0;

  @media screen and (max-width: 500px) {
    background-image: url(${cell_image});
  }
`;
export default BgDashboard;
