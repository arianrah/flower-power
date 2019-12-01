import landing_image from "./landing.jpg";
import cell_image from "./landing_cell.jpg";
import styled from "styled-components";

const Bg = styled.div`
  background-image: url(${landing_image});
  min-height: 100vh;
  max-width: 100vw;
  background-position: center top;
  backgroud-size: contain;
  background-attachment: fixed;

  @media screen and (max-width: 500px) {
    background-image: url(${cell_image});
  }
`;
export default Bg;
