import { MotionDiv } from "@/components/MotionElements/MotionDiv";
import { MotionH3 } from "@/components/MotionElements/MotionH3";
import { MotionP } from "@/components/MotionElements/MotionP";
import Image from "next/image";

export default async function ProductDetails({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.slug}`);
  const product = await res.json();

  console.log("product", product);

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
    <div className="relative max-w-7xl mx-auto bg-[#0F1117] sm:p-16 py-16 px-8 grid lg:grid-cols-2 grid-cols-1 gap-28 lg:h-[100vh]">
      <MotionDiv
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="flex justify-center items-center text-center w-full bg-white rounded"
      >
        <Image
          src={product.image}
          width={300}
          height={200}
          alt={product.title}
          objectFit="cover"
        />
      </MotionDiv>
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
      </MotionDiv>
    </div>
  );
}
