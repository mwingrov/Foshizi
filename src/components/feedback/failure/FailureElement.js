import styled from "styled-components";
import { FaTimesCircle } from "react-icons/fa";

export const FailureContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 5px;
  padding-left: 2px;
  align-items: center;
  width: 330px;
  height: 80px;
  background: #fff;
  border-radius: 5px;
  border-left: 7px solid #fc100d;
  box-shadow: -5px -1px 15px 8px rgba(0, 0, 0, 0.28);
  -webkit-box-shadow: -5px -1px 15px 8px rgba(0, 0, 0, 0.28);
  -moz-box-shadow: -5px -1px 15px 8px rgba(0, 0, 0, 0.28);
  font-family: "Poppins", sans-serif;
  @media (min-width: 768px) {
    width: 450px;
    height: 60px;
  }
`;
export const FailureIcon = styled(FaTimesCircle)`
  width: 35px;
  height: 35px;
  color: #fc100d;
`;
export const FailureContent = styled.div`
  flex-basis: 65%;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
export const FailureHeading = styled.h4`
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 1px;
`;
export const FailureMessage = styled.p`
  font-size: 11px;
  color: #808080;
  letter-spacing: 0.6px;
`;
export const CloseElement = styled.a`
  text-decoration: none;
  font-size: 12px;
  color: #808080;
  letter-spacing: 1px;
  cursor: pointer;
`;
