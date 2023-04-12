import Link from "next/link";
import axios from "axios";
import {
  LayoutWrapper,
  RegisterPanel,
  RegisterContainer,
  InputContainer,
  InputErrorMessage,
  FeedbackWrapper,
} from "./RegisterElement";
import Input from "@/components/base/input";
import Button from "@/components/base/button";
import Logo from "@/components/base/logo";
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { Heading_H3, SignUpContainer } from "../logger/LoggerElement";
import Loading from "@/components/feedback/loading";
import Succes from "@/components/feedback/success";
import Failure from "@/components/feedback/failure";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const [errorMessageEmail, setErrorMessageEamil] = useState("");
  const [errorMessageFirstname, seterrorMessageFirstname] = useState("");
  const [errorMessageLastname, seterrorMessageLastname] = useState("");
  const [errorMessagePhone, setErrorMessagePhone] = useState("");
  const [errorMessagePassword, setErrorMessagePassword] = useState("");

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorUser, setErrorUser] = useState("");

  const handleInput = (inputName, setName) => {
    if (!inputName) {
      setName(`Please enter a valid ${inputName}`);
      return false;
    } else {
      setName("");
      return true;
    }
  };
  const handleComparePassword = () => {
    if (!password || !confirmPassword || password !== confirmPassword) {
      setErrorMessagePassword("Please provide matching password");
      return false;
    }
    return true;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const emailTest = handleInput(email, setErrorMessageEamil);
    const fnameTest = handleInput(firstname, seterrorMessageFirstname);
    const lnameTest = handleInput(lastname, seterrorMessageLastname);
    const phoneTest = handleInput(phoneNumber, setErrorMessagePhone);
    const pwTest = handleComparePassword();

    if (!emailTest || !fnameTest || !lnameTest || !phoneTest || !pwTest) {
      return;
    } else {
      // Perform login API call here and retrieve user data
      try {
        const newUser = {
          email,
          password,
          firstname,
          lastname,
          bio: "",
          physicalAddress: {
            number: 0,
            street: "",
            suburb: "",
            city: "",
            province: "",
            country: "",
          },
          linkedAccounts: [""],
          Role: "",
          dateOfBirth: "1960-01-01",
          phone: phoneNumber,
        };
        const response = await axios.post(
          "https://foshizi.herokuapp.com/api/registeruser",
          newUser
        );
        setLoading(true);
        const { result } = response.data;
        if (
          result.status === "bad" &&
          result.message === "Email already in use"
        ) {
          setError(true);
          setLoading(false);
          setErrorMessageEamil("Email already used, please login");
          setErrorUser("Email already used, please login");
        }
        if (result?._id) {
          setSuccess(true);
          setLoading(false);
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
        setError(true);
        setLoading(false);
      }
    }
  };

  return (
    <>
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
                label="First Name"
                type="text"
                value={firstname}
                required={true}
                onChange={(e) => setFirstname(e.target.value)}
                errorMessage={errorMessageFirstname}
              />
              <InputErrorMessage>{errorMessageFirstname}</InputErrorMessage>
            </InputContainer>
            <InputContainer>
              <Input
                label="Last Name"
                type="text"
                value={lastname}
                required={true}
                onChange={(e) => setLastname(e.target.value)}
                errorMessage={errorMessageLastname}
              />
              <InputErrorMessage>{errorMessageLastname}</InputErrorMessage>
            </InputContainer>
            <InputContainer>
              <Input
                label="Phone Number"
                type="text"
                minLength={10}
                maxLength={10}
                value={phoneNumber}
                required={true}
                onChange={(e) => setPhoneNumber(e.target.value)}
                errorMessage={errorMessagePhone}
              />
            </InputContainer>
            <InputContainer>
              <Input
                label="Password"
                type="password"
                value={password}
                required={true}
                onChange={(e) => setPassword(e.target.value)}
                errorMessage={errorMessagePassword}
              />
            </InputContainer>
            <InputContainer>
              <Input
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                required={true}
                onChange={(e) => setConfirmPassword(e.target.value)}
                errorMessage={errorMessagePassword}
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
      <FeedbackWrapper>
        {loading && <Loading />}
        {success && (
          <Succes
            heading="Welcome to Foshizi"
            message="You have successfully registered"
            close="/register"
          />
        )}
        {error && (
          <Failure
            heading="Error"
            message={
              errorUser
                ? errorUser
                : "Oupsss, something went wrong, try again later..."
            }
            close="/register"
          />
        )}
      </FeedbackWrapper>
    </>
  );
};

export default Register;
