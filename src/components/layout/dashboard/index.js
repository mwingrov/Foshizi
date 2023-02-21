import Logo from "@/components/base/logo";
import IconText from "@/components/base/iconText";
import {
  DashboardMain,
  DashboardSideBar,
  DashboardWrapper,
  RowContainer,
  PanelContainer,
} from "./DashboardElement";
import SideBar from "../../ui/sideBar";

import profileImage from "../../../../assets/images/profile.png";
import Header from "@/components/ui/header";
import AccountDetailsCard from "@/components/cards/accountDetailsCard";
import ProfileCard from "@/components/cards/profileCard";
import LinkedAccountCard from "@/components/cards/linkedAccountsCard";
import BioCard from "@/components/cards/bioCard";
import ColleagueCard from "@/components/cards/colleaguesCard";
import SurveyCompletedCard from "@/components/cards/surveyCompletedCard";
import CustomerSurveyCompletedCard from "@/components/cards/customerSurveyCompletedCard";
import ChatCard from "@/components/cards/chatCard";
// import IconSideLink from "@/components/base/iconSideLink";

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <DashboardSideBar>
        <Logo dashboard="true" size={100} />
        <IconText
          image={profileImage}
          title="John Dow"
          subtitle="Administrator"
          size={"200"}
        />
        {/* <IconSideLink /> */}
        <SideBar />
      </DashboardSideBar>
      <DashboardMain>
        <Header />
        {/* <PanelContainer>
          <RowContainer>
            <AccountDetailsCard width="full" />
            <ProfileCard width="full" />
          </RowContainer>
          <RowContainer>
            <LinkedAccountCard width="full" />
            <SurveyCompletedCard width="full" />
          </RowContainer>
        </PanelContainer> */}
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
        {/* <PanelContainer>
          <RowContainer>
            <AccountDetailsCard />
            <ProfileCard />
          </RowContainer>
          <RowContainer>
            <LinkedAccountCard />
            <BioCard />
            <ColleagueCard />
          </RowContainer>
        </PanelContainer> */}
      </DashboardMain>
    </DashboardWrapper>
  );
};

export default Dashboard;
