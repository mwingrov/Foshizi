import { useState } from "react";
import SideBar from "../../ui/sideBar";
import Header from "@/components/ui/header";
import SettingPanel from "@/components/ui/panels/SettingPanel";
import AccountPanel from "@/components/ui/panels/AccountPanel";
import LibraryPanel from "@/components/ui/panels/LibraryPanel";
import ContactPanel from "@/components/ui/panels/ContactPanel";
import UpdateSSOPanel from "@/components/ui/panels/UpdateSSOPanel";
import Logout from "@/components/ui/panels/LogoutPanel";
import { DashboardWrapper, DashboardMain } from "./DashboardElement";

const Dashboard = () => {
  const [showActivePanel, setShowActivePanel] = useState("Settings");

  return (
    <DashboardWrapper>
      <SideBar
        showActivePanel={showActivePanel}
        setShowActivePanel={setShowActivePanel}
      />
      <DashboardMain>
        <Header />
        {showActivePanel === "Settings" ? (
          <SettingPanel />
        ) : showActivePanel === "My Account" ? (
          <AccountPanel />
        ) : showActivePanel === "Library" ? (
          <LibraryPanel />
        ) : showActivePanel === "Contacts" ? (
          <ContactPanel />
        ) : showActivePanel === "Update to SSO" ? (
          <UpdateSSOPanel />
        ) : showActivePanel === "Logout" ? (
          <Logout />
        ): null}
      </DashboardMain>
    </DashboardWrapper>
  );
};

export default Dashboard;
