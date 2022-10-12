import Image from "next/image";
import Link from "next/link";
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
  const { name, price, id, description, image } = props?.product;
  return (
    <DefaultLayout>
      <div className="flex flex-col w-full  justify-center items-center">
        <div
          className="items-center justify-center flex h-80 w-full"
          style={{
            backgroundImage: "url(" + "/images/ellipse.svg" + ")",
            backgroundPosition: "center",
            backgroundSize: "360px 330px",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Image
            className="rounded-bl-3xl rounded-tr-3xl shadow-lg"
            src={image}
            alt="product"
            height={240}
            width={240}
          />
        </div>
        <div className="max-w-96 mx-10">
          <div className="flex justify-between items-center w-full">
            <div className="mr-3">
              <p className="text-lg font-semibold">{name}</p>
            </div>
            <div className="bg-green-300 rounded-full px-2">
              <p className="text-white text-md">{price}</p>
            </div>
          </div>
          <div className="w-full mt-2">
            <p className="font-semibold text-sm text-gray-400">{description}</p>
          </div>
          <div className="flex justify-between w-full mt-8">
            <div className="w-40 bg-green-400 p-2 rounded-lg cursor-pointer">
              <p className="text-center text-white text-lg font-semibold">BUY NOW</p>
            </div>
            <div className="w-40 p-2 rounded-lg cursor-pointer border-solid border-2 border-green-400">
              <p className="text-center text-green-400 text-lg font-semibold">ADD TO CART</p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-xl text-green-500 font-semibold">See similar:</p>
          </div>
        </div>
        <div className="flex justify-left md:justify-center w-full px-10 mt-5 space-x-5 overflow-x-scroll scrollbar-none">
          {products.map((product) => (
            <SimilarProduct key={product.id} {...product} />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

const SimilarProduct = ({ name, image, id }) => {
  return (
    <div>
      <Link href={`/product/${encodeURIComponent(id)}`}>
        <div className="items-center justify-center relative shadow-lg cursor-pointer">
          <Image
            className="rounded-bl-3xl rounded-tr-3xl shadow-lg"
            layout="fixed"
            src={image}
            alt="product"
            height={200}
            width={200}
          />
          <div className="absolute bottom-1 z-10 bg-white w-full bg-opacity-90 pb-4 px-4 pt-2 font-semibold text-sm rounded-tr-2xl shadow-2xl">
            <p>{name}</p>
          </div>
        </div>
      </Link>
    </div>
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
    },
  };
}
