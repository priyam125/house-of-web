export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data[0].title}
    </main>
  );
}
