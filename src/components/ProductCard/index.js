import {
  Container,
  Content,
  TitleWrapper,
  Title,
  Text,
  Price,
  ProductImg,
  ProductButton,
  RemoveButton,
} from "./styles";

export const ProductCard = ({ title, plataform, price, url, onClick, remove, added }) => {
  return (
    <Container>
      <Content>
        <TitleWrapper>
          <Title>{title}</Title>
          <Text>{plataform}</Text>
        </TitleWrapper>
        <Price>$ {price}</Price>
      </Content>
      <ProductImg src={url} />

      {!added ? (
        <ProductButton onClick={onClick}>Add to cart</ProductButton>
      ) : (
        <RemoveButton onClick={remove}>Remove from cart</RemoveButton>
      )}
    </Container>
  );
};

export default ProductCard;
