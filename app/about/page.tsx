export default function About() {
  return (
    <div className="bg-gray-50 dark:bg-black text-black dark:text-white">

      {/* 🔥 HERO */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white px-6 py-20 text-center">
        
        {/* glow */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/20 blur-3xl rounded-full"></div>

        <h1 className="text-5xl font-extrabold mb-4">
          We Build The Future of Shopping 🚀
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-gray-200">
          E-Shop is more than just an e-commerce platform — it’s a modern,
          fast, and beautifully designed shopping experience.
        </p>
      </div>

      {/* 💎 MISSION */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Our Mission 💡
          </h2>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            We aim to revolutionize online shopping by delivering high-quality
            products with a seamless user experience, fast performance,
            and modern UI design that users love.
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-10 rounded-3xl shadow-xl">
          <h3 className="text-xl font-bold mb-2">Why Choose Us?</h3>
          <ul className="space-y-2 text-gray-500">
            <li>⚡ Fast Performance</li>
            <li>💎 Clean UI</li>
            <li>🔒 Secure Experience</li>
            <li>🚀 Modern Tech Stack</li>
          </ul>
        </div>
      </div>

      {/* 🔥 FEATURES */}
      <div className="bg-white dark:bg-zinc-900 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          
          <h2 className="text-3xl font-bold mb-10">
            What Makes Us Special ✨
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 rounded-2xl shadow hover:shadow-2xl transition">
              <h3 className="text-xl font-bold mb-2">⚡ Speed</h3>
              <p>Optimized for blazing fast load times.</p>
            </div>

            <div className="p-6 rounded-2xl shadow hover:shadow-2xl transition">
              <h3 className="text-xl font-bold mb-2">🎨 Design</h3>
              <p>Beautiful UI that feels modern & premium.</p>
            </div>

            <div className="p-6 rounded-2xl shadow hover:shadow-2xl transition">
              <h3 className="text-xl font-bold mb-2">🛒 Experience</h3>
              <p>Smooth and intuitive shopping journey.</p>
            </div>

          </div>
        </div>
      </div>

      {/* 💣 STATS */}
      <div className="py-16 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
        
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">

          <div>
            <h2 className="text-3xl font-bold">10K+</h2>
            <p>Products</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">5K+</h2>
            <p>Customers</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">99%</h2>
            <p>Satisfaction</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">24/7</h2>
            <p>Support</p>
          </div>

        </div>
      </div>

      {/* 🚀 CTA */}
      <div className="py-20 text-center px-6">
        
        <h2 className="text-4xl font-extrabold mb-4">
          Ready to Start Shopping? 🛍️
        </h2>

        <p className="text-gray-500 mb-6">
          Discover amazing products with a modern experience.
        </p>

        <button className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-semibold hover:scale-105 transition shadow-lg">
          Explore Products
        </button>
      </div>

    </div>
  );
}