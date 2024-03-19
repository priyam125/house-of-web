import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { MotionSection } from "@/components/MotionSection";
import { MotionDiv } from "@/components/MotionDiv";

export default async function Home() {
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
    <main className="sm:p-16 py-16 px-4 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Products</h2>

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
    </main>
  );
}
