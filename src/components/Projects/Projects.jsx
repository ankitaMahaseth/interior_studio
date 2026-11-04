
import project1 from "../../assets/img/project-1.jpg";
import project2 from "../../assets/img/project-2.jpg";
import project3 from "../../assets/img/project-3.jpg";
import project4 from "../../assets/img/project-4.jpg";
import project5 from "../../assets/img/project-5.jpg";
import project6 from "../../assets/img/project-6.jpg";

function Projects() {

  const projects = [
    { image: project1, title: "Kitchen", count: "72 Projects" },
    { image: project2, title: "Bathroom", count: "67 Projects" },
    { image: project3, title: "Bedroom", count: "53 Projects" },
    { image: project4, title: "Living Room", count: "33 Projects" },
    { image: project5, title: "Furniture", count: "87 Projects" },
    { image: project6, title: "Renovation", count: "69 Projects" },
  ];

  return (
    <section className="w-full mt-16 lg:px-10">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

          {/* Left Content */}
          <div className="lg:col-span-5 animate-fade-in">

            <div className="flex flex-col justify-center bg-[#0d6b68] h-full p-8 md:p-12">

              <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-12 leading-tight">
                Our Latest{" "}
                <span className="uppercase text-[#0d6b68] bg-white px-2 inline-block">
                  Projects
                </span>
              </h1>

              <h4 className="text-white text-xl font-semibold">
                <span className="text-7xl md:text-8xl font-bold mr-2">
                  6
                </span>
                of our latest projects
              </h4>

            </div>
          </div>

          {/* Right Project Grid */}
          <div className="lg:col-span-7">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">

              {projects.map((project, index) => (

                <div
                  key={project.title}
                  className="relative group overflow-hidden animate-fade-in"
                >

                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={`${project.title} interior design`}
                    className="w-full h-[260px] md:h-[280px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Project Overlay */}
                  <a
                    href="#"
                    className="absolute inset-0 bg-[#0d6b68]/80 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                  >

                    <h4 className="text-white text-2xl font-bold mb-2 transform translate-y-5 group-hover:translate-y-0 transition-transform duration-500">
                      {project.title}
                    </h4>

                    <small className="text-white text-base transform translate-y-5 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {project.count}
                    </small>

                  </a>

                </div>

              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
