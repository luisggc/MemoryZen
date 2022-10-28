import Link from "next/link";
import ProductCard from "./ProductCard";

export default function ShopSection({ products }) {
  /*
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
  ];*/

  return (
    <div className="flex flex-col items-center justify-center mt-16 w-full">
      <div
        className="flex flex-col items-center justify-center w-full h-72"
        style={{
          backgroundImage: `url(/images/shopsection-back-title.svg)`,
          backgroundPosition: "center",
          backgroundSize: "380px 280px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full">
          <p className="text-6xl text-green-400 text-center">Bestsellers</p>
        </div>
        <div className="w-96 bg-green-400 mt-10 p-3 rounded-lg cursor-pointer">
          <p className="text-center text-white text-lg font-semibold">SHOP ALL</p>
        </div>
      </div>
      <div className="flex mt-6 gap-5 items-center justify-center w-full px-12 flex-wrap">
        {products.map((product) => (
          <Link key={product._id} href={`/product/${encodeURIComponent(product.slug.current)}`}>
            <a>
              <ProductCard {...product} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
