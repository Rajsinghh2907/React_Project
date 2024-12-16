import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
      <footer className="text-center p-5 bg-white text-gray-600 ">
        <div className="flex justify-center space-x-6 mb-12">
          <a href="/About" className="text-green-700 font-bold hover:underline text-xl">
            About
          </a>
          <a href="/Contact" className="text-green-700 font-bold hover:underline text-xl">
            Contact
          </a>
          <a href="/Team" className="text-green-700 font-bold hover:underline text-xl">
            Team
          </a>
        </div>
        <p className="text-xl text-gray-600  mb-12">
          Copyright @  2024 - All rights reserved by PaySpaze
        </p>
      </footer>
  );
};

export default Footer;