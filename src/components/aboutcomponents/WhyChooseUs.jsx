import React from "react";

export function WhyChooseUs() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="p-6 bg-white shadow-lg rounded-2xl text-center">
          <h3 className="text-xl font-semibold mb-2">Reliable Service</h3>
          <p className="text-gray-600">
            Guaranteed safe and on-time deliveries.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-2xl text-center">
          <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
          <p className="text-gray-600">
            Always available customer support & tracking.
          </p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-2xl text-center">
          <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
          <p className="text-gray-600">
            Skilled drivers and logistics professionals.
          </p>
        </div>
      </div>
    </section>
  );
}
