import styled from "styled-components";
import Image from "next/image";

export const DashboardWrapper = styled.section`
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    font-family: "Poppins", sans-serif;
    min-height: 100vh;
    display: flex;
    gap: 20px;
    align-items: center;
  }
`;

export const DashboardSideBar = styled.div`
  width: 100%;
  display: none;
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
export const LogoContainer = styled.div`
  width: 100%;
`;

export const NextImage = styled(Image)`
  object-fit: containe;
`;
export const DashboardMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 768px) {
    margin-left: auto;
    flex: 1;
    display: grid;
    grid-template-rows: repeat(3, 0.5fr);
    gap: 0px;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 20px 10px;
  }
`;
