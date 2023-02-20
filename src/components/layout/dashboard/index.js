import Logo from "@/components/base/logo";
import IconText from "@/components/base/iconText";
import {
  DashboardMain,
  DashboardSideBar,
  DashboardWrapper,
  RowContainer,
} from "./DashboardElement";
import SideBar from "../../ui/sideBar";

import profileImage from "../../../../assets/images/profile.png";
import Header from "@/components/ui/header";
import AccountDetailsCard from "@/components/cards/accountDetailsCard";
import ProfileCard from "@/components/cards/profileCard";
import LinkedAccountCard from "@/components/cards/linkedAccountsCard";
// import IconSideLink from "@/components/base/iconSideLink";

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <DashboardSideBar>
        <Logo dashboard={true} size={100} />
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
        <RowContainer>
          <AccountDetailsCard />
          <ProfileCard />
        </RowContainer>
        <RowContainer>
          <LinkedAccountCard />
          <AccountDetailsCard />
        </RowContainer>
      </DashboardMain>
    </DashboardWrapper>
  );
};

export default Dashboard;
