import RecentActivitiesCard from "@/components/cards/recentActivitiesCard";
import {
  RowContainer,
  PanelContainer,
} from "@/components/layout/dashboard/DashboardElement";

const ContactPanel = () => {
  return (
    <PanelContainer>
      <RowContainer>
        <RecentActivitiesCard width="full" />
      </RowContainer>
    </PanelContainer>
  );
};

export default ContactPanel;
