import styled from "styled-components";

export const FormInputGroup = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 35px;
  flex-direction: column;
  background-color: #3b3d3f;
  margin-top: 5px;
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
  width: calc(100% - 20px);
  height: 100%;
  outline: none;
  background: #343a3f;
  padding-top: 20px;
  padding-left: 15px;
  font-size: 14px;
  color: #fff;
  border: ${({ errorMessage }) =>
    errorMessage ? "1px red solid" : "1px solid rgba(255, 255, 255, 0.08)"};
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-bottom: 50px;
  background: #2a2f34;
  @media (min-width: 1024px) {
    width: 75%;
    flex-direction: row;
    justify-content: space-between;
    gap: 50px;
  }
`;
