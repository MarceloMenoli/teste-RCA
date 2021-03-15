import { Button } from "../Button";
import { Container, LogoContainer, Logo, Link, Content } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <Logo src="/images/logoRCA.jpg"></Logo>
          <Link>Products</Link>
        </LogoContainer>
        <Button title="Login" />
      </Content>
    </Container>
  );
};

export default Header;
