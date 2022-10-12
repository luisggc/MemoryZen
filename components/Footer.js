import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center w-full mt-12 bg-gray-100 p-5 gap-4">
        <div className="flex space-x-4 items-center">
          <Image height={30} width={30} src="/images/logo.png" alt="logo" />
          <p className="text-lg font-medium">MemoryZen</p>
        </div>
        <div className="flex flex-col md:flex-row md:gap-6 items-center justify-center">
          <Link href="/cart">
            <a className="text-green-400 font-semibold text-center w-full whitespace-nowrap">Cart</a>
          </Link>
          <Link href="/contact-us">
            <a className="text-green-400 font-semibold text-center w-full whitespace-nowrap">Contact us</a>
          </Link>
          <Link href="/about-us">
            <a className="text-green-400 font-semibold text-center w-full whitespace-nowrap">About us</a>
          </Link>
          <Link href="/shop">
            <a className="text-green-400 font-semibold text-center w-full whitespace-nowrap">Shop</a>
          </Link>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="text-sm font-light text-gray-500">
            copyright © {new Date().getFullYear()} MemoryZen all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
