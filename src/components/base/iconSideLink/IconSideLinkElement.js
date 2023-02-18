import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: auto;
`;
export const Title = styled.h3`
  font-size: 16px;
  font-weight: 700px;
  text-transform: uppercase;
  padding-left: 55px;
  margin: 20px auto;
  width: 100%;
`;
export const LinkWrapper = styled.div`
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-left: 12px solid #de821c;
  padding-left: 50px;
  padding-right: 15px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  background: black;
`;

export const LinkElement = styled.p`
  margin-left: 20px;
  min-width: max-content;
`;
export const Arrow = styled.span`
  margin-left: auto;
`;
