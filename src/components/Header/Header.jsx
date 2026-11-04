
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import hero_img from "../../assets/img/hero-bg.jpg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `block transition-colors duration-200 ${
      isActive
        ? "text-[#0d6b68] font-bold text-lg border-b-2 border-[#0d6b68]"
        : "text-gray-600 text-md hover:text-[#0d6b68]"
    }`;

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className="sticky top-0 z-50 w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${hero_img})` }}
    >
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between border-b-2 border-b-gray-50 px-4 py-4 sm:px-6 lg:px-10">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={handleLinkClick}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0d6b68] text-md font-bold text-white">
            AM
          </div>
          <span className="text-2xl font-bold tracking-tight text-gray-900">
            {/* Logo Text */}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={navLinkClass}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Hamburger Button - Mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-[#0d6b68] hover:bg-gray-100 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <FontAwesomeIcon
            icon={menuOpen ? faXmark : faBars}
            className="text-2xl"
          />
        </button>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="absolute left-0 top-full w-full border-t border-gray-200 bg-white px-6 py-5 shadow-lg md:hidden">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={navLinkClass}
                  onClick={handleLinkClick}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
