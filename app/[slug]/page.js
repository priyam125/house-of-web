import DetailsContainer from "@/components/ProductDetails/DetailsContainer";
import ImageContainer from "@/components/ProductDetails/ImageContainer";

export default async function ProductDetails({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.slug}`);
  const product = await res.json();

  return (
    <div className="relative max-w-7xl mx-auto bg-[#0F1117] sm:p-16 py-16 px-8 grid lg:grid-cols-2 grid-cols-1 gap-28 lg:h-[100vh]">
      <ImageContainer product={product} />
      <DetailsContainer product={product} />
    </div>
  );
}
