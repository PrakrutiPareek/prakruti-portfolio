import React from "react";

function About() {
  return (
    <section
      id="about"
      className="bg-gray-100 min-h-screen flex items-center justify-center px-6 ml-64"
    >
      <div className="max-w-3xl text-center">
        <h3 className="text-3xl font-semibold mb-6 text-sky-500">About Me</h3>
        <p className="text-lg mb-4 text-gray-700 leading-relaxed">
          I’m{" "}
          <span className="font-semibold text-sky-600">Prakruti Pareek</span>, a
          former <span className="font-medium">Science Technician</span>{" "}
          transitioning into the world of tech. With a solid background in
          research and analysis, I now bring that same curiosity and precision
          into <span className="font-medium">web development</span>.
        </p>
        <p className="text-lg mb-4 text-gray-700 leading-relaxed">
          Currently, I’m focused on{" "}
          <span className="font-medium">React, JavaScript, HTML, and CSS</span>,
          building projects to sharpen my frontend skills and exploring modern
          frameworks to stay industry-ready.
        </p>
        <p className="text-lg mb-6 text-gray-700 leading-relaxed">
          I’m open to{" "}
          <span className="font-medium">
            junior developer roles, internships, and freelance projects
          </span>
          , where I can contribute, grow, and make an impact through code.
        </p>
        <a
          href="/Prakruti_Pareek_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded shadow-md">
            View Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default About;
