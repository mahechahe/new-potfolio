import React, { useState } from "react";
import { AiFillEye, AiFillGithub, AiOutlineStar } from "react-icons/ai";
import {images} from '../../constants/index'
import { motion } from "framer-motion";
import { AppWrap } from '../../wraper/AppWrap'
import { MotionWrap } from "../../wraper/MotionWrap";
import "./Work.scss";

const initialStateData = [
  {
    title: 'The Movie database',
    description: 'Website that lists the best movies of the moment',
    link: 'https://movies-tb.vercel.app/',
    github: 'https://github.com/mahechahe/movies-tb',
    image: images.movieDataBase
  },
  {
    title: 'Netflix clone',
    description: 'Netflix clone with firebase authentication',
    link: 'https://netflix-copy-two.vercel.app/',
    github: 'https://github.com/mahechahe/netflix-copy',
    image: images.netflixClone
  },
  {
    title: 'Dashboard app',
    description: 'Application with multiple actions and components so you can interact',
    link: 'https://sycfusion-dashpoard-app.netlify.app/',
    github: '',
    image: images.dashboardApp
  },
  {
    title: 'Giffy',
    description: 'Search your favorite gifs and discover the latest trends. a fully optimized website and deployed in Vercel',
    link: 'https://giff-react.vercel.app/',
    github: 'https://github.com/mahechahe/giffy-react',
    image: images.giffy
  },
  {
    title: 'Todo list',
    description: 'All list made with React and its hooks. Focusing mainly on its useReducer hook',
    link: 'https://todo-list-reducer.vercel.app/',
    github: 'https://github.com/mahechahe/todo-list-reducer',
    image: images.todoList
  },
  {
    title: 'Travel advisor',
    description: 'Search for restaurants, bars and tourist areas from anywhere in the world. Google Developer API',
    link: 'https://travel-advisor-rosy.vercel.app/',
    github: 'https://github.com/mahechahe/travel_advisor',
    image: images.travelAdvisor
  },
  {
    title: 'Cryptoverse',
    description: 'The latest cryptocurrency news. FAST API Cryptocurrencies, Using React and MUI',
    link: 'https://crypto-api-gray.vercel.app/',
    github: 'https://github.com/mahechahe/CryptoApi',
    image: images.cryptoVerse
  },
  {
    title: 'Youtube clone',
    description: 'Youtube clone using React and its consuming its API in FAST API. React and Using React-hooks',
    link: 'https://rad-bavarois-95e2c2.netlify.app/',
    github: 'https://github.com/mahechahe/CryptoApi',
    image: images.youtube
  },
  {
    title: 'Social Media App',
    description: 'Social network web application. In this application developed with the MERN stack',
    link: 'https://preeminent-tulumba-b6c7d1.netlify.app/',
    github: 'https://github.com/mahechahe/CryptoApi',
    image: images.socialMedia
  },
  {
    title: 'React Native App ProNef',
    description: 'Buy, store, collect NFTs, exchange & earn crypto. Join 25+ million people using ProNef Marketplace',
    link: 'https://showcase-native-gules.vercel.app/',
    github: 'https://github.com/mahechahe/showcase-native',
    image: images.scenesNative
  },
]


const Work = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Works</span> Section
      </h2>

      <div className="app__work-filter">
        {["MERN Stack", "Web App", "React JS", "Javascript", "REST API"].map(
          (item, index) => (
            <div
              key={index}
              className={`app__work-filter-item app__flex p-text `}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {initialStateData.map((data, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={data.image} alt={data.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={data.link} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={data.github} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{data.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {data.description}
              </p>

              <div className="app__work-tag app__flex">
                <p className="p-text" style={{color: 'yellow'}}><AiOutlineStar/></p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};


export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);
