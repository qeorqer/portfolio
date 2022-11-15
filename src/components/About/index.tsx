import React from 'react';

const About: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-4 font-light" id="about">
      <div className="container flex flex-col py-16 md:py-20 lg:py-24 md:px-20 lg:px-32 xl:px-44 2xl:px-52">
        <div className="text-3xl font-bold text-right">
          <h2 className="withLine right inline" data-aos="fade-up">
            About
          </h2>
        </div>
        <p className="text-left mt-10 max-w-xl" data-aos="fade">
          I am developer in the third generation(yep, even my grandma used to
          code) from Ukraine who is passionate about his job. I enjoy solving
          business problems with the help of programming and, especially, I love
          to create the things that live in the web. I positionate myself as a
          full stack developer that can create front end, back end for your
          application and deal with the databases as well as servers.
        </p>
        <p className="text-left mt-10 max-w-xl" data-aos="fade">
          For the years spent in this field I had a lot of different experience.
          I worked with a bunch of small businesses as a freelance developer,
          participated in creating huge learning platform and worked in a
          startup where I had to deal with all stages of development. So I have
          a solid understanding what the business needs from programmers.
        </p>
      </div>
    </section>
  );
};

export default About;
