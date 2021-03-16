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

export const ProductCard = ({title, plataform, price, url}) => {
  return (
    <Container>
      <Content>
        <TitleWrapper>
          <Title>{title}</Title>
          <Text>{plataform}</Text>
        </TitleWrapper>
        <Price>$ {price}</Price>
      </Content>
      <ProductImg src={url}/>
      <ProductButton >Add to cart</ProductButton>
    </Container>
  );
};

export default ProductCard;
