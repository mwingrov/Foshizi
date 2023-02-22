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
  {
    linkName: "logout",
    icon: FaPowerOff,
  },
];

const SideBarElement = ({ showActivePanel, setShowActivePanel }) => {
  const handleGreet = () => {
    console.log("Hello");
  };
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
        {links.map((link, index) => (
          <div onClick={() => setShowActivePanel(link.linkName)} key={index}>
            <IconSideLink
              linkName={link.linkName}
              linkIcon={link.icon}
              showActivePanel={showActivePanel}
            />
          </div>
        ))}
      </Wrapper>
      {/* <IconSideLink /> */}
    </DashboardSideBar>
  );
};

export default SideBarElement;
