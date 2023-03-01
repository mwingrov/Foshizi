import styled from "styled-components";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

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
  flex-direction: row;
  gap: 30px;
`;

export const ProgressbarContainer = styled.div`
  width: 25%;
  height: auto;
`;

export const SurveyCompleteGrid = styled.div`
  display: grid;
  width: 50%;
  box-sizing: border-box;
  column-gap: 25px;
  row-gap: 25px;
  grid-template-columns: 50% 50%;
`;

export const SurveyCompleteGridItem = styled.div`
  height: 33.3%;
  min-height: 75px;
  background-color: #262626;
  box-sizing: border-box;
  position: relative;
  border-radius: 10px;
`;

export const SurveyCompleteGridSecondItem = styled.div`
  display: flex;
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  width: 100%;
  justify-content: space-between;
  padding: 10%;
`;

export const SurveyCompleteGridSecondItemH1 = styled.h1`
  font-size: 20px;
  color: grey;
  font-weight: bold;
`;

export const SurveyCompleteGridItemData = ({
  text = "Opened",
  numberValue = 843,
  percentageValue = 20,
  direction = "positive" || "negetive",
}) => {
  return (
    <SurveyCompleteGridItem key={text}>
      <p style={{ fontSize: "11px", padding: "10px" }}>{text}</p>
      <SurveyCompleteGridSecondItem>
        <div>
          <SurveyCompleteGridSecondItemH1>
            {numberValue}
          </SurveyCompleteGridSecondItemH1>
        </div>
        <div>
          <p style={{ display: "flex" }}>
            <span style={{ padding: "10%" }}>
              {direction === "positive" ? <BiChevronUp /> : <BiChevronDown />}
            </span>
            <span
              style={{
                color: direction === "positive" ? "green" : "red",
                fontSize: "11px",
              }}
            >
              {percentageValue}%
            </span>
          </p>
        </div>
      </SurveyCompleteGridSecondItem>
    </SurveyCompleteGridItem>
  );
};
