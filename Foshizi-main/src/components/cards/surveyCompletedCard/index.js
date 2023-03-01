import Card from "@/components/base/card";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  Heading,
  SurveyList,
  Status,
  SurveyContent,
  StatusElement,
  SurveyNumber,
  SurveyDescription,
  SurveyStatus,
  Pointer,
} from "../customerSurveyCompletedCard/CustomerSurveyCompletedElement";

import {
  Content,
  ContentContainer,
  ProgressbarContainer,
  SurveyCompleteGrid,
  SurveyCompleteGridItemData,
} from "./SurveryCompletedCardElement";

import { surveyData } from "../../../data";

const SurveyCompletedCard = () => {
  const value = 0.66;
  const styles = {
    trailColor: "#343a3f",
    strokeLinecap: "butt",
    textSize: "22px",
    textColor: "grey",
  };

  const customerSurveyCompleted = [
    {
      index: "Survey one",
      description: "Lorem ipsum dolor  ",
      status: "green",
    },
    {
      index: "Survey two",
      description: "Lorem ipsum dolor  ",
      status: "red",
    },
    {
      index: "Survey three",
      description: "Lorem ipsum dolor  ",
      status: "orange",
    },
    {
      index: "Survey four",
      description: "Lorem ipsum dolor  ",
      status: "green",
    },
    {
      index: "Survey five",
      description: "Lorem ipsum dolor  ",
      status: "green",
    },
    {
      index: "Survey six",
      description: "Lorem ipsum dolor  ",
      status: "red",
    },
  ];
  return (
    <Card width="full" title="Survey Complete">
      <ContentContainer>
        <Content>
          <ProgressbarContainer>
            <CircularProgressbar
              value={surveyData.heighlights.lorem1.value}
              maxValue={1000}
              text="841"
              counterClockwise={true}
              styles={buildStyles({
                ...styles,
                rotation: 0.25,
                pathColor: "#4d88ff",
              })}
            />
          </ProgressbarContainer>
          <ProgressbarContainer>
            <CircularProgressbar
              value={surveyData.heighlights.lorem2.value}
              maxValue={800}
              text="642"
              counterClockwise={true}
              styles={buildStyles({
                ...styles,
                rotation: 0.15,
                pathColor: "#ff0066",
              })}
            />
          </ProgressbarContainer>
          <ProgressbarContainer>
            <CircularProgressbar
              value={surveyData.heighlights.lorem3.value}
              maxValue={800}
              text="361"
              counterClockwise={true}
              styles={buildStyles({
                ...styles,
                rotation: 0.9,
                pathColor: "#00ff00",
              })}
            />
          </ProgressbarContainer>
          <ProgressbarContainer>
            <CircularProgressbar
              value={surveyData.heighlights.lorem4.value}
              maxValue={800}
              text="242"
              counterClockwise={true}
              styles={buildStyles({
                ...styles,
                rotation: 0.8,
                pathColor: "#cc00ff",
              })}
            />
          </ProgressbarContainer>
        </Content>
      </ContentContainer>
      <ContentContainer>
        <div>
          <Heading>
            <SurveyList>Completed</SurveyList>
            <Status>
              <StatusElement>Completed</StatusElement>
              <Pointer />
            </Status>
          </Heading>
          {customerSurveyCompleted.map(({ index, description, status }) => (
            <SurveyContent key={index}>
              <SurveyNumber>{index}</SurveyNumber>
              <SurveyDescription>{description}</SurveyDescription>
              <SurveyStatus status={status} />
            </SurveyContent>
          ))}
        </div>

        <SurveyCompleteGrid>
          {surveyData.statuses.map((data) => (
            <SurveyCompleteGridItemData
              text={data.type}
              direction={data.direction}
              numberValue={data.number}
              key={data.type}
              percentageValue={data.percentage}
            />
          ))}
        </SurveyCompleteGrid>
      </ContentContainer>
    </Card>
  );
};

export default SurveyCompletedCard;
