import Header from "../Header";
import ProductCard from "../ProductCard";
import { Container, ContentContainer, HomeImg } from "./styles";

export const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <Container>
        <HomeImg src='/images/HomeImg.png'/>
        <ContentContainer>{children}</ContentContainer>
        <ProductCard />
      </Container>
    </>
  );
};

export default Layout;
