import styled from "styled-components";
import Image from "next/image";

export const IconTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ textSize }) => (textSize === "sm" ? "5px" : "20px")};
`;
export const ImageContainer = styled.div`
  width: ${({ big }) =>
    big === "200" ? "100px" : big === "100" ? "60px" : "40px"};
  height: ${({ big }) =>
    big === "200" ? "100px" : big === "100" ? "60px" : "40px"};
  border-radius: 50%;
  background: #333233;
  padding: 4px;
`;
export const ImageElement = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const Title = styled.h3`
  font-size: ${({ textSize }) => (textSize === "sm" ? "12px" : "18px")};
  font-weight: 600;
  color: #fff;
`;
export const Subtitle = styled.span`
  font-size: ${({ textSize }) => (textSize === "sm" ? "9px" : "12px")};
  color: #fff;
`;
