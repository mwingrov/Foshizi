import styled from "styled-components";

export const CardWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  padding: 5px;
  @media (min-width: 768px) {
    margin-top: 0px;
    width: ${({ width }) =>
      width === "full" ? "90%" : width === "half" ? "50%" : "30%"};
    gap: 20px;
  }
`;
export const CardHeading = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #fff;
  padding: 5px;
  media (min-width : 768px) {
    font-size: 20px;
    padding: 10px 20px;
  }
`;
export const CardContainer = styled.div`
  height: 100%;
  background: #232729;
  border-radius: 4px;
  padding: 5px;
  @media (min-width: 768px) {
    padding: 10px 20px;
  }
`;
