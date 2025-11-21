import React from "react";

export function HowWeWork() {
const steps = [
{
title: "Request & Planning",
desc: "We analyze shipment needs & plan routes.",
},
{
title: "Dispatch & Transport",
desc: "Cargo loaded, monitored, and moved safely.",
},
{
title: "Tracking & Updates",
desc: "Real‑time shipment status throughout.",
},
{
title: "Delivery & Confirmation",
desc: "On‑time drop‑off with proof of delivery.",
},
];


return (
<section className="bg-gray-100 py-16 px-6">
<h2 className="text-3xl font-bold text-center mb-10">How We Work</h2>
<div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
{steps.map((step, i) => (
<div
key={i}
className="bg-white p-6 rounded-2xl shadow text-center border-t-4 border-gray-900"
>
<h3 className="text-xl font-semibold mb-2">{step.title}</h3>
<p className="text-gray-700 text-sm">{step.desc}</p>
</div>
))}
</div>
</section>
);
}