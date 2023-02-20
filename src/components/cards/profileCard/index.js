import { FaEnvelope, FaPhoneAlt, FaLock, FaMapMarkerAlt } from "react-icons/fa";
import Card from "@/components/base/card";
import { IconElement } from "@/components/ui/header/HeaderElement";
import { ProfileContainer, ProfileItem } from "./ProfileCardElement";

const ProfileCard = () => {
  return (
    <Card width="full" title="Profile">
      <ProfileContainer>
        <ProfileItem>
          <IconElement bg="pink">
            <FaEnvelope />
          </IconElement>
          <p>Simon@gmail.com</p>
        </ProfileItem>
        <ProfileItem>
          <IconElement bg="green">
            <FaPhoneAlt />
          </IconElement>
          <p>+27 089 456 3635</p>
        </ProfileItem>
        <ProfileItem>
          <IconElement bg="purple">
            <FaLock />
          </IconElement>
          <p>Change password</p>
        </ProfileItem>
        <ProfileItem>
          <IconElement bg="#de821c">
            <FaMapMarkerAlt />
          </IconElement>
          <p>5a Margueritte Street, La Rochelle, 2090</p>
        </ProfileItem>
      </ProfileContainer>
    </Card>
  );
};

export default ProfileCard;
