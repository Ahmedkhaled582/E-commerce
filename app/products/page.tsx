"use client";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const filtered = products.filter((p: any) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <input
        placeholder="Search..."
        className="border p-2 mb-4 w-full"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filtered.map((p: any) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}