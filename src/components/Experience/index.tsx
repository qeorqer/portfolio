import React from 'react';

const Experience: React.FC = () => {
  return (
    <section
      className="bg-gray-900 text-white py-4 text-center"
      id="experience">
      <div className="container font-light h-screen flex flex-col py-40 md:px-20 lg:px-32 xl:px-44 2xl:px-52">
        <div className="text-3xl font-bold text-left">
          <h2 className="withLine left inline">Experience</h2>
        </div>
        <p className="text-left mt-10">The cool story about me</p>
      </div>
    </section>
  );
};

export default Experience;
