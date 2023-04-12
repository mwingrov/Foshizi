import styled from "styled-components";
import { keyframes } from "styled-components";

const rotateslide = keyframes`   
  0% {
   background-position: 0% 50%;
  }

  50% {
   background-position: 100% 50%;
  }

  100% {
   background-position: 0% 50%;
  }
`;

export const Badge = styled.div`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  animation: ${rotateslide} 15s ease infinite;
  height: 25px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export const BadgeText = styled.span`
  color: #fff;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1px;
`;
