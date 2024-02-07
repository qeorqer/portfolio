import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import ProjectCard from "@components/Sections/ProjectCard";


type ProjectsSectionData = {
  sectionTitle: string;
  sectionSubtitle: string;
  projects: Project[];
}

const Projects: React.FC = () => {
  const data = useStaticQuery(graphql`
 query {
  allContentfulProjects {
    edges {
      node {
      sectionTitle 
      sectionSubtitle
      projects {
        title
        description {
          description
        }
        technology
        url
        repositoryUrl
      }
      }
    }
  }
}
  `);
  const projectsSectionData: ProjectsSectionData = data.allContentfulProjects.edges[0].node;

  return (
    <section className="bg-gray-900 font-light text-white text-center py-16 md:py-20 lg:py-24">
      <div
        className="container flex flex-col pt-16 md:pt-20 lg:pt-24 md:px-20 lg:px-32 xl:px-44 2xl:px-52"
        id="projects"
      >
        <div className="text-3xl font-bold text-right mb-10">
          <h2 className="withLine right inline" data-aos="fade-up">
            <span id="projects" />
            {projectsSectionData.sectionTitle}
          </h2>
        </div>
        <p className="text-2xl text-emerald-500" data-aos="fade">
          {projectsSectionData.sectionSubtitle}
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 text-left">
          {projectsSectionData.projects.map((project) => (
            <ProjectCard key={project.title} projectCard={project} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
