import React from 'react';

import FolderIcon from '@assets/icons/folder.svg';
import GithubIcon from '@assets/icons/github.svg';
import LinkIcon from '@assets/icons/link.svg';

import * as styles from './style.module.css';

type propsType = {
  projectCard: {
    title: string;
    description: string;
    technologies: string[];
    url: string;
    repositoryUrl?: string;
  };
};

const ProjectCard: React.FC<propsType> = ({ projectCard }) => (
  <li
    className={`${styles.card} bg-gray-800 rounded py-8 px-7 cursor-pointer duration-500 hover:-translate-y-3`}
    data-aos="custom-fade-down"
  >
    <div className="flex justify-between mb-3 items-center">
      <div className={styles.folder}>
        <FolderIcon />
      </div>
      <div className={styles.URLs}>
        {projectCard.repositoryUrl && (
          <a href={projectCard.repositoryUrl} target="_blank" rel="noreferrer">
            <GithubIcon />
          </a>
        )}
        {projectCard.url && (
          <a
            href={projectCard.url}
            target="_blank"
            rel="noreferrer"
            aria-label={projectCard.url}
          >
            <LinkIcon />
          </a>
        )}
      </div>
    </div>
    <h3 className="text-xl font-bold transition-colors duration-300">
      <a href={projectCard.url} target="_blank" rel="noreferrer">
        {projectCard.title}
      </a>
    </h3>
    <p className="mt-3 mb-5 text-slate-200">{projectCard.description}</p>
    <ul className="flex">
      {projectCard.technologies.map((tech) => (
        <li key={tech} className="mr-2 text-sm text-slate-200 tracking-wide">
          {tech}
        </li>
      ))}
    </ul>
  </li>
);

export default ProjectCard;
