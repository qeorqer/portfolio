import React, { useEffect, useRef } from "react";
import { graphql, navigate, useStaticQuery } from "gatsby";

import ArrowIcon from "@assets/icons/arrow.svg";

import * as styles from "./style.module.css";
import { drawCanvas } from "./utils";

const Intro: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAboutMe {
        edges {
          node {
            pageTitle
          }
        }
      }
    }
  `);

  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      drawCanvas(canvasRef.current);
    }
  }, [canvasRef]);

  const { pageTitle } = data.allContentfulAboutMe.edges[0].node;

  return (
    <section className="border-b-2 border-solid border-emerald-500 text-white text-center font-light text-2xl">
      <div className="container h-screen flex items-center justify-center flex-col">
        <p className={styles.intro}>
          {pageTitle}
        </p>
        <div>
          <button
            className={styles.button}
            onClick={() => navigate("#about")}
            type="button"
            aria-label="Go to about section"
          >
            <ArrowIcon />
          </button>
        </div>
      </div>
      <canvas ref={canvasRef} className="absolute top-0 -z-10" />
    </section>
  );
};

export default Intro;
