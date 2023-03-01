import styled from "styled-components";

export const ColleagueContainer = styled.div`
  display: grid;
  padding: 20px;
  row-gap: 30px;
  @media (min-width: 678px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 10px;
    row-gap: 30px;
    padding: 12px;
  }
`;

export const ColleagueItem = styled.ul`
  width: 100%;
`;
