import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 49px;
  height: 150px;
  width: 240px;
  justify-content: space-between;
  align-items: center;
  border: solid 1px #d8c4c4;
  padding: 15px 0px;
  border-radius: 6px;
`;

export const Input = styled.input`
  height: 35px;
  width: 195px;
  outline: none;
  border: solid 1px #d8c4c4;
  border-radius: 6px;
  color:#367ba4;
  ::placeholder {
    color: #367BA4;
    padding-left: 5px;
    font-size: 0.8em;
  }
`;
