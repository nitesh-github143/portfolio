import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      name: "Social Media App",
      image:
        "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29jaWFsJTIwbWVkaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      description:
        "Crafted a captivating social media platform for my portfolio. Empowered users to connect and share while honing my full-stack development skills in a real-world project.",
      techStack: ["React", "Tailwind CSS", "Node", "Express", "MongoDB"],
      githubLink: "https://github.com/nitesh-github143/instagram",
      liveLink: "https://n7gram.netlify.app/login",
    },
    {
      name: "E-commerce",
      image:
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGUlMjBjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
      description:
        "Elevated my portfolio with an e-commerce gem. Showcased my ability to create seamless online shopping experiences and handle complex transactions through a dynamic and polished web application.",
      techStack: ["React", "Tailwind CSS", "Node", "Express", "MongoDB"],
      githubLink: "https://github.com/nitesh-github143/e-commerce",
      liveLink: "https://n7-ecomm.netlify.app/login",
    },
    // Add more projects as needed
  ];

  return (
    <div
      className="border-t border-gray-800 bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(https://images.unsplash.com/photo-1622050756792-5b1180bbb873?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHByb2plY3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60)",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        top: 0,
      }}
    >
      <h1 className="text-white text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-black rounded-lg shadow-lg p-6 w-full sm:w-auto transform transition-transform duration-300 hover:scale-105 flex flex-col justify-between"
          >
            <div>
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-md animate-pulse mb-4"
              />
              <h3 className="text-white text-xl font-semibold">
                {project.name}
              </h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <div className="mt-4 flex flex-wrap items-center">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-indigo-600 text-white px-2 py-1 rounded-md mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <Link
                to={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:text-indigo-400 mr-3"
              >
                View Code
              </Link>
              <Link
                to={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:text-indigo-400"
              >
                Live Demo
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
