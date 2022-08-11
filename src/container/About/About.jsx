import React from 'react'
import { AppWrap } from '../../wraper/AppWrap'
import {motion} from 'framer-motion'
import {images} from '../../constants'
import './About.scss'

const About = () => {

  const abouts = [
    {title: 'Web Development', description: 'Enthusiastic and self-taught in web development. Eager to grow in the industry and be able to develop quality software.', imgUrl: images.webDev},
    {title: 'Web Design', description: 'Implementation of a good web design. Taking into account the standards of the web and the requirements of the client..', imgUrl: images.webDesign},
    {title: 'Frontend Development', description: 'Frontend developer focused mainly on the React framework, management of web technologies and current standards.', imgUrl: images.frontend},
    {title: 'Backend Development', description: 'Some knowledge in backend development. Creation of REST API, non-relational data-based connection and business logic.', imgUrl: images.backend},
    {title: 'Good Teamwork', description: 'Good interpersonal relationships. I have adequate communication and attention to be able to grow as a team.', imgUrl: images.teamwork},
  ]

  return (
    <>
      <h2 className='head-text' style={{marginTop: '20px'}}>About <span> me</span></h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
            <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(About, 'about')
