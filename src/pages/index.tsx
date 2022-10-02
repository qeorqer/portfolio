import React from 'react';
import type { HeadFC } from 'gatsby';

import Header from '@components/Header';
import Intro from '@components/Intro';
import About from '@components/About';
import Experience from '@components/Experience';
import Projects from '@components/Projects';
import Contacts from '@components/Contacts';
import Footer from '@components/Footer';

const MainPage = () => {
  return (
    <main className="bg-gray-900">
      <Header />
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Contacts />
      <Footer />
    </main>
  );
};

export default MainPage;

export const Head: HeadFC = () => <title>George Pustovit</title>;
