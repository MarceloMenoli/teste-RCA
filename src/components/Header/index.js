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

export const Header = ({ onClick, toggleModal, openModal, signOutProfile }) => {
  const [session] = useSession();
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
              <Button title="Login" onClick={toggleModal} />
              {openModal && <Modal onClick={onClick} />}
            </>
          ) : (
            <Profile>
              Welcome Tom
              <Logout onClick={signOutProfile}>Logout</Logout>
            </Profile>
          )}
        </Wrapper>
      </Content>
    </Container>
  );
};

export default Header;
