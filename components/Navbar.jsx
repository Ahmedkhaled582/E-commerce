"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkToggle from "./DarkToggle";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const path = usePathname();
  const {cart} = useCart()

  return (
    <>

      {/* ── Nav ── */}
      <nav className="px-6 md:px-30 py-5 h-18 fixed z-100 bg-white  dark:bg-zinc-900 w-full border-b border-[#E0DDD6]">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight">E-shop</Link>
        <div className="hidden md:flex gap-8 text-sm tracking-widest uppercase font-['DM_Sans',sans-serif] text-[#555]">
          <Link href="/" className={path === "/" ? "text-indigo-500" : ""}>Home</Link>
          <Link href="/products" className={path.includes("products") ? "text-indigo-500" : ""}>Products</Link>
          <Link href="/about" className={path.includes("about")?"text-indigo-500":""}>About</Link>
          <Link href="/contact" className={path.includes("contact")?"text-indigo-500":""}>Contact</Link>
        </div>
        <div className="flex items-center gap-5 text-[#555]">
        <Link href="/cart" className="font-bold relative">
                  <svg className="w-5 h-5 hover:text-white cursor-pointer transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13M7 13L5.4 5M10 21a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm6 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"/></svg>

        <div className="absolute top-[-8] right-[-11] bg-black text-white text-[9px] px-1 rounded-full">
       {cart.length}
       </div>
       </Link>

     <DarkToggle />
          </div>
      </div>
      </nav>
      </>
  );
}