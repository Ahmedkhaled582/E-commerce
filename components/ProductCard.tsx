"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";

export default function ProductCard({ product }: any) {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative p-4 rounded-2xl bg-white dark:bg-zinc-900 shadow border shadow-md hover:shadow-2xl transition"
    >
      {/* image */}
      <div className="overflow-hidden rounded-xl">
        <img
          src={product.images?product.images:product.image}
          className="h-40 mx-auto group-hover:scale-110 transition duration-300"
        />
      </div>

      {/* content */}
      <h2 className="font-semibold mt-3 line-clamp-1">
        {product.title}
      </h2>

      <p className="text-indigo-600 font-bold text-lg mt-1">
        ${product.price}
      </p>

      {/* actions */}
      <div className="flex justify-between items-center mt-3 relative z-30">
        <Link
          href={`/products/${product.id}`}
          className="text-sm text-gray-500 hover:text-black dark:hover:text-white"
        >
          Details →
        </Link>

        <button
          onClick={() => addToCart(product)}
          className="px-3 py-1 text-sm bg-indigo-600 text-white rounded-lg hover:scale-105 transition hover:cursor-pointer"
        >
          Add
        </button>
      </div>

      {/* glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-indigo-500/10 to-purple-500/10"></div>
    </motion.div>
  );
}