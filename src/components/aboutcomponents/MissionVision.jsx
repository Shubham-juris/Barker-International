import React from "react";


export function MissionVision() {
  return (
    <section className="py-16 px-6 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
      <div className="bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
        <p className="text-gray-700">
          To provide safe, efficient, and customer-focused logistics services
          that keep businesses moving across North America.
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
        <p className="text-gray-700">
          To become the most trusted logistics partner known for reliability,
          innovation, and excellence in every mile.
        </p>
      </div>
    </section>
  );
}
