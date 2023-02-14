import styled from "styled-components";

export const ButtonBtn = styled.button`
  background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};
  white-space: nowrap;
  padding: 14px 48px;
  color: ${({ dark }) => (dark ? "#010606" : "#FFF")};
  font-size: ${({ fontBig }) => (fontBig ? "1.25rem" : "1rem")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#FFF" : "#01BF71")};
  }
`;
