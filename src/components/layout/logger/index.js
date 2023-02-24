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
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../../base/store/authSlice";
import { useRouter } from "next/router";

const Logger = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const route = useRouter();
  const dispatch =  useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform login API call here and retrieve user data
    dispatch(loginSuccess({
      name: username,
      email: email,
      password: password,
      loggedIn: true,
    }));
    route.push('/dashboard');
  };

  const handleRegister = (event) => {
    event.preventDefault();
    // Perform login API call here and retrieve user data
    route.push('/register');
  };

  return (
    <LayoutWrapper>
      <LoginPanel>
        <Logo size={350} />
          <SigninContainer>
            <form onSubmit={handleSubmit}>
                <Input label="Username" type="name" value={username} onChange={(e) => setUsername(e.target.value)} />
                <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <CheckboxButton label="Keep me logged in" />
                <Button btnText="Sign In" />
            </form>
          </SigninContainer>
          <SignUpContainer>
            <div onSubmit={handleRegister}>
              <Heading_H3>Create an account</Heading_H3>
                <Paragraph>
                  Create an account to download tracks and use all our features such
                  as playlists,share and pitch
                </Paragraph>
                <Button onClick={handleRegister} btnText="Register"/>
            </div>
          </SignUpContainer>
      </LoginPanel>
    </LayoutWrapper>
  );
};

export default Logger;
