import styled from "styled-components";
import Image from "next/image";

export const DashboardSideBar = styled.div`
  width: 20%;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 45;
  background: #2a2f34;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 50px;

  @media (min-width: 1024px) {
    position: static;
    background: #2a2f34;
    border: 1px solid#2A2F34;
    height: calc(100vh - 20px);
    align-items: start;
    padding: 10px;
    border-radius: 0px;
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
  width: 100%;
`;
export const ProfileWrapper = styled.div`
  display: none;
  @media (min-width: 678px) {
    display: block;
  }
`;
export const UserProfile = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  @media (min-width: 678px) {
    display: none;
  }
`;
export const LogoWrapperSideBar = styled.div`
  display: none;
  @media (min-width: 678px) {
    display: block;
  }
`;
export const Title = styled.h3`
  display: none;
  @media (min-width: 768px) {
    display: block;
    font-size: 14px;
    color: #fff;
    font-weight: 700px;
    text-transform: uppercase;
    margin: 20px auto;
    width: 100%;
  }
`;
