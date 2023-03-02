import styled from "styled-components";

export const LinkWrapper = styled.div`
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 50px;
  padding-right: 15px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  background: black;
  border-left: ${({ showActivePanel }) =>
    showActivePanel && "12px solid #de821c"};

  &:hover {
    border-left: 12px solid #de821c;
    transition: all 0.2s ease-in-out;
  }
`;

export const LinkElement = styled.p`
  margin-left: 20px;
  min-width: max-content;
`;
export const Arrow = styled.span`
  margin-left: auto;
`;
