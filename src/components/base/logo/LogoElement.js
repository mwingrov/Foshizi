import styled from "styled-components";
import Image from "next/image";

export const LogoContainer = styled.div`
  width: 75%;
  display: flex;
  @media (min-width: 425px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: ${({ dashboard }) => (!dashboard ? "30%" : "100%")};
  }
`;

export const ImageEl = styled(Image)`
  object-fit: containe;
  width: ${({ dashboard }) => (!dashboard ? "250px" : "200px")};
  height: ${({ dashboard }) => (!dashboard ? "250px" : "200px")};
`;
