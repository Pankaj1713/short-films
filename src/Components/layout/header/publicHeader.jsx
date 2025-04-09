import React, { useState, useEffect, use } from "react";
import { IMAGES } from "../../constants/assets";
import Button from "../../common/button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../router/routes";

const PublicHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-4 py-3 transition-all duration-300 z-50 ${
        isScrolled ? "bg-black/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div>
        <img
          src={IMAGES.LOGO}
          alt="Logo"
          onClick={() => navigate(ROUTES.HOME)}
          className="cursor-pointer h-10 md:h-16"
        />
      </div>
      <div>
        <Button variant="primary" onClick={() => navigate(ROUTES.LOGIN)}>
          Login/Sign Up
        </Button>
      </div>
    </div>
  );
};

export default PublicHeader;
