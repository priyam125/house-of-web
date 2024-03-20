"use client";

import Link from "next/link";
import logoImg from "@/public/logo.svg";
import CartIcon from "@/public/cart-icon.svg";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { useContext } from "react";
import { CartContext } from "@/app/(context)/CartContext";

const poppins = Poppins({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
});

export default function MainHeader() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <header
        className={`${poppins.className} flex justify-between bg-[#5341df] items-center py-8 px-4 md:py-4 md:px-[4%] max-w-[84rem] mx-auto`}
      >
        <Link
          className="flex items-center justify-center gap-4 no-underline text-[#ddd6cb] font-bold  text-2xl uppercase"
          href="/"
        >
          <Image
            className="object-contain drop-shadow-3xl"
            src={logoImg}
            alt="Foodverse"
            width={20}
            height={20}
            priority
          />
          <h3 className="text-[#e5fa78]">HOW3</h3>
        </Link>

        <div className="flex relative cursor-pointer">
          <Image alt="cart" src={CartIcon} width={25} height={25} />
          <span className="absolute font-bold top-3 -right-1 z-10 text-[#e5fa78] text-sm">
            {cart.length}
          </span>
        </div>
      </header>
    </>
  );
}
