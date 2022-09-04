import * as React from 'react';
import type { HeadFC } from 'gatsby';

const MainPage = () => {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </main>
  );
};

export default MainPage;

export const Head: HeadFC = () => <title>Home Page</title>;
