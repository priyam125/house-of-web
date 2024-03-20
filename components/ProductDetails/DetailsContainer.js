"use client";

import Image from "next/image";
import { MotionDiv } from "../MotionElements/MotionDiv";
import { MotionH3 } from "../MotionElements/MotionH3";
import { MotionP } from "../MotionElements/MotionP";
import { useEffect, useState } from "react";

export default function DetailsContainer({ product }) {
  const [cart, setCart] = useState(() => {
    // Retrieve cart from local storage or initialize an empty array
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [addedToCart, setAddedToCart] = useState(false);
  useEffect(() => {
    const isProductInCart = cart.some((item) => item.id === product.id);
    setAddedToCart(isProductInCart);
  }, [cart, product]);

  const addToCart = () => {
    // Add the current product to the cart
    setCart([...cart, product]);

    // Save the updated cart to local storage
    localStorage.setItem("cart", JSON.stringify([...cart, product]));
    setAddedToCart(true);
  };
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Adjust this value to control the stagger delay
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
        <button>Added to Cart</button>
      ) : (
        <button onClick={addToCart}>Add to Cart</button>
      )}
    </MotionDiv>
  );
}
