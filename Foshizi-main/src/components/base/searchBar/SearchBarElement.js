import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  position: relative;
  width: 280px;
  background: #333;
`;
export const SearchBarInput = styled.input`
  width: 100%;
  height: 35px;
  padding: 5px 10px;
  font-size: 16px;
  color: #fff;
  border: none;
  outline: none;
  background: #343a3f;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.08);
`;
export const SearchBarIcon = styled.span`
  position: absolute;
  top: 15px;
  right: 5px;
  bottom: 5px;
  color: #fff;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: all ease-in-out 0.5ms;
  }
`;
