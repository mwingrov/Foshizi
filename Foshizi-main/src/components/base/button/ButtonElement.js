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
    color: #3b3d3f;
    opacity: 0.75;
  }

  @media (min-width: 768px) {
    width: ${({ size }) =>
      size === "lg" ? "300px" : size === "md" ? "100%" : "100px"};
    height: ${({ size }) =>
      size === "lg" ? "65px" : size === "md" ? "50px" : "35px"};
  }

  @media (min-width: 1024px) {
    width: ${({ size }) =>
      size === "lg" ? "300px" : size === "md" ? "100%" : "120px"};
    height: ${({ size }) =>
      size === "lg" ? "65px" : size === "md" ? "50px" : "45px"};
  }
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: #fff;

  &:hover {
    transition: all 0.2s ease-in-out;
  }
`;

export const TextButton = styled.span`
  text-decoration: none;
  color: #fff;

  &:hover {
    transition: all 0.2s ease-in-out;
  }
`;
