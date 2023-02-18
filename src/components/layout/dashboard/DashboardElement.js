import styled from "styled-components";
import Image from "next/image";

export const DashboardWrapper = styled.section`
  font-family: "Poppins", sans-serif;
  background: #333233;
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const DashboardSideBar = styled.div`
  @media (min-width: 1024px) {
    width: 20%;
    background: #232729;
    border: 1px solid #232729;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
`;
export const DashboardMain = styled.div`
  width: calc(75% - 40px);
  background: #232729;
  height: calc(100% - 40px);
`;

export const LogoContainer = styled.div`
  width: 100%;
`;

export const NextImage = styled(Image)`
  object-fit: containe;
  background-color: red;
`;
