import React from "react";

function Projects() {
  const projects = [
    {
      title: "tic-tac-toe-game",
      image: "/images/todo.png",
      description:
        "Simple Tic-Tac-Toe game built with HTML, CSS, and JavaScript.",
      github: "https://github.com/PrakrutiPareek/tic-tac-toe-game",
      demo: "https://tic-tac-toe-game-pp.netlify.app/",
    },
    {
      title: "Weather App",
      image: "/images/weather.png",
      description:
        "Fetches weather data from an API and displays it dynamically.",
      github: "https://github.com/prakruti/weather-app",
      demo: "https://prakruti-weather.netlify.app",
    },
    {
      title: "Recipe Finder",
      image: "/images/recipe.png",
      description:
        "Search recipes using API and filter results based on ingredients.",
      github: "https://github.com/prakruti/recipe-finder",
      demo: "https://prakruti-recipe.netlify.app",
    },
    {
      title: "Portfolio Website",
      image: "/images/portfolio.png",
      description:
        "My personal React portfolio showcasing projects and resume.",
      github: "https://github.com/prakruti/portfolio",
      demo: "https://prakruti-portfolio.netlify.app",
    },
    {
      title: "Recipe Finder",
      image: "/images/recipe.png",
      description:
        "Search recipes using API and filter results based on ingredients.",
      github: "https://github.com/prakruti/recipe-finder",
      demo: "https://prakruti-recipe.netlify.app",
    },
    {
      title: "Portfolio Website",
      image: "/images/portfolio.png",
      description:
        "My personal React portfolio showcasing projects and resume.",
      github: "https://github.com/prakruti/portfolio",
      demo: "https://prakruti-portfolio.netlify.app",
    },
  ];
  return (
    <section className="bg-gray-50 min-h-screen ml-64 px-8 py-16">
      <h3 className="text-3xl font-semibold mb-8 text-violet-500">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-xl shadow hover:shadow-lg transition"
          >
            {/* <img
              src={project.image}
              alt={project.title}
              className="rounded-xl mb-4"
            /> */}
            <h4 className="text-xl font-semibold text-sky-500">
              {project.title}
            </h4>
            <p className="text-sm mb-2 text-gray-700">{project.description}</p>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-violet-500 hover:text-violet-700"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="text-violet-500 hover:text-violet-700"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
