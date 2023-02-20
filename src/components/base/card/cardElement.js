import styled from "styled-components";

export const CardWrapper = styled.div`
  width: ${({ width }) =>
    width === "full" ? "90%" : width === "half" ? "50%" : "30%"};
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const CardHeading = styled.h3`
  font-size: 20px;
  padding: 10px 20px;
  color: #fff;
`;
export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #232729;
  border-radius: 4px;
  padding: 10px 20px;
`;
