import {
    LayoutWrapper,
    RegisterPanel,
    RegisterContainer,
  } from "./RegisterElement";
  import Input from "@/components/base/input";
  import CheckboxButton from "@/components/base/checkboxButton";
  import Button from "@/components/base/button";
  import Logo from "@/components/base/logo";
  import { useState } from "react";
  import { useDispatch } from "react-redux";
  import { loginSuccess } from "../../base/store/authSlice";
  import { useRouter } from "next/router";
  
  const Register = () => {
  
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState(''); 
    const [number, setNumber] = useState(''); 
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const route = useRouter();
    const dispatch =  useDispatch();
  
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
      route.push('/dashboard');
    };
  
    return (
      <LayoutWrapper>
        <RegisterPanel>
          <Logo size={350} />
            <RegisterContainer>
                <form>
                    <div>
                    <Input label="Username" type="name" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <Input label="Phone Number" type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
                    <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Input label="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <CheckboxButton label="Keep me logged in" />
                    </div>
                    <Button onClick={handleSubmit} btnText="Register" />
                </form>
            </RegisterContainer>
        </RegisterPanel>
      </LayoutWrapper>
    );
  };
  
  export default Register;
  