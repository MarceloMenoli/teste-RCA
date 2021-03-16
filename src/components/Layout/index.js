import Header from "../Header";
import ProductCard from "../ProductCard";
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
    </>
  );
};

export default Layout;
