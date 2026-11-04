import React from "react";
import {
  FaPhone,
} from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import service1 from "../../assets/img/service-1.jpg";
import service2 from "../../assets/img/service-2.jpg";
import service3 from "../../assets/img/service-3.jpg";
import service4 from "../../assets/img/service-4.jpg";

import PageHeader from "../../components/Header/PageHeader";

const services = [
  {
    image: service1,
    title: "Interior Design",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    bgColor: "bg-[#0d6b68]",
    textColor: "text-white",
  },
  {
    image: service2,
    title: "Implement",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    bgColor: "bg-gray-100",
    textColor: "text-gray-800",
  },
  {
    image: service3,
    title: "Renovation",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    bgColor: "bg-gray-100",
    textColor: "text-gray-800",
  },
  {
    image: service4,
    title: "Commercial",
    description:
      "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
    bgColor: "bg-[#0d6b68]",
    textColor: "text-white",
  },
];

function Services() {
  return (
    <>
    <section className="w-full py-16 md:py-20 lg:px-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Content */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Our Creative{" "}
              <span className="uppercase text-[#0d6b68] bg-gray-100 px-2">
                Services
              </span>
            </h2>

            <p className="text-gray-600 leading-7 mb-5">
              Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et
              sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor eirmod magna dolore erat amet.
            </p>

            <p className="text-gray-600 leading-7 mb-8">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
              sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et
              lorem et sit, sed stet no labore lorem sit. Sanctus clita duo
              justo et tempor eirmod magna dolore erat amet.
            </p>

            {/* Contact Box */}
            <div className="flex items-center bg-gray-100">
              <div className="w-25 h-25 shrink-0 bg-[#0d6b68] flex items-center justify-center">
                <FontAwesomeIcon icon={faPhone} className="text-white text-3xl" />
              </div>

              <div className="px-4 py-3">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                  +0123456789
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Call us direct 24/7 for get a free consultation
                </p>
              </div>
            </div>
          </div>

          {/* Right Services Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`${service.bgColor} ${service.textColor} p-6 md:p-7 flex flex-col justify-center`}
                >
                  <a
                    href="#"
                    className="relative block mb-5 overflow-hidden group"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-300" />

                    <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                  </a>

                  <p className="leading-7 text-sm md:text-base">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  );
}

export default Services;