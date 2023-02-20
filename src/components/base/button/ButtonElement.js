import styled from "styled-components";
import Link from "next/link";

export const ButtonBtn = styled.button`
  background: ${({ bg }) =>
    bg === "primary"
      ? "#de821c"
      : bg === "secondary"
      ? "green"
      : "transparent"};
  white-space: nowrap;
  width: ${({ size }) =>
    size === "lg" ? "200px" : size === "md" ? "150px" : "100px"};
  color: "#FFF";
  font-size: ${({ size }) =>
    size === "lg" ? "1.25rem" : size === "md" ? "1rem" : "0.85rem"};
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
    width: ${({ size }) =>
      size === "lg" ? "300px" : size === "md" ? "250px" : "120px"};
    height: ${({ size }) =>
      size === "lg" ? "75px" : size === "md" ? "55px" : "45px"};
  }
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: #fff;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#FFF" : "#FFF")};
    color: #3b3d3f;
  }
`;
