import React from "react";
import { motion } from "framer-motion";
import {
  Camera,
  PenTool,
  Clapperboard,
  Video,
} from "lucide-react";

export function HowWeWork() {
  const steps = [
    {
      title: "Pre-Production Planning",
      desc:
        "We begin with concept development, scriptwriting, storyboarding, casting, and location scouting. Our creative team ensures every detail is planned with precision.",
      icon: <PenTool className="w-10 h-10 text-blue-600 mx-auto" />,
    },
    {
      title: "Production & Filming",
      desc:
        "Our directors, cinematographers, and crew capture high-quality footage using professional-grade equipment to bring your vision to life.",
      icon: <Camera className="w-10 h-10 text-green-600 mx-auto" />,
    },
    {
      title: "Post-Production Editing",
      desc:
        "We refine every shot through editing, color grading, sound design, motion graphics, and VFX to create a polished final product.",
      icon: <Clapperboard className="w-10 h-10 text-orange-600 mx-auto" />,
    },
    {
      title: "Final Delivery & Promotion",
      desc:
        "Your film, commercial, or creative content is delivered in full quality with optional marketing, ad placement, and social media campaign support.",
      icon: <Video className="w-10 h-10 text-purple-600 mx-auto" />,
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
