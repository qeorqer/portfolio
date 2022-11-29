import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="oswald-regular"
      rel="preload"
      href="/fonts/oswald-regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="oswald-bold"
      rel="preload"
      href="/fonts/oswald-bold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
  ]);
};
