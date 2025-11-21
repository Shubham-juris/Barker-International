import React from "react";

export function MissionVision() {
  return (
    <section className="py-20 px-6 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

      {/* Mission */}
      <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Our mission is to deliver dependable trucking and logistics solutions 
          that keep supply chains moving without delays. We aim to provide safe 
          transportation, transparent communication, professional drivers, and 
          a modern fleet built to handle demanding commercial freight.  
          <br /><br />
          Every shipment—small or heavy, short-distance or long-route—is handled 
          with precision, accountability, and a commitment to meeting deadlines. 
          We focus on reducing downtime, improving freight efficiency, and 
          supporting businesses with consistent, high-quality transport service.
        </p>
      </div>

      {/* Vision */}
      <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Vision</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Our vision is to become a leading name in the trucking and logistics 
          industry—recognized for reliability, innovation, and customer trust.  
          We strive to build a fleet powered by advanced technology, 
          real-time tracking, optimized routing, and top-tier safety standards.  
          <br /><br />
          We aim to create a logistics network that supports businesses with 
          faster deliveries, improved freight management, and scalable transport 
          solutions designed for long-term growth. Every mile we drive moves us 
          closer to setting new standards in professional trucking services.
        </p>
      </div>

    </section>
  );
}
