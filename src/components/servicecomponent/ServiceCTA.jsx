import React from "react";
import { Link } from "react-router-dom";

export function ServiceCTA() {
  return (
    <section className="bg-gray-900 text-white py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">
        Need Professional Film Production or Advertising?
      </h2>

      <p className="opacity-80 max-w-xl mx-auto mb-6">
        Get in touch with our creative team for project inquiries, shoots,
        branding campaigns, or custom visual solutions.
      </p>

      <Link
        to="/contact"
        className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold shadow hover:opacity-90 inline-block"
      >
        Contact Us
      </Link>
    </section>
  );
}
