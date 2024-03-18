import Image from "next/image";

export default async function ProductDetails({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.slug}`);
  const product = await res.json();

  console.log("product", product);

  return (
    <div className="max-w-7xl mx-auto bg-[#0F1117] h-[100vh] sm:p-16 py-16 px-8 grid grid-cols-2 gap-10">
      <div className="flex justify-center items-center text-center">
        <Image src={product.image} key={product.id} fill alt={product.title} />
      </div>
      <div className="bg-blue-400">Details</div>
    </div>
  );
}
