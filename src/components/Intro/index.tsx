import React from 'react';
import { navigate } from 'gatsby';

import ArrowIcon from '@assets/icons/arrow.svg';

const Intro: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-4 text-center font-light text-2xl">
      <div className="container h-screen flex items-center justify-center flex-col">
        <p>
          Hi, my name is George and I am exactly the web developer you have been
          looking for
        </p>
        <div className="relative top-[150px]">
          <button
            className="border-emerald-500 border-2 p-2.5 rounded-full"
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
