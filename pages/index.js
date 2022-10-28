import Front from "../components/Front";
import ProductCategories from "../components/ProductCategories";
import ShopSection from "../components/ShopSection";
import DefaultLayout from "../components/DefaultLayout";
import { client } from "../lib/client";

const Home = ({ products }) => {
  return (
    <DefaultLayout>
      <Front />
      <ProductCategories />
      <ShopSection products={products} />
    </DefaultLayout>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "products"]';
  const products = await client.fetch(query);
  console.log(products[0].slug)

  return {
    props: { products },
  };
};

export default Home;
