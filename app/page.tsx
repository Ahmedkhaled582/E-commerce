import { getCategories, getProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";

export default async function Home() {
  const {products} = await getProducts();
  const categories = await getCategories();

  return (
    <div className="p-6">
      {/* Hero */}
      <div className="bg-gradient-to-r from-black to-gray-800 text-white p-10 rounded-2xl mb-8">
        <h1 className="text-4xl font-bold mb-2">
          Discover Amazing Products
        </h1>
        <p className="text-gray-300">
          Best prices. Clean UI. Smooth experience.
        </p>
      </div>


            {/* 🔥 CATEGORIES */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.slice(0, 8).map((cat: string) => (
            <CategoryCard key={cat.slug} name={cat} />
          ))}
        </div>
      </div>

      {/* Products */}
      <h2 className="text-2xl font-bold mt-10 mb-4">Featured Products</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.slice(0, 8).map((p: any) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}