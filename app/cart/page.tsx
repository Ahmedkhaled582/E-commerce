"use client";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, total } = useCart();
  if (cart.length === 0) {
    return (
      <div className="h-[70vh] flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-2">🛒 Your cart is empty</h1>
        <p className="text-gray-500">Start adding some products</p>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 grid md:grid-cols-3 gap-8">
      
      {/* CART ITEMS */}
      <div className="md:col-span-2 space-y-4">
        {cart.map((item: any) => (
          <div
            key={item.id}
            className="flex gap-4 items-center p-4 rounded-2xl border shadow-sm hover:shadow-md transition bg-white dark:bg-zinc-900"
          >
            {/* image */}
            <div className="w-24 h-24 relative">
              <img
                src={item.images}
                alt={item.title}
                className="object-contain rounded-xl"
              />
            </div>

            {/* info */}
            <div className="flex-1">
              <h2 className="font-semibold line-clamp-1">
                {item.title}
              </h2>

              <p className="text-indigo-600 font-bold">
                ${item.price}
              </p>

              <p className="text-sm text-gray-500">
                Qty: {item.qty}
              </p>
            </div>

            {/* remove */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:scale-110 transition"
            >
              ❌
            </button>
          </div>
        ))}
      </div>

      {/* SUMMARY */}
      <div className="p-6 rounded-2xl border shadow-md bg-white dark:bg-zinc-900 h-fit">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>

        <div className="flex justify-between mb-2">
          <span>Items</span>
          <span>{cart.length}</span>
        </div>

        <div className="flex justify-between mb-4">
          <span>Total</span>
          <span className="font-bold text-indigo-600">
            ${total.toFixed(2)}
          </span>
        </div>

        <button className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-semibold hover:scale-105 transition">
          Checkout
        </button>
      </div>
    </div>
  );
}