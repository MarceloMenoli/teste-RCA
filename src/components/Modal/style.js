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
  font-size: 0.8em;
  ::placeholder {
    color: #367BA4;
    padding-left: 5px;
    font-size: 0.8em;
  }
`;

export const ModalButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.bg.primary};
  color: ${(props) => props.theme.text.primary};
  padding: 0px 22px;
  height: 45px;
  border-radius: 6px;
  font-size: 0.8em;
  cursor: pointer;
  border: 0;
  width: 195px;
  outline: none;
`;
