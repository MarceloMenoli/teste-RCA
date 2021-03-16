import Header from "../Header";
import Footer from "../Footer";
import { ProductsList } from "../ProductList";
import Section from "../Section";
import { Container, HomeImg } from "./styles";
import { useState } from "react";

export const Layout = () => {
  const [productsChart, setProductsChart] = useState([]);

  return (
    <>
      <Header></Header>
      <Container>
        <HomeImg src="/images/HomeImg.png" />
        <Section  counter='0'/>
        <ProductsList />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
