import React, { useContext } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ThemeContext } from '../../containers/ThemeContext';

import Hero from '../../components/Hero';
import About from '../../components/About';
import ProjectsSection from '../../components/Projects';
import Triangle from '../../components/Triangle';
import Footer from '../../components/Footer';
import LazyLoad from 'react-lazyload';
import SkillsSection from '../../components/Skills';

const Home = () => {
  const { theme } = useContext(ThemeContext);

  function handleClick(url?: string) {
    if (url === 'email') {
      const newWindow = window.open(
        'mailto:nicholas_1022@hotmail.com',
        '_blank',
        'noopener,noreferrer'
      );
      if (newWindow) newWindow.opener = null;
    } else {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      if (newWindow) newWindow.opener = null;
    }
  }

  return (
    <HelmetProvider>
      <div
        className={
          theme === 'light'
            ? 'bg-light-bg duration-700'
            : `bg-dark-bg duration-700`
        }
      >
        <Helmet
          bodyAttributes={{
            class:
              theme === 'light'
                ? 'bg-light-bg duration-700 z-30'
                : `bg-dark-bg duration-700 z-30`,
          }}
        />
        <Hero />
        <About />
        <LazyLoad height={800} offset={150}>
          <SkillsSection handleClick={handleClick} />
          <ProjectsSection handleClick={handleClick} />
          <Triangle />
        </LazyLoad>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Home;
