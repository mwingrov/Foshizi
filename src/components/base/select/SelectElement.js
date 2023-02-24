import styled from "styled-components";

export const FormSelectGroup = styled.div`
  position: relative;
  width: 100%;
  height: 65px;
  display: flex;
  flex-direction: column;
  background-color: #3b3d3f;
`;

export const FormSelect = styled.select`
  position: absolute;
  border: none;
  width: 100%;
  height: 100%;
  outline: none;
  background: #343a3f;
  padding-left: 15px;
  padding-top: 20px;
  font-size: 14px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

export const FormOption = styled.option`
  font-size: 14px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-bottom: 50px;
  background: #232729;
  @media (min-width: 1024px) {
    width: 75%;
    flex-direction: row;
    justify-content: space-between;
    gap: 50px;
  }
`;
