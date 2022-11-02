import React from "react";
import Image from "next/image";

const categories = [
  {
    name: "Essential oils",
    src: "/images/product-category-01.png",
  },
  {
    name: "Natural cosmetics",
    src: "/images/product-category-02.png",
  },
  {
    name: "Diffusers",
    src: "/images/product-category-03.png",
    secondary: true,
  },
  {
    name: "Aromatherapy",
    src: "/images/product-category-04.png",
  },
];
export default function ProductCategories() {
  return (
    <div className="flex mt-3 px-24 space-x-4  flex-wrap justify-center items-center">
      {categories.map((category) => (
        <ProductCategory key={category.name} {...category} />
      ))}
    </div>
  );
}

function ProductCategory({ name, src, secondary = false }) {
  const isSecondary = secondary === true ? true : false;
  const backColor = isSecondary ? "bg-green-400" : "bg-gray-50";
  const textColor = isSecondary ? "text-white" : "text-green-400";
  const backColorHover = isSecondary ? "hover:bg-gray-50" : "hover:bg-green-400";
  const textColorHover = isSecondary ? "group-hover:text-green-400" : "group-hover:text-white";

  console.log(textColorHover, backColorHover)
  return (
    <div
      className={`${backColor} ${backColorHover} group items-center justify-center p-12  rounded-tr-3xl rounded-bl-3xl drop-shadow-lg mt-6`}
    >
      <div className="w-full flex justify-center mb-4">
        <Image src={src} alt={name} height={80} width={80} />
      </div>
      <div className="w-32 flex items-center justify-center">
        <p
          className={`${textColor} ${textColorHover} text-xl font-semibold text-center whitespace-nowrap`}
        >
          {name}
        </p>
      </div>
    </div>
  );
}
