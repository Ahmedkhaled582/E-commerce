import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { CartProvider } from "@/context/CartContext";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <div className="pt-18">
         {children}
          </div>
          <Footer/>
        </CartProvider>
      </body>
    </html>
  );
}