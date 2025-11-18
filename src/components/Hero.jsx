import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.25),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.25),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(251,191,36,0.18),transparent_35%)]"/>
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-12 sm:pt-28 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 text-white px-3 py-1 text-xs mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"/> Now Live
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
              Elevate Your Everyday
            </h1>
            <p className="mt-5 text-lg text-slate-300 max-w-xl">
              Minimal essentials for people who love quality. Ethically made, tailored fits, premium fabrics.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#shop" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:shadow-lg hover:shadow-sky-500/20 transition">Shop New Arrivals</a>
              <a href="#about" className="px-5 py-3 rounded-xl bg-slate-800/60 border border-white/10 text-white hover:bg-slate-800 transition">About the Brand</a>
            </div>
          </div>
          <div className={`relative lg:h-[520px] h-72 rounded-3xl overflow-hidden border border-white/10 bg-slate-800/40 ${mounted ? 'shadow-[0_0_0_1px_rgba(255,255,255,0.06)]' : ''}`}>
            <img
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop"
              alt="Lifestyle apparel"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
