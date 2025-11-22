import React from "react";
import { Camera, Palette, Users, Sparkles } from "lucide-react";

export function OurCoreValues() {
  const values = [
    {
      icon: <Camera className="w-12 h-12 text-blue-700" />,
      title: "Creative Excellence",
      desc: "We craft visually compelling films, ads, and brand stories with cinematic precision and artistic depth.",
    },
    {
      icon: <Palette className="w-12 h-12 text-green-700" />,
      title: "Originality",
      desc: "Every project we create is built on fresh ideas, unique concepts, and impactful visual communication.",
    },
    {
      icon: <Users className="w-12 h-12 text-purple-700" />,
      title: "Collaboration",
      desc: "We work closely with clients, teams, and creators to bring visions to life with clarity and shared creativity.",
    },
    {
      icon: <Sparkles className="w-12 h-12 text-orange-700" />,
      title: "Innovation",
      desc: "We use advanced production tools, modern editing workflows, and emerging media trends to deliver standout content.",
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
