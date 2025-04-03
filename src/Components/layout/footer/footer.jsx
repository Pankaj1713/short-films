import React from "react";
import { IMAGES } from "../../constants/assets";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0">
            <img src={IMAGES.LOGO} alt="Logo" className="h-14" />
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <h3 className="font-semibold text-lg mb-2">Company</h3>
              <ul className="space-y-1 text-paragraphColor">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Short Films</a>
                </li>
                <li>
                  <a href="#">Subscription Plans</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Legal</h3>
              <ul className="space-y-1 text-paragraphColor">
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Support</h3>
              <ul className="space-y-1 text-paragraphColor">
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-borderColor mt-6 pt-4 text-center text-white text-sm">
          Copyright 2025. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
