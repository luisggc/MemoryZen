import Head from "next/head";
import Header from "../components/Header";
import Front from "../components/Front";
import ProductCategories from "../components/ProductCategories";
import ShopSection from "../components/ShopSection";
import Footer from "../components/Footer";
import withHeaderFoot from "../components/withHeaderFoot";

const Home = () => {
  return (
    <>
      <Front />
      <ProductCategories />
    </>
  );
};

export default withHeaderFoot(Home);
