import { useState } from "react";
import { Button } from "../Button";
import { Modal } from "../Modal";
import {
  Container,
  LogoContainer,
  Logo,
  Link,
  Content,
  Wrapper,
} from "./styles";

export const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Container>
      <Content>
        <LogoContainer>
          <Logo src="/images/logoRCA.jpg"></Logo>
          <Link>Products</Link>
        </LogoContainer>
        <Wrapper>
          <Button title="Login" onClick={() => setOpenModal(!openModal)} />
          {openModal && <Modal />}
        </Wrapper>
      </Content>
    </Container>
  );
};

export default Header;
