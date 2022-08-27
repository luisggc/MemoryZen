import Image from "next/image";
import DefaultLayout from "../../components/DefaultLayout";

const products = [
  {
    id: 1,
    name: "Aroma Diffuser",
    description: "Original product comes in three styles of color, usb charger.",
    price: "$10",
    image: "/images/product-01.png",
  },
  {
    id: 2,
    name: "Lux Aroma Diffuser",
    description: "Original product comes in three styles of color, usb charger.",
    price: "$50",
    image: "/images/product-02.png",
  },
  {
    id: 3,
    name: "Basket INNER BEAUTY",
    description: "Original product comes in three styles of color, usb charger.",
    price: "$70",
    image: "/images/product-03.png",
  },
  {
    id: 4,
    name: "Uplift Handcrafted Soap Bar",
    description: "Original product comes in three styles of color, usb charger.",
    price: "$10",
    image: "/images/product-04.png",
  },
];

const Product = (props) => {
  console.log(props);
  //const { image } = product
  const image = "/images/product-01.png";
  return (
    <DefaultLayout>
      <div className="flex flex-col w-full space-y-9 justify-center items-center">
        <div
          className="items-center justify-center flex h-80 w-full"
          style={{
            backgroundImage: "url(" + "/images/ellipse.svg" + ")",
            backgroundPosition: "center",
            backgroundSize: "380px 350px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-96 bg-transparent relative shadow-sm rounded-bl-3xl rounded-tr-3xl cursor-pointer">
            <Image
              className="object-cover rounded-bl-3xl rounded-tr-3xl  w-full h-full transition duration-300 transform ease-in hover:opacity-70"
              src={image}
              height={500}
              width={500}
              layout="responsive"
            />
          </div>
        </div>
        <div className="w-64">
          <p className="text-center font-semibold text-6xl text-green-400">Pear kiwi & Mint</p>
          <p>{JSON.stringify(props)}</p>
        </div>
        <div className="w-full px-24">
          <p className="text-center font-semibold text-lg text-gray-400">
            They say that home is where the heart is. Perhaps that’s why a feeling of loss is so
            apparent when you are far from the ones you love.{" "}
          </p>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Product;

export function getServerSideProps(context) {
  const product = products.filter(
    (product) => product.id === parseInt(context.query["product-id"])
  )[0];
  return {
    props: {
      product,
      oi: 123,
    },
  };
}
