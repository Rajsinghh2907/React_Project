import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Header = () => {
  return (
    <header className="bg-blue-600 p-4">
      <nav className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-green-500">Pay</span>
          <span className="text-orange-500">Spaze</span>
        </div>
        <div>
          {/* Link to /sign-in when login button is clicked */}
          <Link
            to="/sign-in"
            className="bg-blue-600 text-white border border-white px-4 py-2 rounded mr-2 transition duration-300 ease-in-out hover:bg-blue-500"
          >
            LOG IN
          </Link>

          {/* Link to /sign-up when sign-up button is clicked */}
          <Link
            to="/sign-up"
            className="bg-blue-600 text-white border border-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-blue-500"
          >
            SIGN UP
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
