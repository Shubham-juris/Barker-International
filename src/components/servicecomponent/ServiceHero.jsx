import React from "react";
import { motion } from "framer-motion";
import main from "../../assets/services/main.jpg";

export default function AboutHero({
  title = "About Our Trucking & Logistics Company",
  subtitle = "Driven by safety, reliability, and precision in every mile.",
  description =
    "We are a performance-driven trucking and logistics company specializing in long-haul freight, dedicated routes, and high-efficiency supply chain transport. With a modern fleet, expert drivers, and advanced tracking systems, we deliver consistent, secure, and on-time freight movement for businesses of all scales.",
  heroImage = main,
}) {
  return (
    <section className="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-pulse-slow"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-10 text-center text-white max-w-4xl">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4"
        >
          {title}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg sm:text-xl md:text-2xl text-neutral-200 font-medium mb-6"
        >
          {subtitle}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl mx-auto"
        >
          {description}
        </motion.p>

      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent"></div>
    </section>
  );
}
