import styled from "styled-components";

export const FormInputGroup = styled.div`
  position: relative;
  display: Inline-Block;
  width: 100%;
  height: 35px;
  margin: 10px 0px 10px 0px;
  flex-direction: column;
  background-color: #3b3d3f;
`;

export const FormLabel = styled.label`
  position: absolute;
  z-index: 1;
  font-size: 14px;
  padding-left: 10px;
  padding-top: 10px;
  margin-bottom: 10px;
  color: #ccc;
`;

export const FormInput = styled.input`
  position: absolute;
  border: none;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  outline: none;
  background-color: #3b3d3f;
  padding-left: 10px;
  padding-top: 20px;
  font-size: 14px;
`;
