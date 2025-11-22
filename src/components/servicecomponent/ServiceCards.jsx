import React from "react";
import {
  Video,
  Camera,
  MonitorPlay,
  PenTool,
  Brush,
  Megaphone,
} from "lucide-react";

export function ServiceCards() {
  const services = [
    {
      title: "Film Production",
      desc:
        "Complete film production services including scripting, direction, shooting, and post-production.",
      icon: <Video className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "Commercial & Advertising Shoots",
      desc:
        "High-quality ad films, brand commercials, and promotional video shoots for businesses.",
      icon: <Camera className="w-10 h-10 text-green-600" />,
    },
    {
      title: "Post-Production & Editing",
      desc:
        "Professional video editing, sound design, color grading, and visual refinement for all formats.",
      icon: <MonitorPlay className="w-10 h-10 text-purple-600" />,
    },
    {
      title: "Creative Concept Development",
      desc:
        "Creative strategy, scriptwriting, storyboards, and concept planning for film & advertising.",
      icon: <PenTool className="w-10 h-10 text-orange-600" />,
    },
    {
      title: "Branding & Visual Designing",
      desc:
        "Complete brand identity design, visual content creation, and creative asset development.",
      icon: <Brush className="w-10 h-10 text-red-600" />,
    },
    {
      title: "Digital Marketing Campaigns",
      desc:
        "Promotional campaigns, social media ads, and creative marketing solutions for brands.",
      icon: <Megaphone className="w-10 h-10 text-teal-600" />,
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
