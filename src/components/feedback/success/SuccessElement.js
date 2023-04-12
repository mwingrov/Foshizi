import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 5px;
  padding-left: 10px;
  align-items: center;
  width: 350px;
  height: 60px;
  background: #fff;
  border-radius: 5px;
  border-left: 7px solid #4bb543;
  box-shadow: -5px -1px 15px 8px rgba(0, 0, 0, 0.28);
  -webkit-box-shadow: -5px -1px 15px 8px rgba(0, 0, 0, 0.28);
  -moz-box-shadow: -5px -1px 15px 8px rgba(0, 0, 0, 0.28);
  font-family: "Poppins", sans-serif;
`;
export const SuccessIcon = styled(FaCheckCircle)`
  width: 35px;
  height: 35px;
  color: #4bb543;
`;
export const SuccessContent = styled.div`
  flex-basis: 65%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const SuccessHeading = styled.h4`
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.2px;
`;
export const SuccessMessage = styled.p`
  font-size: 11px;
  color: #808080;
  letter-spacing: 0.8px;
`;
export const CloseElement = styled.a`
  text-decoration: none;
  font-size: 12px;
  color: #808080;
  cursor: pointer;
`;
