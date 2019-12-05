import styled from "styled-components";

const NavButton = styled.button`
  background-color: transparent;
  border: 0px solid #ffffff;
  padding: 8px
  width: 150px
  color: #C38D9E;
  font-size: 18px;
  font-weight: bold;
  outline: 0;

  :hover {
color: #ff9192;
};
  :active {outline: 0;
    color: #ffffff;};

`;

export default NavButton;
