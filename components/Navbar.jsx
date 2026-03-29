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
     {/* ── Top Banner ── */}
      <div className="bg-[#1A1A1A] text-[#F7F5F0] text-center py-2.5 text-xs tracking-[0.2em] uppercase font-['DM_Sans',sans-serif]">
        Free shipping on orders over $75 &nbsp;·&nbsp; New arrivals every Monday
      </div>

      {/* ── Nav strip ── */}
      <nav className="px-8 md:px-16 py-5 flex items-center justify-between border-b border-[#E0DDD6]">
        <span className="text-2xl font-bold tracking-tight">E-shop</span>
        <div className="hidden md:flex gap-8 text-sm tracking-widest uppercase font-['DM_Sans',sans-serif] text-[#555]">
                  <Link href="/" className={path === "/" ? "text-indigo-500" : ""}>Home</Link>
          <Link href="/products" className={path.includes("products") ? "text-indigo-500" : ""}>Products</Link>
          <Link href="/about" className={path.includes("about")?"text-indigo-500":""}>About</Link>
          <Link href="/contact" className={path.includes("contact")?"text-indigo-500":""}>Contact</Link>
        </div>
        <div className="flex items-center gap-5 text-[#555]">
        <Link href="/cart" className="font-bold relative">
                  <svg className="w-5 h-5 hover:text-black cursor-pointer transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13M7 13L5.4 5M10 21a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm6 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"/></svg>

        <div className="absolute top-[-8] right-[-11] bg-black text-white text-[9px] px-1 rounded-full">
       {cart.length}
       </div>
       </Link>

     <DarkToggle />
          </div>
      </nav>
      </>


//     <nav className="sticky px-30 top-0 z-50 bg-[#131921] text-white px-6 py-3 flex justify-between items-center">
      
//       <h1 className="text-2xl font-bold cursor-pointer">
//           E-Shop
//         </h1>

//       <div className="flex gap-6 items-center">
//         <Link href="/" className={path === "/" ? "text-indigo-500" : ""}>
//           Home
//         </Link>

//         <Link
//           href="/products"
//           className={path.includes("products") ? "text-indigo-500" : ""}
//         >
//           Products
//         </Link>

// <Link
// href="/about"
// className={path.includes("about")?"text-indigo-500":""}
// >
// About
// </Link>
// <Link
// href="/contact"
// className={path.includes("contact")?"text-indigo-500":""}
// >
// Contact
// </Link>
// <Link href="/cart" className="font-bold">
//             🛒 Cart ({cart.length})
//           </Link>

//         <DarkToggle />
//       </div>
//     </nav>
  );
}