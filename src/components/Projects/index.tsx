import React from 'react';

import ProjectCard from '@components/ProjectCard';

import { projects } from './utils';

const Projects: React.FC = () => {
  return (
    <section className="bg-gray-900 font-light text-white text-center py-16 md:py-20 lg:py-24">
      <div
        className="container flex flex-col pt-16 md:pt-20 lg:pt-24 md:px-20 lg:px-32 xl:px-44 2xl:px-52"
        id="projects"
      >
        <div className="text-3xl font-bold text-right mb-10">
          <h2 className="withLine right inline" data-aos="fade-up">
            <span id="projects" />
            Projects
          </h2>
        </div>
        <p className="text-2xl text-emerald-500" data-aos="fade">
          Some things I’ve built
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 text-left">
          {projects.map((project) => (
            <ProjectCard key={project.title} projectCard={project} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
