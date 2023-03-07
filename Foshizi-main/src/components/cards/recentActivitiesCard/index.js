import Card from "@/components/base/card";
import {
  RecenActivityHeading,
  ActivitiesContainer,
  ActivityIcon,
  ActivityContent,
  ActivitiesList,
  ActivityTitle,
  ActivityDescription,
  ActivityTime,
  ActivityLog,
  ActivityOrigin,
  ActivityStatus,
  Activity,
  PreviousActivity,
  TextAreaContainer,
  IconWrapper,
  DetailsHeading,
  IconLabel,
  Details,
  DetailItem,
  DetailLabel,
  DetailsContainer,
} from "./recentActivitiesElement";
import { FaEnvelope, FaPhoneAlt, FaTasks, FaRocketchat } from "react-icons/fa";
import { IconElement } from "@/components/ui/header/HeaderElement";
import { useSession } from "next-auth/react";

const RecentActivitiesCard = ({ width }) => {
  const { data: session } = useSession();
  const { email } = session.user;

  const recentActivities = [
    {
      title:
        "RE: Simon Gumede create survey Would you be interested to take part in the survey?",
      time: "20h ago",
      log: "#657968",
      origin: "<simongumede33@gmail.com>",
      status: "In progress",
    },
    {
      title: "John Nick created task Product demo call",
      time: "7h ago",
      log: "Overdue date",
      origin: "Fe-24, 4:04 pm",
      status: "Open",
    },
    {
      title: "New text message: Hello, anybody here?",
      time: "20h ago",
      log: "Chat ID: 56575",
      origin: "<simongumede33@gmail.com> ",
      status: "Open",
    },
  ];
  const details = {
    email,
    workPhone: "011-767-3456",
    personalPhone: "089 488 7834",
    position: "Manager",
    Departement: "Sales",
    Birthday: "28 June, 1987 (35 y.o)",
  };
  return (
    <>
      <Card width={width} title="Recent Activities">
        <Activity>
          <RecenActivityHeading>Today</RecenActivityHeading>
          <ActivitiesList>
            {recentActivities.map(
              ({ title, time, log, origin, status }, index) => (
                <ActivitiesContainer key={index}>
                  <ActivityIcon>
                    <FaEnvelope />
                  </ActivityIcon>
                  <ActivityContent>
                    <ActivityTitle>{title}</ActivityTitle>
                    <ActivityDescription>
                      <ActivityTime>{time}</ActivityTime>
                      <ActivityLog>{log}</ActivityLog>
                      <ActivityOrigin>{origin}</ActivityOrigin>
                    </ActivityDescription>
                  </ActivityContent>
                  <ActivityStatus status={status}>{status}</ActivityStatus>
                </ActivitiesContainer>
              )
            )}
          </ActivitiesList>
        </Activity>
        <PreviousActivity>
          <RecenActivityHeading>Yesterday</RecenActivityHeading>
          <TextAreaContainer rows={15}></TextAreaContainer>
        </PreviousActivity>
      </Card>
      <Card width="" title="Details">
        <IconWrapper>
          <DetailsHeading>
            <IconElement bg="grey">
              <FaEnvelope />
            </IconElement>
            <IconLabel>Email</IconLabel>
          </DetailsHeading>
          <DetailsHeading>
            <IconElement bg="grey">
              <FaPhoneAlt />
            </IconElement>
            <IconLabel>Call</IconLabel>
          </DetailsHeading>
          <DetailsHeading>
            <IconElement bg="grey">
              <FaTasks />
            </IconElement>
            <IconLabel>Tasks</IconLabel>
          </DetailsHeading>
          <DetailsHeading>
            <IconElement bg="grey">
              <FaRocketchat />
            </IconElement>
            <IconLabel>Chats</IconLabel>
          </DetailsHeading>
        </IconWrapper>
        <DetailsContainer>
          {Object.entries(details).map(([key, value]) => (
            <Details key={key}>
              <DetailLabel> {key}</DetailLabel>
              <DetailItem>{details[key]}</DetailItem>
            </Details>
          ))}
        </DetailsContainer>
      </Card>
    </>
  );
};

export default RecentActivitiesCard;
