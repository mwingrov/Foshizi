import {
  FaWrench,
  FaReact,
  FaFolder,
  FaEnvelope,
  FaArrowUp,
  FaPowerOff,
} from "react-icons/fa";
import { Wrapper, Title } from "./SideBarElement";
import IconSideLink from "@/components/base/iconSideLink";

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

const SideBarElement = () => {
  return (
    <Wrapper>
      <Title>Customize</Title>
      {links.map((link, index) => (
        <IconSideLink
          key={index}
          linkName={link.linkName}
          linkIcon={link.icon}
        />
      ))}
    </Wrapper>
  );
};

export default SideBarElement;
