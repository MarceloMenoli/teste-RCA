import { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/client";
import { Button } from "../Button";
import { Modal } from "../Modal";
import {
  Container,
  LogoContainer,
  Logo,
  Content,
  Wrapper,
  LinkNav,
  Profile,
  Logout,
} from "./styles";

export const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [session] = useSession();
  console.log(session);
  return (
    <Container>
      <Content>
        <LogoContainer>
          <Logo src="/images/logoRCA.jpg"></Logo>
          <Link href="/">
            <LinkNav>Products</LinkNav>
          </Link>
        </LogoContainer>
        <Wrapper>
          {!session ? (
            <>
              <Button title="Login" onClick={() => setOpenModal(!openModal)} />
              {openModal && <Modal />}
            </>
          ) : (
            <Profile>
              Welcome Tom
              <Logout onClick={() => signOut()}>Logout</Logout>
            </Profile>
          )}
        </Wrapper>
      </Content>
    </Container>
  );
};

export default Header;
