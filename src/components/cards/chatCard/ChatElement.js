import styled from "styled-components";

export const ChatContainer = styled.div``;
export const ChatSender = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 5px 0;
`;

export const ChatReceiver = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
`;
export const ChatContent = styled.div`
  background: green;
  min-height: 20px;
  width: 200px;
  color: #fff;
  display: flex;
  align-items: center;
`;
export const ChatContentReceiver = styled.div`
  background: #333;
  min-height: 20px;
  width: 200px;
  color: #fff;
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

export const Chat = styled.p`
  font-size: 12px;
  color: #fff;
  padding: 7px;
`;

export const Pointer = styled.div`
  width: 25px;
  height: 15px;
  background: green;
  font-size: 12px;
  color: #fff;
  transform: rotate(-30deg) translate(-3px, -5px);
`;

export const PointerReceiver = styled.div`
  width: 20px;
  height: 15px;
  background: #333;
  font-size: 12px;
  color: #fff;
  // transform: rotate(-30deg) translate(12px, 10px);
`;
