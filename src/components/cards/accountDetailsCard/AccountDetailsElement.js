import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;
    padding: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const SpanElement = styled.span`
  color: #de821c;
  margin-left: 5px;
  margin-right: 5px;
`;
