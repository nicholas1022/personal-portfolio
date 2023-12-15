import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { isBrowser, isMobile } from 'react-device-detect';

import { Text } from '../../containers/Language';
import projectData from '../../data/projects.json';

type Props = {
  details: {
    title: string;
    summary?: string;
    firstLink: string;
  
  };
  i: number;
  handleClick: (url?: string) => void;
  theme: string
};

const Project = (props: Props) => {
  const {
    details,
    theme
  } = props;

  const { i } = props;
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
          i === projectData.length - 1
          ? 'flex flex-col mt-12 duration-700 md:flex-col md:m-0 lg:mt-2 lg:w-7/12 lg:m-auto lg:flex-row'
          : 'flex flex-col my-12 duration-700 md:flex-col md:m-0 lg:mt-2 lg:w-7/12 lg:m-auto lg:flex-row lg:mb-2 '
      }
    >
      <div className="flex flex-col items-start flex-shrink-0 ">

      {!isMobile && (
          <h4
            className={
              `text-${theme}-primary mb-3 font-medium lg:self-start lg:mt-3 lg:mb-0`
            }
          >
            {details.title}
          </h4>
        )}  

        <p className={`text-${theme}-primary text-lg font-light `}>{details.summary}</p>
        <div
          className={
            'flex w-full max-w-sm self-center lg:max-w-none'
          }
        >
          <a
            aria-label="Visit repository on GitHub"
            href={details.firstLink}
            target="_blank"
            rel="noreferrer"
            className={
              `flex-grow h-8 text-${theme}-primary  bg-${theme === 'white' ? 'black' : 'white'}-primary border ${theme === 'white' ? 'border-black' : 'border-white'}-primary mx-1 flex flex-col justify-center items-center w-24 lg:h-8 lg:flex-grow-0 md:flex-grow-0`
            }
          >
            <Text section="projectsSection" tid="btn1" />
          </a>
          
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
