import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { isBrowser, isMobile } from 'react-device-detect';
import TechStack from './TechStack';
import projectData from '../../data/projects.json';

type Props = {
  details: {
    title: string;
    techStack: {
      firstRow: string[];
      secondRow: string[];
      thirdRow: string[];
    };
  };
  i: number;
  theme: string;
};

const Project = (props: Props) => {
  const {
    details,
    theme
  } = props;

  const { i } = props;

  //Setup for scroll animation
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 0.47, 0.57], [0, -50, -90]);
  const yDesktop = useTransform(
    scrollYProgress,
    [0, 0.47, 0.62, 0.85, 1],
    [0, -130, -175, -280, -330]
  );

  return (
    <motion.div
      style={isBrowser ? { y: yDesktop } : { y }}
      className={
        //Removes margin bottom on last rendered project
        i === projectData.length - 1
          ? 'flex flex-col mt-12 duration-700 md:flex-col md:m-0 lg:mt-2 lg:w-7/12 lg:m-auto lg:flex-row'
          : 'flex flex-col my-12 duration-700 md:flex-col md:m-0 lg:mt-2 lg:w-7/12 lg:m-auto lg:flex-row lg:mb-2 '
      }
    >
   
      <div
        className={`flex flex-col mb-4 md:w-3/5 md:m-auto md:mt-20 lg:w-3/4 lg:flex-shrink-0 lg:mt-0 lg:mb-0 `}
      >
        {!isMobile && (
          <h4
            className={
              `text-${theme}-primary mb-3 font-medium lg:self-start lg:mt-3 lg:mb-0`
            }
          >
            {details.title}
          </h4>
        )}  

        <TechStack theme={theme} content={details.techStack} />
      </div>
    </motion.div>
  );
};

export default Project;
