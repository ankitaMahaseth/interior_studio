import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import {
  faTwitter,
  faFacebookF,
  faYoutube,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  { icon: faTwitter, label: "Twitter", url: "#" },
  { icon: faFacebookF, label: "Facebook", url: "#" },
  { icon: faYoutube, label: "YouTube", url: "#" },
  { icon: faInstagram, label: "Instagram", url: "#" }
];

const popularLinks = [
  "About Us",
  "Gallery",
  "Contact Us",
  "Privacy Policy",
  "Terms & Condition"
];

const services = [
  "Interior Design",
  "Project Planning",
  "Renovation",
  "Implement",
  "Landscape Design",
];


function Footer() {
  return (
    <footer className="bg-[#03201f] text-gray-300 pt-16 lg:px-10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <a href="/" className="inline-block mb-4">
              <h2 className="text-3xl font-bold text-white">AM</h2>
            </a>

            <p className="leading-7 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, blanditiis.
            </p>

            <span
              className="inline-block border-2 border-[#0d6b68] bg-[#0d6b68] text-white px-6 py-3 font-medium hover:bg-gray-100 hover:text-[#0d6b68] transition duration-300"
            >
              Love where you live
            </span>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Get In Touch
            </h3>

            <div className="space-y-4">
              <p className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-[#0d6b68] mt-1"
                />
                <span>Bengaluru, India</span>
              </p>

              <p className="flex items-center gap-3">
                <FontAwesomeIcon icon={faPhone} className="text-[#0d6b68]" />
                <span>+012 345 67890</span>
              </p>

              <p className="flex items-center gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#0d6b68]" />
                <span>info@example.com</span>
              </p>
            </div>

            {/* Social Media */}
            <div className="flex flex-wrap gap-2 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center border-2 border-[#0d6b68] text-[#0d6b68] hover:bg-[#0d6b68] hover:text-white transition duration-300"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Popular Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Popular Link
            </h3>

            <ul className="space-y-3">
              {popularLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-[#0d6b68] hover:translate-x-1 inline-block transition duration-300"
                  >
                    <span className="text-[#0d6b68] mr-2">›</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Our Services
            </h3>

            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="hover:text-[#0d6b68] hover:translate-x-1 inline-block transition duration-300"
                  >
                    <span className="text-[#0d6b68] mr-2">›</span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
            <p className="text-center md:text-center">
              &copy;{" "}
              <a
                href="/"
                className="text-white border-b border-gray-500 hover:text-[#0d6b68]"
              >
                Organisation name
              </a>
              , All Rights Reserved.
              <span className="block sm:inline sm:ml-1">
                Designed By <span className="text-red-300">Ankita Mahaseth</span>
              </span>
            </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
