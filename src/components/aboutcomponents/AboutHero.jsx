import React from "react";
import { motion } from "framer-motion";
import main from "../../assets/about/main.webp"; 

export default function AboutHero({
  title = "About Barker International",
  subtitle = "Creative. Cinematic. Impactful Visual Storytelling.",
  description =
    "Barker International is a Film Production & Advertising Agency specializing in cinematic video production, brand storytelling, commercials, digital ads, photography, and creative media solutions. Our team transforms ideas into powerful visual experiences using advanced production technology and industry-leading techniques.",
  heroImage = main,
}) {
  const backgroundStyle = {
    backgroundImage: `url(${heroImage})"`,
  };

  return (
    <section className="relative w-full mt-20 min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={backgroundStyle}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-10 text-center text-white max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
        >
          {title}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-neutral-200 mb-6"
        >
          {subtitle}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/60 to-transparent" />
    </section>
  );
}
