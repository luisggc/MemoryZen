import Image from "next/image";

export default function ProductCard({ name, description, price, image }) {
  return (
    <div className="w-96 bg-transparent relative shadow-sm rounded-bl-3xl rounded-tr-3xl cursor-pointer">
      <Image
        className="object-cover rounded-bl-3xl rounded-tr-3xl  w-full h-full transition duration-300 transform ease-in hover:opacity-70"
        src={image}
        height={500}
        width={500}
        layout="responsive"
      />
      <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-60 backdrop-blur-lg px-8 pt-4 pb-5 flex flex-col rounded-tr-3xl rounded-bl-3xl ">
        <div className="flex justify-start items-center w-full">
          <div className="mr-3">
            <p className="text-md font-semibold">{name}</p>
          </div>
          <div className="bg-green-300 rounded-full px-2">
            <p className="text-white text-xs">{price}</p>
          </div>
        </div>
        <div className="">
          <p className="text-xs font-extralight">{description}</p>
        </div>
      </div>
    </div>
  );
}
