import styled from "styled-components";
// import theme from '../../styles/theme'

export const Container = styled.button`
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
  width: ${props => {props.width || ''}};
  outline: none;
`;
