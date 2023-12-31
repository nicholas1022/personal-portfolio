import React, { useContext } from 'react';
import { motion } from 'framer-motion';

//Import contexts
import { ThemeContext } from '../../containers/ThemeContext';
import { Text } from '../../containers/Language';

//Import components
import Utils from './Utils';
//Import animations
import { textVariants, containerVariants } from '../../animation';

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header
      className={`mx-8 min-h-12 md:w-9/12 md:m-auto lg:mt-8 my-4 lg:mb-0 lg:min-h-screen xxl:min-h-0 xxl:mb-12`}
    >
      <Utils />
      <motion.div
        variants={containerVariants}
        animate="show"
        initial="hidden"
        className="flex flex-col lg:mt-5 relative"
      >
        <div className="overflow-hidden mb-6 lg:text-7xl ">
          {/*CTA TITLE */}
          <motion.h1
            variants={textVariants}
            className={
              theme === 'light'
                ? ` text-light-secondary lg:text-7xl md:text-6xl block`
                : `  text-dark-secondary lg:text-7xl md:text-6xl block  `
            }
          >
            <Text section="CTASection" tid="header" />
          </motion.h1>
        </div>
        <div>
          <div className="overflow-hidden my-2 lg:text-5xl">
            {/*CTA CONTENT */}
            <motion.h2
              variants={textVariants}
              className={
                theme === 'light'
                  ? `text-light-primary my-2 md:text-4xl lg:text-5xl block `
                  : ` text-dark-primary my-2 md:text-4xl lg:text-5xl block`
              }
            >
              <Text section="CTASection" tid="content" />
            </motion.h2>
          </div>
          <div
            className={
              theme === 'light'
                ? `bg-light-secondary my-1 h-1 w-64 md:w-4/5 md:h-3 lg:w-5/6 lg:h-3 mt-5`
                : `w-64 my-1 h-1 bg-dark-secondary mt-5 lg:h-2 lg:w-1/2 `
            }
          ></div>
        </div>
      </motion.div>
    </header>
  );
};

export default Hero;
