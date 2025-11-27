import React from "react";
import { motion } from "framer-motion";

import img from "../../assets/home/fleet1.jpeg";
import img1 from "../../assets/home/fleet2.avif";
import img2 from "../../assets/home/fleet3.webp";

export const Fleet = () => {
  const equipment = [
    { id: 1, name: "4K Cinematic Camera Setup", img: img },
    { id: 2, name: "Lighting & Studio Rig System", img: img1 },
    { id: 3, name: "Drone & Aerial Cinematography Gear", img: img2 },
  ];

  return (
    <section id="fleet" className="mt-20 bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900"
        >
          Our Production Equipment
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-gray-600 max-w-xl mx-auto"
        >
          High-end professional filmmaking & advertising equipment ensuring top-quality production every time.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {equipment.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition group"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={v.img}
                  alt={v.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Text */}
              <div className="p-5 text-left">
                <h4 className="font-semibold text-lg text-gray-800">{v.name}</h4>
                <p className="text-gray-500 text-sm mt-1">
                  Essential for premium film production, ad shoots, and creative visual projects.
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
