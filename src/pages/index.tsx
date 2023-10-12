import React, { FC, useEffect } from 'react';
import type { HeadFC } from 'gatsby';
import AOS from 'aos';
import { Slide, ToastContainer } from 'react-toastify';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';

import Header from '@components/Header';
import Intro from '@components/Intro';
import About from '@components/About';
import Experience from '@components/Experience';
import Projects from '@components/Projects';
import Contacts from '@components/Contacts';
import Footer from '@components/Footer';

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
