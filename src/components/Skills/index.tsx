import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../containers/ThemeContext';

import skillData from '../../data/skills.json';
import Subheading from './Subheading';
import Skill from './Skill';
import useScroll from '../useScroll';

import { Text } from '../../containers/Language';

//Import animations
import { containerVariants } from '../../animation';

type Props = {
  handleClick: (url?: string) => void;
};

interface ISkill {
  title: string;
  techStack: {
    firstRow: string[];
    secondRow: string[];
    thirdRow: string[];
  }
}

const SkillsSection = (props: Props) => {
  // const { handleClick } = props;
  const skillsContent = Text({ section: 'skillsSection' });
  const threshold = [0.07, 0];
  const [element, controls] = useScroll(threshold);
  const { theme } = useContext(ThemeContext);

  const textContent = skillsContent.skills;

  const skills: ISkill[] = skillData.map((skill: ISkill, i) => {
    //Adds text content to skills data
    skill.title = textContent[i].name;
    return skill;
  });

  return (
    <motion.section
      initial="hidden"
      animate={controls}
      ref={element}
      variants={containerVariants}
      className={`bg-${theme}-bg px-8 py-4 pb-24 mt-7 flex flex-col`}
    >
      <div className="md:w-auto md:m-0 lg:w-3/4 lg:m-auto">
        <Subheading />
        <div className='ml-40 grid grid-cols-2'>
        {skills.map((skill, key) => {
          return (
            <Skill
              details={skill}
              i={key}
              key={key}
              theme={theme!}
            />
          );
        })}
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
