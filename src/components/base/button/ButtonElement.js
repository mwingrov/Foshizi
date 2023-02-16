import styled from "styled-components";

export const ButtonBtn = styled.button`
  background: transparent;
  white-space: nowrap;
  width: 100%;
  padding: 15px 0;
  color: ${({ dark }) => (dark ? "#010606" : "#FFF")};
  font-size: ${({ fontBig }) => (fontBig ? "1.25rem" : "1rem")};
  outline: none;
  border: 2px solid #3b3d3f;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#FFF" : "#FFF")};
    color: #3b3d3f;
  }

  @media (min-width: 768px) {
    width: 50%;
  }
`;
