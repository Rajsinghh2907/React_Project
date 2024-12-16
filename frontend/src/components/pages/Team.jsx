import React from "react";

const Team = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      {/* 404 Title: Moved higher */}
      <h1 className="text-5xl  text-gray-800 mb-20 mt-8">
        404 - Page Not Found
      </h1>

      {/* Back to Home Link */}
      <a
        href="/"
        className="text-teal-600 hover:underline text-lg font-semibold mb-8"
      >
        Go back to Home Page
      </a>

      {/* Image */}
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/006/549/647/small_2x/404-landing-page-free-vector.jpg"
        alt="404 Illustration"
        className="w-[35%] mb-8 mt-16"
      />

      {/* Description */}
      <p className="text-5xl text-gray-800 mb-4 mt-36">
        We're sorry, but the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default Team;
