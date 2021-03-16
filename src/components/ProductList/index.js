import ProductCard from "../ProductCard";
import { Container } from "./styles";

export const ProductsList = ({ onClick, data, remove, added }) => {
  return (
    <Container>
      {data.map((product, index) => {
        return (
          <ProductCard
            key={index}
            title={product.title}
            plataform={product.platform}
            price={product.price}
            url={product.url}
            onClick={onClick}
            remove={remove}
            added={added}
          />
        );
      })}
    </Container>
  );
};

export default ProductsList;
