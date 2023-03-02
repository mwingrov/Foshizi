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
export const RegisterPanel = styled.div`
  postition: relative;
  width: 50%;
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
    padding-left: 400px;
    padding-right: 700px;
  }
`;

export const RegisterContainer = styled.form`
  display: flex-box;
  @media (min-width: 1024px) {
    width: 700px;
    margin-right: 300px
    flex-direction: column;
    align-items: center;
    gap: 30px;
    color: #3b3d3f;
    gap: 50px;
  }
`;
