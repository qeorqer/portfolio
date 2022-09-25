import React, { useState } from 'react';

import Button from '@components/Button';

const Intro: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-4 text-center">
      <div className="container font-light p-5 h-screen flex items-center justify-center text-2xl flex-col">
        <h2>
          Hi, my name is George and I am exactly the web developer you have been
          looking for
        </h2>
        <div className="relative top-[150px]">
          <Button text="learn more" onClick={() => {}} />
        </div>
      </div>
    </section>
  );
};

export default Intro;
