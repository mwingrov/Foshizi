import {
  LayoutWrapper,
  LoginPanel,
  LogoContainer,
  SigninContainer,
  SignUpContainer,
  Heading_H3,
  Paragraph,
} from "./LoggerElement";
import Image from "next/image";
import ImageLogo from "../../../../assets/images/FoshiziLogo.png";
import Input from "@/components/base/input";
import CheckboxButton from "@/components/base/checkboxButton";
import Button from "@/components/base/button";

const Logger = () => {
  return (
    <LayoutWrapper>
      <LoginPanel>
        <LogoContainer>
          <Image src={ImageLogo} height="350" width="350" alt="logo-image" />
        </LogoContainer>
        <SigninContainer>
          <Input label />
          <Input />
          <Input />
          <CheckboxButton label="Keep me logged in" />
          <Button btnText="Sign In" />
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
