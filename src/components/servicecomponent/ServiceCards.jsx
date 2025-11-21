import React from "react";
import { Truck, Package, Snowflake, Clock, ShieldCheck, Route } from "lucide-react";

export function ServiceCards() {
  const services = [
    {
      title: "Full Truckload (FTL)",
      desc:
        "Direct, high-capacity freight transport for businesses needing entire truck space with maximum speed and security.",
      icon: <Truck className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Less Than Truckload (LTL)",
      desc:
        "Cost-efficient freight shipping for smaller loads, optimized for shared trailer space and frequent deliveries.",
      icon: <Package className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Refrigerated Transport",
      desc:
        "Temperature-controlled freight solutions for perishable, medical, and sensitive goods requiring consistent cooling.",
      icon: <Snowflake className="w-10 h-10 text-cyan-600" />,
    },
    {
      title: "Multi-Region Freight Transport",
      desc:
        "Reliable freight movement across multiple regions with compliance, safety standards, and stable transit operations.",
      icon: <Route className="w-10 h-10 text-purple-600" />,
    },
    {
      title: "Expedited Delivery",
      desc:
        "Priority trucking with fast response times for urgent freight that cannot afford delays.",
      icon: <Clock className="w-10 h-10 text-orange-600" />,
    },
    {
      title: "Hazmat Transport",
      desc:
        "Certified handling and transport of hazardous materials with strict safety protocols and compliance procedures.",
      icon: <ShieldCheck className="w-10 h-10 text-red-600" />,
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Our Professional Services
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
          >
            <div className="flex justify-center mb-4">{s.icon}</div>

            <h3 className="text-xl font-semibold text-gray-900 text-center">
              {s.title}
            </h3>

            <p className="text-gray-600 text-sm mt-3 leading-relaxed text-center">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
