import Front from "../components/Front";
import ProductCategories from "../components/ProductCategories";
import ShopSection from "../components/ShopSection";
import DefaultLayout from "../components/DefaultLayout";

const Home = () => {
  return (
    <DefaultLayout>
      <Front />
      <ProductCategories />
      <ShopSection />
    </DefaultLayout>
  );
};

export default Home;
