import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';

import {images} from '../../constants'
import './About.scss';

const abouts = [
  { title: 'C# and .Net Full Stack Developer', description: 'I am a good full stack developer', imgUrl: images.about01},
  { title: 'Sitecore CMS Specialist', description: 'I have experience implementing, upgrading and migrating sitecore solutions', imgUrl: images.sitecorelogoexperience},
  { title: 'DevOps Engineer', description: 'I am an experienced devops engineer', imgUrl: images.devopsengineer},
  { title: 'Freelancer', description: 'I can take the initiative and deliver projects', imgUrl: images.about04},
]

const About = () => {
  return (
    <>
    <h2 className='head-text'>
      <span>Rethink..</span>
      <span> Reimagine..</span>        
      <span> Reinvent</span>
    </h2>

    <div className='app__profiles'>
      {abouts.map((about, index) => (
        <motion.div
          whileInView={{opacity: 1}}
          whileHover={{ scale: 1.1}}
          transition={{duration: 0.5, type: 'tween'}}
          className='app__profile-item'
          key={about.title + index}
        >
          <img src={about.imgUrl} alt={about.title}/>
          <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
          <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
        </motion.div>
      ))}
    </div>
    </>
  )
}

export default About
