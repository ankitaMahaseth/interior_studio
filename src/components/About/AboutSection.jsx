
import about1 from "../../assets/img/about-1.jpg";
import about2 from "../../assets/img/about-2.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function About() {
  const benefits = [
    "Award Winning",
    "Professional Staff",
    "24/7 Support",
    "Fair Prices",
  ];

  const socialLinks = [
    { icon: faFacebookF, label: "Facebook", link: "#" },
    { icon: faTwitter, label: "Twitter", link: "#" },
    { icon: faInstagram, label: "Instagram", link: "#" },
    { icon: faLinkedinIn, label: "LinkedIn", link: "#" },
  ];

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 lg:px-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left Images */}
          <div className="grid grid-cols-2 gap-3 sm:gap-5 items-start w-full">

            {/* First Image */}
            <div className="w-full">
              <img
                src={about1}
                alt="Interior design studio"
                className="w-full h-[220px] sm:h-[320px] md:h-[400px] lg:h-[450px] object-cover rounded-lg"
              />
            </div>

            {/* Second Image and Text Box */}
            <div className="w-full pt-8 sm:pt-12">
              <img
                src={about2}
                alt="Award winning interior design"
                className="w-full h-[160px] sm:h-[240px] md:h-[290px] lg:h-[330px] object-cover rounded-lg"
              />

              <div className="min-h-[90px] sm:min-h-[110px] lg:min-h-[120px] flex items-center justify-center text-center bg-[#0d6b68] px-2 sm:px-4 py-4 mt-0">
                <h4 className="text-white text-sm sm:text-lg lg:text-xl font-semibold leading-relaxed">
                  Where Style Meets Function
                </h4>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full">

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5 sm:mb-7 leading-tight">
              <span className="uppercase text-[#0d6b68] bg-gray-100 px-2">
                History
              </span>{" "}
              of Our Creation
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base mb-5 leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              aperiam id distinctio accusantium, voluptatem incidunt inventore
              qui commodi vero reiciendis enim veniam laudantium maxime
              voluptatum.
            </p>

            <p className="text-gray-600 text-sm sm:text-base mb-7 leading-7">
              Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et
              sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {benefits.map((item) => (
                <div
                  key={item}
                  className="flex items-center text-gray-800 font-semibold text-sm sm:text-base"
                >
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-[#0d6b68] mr-3 shrink-0"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Buttons and Social Links */}
            <div className="flex flex-wrap items-center gap-3 mt-8 sm:mt-10">

              <a
                href="#"
                className="bg-[#0d6b68] text-white px-5 sm:px-6 py-3 font-semibold text-sm sm:text-base hover:bg-[#095451] transition duration-300"
              >
                Read More
              </a>

              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  aria-label={social.label}
                  className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center border-2 border-[#0d6b68] text-[#0d6b68] hover:bg-[#0d6b68] hover:text-white transition duration-300"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
