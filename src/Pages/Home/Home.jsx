import HeroCarousel from "../../components/Carousel/HeroCarousel";

import hero_img from "../../assets/img/hero-bg.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faLeaf,
  faBuilding,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import AboutSection from "../../components/About/AboutSection";
import Projects from "../../components/Projects/Projects";
import ServiceSection from "../../components/Service/ServiceSection";
import Team from "../../components/Team/Team";

function Home() {
  const features = [
    { icon: faRobot, title: "Crafted Furniture" },
    { icon: faLeaf, title: "Sustainable Material" },
    { icon: faBuilding, title: "Innovative Architects" },
    { icon: faWallet, title: "Budget Friendly" },
  ];

  return (
    <>
      <section
        className="w-full bg-cover bg-center bg-no-repeat pb-12 mb-12 lg:px-10"
        style={{
          backgroundImage: `url(${hero_img})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Hero Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-12">
            {/* Left Content */}
            <div className="animate-slide-in-right">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-8 text-gray-900">
                We Make Your <span className="text-[#0d6b68]">Home</span> Better
              </h1>

              <h5 className="inline-block border-2 border-[#0d6b68] py-3 px-5 text-md font-semibold text-gray-800">
                <i>Transforming Spaces, Inspiring Lives</i>
              </h5>
            </div>

            {/* Right Image */}
            <div className="animate-fade-in">
              <HeroCarousel />
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in">
            {features.map((feature, index) => (
              <div key={feature.title} className="flex items-center">
                <div className="shrink-0 w-14 h-14 border-2 border-[#0d6b68] rounded-md flex items-center justify-center mr-4">
                  <FontAwesomeIcon
                    icon={feature.icon}
                    className="text-[#0d6b68] text-2xl"
                  />
                </div>

                <h5 className="text-lg font-semibold leading-relaxed text-gray-800">
                  {feature.title}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </section>
      <AboutSection />
      <Projects />
      <ServiceSection />
      <Team />
    </>
  );
}

export default Home;
