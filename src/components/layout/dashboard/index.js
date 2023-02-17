import Logo from "@/components/base/logo";
import IconText from "@/components/base/iconText";
import {
  DashboardMain,
  DashboardSideBar,
  DashboardWrapper,
} from "./DashboardElement";

import profileImage from "../../../../assets/images/profile.png";

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <DashboardSideBar>
        <Logo dashboard={true} size={150} />
        <IconText
          image={profileImage}
          title="John Dow"
          subtitle="Administrator"
          size={"200"}
        />
      </DashboardSideBar>
      <DashboardMain></DashboardMain>
    </DashboardWrapper>
  );
};

export default Dashboard;
