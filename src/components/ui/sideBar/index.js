import {
  FaWrench,
  FaReact,
  FaFolder,
  FaEnvelope,
  FaArrowUp,
  FaPowerOff,
} from "react-icons/fa";
import { DashboardSideBar, Wrapper, Title } from "./SideBarElement";
import IconSideLink from "@/components/base/iconSideLink";
import Logo from "@/components/base/logo";
import IconText from "@/components/base/iconText";
import profileImage from "../../../../assets/images/profile.png";

const links = [
  {
    linkName: "Settings",
    icon: <FaWrench />,
  },
  {
    linkName: "My Account",
    icon: <FaReact />,
  },
  {
    linkName: "Library",
    icon: <FaFolder />,
  },
  {
    linkName: "Contacts",
    icon: <FaEnvelope />,
  },
  {
    linkName: "Update to SSO",
    icon: <FaArrowUp />,
  },
];

const SideBarElement = ({ showActivePanel, setShowActivePanel }) => {
  return (
    <DashboardSideBar>
      <Logo dashboard="true" size={100} />
      <IconText
        image={profileImage}
        title="John Dow"
        subtitle="Administrator"
        size={"200"}
      />
      <Wrapper>
        <Title>Customize</Title>
        {links.map(({ linkName, icon }, index) => (
          <div onClick={() => setShowActivePanel(linkName)} key={index}>
            <IconSideLink
              linkName={linkName}
              linkIcon={icon}
              showActivePanel={showActivePanel === linkName}
            />
          </div>
        ))}
        <div onClick={() => setShowActivePanel("Logout")}>
          <IconSideLink
            linkName="Logout"
            linkIcon={FaPowerOff}
            showActivePanel={showActivePanel === "Logout"}
          />
        </div>
      </Wrapper>
      {/* <IconSideLink /> */}
    </DashboardSideBar>
  );
};

export default SideBarElement;
