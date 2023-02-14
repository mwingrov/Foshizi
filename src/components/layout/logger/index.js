import {
  LayoutWrapper,
  LoginPanel,
  LogoContainer,
  SigninContainer,
  SignUpContainer,
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
          <Input />
          <Input />
          <Input />
          <CheckboxButton />
          <Button btnText="Sign In" />
        </SigninContainer>
        <SignUpContainer></SignUpContainer>
      </LoginPanel>
    </LayoutWrapper>
  );
};

export default Logger;
