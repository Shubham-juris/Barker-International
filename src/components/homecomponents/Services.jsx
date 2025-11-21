import React from "react";

export const Services = () => {
  const services = [
    {
      id: 1,
      title: "Long-Haul Trucking",
      desc: "Safe long-distance freight across North America.",
    },
    {
      id: 2,
      title: "Regional Distribution",
      desc: "Flexible regional lanes with fast delivery.",
    },
    {
      id: 3,
      title: "Logistics & Warehousing",
      desc: "Integrated warehousing + supply chain solutions.",
    },
  ];
  return (
    <section id="services" className="mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-semibold">What we offer</h3>
        <p className="mt-2 text-slate-600">
          Complete trucking & logistics services.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.id}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="text-lg font-semibold">{s.title}</div>
              <p className="mt-2 text-slate-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
