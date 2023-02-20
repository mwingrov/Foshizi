import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 15px;
  padding: 5px 10px;
  background: #232729;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
export const WelcomeText = styled.h2`
  font-size: 22px;
  text-transform: uppercase;
  line-height: 32px;
  color: #fff;
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;
export const IconElement = styled.span`
  width: ${({ size }) =>
    size === "lg" ? "45px" : size === "md" ? "35px" : "30px"};
  height: ${({ size }) =>
    size === "lg" ? "45px" : size === "md" ? "35px" : "30px"};
  border-radius: 50%;
  padding: 5px;
  background: ${({ bg }) => bg};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: pointer;
`;
