import Layout from "../components/Layout";
import { useState } from "react";
import { signIn, signOut } from "next-auth/client";

const data = [
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
  },
];

export const Index = () => {
  const [productsChart, setProductsChart] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [counter, setCouter] = useState("0");
  const [added, setAdded] = useState(false)

  const addItem = () => {
    setProductsChart([
      ...productsChart,
      {
        title: data.title,
        platform: data.platform,
        price: data.price,
        url: data.url,
      },
    ]);
    setCouter(productsChart.length + 1);
    setAdded(true)
  };

  const removeItem = () => {
    setProductsChart(productsChart.slice());
    setCouter(productsChart.length - 1);
    setAdded(false)
  };

  console.log(counter);

  return (
    <Layout
      login={() => signIn("google")}
      data={data}
      toggleModal={() => setOpenModal(!openModal)}
      openModal={openModal}
      signOutProfile={() => signOut()}
      counter={counter}
      onClick={() => addItem()}
      remove={() => removeItem()}
      added={added}
    >
      {" "}
    </Layout>
  );
};

export default Index;
