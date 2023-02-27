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
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform login API call here and retrieve user data
    dispatch(loginSuccess({
      name: username,
      email: email,
      password: password,
      loggedIn: true,
    }));

    if (!username || !email || !password) {
      setErrorMessage('Please fill in all fields');
      return;
    }
    else {
      route.push('/dashboard');
    }
    setErrorMessage('');
  };

  const handleRegister = (event) => {
    event.preventDefault();
    
    route.push('/register');
  };

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(loginSuccess({
      name: username,
      email: email,
      password: password,
      loggedIn: true,
    }));

    if (!username || !email || !handlePasswordChange) {
      setErrorMessage('Please fill in all fields');
      return;
    }
    else {
      route.push('/dashboard');
    }
    setErrorMessage('');
  };

  const isValidEmail = (e) => {
    setEmail(e.target.value);
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return (emailRegex.test(email)) ? console.log(emailRegex.test(email)) : console.log(emailRegex.test(email));
  }

  const handlePasswordChange = () => {
    const minLength = 8;
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
    return (password.length >= minLength && hasSpecialChar.test(password) ? route.push('/dashboard') : setErrorMessage('Password Invalid!'));
  };

  return (
    <LayoutWrapper>
      <LoginPanel>
        <Logo size={350} />
          <SigninContainer>
            <form onSubmit={handleSubmit}>
                <Input label="Username" type="name" value={username} onChange={(e) => setUsername(e.target.value)} />
                <Input label="Email" type="email" value={email} onChange={isValidEmail} />
                <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <CheckboxButton label="Keep me logged in" />
                <Button onClick={handleLogin} btnText="Sign In" />
                {errorMessage && <div>{errorMessage}</div>}
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
