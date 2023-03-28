import ProfileCard from "@/components/cards/profileCard";
import {
  RowContainer,
  PanelContainer,
} from "@/components/layout/dashboard/DashboardElement";
import CasualAnalysisCard from "@/components/cards/casualAnalysisCard";
import PerspectivePredictiveAnalysisCard from "@/components/cards/perspectiveAndPredictiveAnalyseCard";
import StatisticalDataCard from "@/components/cards/statisticalDataCard";
import CustomerSurveyCompletedCard from "@/components/cards/customerSurveyCompletedCard";
import ExploratoryDataCard from "@/components/cards/exploratoryDataCard";
const LibraryPanel = () => {
  return (
    <PanelContainer>
      <RowContainer>
        <CasualAnalysisCard width="" />
        <PerspectivePredictiveAnalysisCard width="half" />
        <ProfileCard width="" />
      </RowContainer>
      <RowContainer>
        <StatisticalDataCard width="half" />
        <CustomerSurveyCompletedCard width="half" />
      </RowContainer>
      {/* <RowContainer>
        <ExploratoryDataCard width="full" />
      </RowContainer> */}
    </PanelContainer>
  );
};

export default LibraryPanel;
