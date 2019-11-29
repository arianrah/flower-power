import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  border: 2px solid #ffffff;
  padding: 8px
  width: 150px
  color: #ffffff;
  border-radius: 25px;
  font-size: 18px;
  font-weight: bold;
  bottom:0;
  &:hover {background-color: #ffffff;
color: #ff9192;
}
  &:active {outline: 0;
    color: #ffffff;}

`;

export default Button;
