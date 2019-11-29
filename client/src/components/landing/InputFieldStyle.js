import styled from "styled-components";

const InputFieldStyle = styled.input`
  background-color: transparent;
  border-bottom-width: 2px;
  border-top-width: 0px;
  border-right-width: 0px;
  border-left-width: 0px;
  border-style: soild;
  border-color: white;
  :: placeholder {
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
  }
`;

export default InputFieldStyle;
