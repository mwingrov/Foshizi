import styled from "styled-components";

export const FormInputGroup = styled.div`
  position: relative;
  width: 80%;
  height: 35px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: #3b3d3f;
`;

export const FormLabel = styled.label`
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 1;
  font-size: 20px;
`;

export const FormInput = styled.input`
  position : absolute;
  top : 0;
  left : 0;
  bottom : 0;
  right : 0
  border: none;
  width: 100%;
  outline: none;
  background-color: #3b3d3f;
  font-size: 20px;
  padding: 10px;
`;
