import styled from "styled-components";

export const FormInputGroup = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  background-color: #3b3d3f;
`;

export const FormLabel = styled.label`
  position: absolute;
  z-index: 1;
  font-size: 12px;
  padding-left: 15px;
  padding-top: 7.5px;
  margin-bottom: 5px;
  color: #ccc;
`;

export const FormInput = styled.input`
  position: absolute;
  border: none;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  outline: none;
  background-color: #3b3d3f;
  padding-left: 15px;
  padding-top: 20px;
  font-size: 14px;
  color: #fff;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  background: #232729;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 50px;
    margin-bottom: 50px;
  }
`;
