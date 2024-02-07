import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const About: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAboutMe {
        edges {
          node {
            sectionTitle
            aboutMeText {
              raw
            }
          }
        }
      }
    }
  `);

  const aboutMeDocument = JSON.parse(data.allContentfulAboutMe.edges[0].node.aboutMeText.raw);

  return (
    <section className="bg-gray-900 text-white py-4 font-light" id="about">
      <div className="container flex flex-col py-16 md:py-20 lg:py-24 md:px-20 lg:px-32 xl:px-44 2xl:px-52">
        <div className="text-3xl font-bold text-right">
          <h2 className="withLine right inline" data-aos="fade-up">
            {data.allContentfulAboutMe.edges[0].node.sectionTitle}
          </h2>
        </div>
        {documentToReactComponents(aboutMeDocument, {
          renderNode: {
            'paragraph': (node, children) => (
              <p className="text-left mt-10 max-w-xl" data-aos="fade">
                {children}
              </p>
            ),
          },
        })}
      </div>
    </section>
  );
};

export default About;
