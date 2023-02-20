import { LinkWrapper, LinkElement, Arrow } from "./IconSideLinkElement";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

const IconSideLink = ({ linkName, linkIcon }) => {
  return (
    <LinkWrapper>
      {/* {linkIcon} */}
      <LinkElement>{linkName}</LinkElement>
      <Arrow>
        <FaAngleDown />
      </Arrow>
    </LinkWrapper>
  );
};

export default IconSideLink;
