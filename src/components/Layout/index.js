import Header from "../Header";
import Footer from "../Footer";
import { ProductsList } from "../ProductList";
import Section from "../Section";
import { Container, HomeImg } from "./styles";
import { useState } from "react";

export const Layout = () => {
  const [products, setProducts] = useState([]);

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
