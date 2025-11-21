import React from "react";
import { ShieldCheck, Headphones, Users, Truck, Timer, BarChart3 } from "lucide-react";

export function WhyChooseUs() {
  const points = [
    {
      id: 1,
      title: "Reliable & On-Time Delivery",
      desc:
        "We operate with strict scheduling, real-time tracking, and GPS-guided routing to ensure freight arrives safely and on time—every time.",
      icon: <Timer className="w-12 h-12 text-blue-600" />,
    },
    {
      id: 2,
      title: "24/7 Customer Support",
      desc:
        "Our support and dispatch team is available around the clock to provide updates, handle requests, and assist with live shipment tracking.",
      icon: <Headphones className="w-12 h-12 text-green-600" />,
    },
    {
      id: 3,
      title: "Experienced Drivers",
      desc:
        "Our professional drivers are trained, certified, and experienced in handling long-haul, heavy-duty, and time-sensitive commercial freight.",
      icon: <Users className="w-12 h-12 text-orange-600" />,
    },
    {
      id: 4,
      title: "Modern & Well-Maintained Fleet",
      desc:
        "We operate a fleet of advanced trucks equipped with safety technology, fuel-efficient engines, and high-performance hauling capability.",
      icon: <Truck className="w-12 h-12 text-red-600" />,
    },
    {
      id: 5,
      title: "Safety-First Operations",
      desc:
        "From vehicle inspections to load security, we follow strict safety standards to protect your freight and ensure risk-free transport.",
      icon: <ShieldCheck className="w-12 h-12 text-purple-600" />,
    },
    {
      id: 6,
      title: "Optimized Logistics Planning",
      desc:
        "By using route optimization, digital logs, and efficient dispatch coordination, we reduce delays, fuel costs, and operational downtime.",
      icon: <BarChart3 className="w-12 h-12 text-teal-600" />,
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900">Why Choose Us</h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Professional trucking and logistics built on reliability, safety, and consistent performance.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {points.map((p) => (
            <div
              key={p.id}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition duration-300 text-center group"
            >
              <div className="flex justify-center mb-5">{p.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">
                {p.title}
              </h3>
              <p className="mt-2 text-gray-600 leading-relaxed text-sm">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
