import React from "react";

export function TeamSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-gray-100 p-6 rounded-2xl shadow text-center"
          >
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold">Team Member {i}</h3>
            <p className="text-gray-600 text-sm">Position Title</p>
          </div>
        ))}
      </div>
    </section>
  );
}
