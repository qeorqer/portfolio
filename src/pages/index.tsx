import React, { useEffect } from 'react';
import type { HeadFC } from 'gatsby';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '@components/Header';
import Intro from '@components/Intro';
import About from '@components/About';
import Experience from '@components/Experience';
import Projects from '@components/Projects';
import Contacts from '@components/Contacts';
import Footer from '@components/Footer';

const MainPage = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </>
  );
};

export default MainPage;

export const Head: HeadFC = () => <title>George Pustovit</title>;
