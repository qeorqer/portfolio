import React from 'react';

import { socials } from './utils';
import * as styles from './style.module.css';

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white pb-4 text-center h-[70px]">
    <div className={`flex mx-auto justify-center mb-2 ${styles.socials}`}>
      {socials.map((social) => (
        <a
          href={social.link}
          target="_blank"
          key={social.link}
          className="mx-2"
          rel="noreferrer"
        >
          <social.icon
            width={24}
            height={24}
            fill={social.shouldFill ? '#fff' : null}
            className={`transition duration-300 ${
              social.shouldFill ? styles.fill : styles.stoke
            }`}
          />
        </a>
      ))}
    </div>
    <p className="text-sm">George Pustovit © {new Date().getFullYear()}</p>
  </footer>
);

export default Footer;
