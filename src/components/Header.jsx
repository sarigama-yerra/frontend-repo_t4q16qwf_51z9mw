export default function Header({ cartCount }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white font-extrabold tracking-tight text-xl">
          <span className="inline-block w-6 h-6 rounded bg-gradient-to-br from-sky-400 to-indigo-500"/> FLAMES
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-slate-200">
          <a href="#shop" className="hover:text-white">Shop</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <button className="relative px-3 py-1.5 rounded-lg bg-slate-800/60 border border-white/10 text-white hover:bg-slate-800">
          Cart
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 text-[10px] px-1.5 py-0.5 rounded-full bg-white text-slate-900 font-bold">{cartCount}</span>
          )}
        </button>
      </div>
    </header>
  );
}
