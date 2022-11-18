import Button from '@components/Button';
import { HeadFC, navigate } from 'gatsby';
import * as React from 'react';

const NotFoundPage = () => {
  return (
    <main className="text-white text-3xl flex justify-center items-center flex-col h-screen">
      <p>There is no such page</p>
      <Button
        text="Go Home"
        onClick={() => navigate('/')}
        customStyles="mt-3 w-28"
      />
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
