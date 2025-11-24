import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "../../assets/home/home.png";

export default function HomeHero({
  title = "Barker International – Film Production & Advertising Agency",
  subtitle = "Creative storytelling, high-quality film production, and impactful advertising solutions for brands and businesses.",
  primaryCta = { label: "Our Services", href: "/services" },
  secondaryCta = { label: "Contact Us", href: "/contact" },
  heroImage = heroBg,
}) {
  const backgroundStyle = {
    backgroundImage: `url(${heroImage}) `,
  };

  return (
    <header
      className="relative w-full min-h-[66vh] md:min-h-[100vh] flex items-center"
      aria-label={`${title} hero`}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={backgroundStyle}
        role="img"
        aria-hidden="false"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl text-white">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-4 text-base sm:text-lg md:text-xl text-neutral-200 max-w-2xl"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 flex flex-col sm:flex-row gap-3"
          >
            <a
              href={primaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/95 text-black px-5 py-3 font-medium shadow-lg hover:scale-[1.01] transform transition"
            >
              {primaryCta.label}
              <ArrowRight size={16} />
            </a>

            <a
              href={secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 text-white px-5 py-3 font-medium hover:bg-white/5 transition"
            >
              {secondaryCta.label}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-4 text-sm text-neutral-200"
          >
            <li className="flex items-center gap-2">• Professional Film Production Expertise</li>
            <li className="flex items-center gap-2">• Creative Advertising Campaigns Delivered</li>
            <li className="flex items-center gap-2">• Trusted by Brands Across Canada</li>
          </motion.ul>
        </div>
      </div>

      {/* Decoration */}
      <div className="pointer-events-none absolute right-6 bottom-6 opacity-10 hidden md:block">
        <svg width="160" height="160" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="50" fill="white" />
        </svg>
      </div>
    </header>
  );
}
