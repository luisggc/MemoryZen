import Image from "next/image";
import { MenuIcon, ShoppingBagIcon, SearchIcon } from "@heroicons/react/outline";
import { useState } from "react";
import Cart from "./Cart";
import useClickOutside from "../hooks/useClickOutside";
import { useStateContext } from "../context/StateContext";
import Link from "next/link";

const itemsMenu = [
  {
    name: "HOME",
    router: "/",
    enabled: true,
  },
  {
    name: "ABOUT US",
    router: "/about-us",
  },
  {
    name: "SHOP",
    router: "/shop",
  },
  {
    name: "CONTACT US",
    router: "/contact-us",
  },
];

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { showCart, setShowCart, itemsCartQuantity } = useStateContext();

  return (
    <>
      <div className="w-full h-10 bg-transparent px-10 py-10 flex items-center justify-between">
        <div className="flex space-x-4 items-center">
          <Image height={30} width={30} src="/images/logo.png" alt="logo" />
          <p className="text-lg font-medium">MemoryZen</p>
        </div>
        <div className="hidden md:inline-flex items-center">
          {itemsMenu.map((item) => (
            <Link href={item.enabled ? item.router : "/"} key={item.name}>
              <div className={`items-center ${item.enabled ? "cursor-pointer" : "cursor-not-allowed"} p-3`}>
                <p className="text-md font-medium">{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="relative">
          <div className="flex items-center">
            <div
              className="items-center cursor-pointer py-3 pl-2 pr-1  mr-2 md:mr-0"
              onClick={() => setShowCart((v) => !v)}
            >
              <div className="relative">
                <ShoppingBagIcon className="w-5 h-5" />
                {itemsCartQuantity > 0 && (
                  <div className="absolute -top-2 -right-2 bg-red-500 rounded-full w-4 h-4">
                    <p className="text-xs text-white text-center">{itemsCartQuantity}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="hidden md:inline-flex items-center cursor-pointer py-3 pl-2 pr-1">
              <SearchIcon className="w-5 h-5" />
            </div>
            <div
              className="inline-flex md:hidden items-center cursor-pointer"
              onClick={() => setToggleMenu((v) => !v)}
            >
              <MenuIcon className="w-8 h-8" />
            </div>
          </div>
          {toggleMenu && <HamburguerMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />}
        </div>
      </div>
      <Cart visibleCart={showCart} setVisibleCart={setShowCart} />
    </>
  );
}

const HamburguerMenu = ({ setToggleMenu }) => {
  const [refComponent] = useClickOutside(() => setToggleMenu(false));

  return (
    <div
      ref={refComponent}
      className="flex w-30 bg-white items-center flex-col shadow-sm absolute -bottom-30 right-0  z-50"
    >
      {itemsMenu.map((item) => (
        <div
          key={item.name}
          className="p-5 items-center w-full cursor-pointer border-b whitespace-nowrap hover:bg-green-300 group"
          onClick={() => setToggleMenu((v) => !v)}
        >
          <p className="group-hover:text-white">{item.name}</p>
        </div>
      ))}
    </div>
  );
};
