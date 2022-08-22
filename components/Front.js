import Image from "next/image";

export default function Front() {
  return (
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
        <Image src={"/images/product-home.png"} alt="product" height={300} width={300} />
      </div>
      <div className="w-64">
        <p className="text-center font-semibold text-6xl text-green-400">Pear kiwi & Mint</p>
      </div>
      <div className="w-full px-24">
        <p className="text-center font-semibold text-lg text-gray-400">
          They say that home is where the heart is. Perhaps that’s why a feeling of loss is so
          apparent when you are far from the ones you love.{" "}
        </p>
      </div>
    </div>
  );
}
