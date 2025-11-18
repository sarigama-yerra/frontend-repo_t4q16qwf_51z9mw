export default function ProductCard({ product, onAdd }) {
  const firstImage = (product.images && product.images[0]) ||
    "https://images.unsplash.com/photo-1520975922284-33f8a9155a97?q=80&w=1200&auto=format&fit=crop";

  return (
    <div className="group bg-slate-800/40 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition">
      <div className="aspect-[4/5] overflow-hidden bg-slate-900">
        <img src={firstImage} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-white font-semibold line-clamp-1">{product.title}</h3>
          <span className="text-white/90 font-bold">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-slate-300/80 text-sm line-clamp-2 mt-1">{product.description}</p>
        <div className="mt-4 flex items-center gap-2">
          <select className="bg-slate-900 text-white border border-white/10 rounded-lg px-2 py-1 text-sm">
            {(product.sizes || ["S","M","L"]).map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <button onClick={() => onAdd(product)} className="flex-1 px-3 py-2 rounded-lg bg-white text-slate-900 text-sm font-semibold hover:bg-slate-200 transition">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
