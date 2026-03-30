
export default function Footer() {
  return (
    <footer className="bg-[#0f1111] text-gray-400">
      
      <div className="max-w-7xl mx-auto px-6">


        <div className="grid md:grid-cols-4 gap-10 py-12 border-b border-gray-800">

          <div>
            <h1 className="text-2xl font-extrabold text-white mb-4">
              E-Shop
            </h1>
            <p className="text-sm leading-relaxed">
              A modern e-commerce platform delivering premium experience,
              fast performance, and beautiful UI.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition cursor-pointer">Home</li>
              <li className="hover:text-white transition cursor-pointer">Products</li>
              <li className="hover:text-white transition cursor-pointer">Cart</li>
              <li className="hover:text-white transition cursor-pointer">About</li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition cursor-pointer">Help Center</li>
              <li className="hover:text-white transition cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white transition cursor-pointer">Terms</li>
              <li className="hover:text-white transition cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>

            <div className="flex gap-4 text-2xl">
              <span className="hover:scale-110 transition cursor-pointer">🌐</span>
              <span className="hover:scale-110 transition cursor-pointer">📘</span>
              <span className="hover:scale-110 transition cursor-pointer">📸</span>
              <span className="hover:scale-110 transition cursor-pointer">🐦</span>
            </div>

            <p className="mt-4 text-sm">
              Stay connected with us on social platforms.
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 text-sm text-gray-500">
          <p>© 2026 E-Shop. All rights reserved.</p>

          <div className="flex gap-4 mt-2 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy</span>
            <span className="hover:text-white cursor-pointer">Terms</span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  );
}