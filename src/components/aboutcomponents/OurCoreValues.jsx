import React from "react";
import { ShieldCheck, Clock, BadgeCheck, Sparkles } from "lucide-react";

export function OurCoreValues() {
  const values = [
    {
      icon: <ShieldCheck className="w-12 h-12 text-blue-700" />,
      title: "Safety First",
      desc: "Every operation is executed with strict safety protocols to protect drivers, clients, and freight.",
    },
    {
      icon: <Clock className="w-12 h-12 text-green-700" />,
      title: "Timely Delivery",
      desc: "Punctuality and reliability are the foundation of our logistics service.",
    },
    {
      icon: <BadgeCheck className="w-12 h-12 text-purple-700" />,
      title: "Professionalism",
      desc: "We maintain high standards in communication, handling, and delivery.",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-orange-700" />,
      title: "Innovation",
      desc: "We continuously upgrade systems, tools, and operational methods for better efficiency.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Our Core Values</h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center"
            >
              <div className="flex justify-center mb-4">{v.icon}</div>
              <h3 className="font-bold text-xl">{v.title}</h3>
              <p className="text-gray-700 mt-2">{v.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
