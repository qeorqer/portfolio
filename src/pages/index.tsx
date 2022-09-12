import React from 'react';
import type { HeadFC } from 'gatsby';

import Header from '../components/Header';

const MainPage = () => {
  return (
    <main>
      <Header />
    </main>
  );
};

export default MainPage;

export const Head: HeadFC = () => <title>George Pustovit</title>;
