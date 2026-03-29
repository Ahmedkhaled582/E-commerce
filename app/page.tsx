import { getCategories, getProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";

export default async function Home() {
  const {products} = await getProducts();
  const categories = await getCategories();

  return (
    <div className="py-6 px-30">
      {/* Hero */}
      <div className="bg-gradient-to-r from-black to-gray-800 text-white p-10 rounded-2xl mb-8">
        <h1 className="text-4xl font-bold mb-2">
          Discover Amazing Products
        </h1>
        <p className="text-gray-300">
          Best prices. Clean UI. Smooth experience.
        </p>
      </div>





          {/* ── Categories ── */}
        <section id="categories" className="mb-16">
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
            {categories.slice(0, 8).map((cat: string) => (
              <CategoryCard key={cat.slug} name={cat} />
            ))}
          </div>
        </section>

        {/* ── Featured Products ── */}
        <section id="products" className="mb-16">
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
        <section className="mb-16 rounded-3xl overflow-hidden bg-[#1A1A1A] text-white relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] to-[#2C2416] opacity-100" />
          <div
            className="absolute right-0 top-0 bottom-0 w-1/2 opacity-5"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, #C9B99A 0, #C9B99A 1px, transparent 0, transparent 50%)`,
              backgroundSize: "20px 20px",
            }}
          />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14">
            <div className="max-w-lg">
              <span className="inline-block bg-[#C9B99A] text-[#1A1A1A] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 font-['DM_Sans',sans-serif]">
                Limited Time
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
                Up to <em className="italic text-[#C9B99A]">40% Off</em><br />This Week Only
              </h2>
              <p className="text-[#AAA] font-['DM_Sans',sans-serif] leading-relaxed">
                Don't miss out on our biggest sale of the season. Hundreds of styles, one incredible price.
              </p>
            </div>
            <a
              href="#"
              className="shrink-0 bg-[#C9B99A] text-[#1A1A1A] px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase font-['DM_Sans',sans-serif] hover:bg-white transition-colors duration-300 shadow-lg"
            >
              Shop the Sale
            </a>
          </div>
        </section>

        {/* ── Newsletter ── */}
        <section className="" >
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
      </div>
  );
}