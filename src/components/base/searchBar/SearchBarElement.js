import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  display: none;
  @media (min-width: 678px) {
    position: relative;
    display: block;
    background: #333;
    flex-basis: 25%;
    width: 230px;
  }
`;
export const SearchBarInput = styled.input`
  width: calc(100% - 15px);
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
