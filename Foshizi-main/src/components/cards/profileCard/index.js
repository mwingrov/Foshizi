import { FaEnvelope, FaPhoneAlt, FaLock, FaMapMarkerAlt } from "react-icons/fa";
import Card from "@/components/base/card";
import { IconElement } from "@/components/ui/header/HeaderElement";
import { ProfileContainer, ProfileItem } from "./ProfileCardElement";
import { useSelector } from "react-redux";
import { selectUser } from "@/components/base/store/authSlice";

const ProfileCard = ({ width }) => {
  const user = useSelector(selectUser);

  return (
    <Card width={width} title="Profile">
      <ProfileContainer>
        <ProfileItem>
          <IconElement bg="pink">
            <FaEnvelope />
          </IconElement>
          <p>{user.email}</p>
        </ProfileItem>
        <ProfileItem>
          <IconElement bg="green">
            <FaPhoneAlt />
          </IconElement>
          <p>+{user.number}</p>
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
