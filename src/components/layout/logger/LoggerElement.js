import styled from "styled-components";

export const LayoutWrapper = styled.section`
  background: #333233;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LoginPanel = styled.div`
  background: #232729;
  opacity: 0.8;
  width: 100%;
  height: 350px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const LogoContainer = styled.div`
  width: 25%;
  height: 300px;
  color: #fff;
`;
export const SigninContainer = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const SignUpContainer = styled.div`
  width: 33%;
  height: 300px;
  background: green;
`;
