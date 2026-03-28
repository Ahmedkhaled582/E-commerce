"use client";

import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ product }: any) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-semibold hover:scale-105 transition shadow-lg"
    >
      🛒 Add to Cart
    </button>
  );
}