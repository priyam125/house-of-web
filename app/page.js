import ProductList from "@/components/Product/ProductList";

export default function Home() {
  return (
    <main className="sm:p-16 py-16 px-4 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Products</h2>
      <ProductList />
    </main>
  );
}
