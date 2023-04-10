import { FaEnvelope, FaPhoneAlt, FaLock, FaMapMarkerAlt } from "react-icons/fa";
import Card from "@/components/base/card";
import { IconElement } from "@/components/ui/header/HeaderElement";
import { ProfileContainer, ProfileItem } from "./ProfileCardElement";
import { useSession } from "next-auth/react";

const ProfileCard = ({ width, tab }) => {
  const { data: session } = useSession();

  if (tab === "library") {
    return (
      <Card width={width} title="Profile">
        <h2 style={{ marginBottom: "5%", color: "lightblue" }}>Bio</h2>
        <p style={{ padding: "4% 2%" }}>
          Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit, sed
          diam nonummy nibh euismod
          tincidunt ut laoreet dolore magna
          aliquam erat volutpat
        </p>

        <p style={{ padding: "4% 2%" }}>
          Ut wisi enim ad minim veniam,
          quis nos adipiscing elit, sed diam
          nonummy nibh euismod.Lorem
          ipsum dipiscing elit, sed diam
          nonummy nibh euismod tincidunt
          ut laoreet dolore magna aliquam
          erat volutpat.  Ut wisi enim ad
          minim veniam, quis nos adipiscing
          elit, sed diam nonummy nibh
          euismod
        </p>
        <p style={{ padding: "4% 2%" }}>
          Ut wisi enim ad minim veniam,
          quis nos adipiscing nt ut laoreet
          dolore magna aliquam erat
          volutpat.  Ut wisi enim ad minim
          veniam, quis nos adipiscing elit,
          sed diam nonummy nibh euismod
        </p>
      </Card>
    );
  }

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
      </Card>)
  }
};

export default ProfileCard;
