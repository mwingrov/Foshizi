import styled from "styled-components";
import Link from "next/link";

export const ButtonBtn = styled.button`
  background: ${({ bg }) =>
    bg === "primary"
      ? "#de821c"
      : bg === "secondary"
      ? "green"
      : bg === "danger"
      ? "red"
      : "transparent"};
  white-space: nowrap;
  height: 55px;
  color: "#FFF";
  font-size: ${({ size }) =>
    size === "lg" ? "1.25rem" : size === "md" ? "1rem" : "0.85rem"};
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  border-radius: 5px;
  border: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#FFF" : "#FFF")};
    color: #3b3d3f;
  }

  @media (min-width: 1024px) {
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
