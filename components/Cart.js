import { XIcon, TrashIcon, PlusIcon, MinusIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useStateContext } from "../context/StateContext";
import useClickOutside from "../hooks/useClickOutside";
import { urlFor } from "../lib/client";

/*
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
*/
export default function Cart({ visibleCart, setVisibleCart }) {
  const [refComponent] = useClickOutside(() => setVisibleCart(false));
  const { cartItems } = useStateContext();
  const totalValue = cartItems?.reduce((p, v) => p + v.price * v.quantity, 0);

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
      <div className="flex flex-col h-full justify-between px-10">
        <div className="mt-10 mb-8">
          <p className="text-xl text-green-500 font-semibold text-left">Carrinho</p>
        </div>
        {cartItems.length === 0 ? (
          <div className="flex items-center grow">
            <p>You do not have items in your cart.</p>
            <p>
              <a href="/" className="font-semibold text-green-400">
                Click here
              </a>{" "}
              to select the best products.
            </p>
          </div>
        ) : (
          <>
            <div className="flex flex-col items-center grow">
              <div className="flex flex-col">
                {cartItems.map((product) => (
                  <ProductCart key={product._id} {...product} />
                ))}
              </div>
            </div>

            <div className="flex flex-col mb-5">
              <div className="flex justify-between mb-5">
                <div>
                  <p className="text-lg">Subtotal:</p>
                </div>
                <div>
                  <p className="text-lg">${totalValue}</p>
                </div>
              </div>
              <button className="bg-green-400 py-3 px-4 text-white rounded-md animate-pulse">
                PAY NOW
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const ProductCart = ({ _id, name, image, price, quantity }) => {
  const { addQuantityToCart, removeItemFromCart } = useStateContext();
  const increaseQuantity = () => addQuantityToCart(_id, +1);
  const decreaseQuantity = () => addQuantityToCart(_id, -1);
  const deleteItem = () => removeItemFromCart(_id);

  return (
    <>
      <div className="flex justify-between select-none">
        <div className="mr-5">
          <Image
            className="rounded-bl-3xl rounded-tr-3xl shadow-lg"
            src={urlFor(image[0]).width(100).url()}
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
              <div className="ml-2 p-1 cursor-pointer" onClick={deleteItem}>
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
