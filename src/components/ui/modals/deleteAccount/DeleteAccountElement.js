import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  background: white;
  z-index: 900;
  display: flex;
  flex-direction: column;
  gap: 100px;
  align-items: center;
  justify-content: center;
  background: #343a3f;
`;

export const ModalContainer = styled.div`
  width: 65%;
  height: 400px;
  background: #fff;
  box-shadow: -5px -1px 15px 8px rgba(0, 0, 0, 0.28);
  -webkit-box-shadow: -5px -1px 15px 8px rgba(0, 0, 0, 0.28);
  -moz-box-shadow: -5px -1px 15px 8px rgba(0, 0, 0, 0.28);
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  padding: 20px;
  border-radius: 4px;
  @media (min-width: 1024px) {
    width: 35%;
    height: 300px;
  }
`;
export const IconContainer = styled.div`
  border-radius: 50%;
  padding: 20px;
  transform: translateY(-70%);
  background: #343a3f;
`;
export const IconTrash = styled(FaTrashAlt)`
  width: 40px;
  height: 40px;
  color: #fff;
`;
export const ModalHeading = styled.h4`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1px;
  text-align: center;
  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;
export const ModalMessage = styled.p`
  font-size: 14px;
  color: #808080;
  text-align: center;
  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

export const DeleteNotification = styled.div`
  width: 80%;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: auto;
  }
`;
