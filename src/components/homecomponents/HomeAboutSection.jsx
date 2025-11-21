import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutImg from "../../assets/home/about.png";

export default function HomeAboutSection({
  image = aboutImg,
  title = "About Barker International Trucking",
  description = 
    "We provide reliable trucking and logistics solutions built on safety, trust, and consistent delivery performance. Our team is committed to ensuring every shipment reaches its destination efficiently and on time.",
  buttonLabel = "Learn More",
  buttonLink = "/about",
}) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl shadow-lg"
        >
          <img
            src={image}
            alt="About Barker International Trucking"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {title}
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg max-w-lg">
            {description}
          </p>

          <Link
            to={buttonLink}
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-green-700 transition"
          >
            {buttonLabel}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
