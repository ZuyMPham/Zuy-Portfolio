import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import {AppWrap, MotionWrap} from '../../wrapper';
import { urlFor, client } from '../../client';

import './about.scss';

// const abouts = [
//   {title: 'Web Development', description: 'I am the best Front end and Back end developer. Software Engineer, Programming' ,imgUrl: images.about01},
//   {title: 'Versatile capabilities', description: 'I am the most resourceful person in the world. I will make it work' ,imgUrl: images.about02},
//   {title: 'High Achiever', description: 'Make my own discipline. Every goal I set I achived it' ,imgUrl: images.about03},
//   {title: 'Creative Ideas', description: 'Help you building your amazing things with my wild mind.' ,imgUrl: images.about04}
// ];
const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);
  return (
    <>
      <h2  className="head-text">I Know that <span>Good Design</span><br />means  <span>Good Business</span></h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            {/* <img src={urlFor(about.imgUrl)} alt={about.title} /> */}
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
      </>
  )
}
export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);