import {
  LayoutWrapper,
  LoginPanel,
  SigninContainer,
  SignUpContainer,
  Heading_H3,
  Paragraph,
} from "./LoggerElement";
import Input from "@/components/base/input";
import CheckboxButton from "@/components/base/checkboxButton";
import Button from "@/components/base/button";
import Logo from "@/components/base/logo";

const Logger = () => {
  return (
    <LayoutWrapper>
      <LoginPanel>
        <Logo size={350} />
        <SigninContainer>
          <Input label="Email" type="email" />
          <Input label="Password" type="password" />
          <CheckboxButton label="Keep me logged in" />
          <Button btnText="Sign In" link="dashboard" />
        </SigninContainer>
        <SignUpContainer>
          <div>
            <Heading_H3>Create an account</Heading_H3>
            <Paragraph>
              Create an account to download tracks and use all our features such
              as playlists,share and pitch
            </Paragraph>
          </div>
          <Button btnText="Register" />
        </SignUpContainer>
      </LoginPanel>
    </LayoutWrapper>
  );
};

export default Logger;
