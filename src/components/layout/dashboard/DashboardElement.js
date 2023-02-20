import styled from "styled-components";
import Image from "next/image";

export const DashboardWrapper = styled.section`
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
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
export const LogoContainer = styled.div`
  width: 100%;
`;

export const NextImage = styled(Image)`
  object-fit: containe;
  background-color: red;
`;
export const DashboardMain = styled.div`
  margin-left: auto;
  flex: 1;
  display: grid;
  grid-template-rows: 0.5fr repeat(2, 4fr);
  gap: 30px;
`;

export const RowContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 20px 10px;
`;
