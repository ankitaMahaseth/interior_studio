
import React, { useState } from "react";

// Gallery Images
import gallery1 from "../../assets/img/project-1.jpg";
import gallery2 from "../../assets/img/project-2.jpg";
import gallery3 from "../../assets/img/project-3.jpg";
import gallery4 from "../../assets/img/project-4.jpg";
import gallery5 from "../../assets/img/project-5.jpg";
import gallery6 from "../../assets/img/project-6.jpg";
import gallery7 from "../../assets/img/service-1.jpg";
import gallery8 from "../../assets/img/service-2.jpg";
import gallery9 from "../../assets/img/service-3.jpg";
import gallery10 from "../../assets/img/service-4.jpg";

const galleryItems = [
  { id: 1, image: gallery1, title: "Modern Kitchen", category: "Kitchen" },
  { id: 2, image: gallery2, title: "Luxury Bathroom", category: "Bathroom" },
  { id: 3, image: gallery3, title: "Elegant Bedroom", category: "Bedroom" },
  { id: 4, image: gallery4, title: "Modern Living Room", category: "Living Room" },
  { id: 5, image: gallery5, title: "Designer Furniture", category: "Living Room" },
  { id: 6, image: gallery6, title: "Home Renovation", category: "Bedroom" },
  { id: 7, image: gallery7, title: "Contemporary Interior", category: "Kitchen" },
  { id: 8, image: gallery8, title: "Minimal Bathroom", category: "Bathroom" },
  { id: 9, image: gallery9, title: "Cozy Bedroom", category: "Bedroom" },
];

const categories = [
  "All",
  "Living Room",
  "Bedroom",
  "Kitchen",
  "Bathroom",
];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <>

      <section className="w-full py-16 md:py-20 lg:px-10">
        <div className="max-w-7xl mx-auto px-4">

          {/* Section Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Our{" "}
              <span className="uppercase text-[#0d6b68] bg-gray-100 px-2">
                Gallery
              </span>
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto leading-7">
              Discover our creative interior design projects and explore
              beautiful spaces designed with elegance, comfort and style.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 border-2 font-medium transition duration-300 ${
                  activeCategory === category
                    ? "bg-[#0d6b68] border-[#0d6b68] text-white"
                    : "bg-white border-gray-200 text-gray-700 hover:border-[#0d6b68] hover:text-[#0d6b68]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((item) => (
              <div
                key={item.id}
                className="relative group overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[280px] md:h-[320px] object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-[#0d6b68]/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-sm text-white mb-2">
                    {item.category}
                  </span>

                  <h3 className="text-2xl font-bold text-white text-center px-4">
                    {item.title}
                  </h3>

                  <span className="mt-4 w-12 h-12 rounded-full border-2 border-white text-white flex items-center justify-center text-2xl">
                    +
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <p className="text-center text-gray-500 py-10">
              No gallery images found.
            </p>
          )}
        </div>
      </section>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            aria-label="Close image preview"
            className="absolute top-5 right-6 text-white text-4xl hover:text-[#0d6b68]"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>

          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[75vh] object-contain"
            />

            <h3 className="text-white text-xl text-center mt-4 font-semibold">
              {selectedImage.title}
            </h3>

            <p className="text-gray-300 text-center mt-1">
              {selectedImage.category}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;
