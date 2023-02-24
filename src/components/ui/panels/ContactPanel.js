import ProfileCard from "@/components/cards/profileCard";
import CustomerSurveyCompletedCard from "@/components/cards/customerSurveyCompletedCard";
import ColleagueCard from "@/components/cards/colleaguesCard";
import ChatCard from "@/components/cards/chatCard";
import BioCard from "@/components/cards/bioCard";
import {
  RowContainer,
  PanelContainer,
} from "@/components/layout/dashboard/DashboardElement";

const ContactPanel = () => {
  return (
    <PanelContainer>
      <RowContainer>
        <ProfileCard width="" />
        <BioCard width="" />
        <CustomerSurveyCompletedCard width="half" />
      </RowContainer>
      <RowContainer>
        <ColleagueCard width="full" />
        <ChatCard width="half" />
      </RowContainer>
    </PanelContainer>
  );
};

export default ContactPanel;
