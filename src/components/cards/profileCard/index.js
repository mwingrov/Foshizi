import { FaEnvelope, FaPhoneAlt, FaLock, FaMapMarkerAlt } from "react-icons/fa";
import Card from "@/components/base/card";
import { IconElement } from "@/components/ui/header/HeaderElement";
import { ProfileContainer, ProfileItem } from "./ProfileCardElement";
import { useSession } from "next-auth/react";

const ProfileCard = ({ width }) => {
  const { data: session } = useSession();

  if (session) {
    const { email, number } = session.user;

    return (
      <Card width={width} title="Profile">
        <ProfileContainer>
          <ProfileItem>
            <IconElement bg="pink">
              <FaEnvelope />
            </IconElement>
            <p>{email}</p>
          </ProfileItem>
          {number && (
            <ProfileItem>
              <IconElement bg="green">
                <FaPhoneAlt />
              </IconElement>
              <p>+{number}</p>
            </ProfileItem>
          )}
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
  }
};

export default ProfileCard;
