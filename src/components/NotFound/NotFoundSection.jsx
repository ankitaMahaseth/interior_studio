
import React from "react";
import { Link } from "react-router-dom";
import { FaTriangleExclamation } from "react-icons/fa6";

function NotFound() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">

          {/* Error Icon */}
          <FaTriangleExclamation className="text-[#0d6b68] text-7xl md:text-8xl mx-auto mb-4" />

          {/* Error Code */}
          <h1 className="text-8xl md:text-9xl font-bold text-[#0d6b68] leading-none mb-5">
            404
          </h1>

          {/* Error Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5">
            Page Not Found
          </h2>

          {/* Error Description */}
          <p className="text-gray-600 leading-7 mb-8">
            We’re sorry, the page you have looked for does not exist on our
            website! Maybe go to our home page or try to use a search?
          </p>

          {/* Home Button */}
          <Link
            to="/"
            className="inline-block bg-[#0d6b68] text-white font-semibold py-4 px-8 border-2 border-[#0d6b68] hover:bg-white hover:text-[#0d6b68] transition duration-300"
          >
            Go Back To Home
          </Link>

        </div>
      </div>
    </section>
  );
}

export default NotFound;
