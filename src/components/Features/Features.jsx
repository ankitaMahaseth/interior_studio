
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCalendarAlt,
  faTasks,
  faRulerCombined,
  faUser,
  faHandHoldingDollar,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

function Features() {

  const features = [
    {
      icon: faCalendarAlt,
      title: "25+ Years Experience",
      description:
        "Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet.",
    },
    {
      icon: faTasks,
      title: "Best Interior Design",
      description:
        "Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet.",
    },
    {
      icon: faRulerCombined,
      title: "Innovative Architects",
      description:
        "Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet.",
    },
    {
      icon: faUser,
      title: "Customer Satisfaction",
      description:
        "Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet.",
    },
    {
      icon: faHandHoldingDollar,
      title: "Budget Friendly",
      description:
        "Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet.",
    },
    {
      icon: faCheck,
      title: "Sustainable Material",
      description:
        "Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet.",
    },
  ];

  const cardColors = [
  "bg-[#e8f3f2]",
  "bg-[#fdf0e7]",
  "bg-[#f0edf8]",
  "bg-[#eaf1fa]",
  "bg-[#fdf3e6]",
  "bg-[#eaf4eb]",
];

  return (
    <section className="w-full py-16 lg:px-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Heading */}
        <div className="text-center mb-14 animate-fade-in">

          <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold">
            Why People{" "}
            <span className="uppercase text-[#0d6b68] bg-gray-100 px-2">
              Choose Us
            </span>
          </h1>

        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 text-center">

          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`${cardColors[index % cardColors.length]} animate-fade-in p-10 rounded-xl text-center shadow-sm
                        hover:shadow-lg hover:-translate-y-2
                        transition-all duration-300`}
            >

              <FontAwesomeIcon
                icon={feature.icon}
                className="text-[#0d6b68] text-5xl mb-5"
              />

              <h4 className="text-xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h4>

              <p className="text-gray-600 leading-7">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;
