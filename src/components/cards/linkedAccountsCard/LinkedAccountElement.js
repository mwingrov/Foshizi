import styled from "styled-components";

export const LinkedAccountContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 50px;
  row-gap: 30px;
  padding: 20px;
`;

export const LinkNoteIcon = styled.span`
  color: #add8e6;
  margin-left: auto;
`;

export const LinkedItem = styled.ul`
  display: flex;
  width: 75%;
  gap: 15px;
  align-items: center;
`;
