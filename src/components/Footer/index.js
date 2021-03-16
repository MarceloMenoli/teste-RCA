import {
  Container,
  LogoContainer,
  Logo,
  Link,
  Content,
  Wrapper,
  Text,
} from "./styles";

export const Header = () => {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <Logo src="/images/logoFooter.png"></Logo>
        </LogoContainer>
        <Wrapper>
          <Text>Teste front-end 2019 - RCA Digital</Text>
        </Wrapper>
      </Content>
    </Container>
  );
};

export default Header;
