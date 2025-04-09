import React, { useState, useEffect } from "react";
import { IMAGES } from "../../constants/assets";
import Button from "../../common/button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../router/routes";

const AuthHeader = ({ buttonText, buttonRoute, variant }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-4 py-2 transition-all duration-300 z-50 ${
        isScrolled
          ? "bg-secondary backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="cursor-pointer">
        <img
          src={IMAGES.LOGO}
          alt="Logo"
          onClick={() => navigate(ROUTES.HOME)}
          className="h-10 md:h-16"
        />
      </div>
      {buttonText && buttonRoute && (
        <div>
          <Button
            variant={variant === "secondary" ? "secondary" : "primary"}
            onClick={() => navigate(buttonRoute)}
          >
            {buttonText || ""}
          </Button>
        </div>
      )}
    </div>
  );
};

export default AuthHeader;
