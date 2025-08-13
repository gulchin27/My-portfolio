import React from "react";
import "./style.css";

const Project = () => {
  const projects = [
    { title: "BW Calculate", url: "https://bw-calculate.vercel.app/" },
    { title: "To Do List", url: "https://lasttask-tau.vercel.app/login" },
  ];

  return (
    <div className="flex flex-col gap-4 p-6 max-w-lg mx-auto">
      {projects.map((project, index) => (
        <a
          key={index}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg  p-4"
        >
          <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600">
            {project.title}
          </h3>
          <p className="text-sm text-gray-500">{project.url}</p>
        </a>
      ))}
    </div>
  );
};

export default Project;
