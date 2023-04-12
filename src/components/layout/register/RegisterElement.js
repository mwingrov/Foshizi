import styled from "styled-components";

export const LayoutWrapper = styled.section`
  font-family: "Poppins", sans-serif;
  background: #333233;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FeedbackWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-200%);
  margin: auto;
`;
export const RegisterPanel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 100px;
  @media (min-width: 1024px) {
    background: #232729;
    height: 600px;
    flex-direction: row;
    align-items: center;
    padding-bottom: 0;
  }
`;

export const RegisterContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 35px;
  @media (min-width: 1024px) {
    width: 35%;
    color: #3b3d3f;
    gap: 35px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InputErrorMessage = styled.span`
  display: none;
`;
