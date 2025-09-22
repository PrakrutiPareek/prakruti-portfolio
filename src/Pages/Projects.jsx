import React from "react";

function Projects() {
  const projects = [
    {
      title: "Tic-Tac-Toe Game",
      image: "/Images/tic-tac-toe_screenshot.png",
      description:
        "Simple Tic-Tac-Toe game built with HTML, CSS, and JavaScript.",
      github: "https://github.com/PrakrutiPareek/tic-tac-toe-game",
      demo: "https://tic-tac-toe-game-pp.netlify.app",
    },
    {
      title: "FAQ Accordion",
      image: "/Images/faq-accordion_screenshot.png",
      description:
        "An interactive FAQ accordion built with HTML, CSS, and JavaScript. Features smooth expand/collapse transitions.",
      github: "https://github.com/PrakrutiPareek/faq-accordion",
      demo: "https://faq-accordion-pp.netlify.app",
    },
    {
      title: "Travel Journal",
      image: "/Images/travel-journal_screenshot.png",
      description:
        "My first React project. Displays travel destinations in a card layout using props and components.",
      github: "https://github.com/PrakrutiPareek/travel-journal",
      demo: "https://travel-journal-pp.netlify.app",
    },
    {
      title: "Tenzies Game 🎲",
      image: "/Images/tenzies_screenshot.png",
      description:
        "A fun dice game built with React. Roll until all dice match, with hold functionality, timer, and roll counter.",
      github: "https://github.com/PrakrutiPareek/tenzies-game",
      demo: "https://tenzies-pp.netlify.app",
    },
    {
      title: "Assembly: Endgame ⚛️",
      image: "/Images/assembly_screenshot.png",
      description:
        "A React project demonstrating advanced component design and state management.",
      github: "https://github.com/PrakrutiPareek/assembly-endgame",
      demo: "https://assembly-endgame-pp.netlify.app",
    },
    {
      title: "Van Life 🚐",
      image: "/Images/van-life_screenshot.png",
      description:
        "A React project with React Router, nested routes, and dynamic pages simulating a van rental experience.",
      github: "https://github.com/PrakrutiPareek/Van_Life",
      demo: "https://van-life-pp.netlify.app",
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
            <div className="flex justify-center h-48 overflow-hidden mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl mb-4"
              />
            </div>
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
