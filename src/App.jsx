import { useEffect, useMemo, useState } from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";

const API = import.meta.env.VITE_BACKEND_URL || "";

export default function App() {
  const [cart, setCart] = useState({ cart_id: "guest", items: [] });

  // Load cart from backend
  useEffect(() => {
    async function loadCart() {
      try {
        const res = await fetch(`${API}/api/cart/${cart.cart_id}`);
        const data = await res.json();
        setCart(data);
      } catch (e) {
        // ignore
      }
    }
    loadCart();
  }, []);

  const cartCount = useMemo(() => cart.items?.reduce((sum, i) => sum + i.quantity, 0) || 0, [cart]);

  async function addToCart(product) {
    const size = (product.sizes && product.sizes[0]) || "M";
    const res = await fetch(`${API}/api/cart/${cart.cart_id}/items`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ product_id: product.id, size, quantity: 1 })
    });
    if (res.ok) {
      const data = await res.json();
      setCart(data);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-slate-100">
      <Header cartCount={cartCount} />
      <Hero />
      <ProductGrid onAdd={addToCart} />

      <footer id="about" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-3 gap-8 border-t border-white/10 pt-10">
          <div>
            <h4 className="font-bold text-white mb-2">About</h4>
            <p className="text-slate-300/80 text-sm">We design thoughtful essentials blending comfort, durability, and minimal style.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2">Customer Care</h4>
            <ul className="text-slate-300/80 text-sm space-y-1">
              <li>Shipping & Returns</li>
              <li>Size Guide</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2">Newsletter</h4>
            <p className="text-slate-300/80 text-sm mb-2">Be first to know about drops and offers.</p>
            <div className="flex gap-2">
              <input placeholder="Your email" className="flex-1 bg-slate-800/60 border border-white/10 rounded-lg px-3 py-2 text-sm placeholder:text-slate-400" />
              <button className="px-3 py-2 rounded-lg bg-white text-slate-900 text-sm font-semibold">Sign up</button>
            </div>
          </div>
        </div>
        <p className="text-xs text-slate-400 mt-8">© {new Date().getFullYear()} Flames Co. All rights reserved.</p>
      </footer>
    </div>
  );
}
