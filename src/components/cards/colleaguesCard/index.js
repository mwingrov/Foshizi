import Card from "@/components/base/card";
import IconText from "@/components/base/iconText";
import { ColleagueContainer, ColleagueItem } from "./ColleagueCardElement";
import profileImage from "../../../../assets/images/profile.png";

const ColleagueCard = ({ users, width }) => {
  const colleagues = [
    {
      profile: profileImage,
      title: "John Dow",
      subtitle: "Software Engineer",
    },
    {
      profile: profileImage,
      title: "Jacques Smith",
      subtitle: "Designer UI/UX",
    },
    {
      profile: profileImage,
      title: "Gordon Lee",
      subtitle: "Teacher in art",
    },
    {
      profile: profileImage,
      title: "Evan Holified",
      subtitle: "Professor of Mathematic",
    },
  ];
  return (
    <Card width={width} title="Colleagues">
      Feature coming soon...
      {/* <ColleagueContainer>
        {users.map(({ firstname, lastname, email }, index) => (
          <ColleagueItem key={index}>
            <IconText
              image={profileImage}
              title={firstname + "" + lastname}
              subtitle={email}
              textSize="sm"
            />
          </ColleagueItem>
        ))}
      </ColleagueContainer> */}
    </Card>
  );
};

export default ColleagueCard;
