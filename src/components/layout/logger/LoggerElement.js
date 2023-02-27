import styled from "styled-components";

export const LayoutWrapper = styled.section`
  font-family: "Poppins", sans-serif;
  background: #333233;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const LoginPanel = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (min-width: 425px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 100%;
    background: #232729;
    height: 500px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 200px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const SigninContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (min-width: 1024px) {
    width: 40%;
  }
`;
export const SignUpContainer = styled.form`
  display: none;
  @media (min-width: 1024px) {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    color: #3b3d3f;
    gap: 50px;
  }
`;

export const Heading_H3 = styled.h3`
  color: #de821c;
  font-size: 20px;
  font-weight: 600;

  @media (min-width: 678px) {
    font-size: 16px;
  }
`;

export const Paragraph = styled.p`
  margin-top: 20px;
  color: #de821c;
  font-size: 16px;
  color: #3b3d3f;
  letter-spacing: 1.1px;
  line-height: 24px;
  padding-bottom: 5px;

  @media (min-width: 678px) {
    padding-bottom: 35px;
    border-bottom: 2px solid #3b3d3f;
    text-align: center;
  }
`;
