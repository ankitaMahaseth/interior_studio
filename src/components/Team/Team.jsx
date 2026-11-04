import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import team from "../../assets/img/team.png";
import team2 from "../../assets/img/team2.jpg"; 

const teamMembers = [
  {
    image: team,
    name: "Team Member 1",
    role: "Architect",
  },
  {
    image: team2,
    name: "Team Member 2",
    role: "Architect",
  },
  {
    image: team,
    name: "Team Member 3",
    role: "Architect",
  },
  {
    image: team2,
    name: "Team Member 4",
    role: "Architect",
  },
];

const socialLinks = [
  { icon: faFacebookF, label: "Facebook", url: "#" },
  { icon: faTwitter, label: "Twitter", url: "#" },
  { icon: faInstagram, label: "Instagram", url: "#" },
  { icon: faLinkedinIn, label: "LinkedIn", url: "#" },
];

function Team() {
  return (
    <section className="w-full bg-gray-100 py-16 md:py-20 lg:px-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Our Professional{" "}
          <span className="uppercase text-[#0d6b68] bg-white px-2">
            Designers
          </span>
        </h2>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="relative overflow-hidden group"
            >
              {/* Team Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-95 object-cover transition-transform duration-500 group-hover:scale-110 p-5"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#0d6b68]/90 flex flex-col items-center justify-center text-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-500">

                <small className="text-white mb-2 font-medium">
                  {member.role}
                </small>

                <h3 className="text-2xl font-bold text-white mb-6">
                  {member.name}
                </h3>

                {/* Social Media Icons */}
                <div className="flex items-center justify-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      aria-label={`${member.name} on ${social.label}`}
                      className="w-10 h-10 flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#0d6b68] transition-all duration-300"
                    >
                      <FontAwesomeIcon icon={social.icon} />
                    </a>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Team;