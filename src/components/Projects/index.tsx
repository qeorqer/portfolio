import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import { projects } from './utils';
import * as styles from './style.module.css';

const Projects: React.FC = () => {
  return (
    <section className="bg-gray-900 font-light text-white text-center">
      <div
        className="container min-h-screen flex flex-col pt-40 md:px-20 lg:px-32 xl:px-44 2xl:px-52"
        id="projects"
      >
        <div className="text-3xl font-bold text-right mb-10">
          <h2 className="withLine right inline" data-aos="fade-up">
            Projects
          </h2>
        </div>
        <p className="text-xl">Some of my recent works</p>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          className="w-full mt-10"
          breakpoints={{
            450: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation]}
          navigation
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title} className={styles.slide}>
              <img src={project.preview.default} alt="project" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
