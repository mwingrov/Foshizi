import {
    LayoutWrapper,
    RegisterPanel,
    RegisterContainer,
  } from "./RegisterElement";
  import Input from "@/components/base/input";
  import CheckboxButton from "@/components/base/checkboxButton";
  import Button from "@/components/base/button";
  import Logo from "@/components/base/logo";
  import { useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { loginSuccess, selectUser } from "../../base/store/authSlice";
  import { useRouter } from "next/router";
  
  const Register = () => {
  
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState(''); 
    const [number, setNumber] = useState(''); 
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const route = useRouter();
    const dispatch =  useDispatch();
    const [errorMessage, setErrorMessage] = useState('');
    

    
    const handleSubmit = async (event) => {
      event.preventDefault();
      // Perform login API call here and retrieve user data
      dispatch(loginSuccess({
        name: username,
        email: email,
        number: number,
        password: password,
        loggedIn: true,
      }));
      

      if (!username || !email || !password || !confirmPassword) {
        setErrorMessage('Please fill in all fields');
        return;
      }
      if (password !== confirmPassword) {
        setErrorMessage('Passwords do not match');
        return;
      }
      else {
        route.push('/dashboard');
      }
      setErrorMessage('');


    };

    const isValidEmail = () => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return (emailRegex.test(email)) ? console.log(emailRegex.test(email)) : console.log(emailRegex.test(email));
    }
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
      const minLength = 8;
      const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
      return (password.length >= minLength && hasSpecialChar.test(password));
    };

    const handleConfirmPasswordChange = (e) => {
       setConfirmPassword(e.target.value);
       const minLength = 8;
       const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
       return (password.length >= minLength && hasSpecialChar.test(password));
    };

  
    return (
      <LayoutWrapper>
        <RegisterPanel>
          <Logo size={350} />
            <RegisterContainer>
                <form>
                    <Input label="Username" type="name" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <Input label="Phone Number" type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
                    <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input label="Password" type="password" value={password} onChange={handlePasswordChange} />
                    <Input label="Confirm Password" type="password"value={confirmPassword} onChange={handleConfirmPasswordChange} />
                    <CheckboxButton label="Keep me logged in" />
                    <Button onClick={handleSubmit} btnText="Register" />
                    {errorMessage && <div>{errorMessage}</div>}
                </form>
            </RegisterContainer>
        </RegisterPanel>
      </LayoutWrapper>
    );
  };
  
  export default Register;
  