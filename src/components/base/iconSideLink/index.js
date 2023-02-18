import {
  Wrapper,
  LinkWrapper,
  LinkElement,
  Arrow,
  Title,
} from "./IconSideLinkElement";
import {
  FaWrench,
  FaReact,
  FaFolder,
  FaEnvelope,
  FaArrowUp,
  FaPowerOff,
  FaAngleDown,
  FaAngleRight,
} from "react-icons/fa";

const IconSideLink = () => {
  return (
    <Wrapper>
      <Title>Customize</Title>
      <LinkWrapper>
        <FaWrench />
        <LinkElement>Settings</LinkElement>
        <Arrow>
          <FaAngleDown />
        </Arrow>
      </LinkWrapper>
      <LinkWrapper>
        <FaReact />
        <LinkElement>My Account</LinkElement>
        <Arrow>
          <FaAngleRight />
        </Arrow>
      </LinkWrapper>
      <LinkWrapper>
        <FaFolder />
        <LinkElement>Libray</LinkElement>
        <Arrow>
          <FaAngleRight />
        </Arrow>
      </LinkWrapper>
      <LinkWrapper>
        <FaEnvelope />
        <LinkElement>Contacts</LinkElement>
        <Arrow>
          <FaAngleRight />
        </Arrow>
      </LinkWrapper>
      <LinkWrapper>
        <FaArrowUp />
        <LinkElement>Upgrade for SSO</LinkElement>
        <Arrow>
          <FaAngleRight />
        </Arrow>
      </LinkWrapper>
      <LinkWrapper>
        <FaPowerOff />
        <LinkElement>Logout</LinkElement>
        <Arrow>
          <FaAngleRight />
        </Arrow>
      </LinkWrapper>
    </Wrapper>
  );
};

export default IconSideLink;
