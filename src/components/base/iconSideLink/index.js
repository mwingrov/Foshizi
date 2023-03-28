import Logout from "@/components/ui/panels/LogoutPanel";
import { LinkWrapper, LinkElement, Arrow } from "./IconSideLinkElement";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { useState } from "react";

const IconSideLink = ({ linkName, linkIcon, showActivePanel }) => {
  const [showNotification, setShowNotification] = useState(false);

  const handleLogout = () => {
    // handle logout logic
    setShowNotification(true);
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  const handleLinkName = (linkName) => {
    if (linkName === "Logout") {
      handleLogout();
      {
        showNotification && <Logout onClose={handleCloseNotification} />;
      }
    }
  };

  return (
    <LinkWrapper
      showActivePanel={showActivePanel}
      onClick={(linkName) => handleLinkName(linkName)}
    >
      {linkIcon}
      <LinkElement>{linkName}</LinkElement>
      {linkName === "Logout" ? null : (
        <Arrow>{showActivePanel ? <FaAngleRight /> : <FaAngleDown />}</Arrow>
      )}
    </LinkWrapper>
  );
};

export default IconSideLink;
