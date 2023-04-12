import Button from "@/components/base/button";
import Input from "@/components/base/input";
import {
  ComingSoon,
  NotifcationContainer,
  RedirectContainer,
  Heading_H2,
} from "./PlanElement";
const Plan = () => {
  return (
    <div className="planning-page">
      <ComingSoon className="coming-soon">
        <Heading_H2>coming soon</Heading_H2>
        <NotifcationContainer>
          <Input label="Email address" type="email" />
          <Button
            btnText="Get Notified"
            bg="secondary"
            size="md"
            isBtn={false}
            link="/dashboard"
          />
        </NotifcationContainer>
        <RedirectContainer>
          <Button
            btnText="Go back Home"
            bg="primary"
            size="md"
            isBtn={false}
            link="/dashboard"
          />
        </RedirectContainer>
      </ComingSoon>
    </div>
  );
};

export default Plan;
