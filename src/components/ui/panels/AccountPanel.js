import {
  RowContainer,
  PanelContainer,
} from "@/components/layout/dashboard/DashboardElement";
import Card from "@/components/base/card";
import Input from "@/components/base/input";
import { InputGroup } from "@/components/base/input/InputElement";
import Button from "@/components/base/button";

const AccountPanel = () => {
  return (
    <PanelContainer>
      <RowContainer>
        <Card width="full" title="Personal information">
          <InputGroup>
            <Input label="First Name" type="text" />
            <Input label="Last Name" type="text" />
          </InputGroup>
          <InputGroup>
            <Input label="Phone Number" type="text" />
            <Input label="Email Address" type="email" />
          </InputGroup>
        </Card>
      </RowContainer>
      <RowContainer>
        <Card width="full" title="General Preference">
          <InputGroup>
            <Input label="Phone Number" type="text" />
            <Input label="Email Address" type="email" />
          </InputGroup>
          <Button
            size="md"
            btnText="Permanently Delete Account"
            link="/"
            bg="danger"
          />
        </Card>
      </RowContainer>
    </PanelContainer>
  );
};

export default AccountPanel;
