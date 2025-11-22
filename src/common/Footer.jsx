import React from 'react'
import { Facebook, Instagram, Mail, Phone, MapPin, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6 border-t border-white/10">
      <div className="container mx-auto px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Barker International</h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            A professional Film Production & Advertising Agency based in Slave Lake, AB.
            We create films, commercials, branding content, and high-quality visual productions 
            for businesses, artists, and brands.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-neutral-300 text-sm">
            <li><a href="/" className="hover:text-green-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-green-400 transition">About Us</a></li>
            <li><a href="/services" className="hover:text-green-400 transition">Services</a></li>
            <li><a href="/contact" className="hover:text-green-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="space-y-3 text-neutral-300 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-green-400" /> info@barkerinternational.com
            </li>

            <li className="flex items-center gap-2">
              <Phone size={16} className="text-green-400" /> +1 (800) 000000
            </li>

            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-green-400" /> Slave Lake, AB
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-green-500 transition">
              <Facebook size={18} />
            </a>

            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-green-500 transition">
              <Instagram size={18} />
            </a>

            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-green-500 transition">
              <Youtube size={18} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 mt-10 pt-4 text-center text-neutral-500 text-sm">
        © {new Date().getFullYear()} Barker International. All rights reserved.
      </div>
    </footer>
  )
}
