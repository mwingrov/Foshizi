import styled from "styled-components";

export const Activity = styled.div`
  color: #fff;
`;
export const RecenActivityHeading = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 35px;
`;
export const ActivitiesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
export const ActivitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const ActivityIcon = styled.span`
  font-size: 18px;
`;
export const ActivityContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ActivityTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
`;
export const ActivityDescription = styled.div`
  display: flex;
  color: rgba(255, 255, 255, 0.4);
  gap: 20px;
`;
export const ActivityTime = styled.span`
  font-size: 12px;
  width: max-content;
`;
export const ActivityLog = styled.span`
  font-size: 12px;
  width: max-content;
`;
export const ActivityOrigin = styled.span`
  font-size: 12px;
  width: max-content;
`;
export const ActivityStatus = styled.span`
  background: ${({ status }) =>
    status === "Open"
      ? "rgba(249, 143, 25, 0.26)"
      : "rgba(28, 117, 188, 0.56);"};
  color: ${({ status }) => (status === "Open" ? "#f98f19" : "#1C75BC")};
  font-size: 8px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  text-transform: uppercase;
  width: max-content;

  @media (min-width: 1024px) {
    padding: 0 20px;
  }
`;

export const PreviousActivity = styled.div`
  margin-top: 80px;
`;
export const TextAreaContainer = styled.textarea`
  width: 95%;
  height: 50%;
  padding: 10px;
  font-size: 16px;
  background: #343a3f;
  color: #fff;
`;

export const IconWrapper = styled.div`
  display: flex;
  color: #fff;
  gap: 25px;
  @media (min-width: 1024px) {
    justify-content: space-between;
  }
`;

export const DetailsHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;
export const IconLabel = styled.span`
  font-size: 12px;
`;
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 45px;
`;
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7.5px;
  align-items: start;
`;

export const DetailLabel = styled.span`
  font-size: 14px;
  color: grey;
  text-transform: capitalize;
`;
export const DetailItem = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  color: #fff;
`;
