import React, { useState } from 'react';
//Import icons
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiCss3,
  SiHtml5,
  SiTypescript,
  SiSpring,
  SiPython,
  SiCsharp,
  SiJunit5,
  SiCucumber,
  SiSelenium,
  SiApachespark,
  SiMysql,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiRedis,
  SiApachehadoop,
  SiAmazonaws,
  SiMicrosoftazure,
  SiAzuredevops,
  SiJenkins,
  SiDocker,
  SiKubernetes,
  SiApachemaven,
  SiGradle,
  SiSwagger,
  SiApachekafka,
  SiJirasoftware,
  SiConfluence,
  SiLinux,
  SiJquery
} from 'react-icons/si';
import {
  FaJava
} from 'react-icons/fa';
import {
  TbApi
} from 'react-icons/tb';
// import { CgSmartphone } from 'react-icons/cg';
//Import text context
// import { Text } from '../../containers/Language';
import { IconType } from 'react-icons';

type Props = {
  content: {
    firstRow: string[];
    secondRow: string[];
    thirdRow: string[];
  };
  theme: string;
};

type IconsInfo = {
  name: string;
  display: string;
  icon: IconType;
};

const TechStack = (props: Props) => {
  //Creates state for onhover feature
  const [isShown, setIsShown] = useState(false);
  const [techToDisplay, setTechToDisplay] = useState('');

  const { content, theme } = props;

  const icons = {
    firstRow: [
      
      {
        name: 'Javascript',
        display: 'JavaScript ES6',
        icon: SiJavascript,
      },
      {
        name: 'Typescript',
        display: 'TypeScript',
        icon: SiTypescript,
      },
      {
        name: 'Java',
        display: 'Java',
        icon: FaJava,
      },
      {
        name: 'Python',
        display: 'Python',
        icon: SiPython,
      },
      {
        name: 'Csharp',
        display: 'C#',
        icon: SiCsharp,
      },
      {
        name: 'Mysql',
        display: 'MySQL',
        icon: SiMysql,
      },
      {
        name: 'Postgresql',
        display: 'PostgreSql',
        icon: SiPostgresql,
      },
      {
        name: 'Microsoftsqlserver',
        display: 'Microsoft Sql Server',
        icon: SiMicrosoftsqlserver,
      },
      {
        name: 'Amazonaws',
        display: 'AWS',
        icon: SiAmazonaws,
      },
      {
        name: 'Microsoftazure',
        display: 'Azure',
        icon: SiMicrosoftazure,
      },
      {
        name: 'Apachemaven',
        display: 'Apache Maven',
        icon: SiApachemaven,
      },
      {
        name: 'Gradle',
        display: 'Gradle',
        icon: SiGradle,
      }
  
    ],
    secondRow: [
      {
        name: 'Html5',
        display: 'HTML5',
        icon: SiHtml5,
      },
      {
        name: 'Css3',
        display: 'CSS3',
        icon: SiCss3,
      },
      {
        name: 'Tailwindcss',
        display: 'Tailwind CSS',
        icon: SiTailwindcss,
      },
      {
        name: 'Mongodb',
        display: 'MongoDB',
        icon: SiMongodb,
      },
      {
        name: 'Redis',
        display: 'Redis',
        icon: SiRedis,
      },
      {
        name: 'Apachehadoop',
        display: 'Apache Hadoop',
        icon: SiApachehadoop,
      },
      {
        name: 'Azuredevops',
        display: 'Azure DevOps',
        icon: SiAzuredevops,
      },
      {
        name: 'Jenkins',
        display: 'Jenkins',
        icon: SiJenkins,
      },
      {
        name: 'Restapi',
        display: 'REST API',
        icon: TbApi,
      },
      {
        name: 'Swagger',
        display: 'Swagger',
        icon: SiSwagger,
      },
      {
        name: 'Apachekafka',
        display: 'Kafka',
        icon: SiApachekafka,
      }
    ],
    thirdRow: [
      {
        name: 'React',
        display: 'React.JS',
        icon: SiReact,
      },
      {
        name: 'Git',
        display: 'Git',
        icon: SiGit,
      },
      {
        name: 'Spring',
        display: 'Spring',
        icon: SiSpring,
      },
      {
        name: 'Junit5',
        display: 'JUnit',
        icon: SiJunit5,
      },
      {
        name: 'Spark',
        display: 'Spark',
        icon: SiApachespark,
      },
      {
        name: 'Cucumber',
        display: 'Cucumber',
        icon: SiCucumber,
      },
      {
        name: 'Selenium',
        display: 'Selenium',
        icon: SiSelenium,
      },
      {
        name: 'Docker',
        display: 'Docker',
        icon: SiDocker,
      },
      {
        name: 'Kubernetes',
        display: 'Kubernetes',
        icon: SiKubernetes,
      },
      {
        name: 'Linux',
        display: 'Linux',
        icon: SiLinux,
      },
      {
        name: 'Jirasoftware',
        display: 'Jira',
        icon: SiJirasoftware,
      },
      {
        name: 'Confluence',
        display: 'Confluence',
        icon: SiConfluence,
      },
      {
        name: 'Jquery',
        display: 'jQuery',
        icon: SiJquery,
      }
    ],
  };

  const renderIcons = (origin: string[], icons: IconsInfo[]) => {
    let array: IconsInfo[] = [];
    origin.forEach((tech) => {
      let foundIcon = icons.find((icon) => tech === icon.name);
      if (foundIcon) {
        array.push(foundIcon);
      }
    });
    return array;
  };

  function handleMouseEnter(tech: string) {
    setIsShown(true);
    setTechToDisplay(tech);
  }
  return (
    <div className="flex flex-col w-60 min-w-8 min-h-12">
      <div className={'text-3xl'}>
        <div className={'flex'}>
          {renderIcons(
            content.firstRow,
            icons.firstRow
          ).map((icon, key) => {
            return (
              <icon.icon
                onMouseEnter={() => handleMouseEnter(icon.display)}
                onMouseLeave={() => setIsShown(false)}
                onClick={() => handleMouseEnter(icon.display)}
                className={`m-1 text-${theme}-primary `}
                key={key}
              />
            );
          })}
        </div>
        <div className={'flex'}>
          {renderIcons(content.secondRow, icons.secondRow).map((icon, key) => {
            return (
              <icon.icon
                onMouseEnter={() => handleMouseEnter(icon.display)}
                onMouseLeave={() => setIsShown(false)}
                onClick={() => handleMouseEnter(icon.display)}
                className={`m-1 text-${theme}-primary `}
                key={key}
              />
            );
          })}
        </div>
        <div className={'flex'}>
          {renderIcons(content.thirdRow, icons.thirdRow).map((icon, key) => {
            return (
              <icon.icon
                onMouseEnter={() => handleMouseEnter(icon.display)}
                onMouseLeave={() => setIsShown(false)}
                onClick={() => handleMouseEnter(icon.display)}
                className={`m-1 text-${theme}-primary `}
                key={key}
              />
            );
          })}
        </div>
      </div>
      {isShown && (
        <p className={`text-${theme}-primary  font-light text-xs m-1`}>{techToDisplay}</p>
      )}
    </div>
  );
};

export default TechStack;
