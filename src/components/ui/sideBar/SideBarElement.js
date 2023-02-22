import styled from "styled-components";
import Image from "next/image";

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

export const NextImage = styled(Image)`
  object-fit: containe;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: auto;
`;
export const Title = styled.h3`
  font-size: 14px;
  color: #fff;
  font-weight: 700px;
  text-transform: uppercase;
  margin: 20px auto;
  width: 100%;
`;
