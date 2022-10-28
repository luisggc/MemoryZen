import { XIcon, TrashIcon, PlusIcon, MinusIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";
import { urlFor } from "../lib/client";

const products = [
  {
    id: 1,
    name: "Aroma Diffuser",
    description: "Original product comes in three styles of color, usb charger.",
    price: 10,
    image: "/images/product-01.png",
  },
  {
    id: 2,
    name: "Lux Aroma Diffuser",
    description: "Original product comes in three styles of color, usb charger.",
    price: 50,
    image: "/images/product-02.png",
  },
  {
    id: 3,
    name: "Basket INNER BEAUTY",
    description: "Original product comes in three styles of color, usb charger.",
    price: 70,
    image: "/images/product-03.png",
  },
  {
    id: 4,
    name: "Uplift Handcrafted Soap Bar",
    description: "Original product comes in three styles of color, usb charger.",
    price: 10,
    image: "/images/product-04.png",
  },
];

export default function Cart({ visibleCart, setVisibleCart }) {

  const [refComponent] = useClickOutside(() => setVisibleCart(false));
  
  return (
    <div
      ref={refComponent}
      className={`fixed top-0 right-0 w-96 h-screen bg-white shadow-lg z-50 transition duration-300 transform easy-out ${
        visibleCart ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div
        className="absolute top-0 right-0 p-5 cursor-pointer"
        onClick={() => setVisibleCart(false)}
      >
        <XIcon className="w-8 h-8" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="mt-10 mb-8">
          <p className="text-xl text-green-500 font-semibold text-left">Carrinho</p>
        </div>

        <div className="flex flex-col px-10">
          {products.map((product) => (
            <ProductCart key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

const ProductCart = ({ _id, name, description, image, price }) => {
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => setQuantity((v) => v + 1);
  const decreaseQuantity = () => quantity > 1 && setQuantity((v) => v - 1);
  const deleteItem = (_id) => {
    console.log("delete ", _id);
  }

  return (
    <>
      <div className="flex justify-between select-none">
        <div className="mr-5">
          <Image
            className="rounded-bl-3xl rounded-tr-3xl shadow-lg"
            src={image}
            alt="product"
            height={100}
            width={100}
          />
        </div>
        <div className="flex flex-col grow">
          <div className="w-full mb-5">
            <p className="text-sm text-gray-600 text-right">{name}</p>
          </div>
          <div className="flex w-full justify-between items-center">
            <div className="flex w-full items-center">
              <div className="flex items-center">
                <button
                  className="p-2 bg-gray-200 cursor-pointer border border-gray-300"
                  onClick={decreaseQuantity}
                >
                  <MinusIcon className="w-3 h-3" />
                </button>
                <div className="px-2">
                  <p className="text-sm  text-center">{quantity}</p>
                </div>
                <button
                  className="p-2 bg-gray-200 cursor-pointer border border-gray-300"
                  onClick={increaseQuantity}
                >
                  <PlusIcon className="w-3 h-3" />
                </button>
              </div>
              <div className="ml-2 p-1 cursor-pointer" onClick={() => deleteItem(_id)}>
                <TrashIcon className="w-5 h-5 text-gray-500" />
              </div>
            </div>
            <div>
              <p className="text-sm text-right ">${quantity * price}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mx-5 h-[0.5px] bg-gray-200 mt-2 mb-5"></div>
    </>
  );
};
