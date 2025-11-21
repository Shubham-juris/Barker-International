import React from "react";

export function ServiceCards() {
  const services = [
    {
      title: "Full Truckload (FTL)",
      desc: "Fast and secure direct freight delivery.",
    },
    {
      title: "Less Than Truckload (LTL)",
      desc: "Affordable option for small shipments.",
    },
    {
      title: "Refrigerated Transport",
      desc: "Temperature-controlled delivery service.",
    },
    {
      title: "Cross-Border Shipping",
      desc: "USA–Canada compliant transportation.",
    },
    {
      title: "Expedited Delivery",
      desc: "Urgent and priority shipments.",
    },
    {
      title: "Hazmat Transport",
      desc: "Certified hazardous goods handling.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-lg transition text-center"
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
