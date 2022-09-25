import React from 'react';
import type { HeadFC } from 'gatsby';

import Header from '@components/Header';
import Intro from '@components/Intro';

const MainPage = () => {
  return (
    <main>
      <Header />
      <Intro />
    </main>
  );
};

export default MainPage;

export const Head: HeadFC = () => <title>George Pustovit</title>;
