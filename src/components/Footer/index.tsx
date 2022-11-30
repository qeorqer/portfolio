import React from 'react';

import { socials } from './utils';
import * as styles from './style.module.css';

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white pb-4 text-center h-[70px]">
    <div className={`flex mx-auto justify-center mb-2 ${styles.socials}`}>
      {socials.map((social, index) => (
        <a
          href={social.link}
          target="_blank"
          key={social.link}
          className="mx-2"
          rel="noreferrer"
          data-aos="custom-fade-down"
          data-aos-offset="-300"
          data-aos-delay={(index + 1) * 100 + 100}
          aria-label={social.link}
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
    <p
      className="text-sm"
      data-aos="fade"
      data-aos-offset="-320"
      data-aos-delay={socials.length * 100 + 200}
    >
      George Pustovit © {new Date().getFullYear()}
    </p>
  </footer>
);

export default Footer;
