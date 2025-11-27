import React from "react";
import { Camera, Clapperboard, Video, Megaphone } from "lucide-react";
import film1 from "../../assets/home/main1.jpeg";
import film2 from "../../assets/home/main2.jpg";
import film3 from "../../assets/home/main3.jpg";
import film4 from "../../assets/home/main4.jpeg";

export const Services = () => {
  const services = [
    {
      id: 1,
      title: "Film & Video Production",
      desc:
        "Complete film production services including cinematography, directing, shooting, lighting setup, and on-set production management.",
      icon: <Camera className="w-10 h-10 text-blue-600" />,
      img: film1,
    },
    {
      id: 2,
      title: "Ad Commercials & Brand Promotion",
      desc:
        "High-quality TV commercials, digital ads, corporate ads, and targeted promotional video content for brands.",
      icon: <Megaphone className="w-10 h-10 text-green-600" />,
      img: film2,
    },
    {
      id: 3,
      title: "Post-Production & Editing Studio",
      desc:
        "Professional editing, color grading, VFX, sound design, and full post-production support for film projects.",
      icon: <Clapperboard className="w-10 h-10 text-orange-600" />,
      img: film3,
    },
    {
      id: 4,
      title: "Digital Media & Content Creation",
      desc:
        "Creative content development for social media campaigns, short videos, reels, product shoots, and branding visuals.",
      icon: <Video className="w-10 h-10 text-purple-600" />,
      img: film4,
    },
  ];

  return (
    <section id="services" className="mt-20 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold text-gray-900">Our Film & Advertising Services</h3>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Professional film production, advertisement creation, and digital media services tailored for modern brands.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {services.map((s) => (
            <div
              key={s.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 group"
            >
              <img
                src={s.img}
                alt="service-img"
                className="w-full h-40 object-cover rounded-xl mb-5"
              />

              <div className="mb-4">{s.icon}</div>

              <div className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                {s.title}
              </div>

              <p className="mt-3 text-gray-600 leading-relaxed text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};