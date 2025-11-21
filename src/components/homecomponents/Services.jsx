import React from "react";
import { Truck, Route, Warehouse } from "lucide-react"; 
import img from "../../assets/home/img.jpg"
import img1 from "../../assets/home/img1.webp"
import img2 from "../../assets/home/img2.jpeg"

export const Services = () => {
  const services = [
    {
      id: 1,
      title: "Long-Haul Freight Transport",
      desc:
        "Reliable long-distance trucking designed for heavy loads, scheduled routes, and time-sensitive shipments. Our fleet is equipped for continuous operations with professional, licensed drivers.",
      icon: <Truck className="w-10 h-10 text-blue-600" />,
      img : img ,
    },
    {
      id: 2,
      title: "Regional & Short-Haul Delivery",
      desc:
        "Fast and flexible short-haul freight service for businesses needing frequent deliveries, distribution support, and consistent daily or weekly transport cycles.",
      icon: <Route className="w-10 h-10 text-green-600" />,
      img: img1,
    },
    {
      id: 3,
      title: "Logistics, Storage & Handling",
      desc:
        "End-to-end logistics support including storage, consolidation, dispatch coordination, and freight handling to keep supply chains efficient and streamlined.",
      icon: <Warehouse className="w-10 h-10 text-orange-600" />,
      img : img2
    },
  ];

  return (
    <section id="services" className="mt-20 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h3 className="text-3xl font-bold text-gray-900">What We Offer</h3>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Professional trucking and logistics solutions built for commercial freight needs.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((s) => (
            <div
              key={s.id}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-left border border-gray-100 group"
            >
              {/* Icon */}
              <div className="mb-4">{s.icon}</div>

              {/* Title */}
              <div className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                {s.title}
              </div>

              {/* Description */}
              <p className="mt-3 text-gray-600 leading-relaxed text-sm">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
