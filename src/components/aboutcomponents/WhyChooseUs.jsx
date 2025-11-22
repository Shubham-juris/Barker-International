import React from "react";
import { Camera, Film, Sparkles, PenTool, Users, MonitorPlay } from "lucide-react";

export function WhyChooseUs() {
  const points = [
    {
      id: 1,
      title: "High-Quality Cinematic Production",
      desc:
        "We deliver premium-grade film production with professional lighting, direction, and editing that elevates every project.",
      icon: <Camera className="w-12 h-12 text-blue-600" />,
    },
    {
      id: 2,
      title: "Creative Concept & Story Development",
      desc:
        "From scripting to storyboarding, we turn ideas into powerful visual narratives that connect emotionally with audiences.",
      icon: <PenTool className="w-12 h-12 text-green-600" />,
    },
    {
      id: 3,
      title: "Skilled & Professional Team",
      desc:
        "Our team includes experienced directors, editors, designers, and media specialists who bring creativity and expertise to every project.",
      icon: <Users className="w-12 h-12 text-orange-600" />,
    },
    {
      id: 4,
      title: "Advanced Filming & Editing Technology",
      desc:
        "We use modern cameras, drones, studio equipment, and advanced editing tools to achieve sharp, polished, and high-impact visuals.",
      icon: <MonitorPlay className="w-12 h-12 text-red-600" />,
    },
    {
      id: 5,
      title: "Innovative Advertising Solutions",
      desc:
        "We craft marketing-focused content designed to boost brand visibility, audience engagement, and business growth.",
      icon: <Sparkles className="w-12 h-12 text-purple-600" />,
    },
    {
      id: 6,
      title: "End-to-End Production Services",
      desc:
        "From pre-production planning to final delivery, we handle every detail to ensure a smooth, efficient, and professional experience.",
      icon: <Film className="w-12 h-12 text-teal-600" />,
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900">Why Choose Us</h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Your trusted creative partner for professional film production and impactful advertising.
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
