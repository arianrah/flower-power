import styled from "styled-components";

const InputFieldStyle = styled.input`
  background-color: transparent;
  margin:50px;
  margin-bottom:0px;
  width: 200px;
  border-bottom-width: 2px;
  border-top-width: 0px;
  border-right-width: 0px;
  border-left-width: 0px;
  border-style: soild;
  border-color: white;
  color: #ffffff;
    font-size: 18px;
    font-weight: bold;
  :: placeholder {
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    }

   &:focus {
    outline: 0;
    ::placeholder{
      color:transparent;
 }
   } 
  }
`;

export default InputFieldStyle;
