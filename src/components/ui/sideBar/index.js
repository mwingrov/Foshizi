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
import { useSelector } from "react-redux";
import { selectUser } from "@/components/base/store/authSlice";

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
    linkName: "Logout",
    icon: <FaPowerOff />,
  },
];

const SideBarElement = ({ showActivePanel, setShowActivePanel }) => {

  const user = useSelector(selectUser);

  return (
    <DashboardSideBar>
      <Logo dashboard="true" size={100} />
      <IconText
        image={profileImage}
        title={user.name}
        subtitle={user.email}
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
      </Wrapper>
    </DashboardSideBar>
  );
};

export default SideBarElement;
