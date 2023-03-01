import { useEffect, useState } from "react";
import SideBar from "../../ui/sideBar";
import Header from "@/components/ui/header";
import SettingPanel from "@/components/ui/panels/SettingPanel";
import AccountPanel from "@/components/ui/panels/AccountPanel";
import LibraryPanel from "@/components/ui/panels/LibraryPanel";
import ContactPanel from "@/components/ui/panels/ContactPanel";
import UpdateSSOPanel from "@/components/ui/panels/UpdateSSOPanel";
import Logout from "@/components/ui/panels/LogoutPanel";
import { DashboardWrapper, DashboardMain } from "./DashboardElement";
import { useDispatch, useSelector } from "react-redux";
import { checkLogin, loggedIn, selectUser } from "@/components/base/store/authSlice";
import { useRouter } from "next/router";

const Dashboard = () => {
  const [showActivePanel, setShowActivePanel] = useState("Contacts");
  const [user, setUser] = useState(null);
  const localUser = useSelector(selectUser);
  const isLoggedIn = useSelector(loggedIn);
  const route = typeof window !== 'undefined' ? useRouter() : null;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkLogin());
  }, []);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(localUser));
    setUser(localUser);
  }, [localUser]);

  // if (isLoggedIn) {
  //   const route = useRouter();
  //   route.push('/dashboard');
  // }

  if (!isLoggedIn) {
    if (typeof window !== 'undefined') {
      // const route = useRouter();
      // route.push('/');
    }
    return null;
  };
  

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
        ) : null}
      </DashboardMain>
    </DashboardWrapper>
  );
};

export default Dashboard;