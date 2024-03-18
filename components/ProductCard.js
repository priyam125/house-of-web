import Image from "next/image";

function ProductCard({ product, index }) {
  console.log(product);
  return (
    <div className="max-w-sm rounded relative w-full">
      <div className="relative w-full h-[37vh]">
        <Image
          key={index}
          src={product.image}
          alt={product.title}
          fill
          className="rounded-xl"
        />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-4">
          <h2 className="font-bold text-white line-clamp-1 w-full">
            {product.title}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-xs font-bold capitalize">
              {product.category}
              {/* {product.rating.count} */}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-1 items-center">
            <Image
              src="./dollar-sign.svg"
              alt="episodes"
              width={20}
              height={20}
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
    </div>
  );
}

export default ProductCard;
