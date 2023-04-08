import Link from "next/link";
import axios from "axios";
import {
  LayoutWrapper,
  RegisterPanel,
  RegisterContainer,
  InputContainer,
  InputErrorMessage,
} from "./RegisterElement";
import Input from "@/components/base/input";
import Button from "@/components/base/button";
import Logo from "@/components/base/logo";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { Heading_H3, SignUpContainer } from "../logger/LoggerElement";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const [errorMessageEmail, setErrorMessageEamil] = useState("");
  const [errorMessageUsername, setErrorMessageUsername] = useState("");
  const [errorMessagePhone, setErrorMessagePhone] = useState("");
  const [errorMessagePassword, setErrorMessagePassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email) {
      setErrorMessageEamil("Please enter a valid email");
      return;
    }
    if (!username) {
      setErrorMessageUsername("Please enter a valid username");
      return;
    }
    if (!number) {
      setErrorMessagePhone("Please enter a valid phone number");
    }
    if (!password && password !== confirmPassword) {
      setErrorMessagePassword("Passwords do not match");
      return;
    } else {
      // Perform login API call here and retrieve user data
      try {
        const response = await axios.post(
          "https://foshizi.herokuapp.com/api/registeruser",
          {
            email,
            password,
            fname: username,
            lname: "",
          }
        );
        const { result } = response.data;
        if (
          result.status === "bad" &&
          result.message === "Email already in use"
        ) {
          setErrorMessageEamil("Email already used");
        }

        if (result?._id) {
          const resAuthLogin = await signIn("credentials", {
            email,
            password,
            redirect: false,
          });
          if (resAuthLogin) {
            router.push("/dashboard");
          }
        } else {
          return null;
        }
      } catch (error) {
        throw new Error(error.message);
      }
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    const minLength = 8;
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
    return password.length >= minLength && hasSpecialChar.test(password);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    const minLength = 8;
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
    return password.length >= minLength && hasSpecialChar.test(password);
  };

  return (
    <LayoutWrapper>
      <RegisterPanel>
        <Logo size={350} />
        <RegisterContainer>
          <InputContainer>
            <Input
              label="Email"
              type="email"
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
              errorMessage={errorMessageEmail}
            />
            <InputErrorMessage>{errorMessageEmail}</InputErrorMessage>
          </InputContainer>
          <InputContainer>
            <Input
              label="Username"
              type="text"
              value={username}
              required={true}
              onChange={(e) => setUsername(e.target.value)}
              errorMessage={errorMessageUsername}
            />
            <InputErrorMessage>{errorMessageUsername}</InputErrorMessage>
          </InputContainer>
          <InputContainer>
            <Input
              label="Phone Number"
              type="text"
              minLength={10}
              maxLength={10}
              value={number}
              required={true}
              onChange={(e) => setNumber(e.target.value)}
              errorMessage={errorMessagePhone}
            />
          </InputContainer>
          <InputContainer>
            <Input
              label="Password"
              type="password"
              value={password}
              required={true}
              onChange={handlePasswordChange}
              errorMessage={errorMessagePassword}
            />
          </InputContainer>
          <InputContainer>
            <Input
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              required={true}
              onChange={handleConfirmPasswordChange}
            />

            <InputErrorMessage>{errorMessagePassword}</InputErrorMessage>
          </InputContainer>

          <Button
            onClick={handleSubmit}
            btnText="Register"
            bg="primary"
            size="md"
            isBtn={true}
          />
        </RegisterContainer>
        <SignUpContainer>
          <Heading_H3>Existing account ? </Heading_H3>
          <p>Already a member ?</p>
          <Link href="/" className="login-link">
            Login now
          </Link>
        </SignUpContainer>
      </RegisterPanel>
    </LayoutWrapper>
  );
};

export default Register;
