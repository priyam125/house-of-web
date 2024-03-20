"use client";

import Image from "next/image";
import { MotionDiv } from "../MotionElements/MotionDiv";
import { MotionH3 } from "../MotionElements/MotionH3";
import { MotionP } from "../MotionElements/MotionP";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/app/(context)/CartContext";

export default function DetailsContainer({ product }) {
  const [addedToCart, setAddedToCart] = useState(false);
  const { cart, setCart } = useContext(CartContext);

  // Check if product is already in cart
  useEffect(() => {
    const found = cart.some((item) => item.id === product.id);
    console.log("found", found);
    setAddedToCart(found);
  }, [cart, product.id]);

  const addToCart = () => {
    setCart([...cart, product]);

    setAddedToCart(true);
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <MotionDiv
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col gap-4"
    >
      <MotionH3 variants={itemVariants}>{product.title}</MotionH3>
      <MotionDiv variants={itemVariants} className="flex items-center gap-4">
        <div className="flex flex-row gap-1 items-center">
          <Image
            src="./dollar-sign.svg"
            alt="episodes"
            width={16}
            height={20}
            className="object-contain"
          />
          <p className="text-lg text-white">{product.price}</p>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <Image
            src="/star-sign.svg"
            alt="star"
            width={18}
            height={18}
            className="object-contain"
          />
          <p className="text-base font-bold text-[#FFAD49]">
            {product.rating.rate}
          </p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Image
            src="/reviews-sign.svg"
            alt="star"
            width={20}
            height={20}
            className="object-contain"
          />
          <p className="text-base font-bold text-gray-400">
            {product.rating.count}
          </p>
        </div>
        <div className="py-1 px-2 bg-[#161921] rounded-sm">
          <p className="text-white text-xs font-bold capitalize">
            {product.category}
          </p>
        </div>
      </MotionDiv>

      <MotionP variants={descriptionVariants}>{product.description}</MotionP>
      {addedToCart ? (
        <button className="bg-[#5341df] text-gray-900 w-40 p-2 rounded-full">
          Added to Cart
        </button>
      ) : (
        <button
          className="w-40 p-2 rounded-full border border-[#5341df] hover:bg-[#5341df]"
          onClick={addToCart}
        >
          Add to Cart
        </button>
      )}
    </MotionDiv>
  );
}
