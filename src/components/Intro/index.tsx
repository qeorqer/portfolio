import React from 'react';
import { navigate } from 'gatsby';

import ArrowIcon from '@assets/icons/arrow.svg';

import * as styles from './style.module.css';

const Intro: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-4 text-center font-light text-2xl">
      <div className="container h-screen flex items-center justify-center flex-col">
        <p className={styles.intro}>
          Hi, my name is George, and I am exactly the web developer you have
          been looking for
        </p>
        <div>
          <button
            className={styles.button}
            onClick={() => navigate('#about')}
            type="button"
          >
            <ArrowIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
