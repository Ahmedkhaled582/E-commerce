import { getProductsByCategory } from "@/lib/api";
import ProductCard from "@/components/ProductCard";

export default async function CategoryPage({ params }: any) {
  const { name } = await params;

  const {products} = await getProductsByCategory(name);
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {name}
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p: any) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}