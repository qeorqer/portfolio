import React from 'react';

type propsType = {
  projectCard: {
    title: string;
    description: string;
    technologies: string[];
  };
};

const ProjectCard: React.FC<propsType> = ({ projectCard }) => (
  <li className="bg-gray-800 rounded py-8 px-7 hover:-translate-y-3 transition-transform duration-500 ease-in-out cursor-pointer">
    <h3 className="text-xl font-bold">{projectCard.title}</h3>
    <p className="my-3 text-slate-200">{projectCard.description}</p>
    <ul className="flex">
      {projectCard.technologies.map((tech) => (
        <li key={tech} className="mr-1 text-sm text-slate-200 tracking-wide">
          {tech}
        </li>
      ))}
    </ul>
  </li>
);

export default ProjectCard;
