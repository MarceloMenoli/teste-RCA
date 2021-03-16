import Header from "../Header";
import Footer from "../Footer";
import { ProductsList } from "../ProductList";
import Section from "../Section";
import { Container, HomeImg } from "./styles";

export const Layout = ({
  onClick,
  data,
  login,
  toggleModal,
  openModal,
  signOutProfile,
  counter,
  remove,
  added,
}) => {
  return (
    <>
      <Header
        onClick={login}
        toggleModal={toggleModal}
        openModal={openModal}
        signOutProfile={signOutProfile}
      ></Header>
      <Container>
        <HomeImg src="/images/HomeImg.png" />
        <Section counter={counter} />
        <ProductsList
          data={data}
          onClick={onClick}
          remove={remove}
          added={added}
        />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
