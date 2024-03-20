import Image from "next/image";
import { MotionDiv } from "../MotionElements/MotionDiv";

export default function ImageContainer({ product }) {
  return (
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
  );
}
