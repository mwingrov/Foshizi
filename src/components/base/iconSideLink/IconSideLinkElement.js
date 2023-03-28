import styled from "styled-components";

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 0px;
  padding-left: 50px;
  padding-right: 15px;
  font-size: 16px;
  height: 65px;
  color: #fff;
  cursor: pointer;
  background: black;
  border-left: ${({ showActivePanel }) =>
    showActivePanel && "12px solid #de821c"};

  &:hover {
    border-left: 12px solid #de821c;
    transition: all 0.2s ease-in-out;
  }

  @media (max-width: 678px) {
    width: 65px;
    height: 65px;
    border-radius: 50px;
    justify-content: center;
    padding: 0;
  }
`;

export const LinkElement = styled.p`
  display: none;
  @media (min-width: 678px) {
    display: inline;
    margin-left: 20px;
    min-width: max-content;
  }
`;
export const Arrow = styled.span`
  display: none;
  @media (min-width: 678px) {
    display: block;
    margin-left: auto;
  }
`;
