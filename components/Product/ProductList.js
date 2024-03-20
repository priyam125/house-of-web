import { MotionDiv } from "../MotionElements/MotionDiv";
import { MotionSection } from "../MotionElements/MotionSection";
import ProductCard from "./ProductCard";

export default async function ProductList() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <MotionSection
      className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {data.map((item, index) => (
        <MotionDiv key={index} variants={itemVariants}>
          <ProductCard product={item} />
        </MotionDiv>
      ))}
    </MotionSection>
  );
}
