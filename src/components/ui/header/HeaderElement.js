import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 55px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 25px;
  padding-bottom: 10px;

  background: #2a2f34;

  @media (min-width: 768px) {
    position: static;
    flex-direction: row;
    height: 80px;
    gap: 5px;
    padding: 5px 10px;
    background: #2a2f34;
  }
  @media (min-width: 1024px) {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 15px;
    padding: 5px 10px;
    background: #2a2f34;
  }
`;
export const ButtonWrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
  }

  @media (min-width: 1024px) {
    gap: 10px;
  }
`;

export const WelcomeText = styled.h2`
  display: none;
  font-size: 16px;
  text-transform: uppercase;
  line-height: 22px;
  color: #fff;
  @media (min-width: 768px) {
    display: flex;
    font-size: 16px;
    line-height: 32px;
    flex-basis: 20%;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
    flex-basis: 25%;
  }
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  order: -1;

  @media (min-width: 768px) {
    width: fit-content;
    gap: 5px;
    order: 1;
  }

  @media (min-width: 1024px) {
    gap: 10px;
  }
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
