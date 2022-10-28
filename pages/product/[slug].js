import Image from "next/image";
import Link from "next/link";
import DefaultLayout from "../../components/DefaultLayout";
import { client, urlFor } from "../../lib/client";

const Product = (props) => {
  const { name, price, description, image } = props?.product;
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
            src={urlFor(image[0]).width(240).url()}
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
              <p className="text-white text-md">${price}</p>
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
          {props?.allProducts?.map((product) => (
            <SimilarProduct key={product._id} {...product} />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

const SimilarProduct = ({ name, image, slug }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="items-center justify-center relative shadow-lg cursor-pointer">
          <Image
            className="rounded-bl-3xl rounded-tr-3xl shadow-lg"
            layout="fixed"
            src={urlFor(image[0]).width(200).url()}
            alt="product"
            height={200}
            width={200}
          />
          <div className="absolute bottom-1 z-10 bg-white w-full bg-opacity-90 pb-4 px-4 pt-2 font-semibold text-sm rounded-tr-2xl">
            <p>{name}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;

export async function getServerSideProps(context) {
  const slug = context.params["slug"];

  const queryProduct = `*[_type == "products" && slug.current == '${slug}'][0]`;
  const product = await client.fetch(queryProduct);

  const queryProducts = '*[_type == "products"]';
  const allProducts = await client.fetch(queryProducts);

  return {
    props: {
      product,
      allProducts,
    },
  };
}
