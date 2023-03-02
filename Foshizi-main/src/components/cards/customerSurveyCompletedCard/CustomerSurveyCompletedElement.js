import styled from "styled-components";

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  @media (min-width: 678px) {
    padding: 0;
  }
`;
export const SurveyList = styled.span`
  font-size: 12px;
  color: green;
`;
export const Status = styled.div`
  font-size: 12px;
  color: #fff;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StatusElement = styled.p`
  font-size: 10px;
  color: #fff;
  background: #de821c;
  padding: 5px;
`;
export const Pointer = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  transform: translateY(-5px) rotate(45deg);
  background: #de821c;
`;
export const SurveyContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 5px 20px;
  @media (min-width: 678px) {
    padding: 0;
  }
`;
export const SurveyNumber = styled.span`
  color: #add8e6;
  font-size: 12px;
`;
export const SurveyDescription = styled.p`
  font-size: 12px;
`;
export const SurveyStatus = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ status }) => status};
`;
