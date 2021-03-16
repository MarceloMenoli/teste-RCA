import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 415px;
  justify-content: space-between;
  width: 300px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 1.3em;
  color: #333333;
  padding: 5px 0px;
  font-weight: 100;
`;

export const Text = styled.small`
  color: #333333;
  font-size: 0.6em;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  background: #333333;
  border-radius: 0px 0px 10px 10px;
  padding: 0px 10px;
  color: #fff;
  font-size: 1.3em;
`;

export const ProductImg = styled.img`
  width: 254px;
  align-self: center;
`;

export const ProductButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.bg.primary};
  color: ${(props) => props.theme.text.primary};
  padding: 0px 22px;
  height: 45px;
  width: 254px;
  border-radius: 6px;
  font-size: 0.8em;
  cursor: pointer;
  border: 0;
  width: ${(props) => {
    props.width || "";
  }};
  outline: none;
  align-self: center;
`;
