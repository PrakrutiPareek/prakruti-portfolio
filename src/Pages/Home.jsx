import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-sky-900 
                 min-h-screen flex flex-col justify-center items-center
                 text-center text-white px-4 ml-64"
    >
      <h2 className="text-5xl font-bold mb-6 text-sky-400">Hi, I’m Prakruti</h2>
      <h5 className="text-2xl font-bold mb-6 text-sky-400">
        Turning Science into Software 🚀
      </h5>
      <p className="text-xl text-gray-300 mb-8 max-w-3xl">
        From Science Technician to Web Developer — my journey in tech begins
        here.
      </p>
      <Link
        to="/projects"
        className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded shadow-md hover:shadow-lg transition"
      >
        View My Projects
      </Link>
    </section>
  );
}

export default Home;
