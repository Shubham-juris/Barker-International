import React from "react";

export function MissionVision() {
  return (
    <section className="py-20 px-6 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

      {/* Mission */}
      <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Our mission is to create impactful visual stories through world-class
          film production and creative advertising. We aim to help brands,
          businesses, and creators express their ideas with cinematic precision,
          high-quality visuals, and strong emotional engagement.
          <br /><br />
          From commercials and corporate videos to creative campaigns and digital
          ads, we focus on delivering content that inspires audiences, elevates
          brand identity, and leaves a lasting impression.
        </p>
      </div>

      {/* Vision */}
      <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Vision</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Our vision is to become a globally recognized film production and
          advertising agency known for creativity, innovation, and excellence in
          visual storytelling.
          <br /><br />
          We aim to push creative boundaries by adopting advanced production
          technologies, cinematic techniques, and strategic brand communication
          methods—helping brands connect with their audiences in the most
          powerful way possible.
        </p>
      </div>

    </section>
  );
}
