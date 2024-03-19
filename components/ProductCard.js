"use client";

import Image from "next/image";
import Link from "next/link";
import { MotionDiv } from "./MotionElements/MotionDiv";

function ProductCard({ product, index }) {
  console.log(product);
  return (
    <MotionDiv
      whileHover={{ scale: 1.2 }}
      transition={{ ease: "easeInOut" }}
      className="max-w-sm rounded relative w-full cursor-pointer shadow-2xl flex md:flex-col gap-4 md:gap-0"
    >
      <div className="relative w-full h-[30vh] max-w-[8rem] min-w-[8rem] md:max-w-full">
        <Image
          key={index}
          src={product.image}
          alt={product.title}
          fill
          sizes="(min-width: 768px) 100vw, 33vw"
          className="rounded-xl"
          priority
          objectFit="fill"
        />
      </div>
      <div className="md:py-4 flex flex-col gap-1">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-bold text-white line-clamp-1 w-full cursor-pointer text-sm">
            <Link href={`/${product.id}`}>{product.title}</Link>
          </p>
          <div className="py-1 px-2 bg-[#161921] rounded-sm hidden md:block">
            <p className="text-white text-xs font-bold capitalize line-clamp-1">
              {product.category}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-1 items-center">
            <Image
              src="./dollar-sign.svg"
              alt="episodes"
              width={16}
              height={16}
              className="object-contain"
            />
            <p className="text-base text-white font-bold">{product.price}</p>
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
        </div>
      </div>
    </MotionDiv>
  );
}

export default ProductCard;
