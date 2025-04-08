import React, { useState, useEffect } from "react";
import { FaSearch, FaBell, FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IMAGES } from "../../constants/assets";
import { ROUTES } from "../../../router/routes";

const PrivateHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 px-4 py-4 text-white transition-all duration-300 ${
        isScrolled || menuOpen ? "bg-secondary shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <img
          src={IMAGES.LOGO}
          alt="Logo"
          onClick={() => navigate(ROUTES.HOME)}
          className="h-10 md:h-20 cursor-pointer"
        />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 text-white">
          <Link to={ROUTES.PRIVATE_HOME} className="hover:text-primary">
            Short Movies
          </Link>
          <Link to="#" className="hover:text-primary">
            Categories
          </Link>
          <FaSearch className="cursor-pointer hover:text-primary" />
          <FaBell className="cursor-pointer hover:text-primary" />
          <img
            src="/images/profileImage.png"
            alt="User"
            className="h-8 w-8 rounded-full border border-gray-300"
          />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-white">
          {menuOpen ? (
            <FaTimes
              size={22}
              onClick={toggleMenu}
              className="cursor-pointer"
            />
          ) : (
            <FaBars size={22} onClick={toggleMenu} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden md:hidden text-white mt-2"
          >
            <div className="flex flex-col space-y-4 py-4 bg-secondary rounded-md px-4 w-full">
              <Link
                to={ROUTES.PRIVATE_HOME}
                className="hover:text-primary"
                onClick={toggleMenu}
              >
                Short Movies
              </Link>
              <Link to="#" className="hover:text-primary" onClick={toggleMenu}>
                Categories
              </Link>
              <div className="flex items-center space-x-4">
                <FaSearch className="cursor-pointer hover:text-primary" />
                <FaBell className="cursor-pointer hover:text-primary" />
                <img
                  src="/images/profileImage.png"
                  alt="User"
                  className="h-8 w-8 rounded-full border border-gray-300"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PrivateHeader;
