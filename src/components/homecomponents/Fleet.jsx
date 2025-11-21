import React from "react"

export const Fleet = () => {
const fleet = [
{ id: 1, name: 'Volvo FH', img: 'https://images.unsplash.com/photo-1519331379826-5e2069f8c9a8?w=1200' },
{ id: 2, name: 'Freightliner Cascadia', img: 'https://images.unsplash.com/photo-1520975698516-9e0b5b8d0f09?w=1200' },
{ id: 3, name: 'Kenworth T680', img: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200' }
]
return (
<section id="fleet" className="mt-16 bg-slate-50 py-12">
<div className="max-w-7xl mx-auto px-6">
<h3 className="text-2xl font-semibold">Our Fleet</h3>
<p className="mt-2 text-slate-600">Modern trucks operated by licensed professionals.</p>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
{fleet.map(v => (
<div key={v.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
<img src={v.img} className="w-full h-44 object-cover" />
<div className="p-4">
<div className="font-semibold">{v.name}</div>
</div>
</div>
))}
</div>
</div>
</section>
)
}