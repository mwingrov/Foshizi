import AccountDetailsCard from "@/components/cards/accountDetailsCard";
import ProfileCard from "@/components/cards/profileCard";
import LinkedAccountCard from "@/components/cards/linkedAccountsCard";
import SurveyCompletedCard from "@/components/cards/surveyCompletedCard";
import {
  RowContainer,
  PanelContainer,
} from "@/components/layout/dashboard/DashboardElement";

const SettingPanel = () => {
  return (
    <PanelContainer>
      <RowContainer>
        <AccountDetailsCard width="full" />
        <ProfileCard width="full" />
      </RowContainer>
      <RowContainer>
        <LinkedAccountCard width="full" />
        <SurveyCompletedCard width="full" />
      </RowContainer>
    </PanelContainer>
  );
};

export default SettingPanel;
