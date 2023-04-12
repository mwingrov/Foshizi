import styled from "styled-components";

export const ComingSoon = styled.div`
  width: 350px;
  height: 280px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  box-shadow: -5px -1px 15px 8px rgba(0, 0, 0, 0.28);
  -webkit-box-shadow: -5px -1px 15px 8px rgba(0, 0, 0, 0.28);
  -moz-box-shadow: -5px -1px 15px 8px rgba(0, 0, 0, 0.28);
  font-family: "Poppins", sans-serif;
  @media (min-width: 1024px) {
    width: 500px;
    height: 300px;
    padding: 30px;
  }
`;
export const Heading_H2 = styled.h2`
  color: #de821c;
  font-size: 28px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
export const RedirectContainer = styled.div`
  margin-top: auto;
  width: 100%;
`;
export const NotifcationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
