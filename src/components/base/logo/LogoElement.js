import styled from "styled-components";
import Image from "next/image";

export const LogoContainer = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  @media (min-width: 425px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: ${({ dashboard }) => (!dashboard ? "30%" : "100%")};
  }
`;

export const ImageEl = styled(Image)`
  object-fit: containe;
  width: 250px;
  height: 250px;
`;
