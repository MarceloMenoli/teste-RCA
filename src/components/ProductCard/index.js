import {
  Container,
  Content,
  TitleWrapper,
  Title,
  Text,
  Price,
  ProductImg,
  ProductButton,
} from "./styles";

export const ProductCard = () => {
  return (
    <Container>
      <Content>
        <TitleWrapper>
          <Title>TLOU 2</Title>
          <Text>PS4</Text>
        </TitleWrapper>
        <Price>$ 199</Price>
      </Content>
      <ProductImg src="/images/TLOU2.png"/>
      <ProductButton >Add to cart</ProductButton>
    </Container>
  );
};

export default ProductCard;
