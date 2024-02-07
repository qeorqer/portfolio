import React, { FC, useEffect } from 'react';
import type { HeadFC } from 'gatsby';
import AOS from 'aos';
import { Slide, ToastContainer } from 'react-toastify';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';

import Header from '@components/Layout/Header';
import Intro from '@components/Sections/Intro';
import About from '@components/Sections/About';
import Experience from '@components/Sections/Experience';
import Projects from '@components/Sections/Projects';
import Contacts from '@components/Sections/Contacts';
import Footer from '@components/Layout/Footer';

const MainPage: FC = () => {
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
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        limit={1}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
    </>
  );
};

export default MainPage;

export const Head: HeadFC = () => (
  <>
    <title>George Pustovit</title>
    <meta
      name="description"
      content="Personal site of George Pustovit, Freelance web developer."
    />
    <meta name="robots" content="index, follow" />
  </>
);
