import styled from "styled-components";

const NavButton = styled.button`
  background-color: transparent;
  border: 0px solid #ffffff;
  padding: 8px
  width: 150px
  color: #ffffff;

  font-size: 18px;
  font-weight: bold;

  &:hover {background-color: #ffffff;
color: #ff9192;
}
  &:active {outline: 0;
    color: #ffffff;}

`;

export default NavButton;
