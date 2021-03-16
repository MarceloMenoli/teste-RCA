import Header from "../Header";
import ProductCard from "../ProductCard";
import Footer from "../Footer";
import { ProductsList } from "../ProductList";
import Section from "../Section";
import { Container, ContentContainer, HomeImg } from "./styles";

export const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <Container>
        <HomeImg src="/images/HomeImg.png" />
        <Section />
        <ProductsList />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
