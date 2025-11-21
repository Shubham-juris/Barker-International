import React from "react";
import { motion } from "framer-motion";
import { ClipboardList, Truck, SatelliteDish, CheckCircle } from "lucide-react";

export function HowWeWork() {
  const steps = [
    {
      title: "Request & Route Planning",
      desc:
        "We review shipment details, load type, weight, and timelines. Our logistics team prepares an optimized route to ensure safe and efficient freight movement.",
      icon: <ClipboardList className="w-10 h-10 text-blue-600 mx-auto" />,
    },
    {
      title: "Dispatch & Secure Loading",
      desc:
        "A dedicated truck is assigned, drivers briefed, and cargo loaded using proper safety procedures. Every load is verified before departure.",
      icon: <Truck className="w-10 h-10 text-green-600 mx-auto" />,
    },
    {
      title: "Live Tracking & Updates",
      desc:
        "Shipments are monitored in real-time through our tracking systems. Clients receive status updates, location reports, and ETA notifications throughout transit.",
      icon: <SatelliteDish className="w-10 h-10 text-orange-600 mx-auto" />,
    },
    {
      title: "Delivery & Confirmation",
      desc:
        "Cargo is delivered on schedule with a full inspection and confirmation. Proof of delivery is shared instantly for complete transparency.",
      icon: <CheckCircle className="w-10 h-10 text-purple-600 mx-auto" />,
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-14 text-gray-900"
      >
        How We Work
      </motion.h2>

      <div className="grid md:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-blue-600 text-center"
          >
            {/* Icon */}
            <div className="mb-4">{step.icon}</div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
