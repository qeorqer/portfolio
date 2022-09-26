import React from 'react';
import type { HeadFC } from 'gatsby';

import Header from '@components/Header';
import Intro from '@components/Intro';
import About from '@components/About';
import Experience from '@components/Experience';

const MainPage = () => {
  return (
    <main>
      <Header />
      <Intro />
      <About />
      <Experience />
    </main>
  );
};

export default MainPage;

export const Head: HeadFC = () => <title>George Pustovit</title>;
