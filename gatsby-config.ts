import path from 'path';
import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `GeorgePustovit.dev`,
    siteUrl: `https://www.georgepustovit.dev`,
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-dts-css-modules',
    'gatsby-plugin-tsconfig-paths',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Oswald\:300,400,700`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@pages': path.resolve(__dirname, 'src/pages'),
          '@styles': path.resolve(__dirname, 'src/styles'),
          '@assets': path.resolve(__dirname, 'src/assets'),
        },
        extensions: ['js', 'ts', 'tsx'],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/icons/favicon.png',
      },
    },
  ],
};

export default config;
