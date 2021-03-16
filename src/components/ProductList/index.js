import ProductCard from "../ProductCard";
import { Container } from "./styles";

const products = [
  { title: "TLOU 2", platform: "PS4", price: "120", url: "/images/TLOU2.png" },
  {
    title: "Cyberpunk",
    platform: "PS4, PC, Xbox",
    price: "200",
    url: "/images/cyberpunk.png",
  },
  {
    title: "Days Gone",
    platform: "PS4",
    price: "127",
    url: "/images/daysGone.png",
  },
  {
    title: "God of War",
    platform: "PS4",
    price: "60",
    url: "/images/godOfWar.png",
  },
  { title: "TLOU 2", platform: "PS4", price: "120", url: "/images/TLOU2.png" },
  {
    title: "Cyberpunk",
    platform: "PS4, PC, Xbox",
    price: "200",
    url: "/images/cyberpunk.png",
  },
  {
    title: "Days Gone",
    platform: "PS4",
    price: "127",
    url: "/images/daysGone.png",
  },
  {
    title: "God of War",
    platform: "PS4",
    price: "60",
    url: "/images/godOfWar.png",
  },{ title: "TLOU 2", platform: "PS4", price: "120", url: "/images/TLOU2.png" },
  {
    title: "Cyberpunk",
    platform: "PS4, PC, Xbox",
    price: "200",
    url: "/images/cyberpunk.png",
  },
  {
    title: "Days Gone",
    platform: "PS4",
    price: "127",
    url: "/images/daysGone.png",
  },
  {
    title: "God of War",
    platform: "PS4",
    price: "60",
    url: "/images/godOfWar.png",
  },
];

export const ProductsList = () => {
  return (
    <Container>
      {products.map((product, index) => {
        return (
          <ProductCard
            key={index}
            title={product.title}
            plataform={product.platform}
            price={product.price}
            url={product.url}
          />
        );
      })}
      {/* <ProductCard
        title="TLOU 2"
        plataform="PS4"
        price="120"
        url="/images/TLOU2.png"
      />
      <ProductCard
        title="Cyberpunk"
        plataform="PS4, PC, Xbox"
        price="200"
        url="/images/cyberpunk.png"
      />
      <ProductCard
        title="Days Gone"
        plataform="PS4"
        price="127"
        url="/images/daysGone.png"
      />
      <ProductCard
        title="God of War"
        plataform="PS4"
        price="60"
        url="/images/godOfWar.png"
      /> */}
    </Container>
  );
};

export default ProductsList;
