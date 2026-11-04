
import React, { useState } from "react";
import PageHeader from "../../components/Header/PageHeader";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form Data:", formData);

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const inputClass =
    "peer w-full border border-gray-300 bg-white px-4 pt-6 pb-2 outline-none transition focus:border-[#0d6b68] focus:ring-1 focus:ring-[#0d6b68]";

  const labelClass =
    "absolute left-4 top-2 text-xs font-medium text-gray-500 transition peer-focus:text-[#0d6b68]";

  return (
    <><PageHeader title="Contact" />
    <section className="w-full py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Have Any Query?{" "}
            <span className="uppercase text-[#0d6b68] bg-gray-100 px-2">
              Contact Us
            </span>
          </h2>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">

          <h3 className="text-center text-lg md:text-xl font-medium leading-relaxed mb-8 text-gray-700">
            Receive messages instantly with our Team
           
            only.
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className={inputClass}
                />
                <label htmlFor="name" className={labelClass}>
                  Your Name
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className={inputClass}
                />
                <label htmlFor="email" className={labelClass}>
                  Your Email
                </label>
              </div>

              {/* Subject */}
              <div className="relative md:col-span-2">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  className={inputClass}
                />
                <label htmlFor="subject" className={labelClass}>
                  Subject
                </label>
              </div>

              {/* Message */}
              <div className="relative md:col-span-2">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  required
                  rows="6"
                  className={`${inputClass} resize-y min-h-[150px]`}
                />
                <label htmlFor="message" className={labelClass}>
                  Message
                </label>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-[#0d6b68] text-white py-4 font-semibold border-2 border-[#0d6b68] hover:bg-white hover:text-[#0d6b68] transition duration-300"
                >
                  Send Message
                </button>
              </div>

            </div>
          </form>
        </div>

      </div>
    </section>
    </>
  );
}

export default Contact;
