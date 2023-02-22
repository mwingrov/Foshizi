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

export const DashboardMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 768px) {
    margin-left: auto;
    flex: 1;
    display: grid;
    grid-template-rows: 0.1fr 1.5fr;
    gap: 0px;
  }
`;

export const PanelContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
    padding: 20px 10px;
  }
`;
export const RowContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    padding: 20px 10px;
  }
`;
