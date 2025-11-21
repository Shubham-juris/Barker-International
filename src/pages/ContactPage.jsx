import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import main from "../assets/contact/main.jpg"; // default image

export default function ContactPage({
  heroImage = main,
}) {
  const bgStyle = {
    backgroundImage: `url(${heroImage})`,
  };

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col md:flex-row items-center mt-20 justify-between overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={bgStyle} />
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 container mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-2 gap-10 items-center text-white">

        {/* Left side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
          <p className="text-neutral-300 text-lg leading-relaxed max-w-md">
            Have questions or want to work with us? Reach out — we’ll respond within 24 hours.
          </p>

          <ul className="space-y-4 text-neutral-200">
            <li className="flex items-center gap-3">
              <Mail className="text-blue-400" size={20} /> info@barkerinternational.com
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-blue-400" size={20} /> +1 (800) 234-5678
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-blue-400" size={20} /> Our main office & service locations
            </li>
          </ul>
        </motion.div>

        {/* Right side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl w-full max-w-lg mx-auto"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">Send Us a Message</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-white/20 text-white placeholder:text-neutral-300 p-3 rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-white/20 text-white placeholder:text-neutral-300 p-3 rounded-lg"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full bg-white/20 text-white placeholder:text-neutral-300 p-3 rounded-lg"
            />

            {/* Button changed to blue */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 mt-2 rounded-xl shadow-lg transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/60 to-transparent" />
    </section>
  );
}
