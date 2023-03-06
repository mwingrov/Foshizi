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
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import Link from "next/link";

const Logger = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const route = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!email || !handlePasswordChange) {
      setErrorMessage("Please fill in all fields");
      return;
    }
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    console.log(result);
    if (result) {
      route.push("/dashboard");
    }
  };

  const isValidEmail = (e) => {
    setEmail(e.target.value);
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handlePasswordChange = () => {
    const minLength = 8;
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
    return password.length >= minLength && hasSpecialChar.test(password)
      ? route.push("/dashboard")
      : setErrorMessage("Password Invalid!");
  };

  return (
    <LayoutWrapper>
      <LoginPanel>
        <Logo size={350} />
        <SigninContainer>
          <form>
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={isValidEmail}
            />
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <CheckboxButton label="Keep me logged in" />
            <Button onClick={handleLogin} btnText="Sign In" />
            {errorMessage && <div>{errorMessage}</div>}
          </form>
        </SigninContainer>
        <SignUpContainer>
          <div>
            <Heading_H3>Create an account</Heading_H3>
            <Paragraph>
              Create an account to download tracks and use all our features such
              as playlists,share and pitch
            </Paragraph>
            <Link href="/register"> Resgiter</Link>
          </div>
        </SignUpContainer>
      </LoginPanel>
    </LayoutWrapper>
  );
};

export default Logger;
