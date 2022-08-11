import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wraper/AppWrap'
import {images} from '../../constants/index'
import {MotionWrap} from '../../wraper/MotionWrap'
import ReactTooltip from 'react-tooltip';
import './Skills.scss'

const experience = [
  {
    year: '2022',
    works: [
      {
        name: 'Frontend Developer',
        desc: 'Developer Frontend whit React and Typescript. Technical lider: Juan Guillermo Moreno, contact: +57 321 2779501',
        company: 'COcapitalizaciones'
      }
    ]
  }
]


const skills = [
    {
      name: 'Javascript',
      image: images.javascript
    },
    {
      name: 'Typescript',
      image: images.typescript
    },
    {
      name: 'Html',
      image: images.html
    },
    {
      name: 'Css',
      image: images.css
    },
    {
      name: 'React',
      image: images.react
    },
    {
      name: 'npm',
      image: images.npm
    },
    {
      name: 'Node JS',
      image: images.node
    },
    {
      name: 'Express JS',
      image: images.express
    },
    {
      name: 'Mongo DB',
      image: images.mongo
    },
    {
      name: 'Firebase',
      image: images.firebase
    },
    {
      name: 'Tailwind',
      image: images.tailwind
    },
    {
      name: 'Git',
      image: images.git
    },
    {
      name: 'Github',
      image: images.github
    },
    {
      name: 'Redux Toolkit',
      image: images.redux
    },
]

const Skills = () => {


  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: '#edf2f8' }}
              >
                <img src={skill.image} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="app__skills-exp">
          {experience.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
