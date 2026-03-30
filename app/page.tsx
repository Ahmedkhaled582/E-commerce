import { getCategories, getProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import Link from "next/link";

export default async function Home() {
  const {products} = await getProducts();
  const categories = await getCategories();

  return (
<>


      {/* Hero */}

      <section className="hero relative min-h-screen flex items-center overflow-hidden bg-[#F8F6F1] md:px-28 px-6">
 
        <div className="relative z-10 max-w-xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-7 h-px bg-white" />
            <span className="text-[11px] tracking-[0.22em] uppercase font-semibold text-white font-['DM_Sans',sans-serif]">
              Summer Sale 2025
            </span>
          </div>
 
          <h1
            className="font-['Playfair_Display',serif] text-[#0D0D12] leading-[1.06] tracking-tight mb-6"
            style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", fontWeight: 900 }}
          >
            Get{" "}
            <em className="italic text-white not-italic" style={{ fontStyle: "italic" }}>
              50% Off
            </em>
            <br />
            All Electronics
          </h1>
 
          <p className="text-[#6B6B7A] font-['DM_Sans',sans-serif] text-[1.05rem] leading-relaxed mb-10 max-w-[360px]">
            Premium gadgets &amp; instruments at extraordinary prices — for a limited time only.
          </p>
 
          <div className="flex items-center gap-5">
            <Link
              href="#products"
              className="inline-block bg-[#0D0D12] text-[#F8F6F1] text-[0.78rem] font-semibold tracking-[0.1em] uppercase font-['DM_Sans',sans-serif] px-9 py-4 rounded-full transition-all duration-300 hover:bg-indigo-500 hover:text-white"
            >
              Shop Now
            </Link>
            <Link
              href="#categories"
              className="text-[0.78rem] tracking-[0.08em] uppercase font-medium text-[#6B6B7A] font-['DM_Sans',sans-serif] hover:text-indigo-500 transition-colors duration-200 flex items-center gap-1 group"
            >
              Browse Categories
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>  
 
        </div>
      </section>





          {/* ── Categories ── */}
        <section id="categories" className="my-16 md:px-30">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-[#888] font-['DM_Sans',sans-serif] mb-1">Browse</p>
              <h2 className="text-4xl font-bold tracking-tight">Shop by Category</h2>
            </div>
            <a href="#" className="text-sm tracking-widest uppercase font-['DM_Sans',sans-serif] text-[#555] hover:text-black transition-colors underline underline-offset-4">
              View All
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.slice(0, 8).map((cat: any) => (
              <CategoryCard key={cat.slug} name={cat} />
            ))}
          </div>
        </section>

        {/* ── Featured Products ── */}
        <section id="products" className="mb-16 md:px-30">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-[#888] font-['DM_Sans',sans-serif] mb-1">Handpicked</p>
              <h2 className="text-4xl font-bold tracking-tight">Featured Products</h2>
            </div>
            <a href="#" className="text-sm tracking-widest uppercase font-['DM_Sans',sans-serif] text-[#555] hover:text-black transition-colors underline underline-offset-4">
              See All
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.slice(0, 8).map((p: any) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>


    

        {/* ── Promo Banner ── */}
        <section className="mb-16 overflow-hidden bg-gradient-to-r from-black to-gray-800 text-white relative md:px-20">
          <div className="absolute inset-0 opacity-100" />
          <div
            className="absolute right-0 top-0 bottom-0 w-1/2 opacity-5"
          />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14">
            <div className="max-w-lg">
              <span className="inline-block bg-[#AAA] text-[#1A1A1A] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 font-['DM_Sans',sans-serif]">
                Limited Time
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
                Up to <em className="italic text-[#AAA]">40% Off</em><br />This Week Only
              </h2>
              <p className="text-[#AAA] font-['DM_Sans',sans-serif] leading-relaxed">
                Don't miss out on our biggest sale of the season. Hundreds of styles, one incredible price.
              </p>
            </div>
            <a
              href="#"
              className="shrink-0 bg-[#AAA] text-[#1A1A1A] px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase font-['DM_Sans',sans-serif] hover:bg-white transition-colors duration-300 shadow-lg"
            >
              Shop the Sale
            </a>
          </div>
        </section>

        {/* ── Newsletter ── */}
        <section className="mb-20" >
          <div className="bg-white border border-[#E0DDD6] rounded-3xl p-10 md:p-14 text-center max-w-2xl mx-auto shadow-sm">
            <p className="text-xs tracking-[0.25em] uppercase text-[#888] font-['DM_Sans',sans-serif] mb-2">Stay in the loop</p>
            <h2 className="text-4xl font-bold mb-3 tracking-tight">Join Our Newsletter</h2>
            <p className="text-[#666] font-['DM_Sans',sans-serif] mb-8 leading-relaxed">
              Get exclusive deals, new arrivals & curated picks delivered straight to your inbox.
            </p>

            <div className="flex rounded-full overflow-hidden border border-[#1A1A1A] shadow-md">
              <input
                type="email"
                placeholder="Your email address..."
                className="flex-1 px-6 py-4 text-sm font-['DM_Sans',sans-serif] text-[#1A1A1A] outline-none bg-transparent placeholder:text-[#AAA]"
              />
              <button className="shrink-0 bg-[#1A1A1A] text-white px-8 py-4 text-sm tracking-widest uppercase font-['DM_Sans',sans-serif] font-semibold hover:bg-[#333] transition-colors duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-[#AAA] text-xs mt-4 font-['DM_Sans',sans-serif]">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </section>
        </>
  );
}

