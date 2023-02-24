import { LinkWrapper, LinkElement, Arrow } from "./IconSideLinkElement";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

const IconSideLink = ({ linkName, linkIcon, showActivePanel }) => {
  console.log(linkName, showActivePanel);
  return (
    <LinkWrapper showActivePanel={showActivePanel}>
      {/* {linkIcon} */}
      <LinkElement>{linkName}</LinkElement>
      <Arrow>{showActivePanel ? <FaAngleRight /> : <FaAngleDown />}</Arrow>
    </LinkWrapper>
  );
};

export default IconSideLink;
