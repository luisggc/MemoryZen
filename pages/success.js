import Link from "next/link";
import React, { useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useStateContext } from "../context/StateContext";
import { ShieldCheckIcon } from "@heroicons/react/solid";

export default function Success() {
  const { setCartitems } = useStateContext();

  useEffect(() => {
    setCartitems([]);
  }, []);

  return (
    <DefaultLayout>
      <div className="flex flex-col justify-center items-center mt-12 mx-12 md:mx-32 px-5 py-28  bg-gray-100 rounded">
        <ShieldCheckIcon className="mb-4 w-20 h-20 mx-auto text-green-500" />
        <div>
          <p className="text-5xl text-center font-semibold text-gray-600">Success !!</p>
          <p className="mt-5 text-xl text-center font-semibold text-gray-700">
            Thanks for buying with us!!
          </p>
          <p className="font-thin text-base">Check your e-mail for more details.</p>
        </div>
        <div>
          <Link href="/">
            <button className="text-center uppercase font-semibold bg-green-500 text-white px-8 py-6 mt-12 rounded ">
              Continue buying here
            </button>
          </Link>
        </div>
      </div>
    </DefaultLayout>
  );
}
