import React from "react";
import { Link } from "react-router-dom";
import hero_img from "../../assets/img/hero-bg.jpg";

function PageHeader({ title = "About" }) {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat pb-12 mb-12 px-10 text-black"
      style={{
        backgroundImage: `url(${hero_img})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">

          {/* Page Title */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-gray-600 mb-0">
              {title}
            </h1>
          </div>

          {/* Breadcrumb Navigation */}
          <div>
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center justify-center lg:justify-end gap-2 text-sm md:text-base">

                <li>
                  <Link
                    to="/"
                    className="text-gray-600 hover:text-gray-800 transition duration-300"
                  >
                    Home
                  </Link>
                </li>

                <li className="text-gray-600/70" aria-hidden="true">
                  /
                </li>

                <li>
                  <span className="text-gray-600/80">Pages</span>
                </li>

                <li className="text-gray-600/70" aria-hidden="true">
                  /
                </li>

                <li
                  className="text-gray-600 font-medium"
                  aria-current="page"
                >
                  {title}
                </li>

              </ol>
            </nav>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PageHeader;