import React from 'react'
import './hero.css'
import Header from '../header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import NumberCounter from 'number-counter'

import { motion } from 'framer-motion'

const Hero = () => {
  const trnasition = { type: 'spring', duration: 30 }
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className='hero' id='home'>
      <div className="blur hero-blur" />
      <div className="left-h">
        <Header />

        <div className="the-best-add">
          <motion.div
            initial={{ opacity: 0, left: '238px' }}
            animate={{ opacity: 1, left: '10px' }}
            transition={{ ease: 'easeInOut', type: 'tween', duration: 3 }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className='stroke-text'>shape </span><span>your</span>
          </div>
          <div><span>ideal body</span></div>
          <div>
            <span>Here we will help you to shape and build your ideal body and live up your life to the fullest</span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay='3' preFix="+" />
            </span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={930} delay='3' preFix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={10} delay='3' preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        <div className="hero-buttons">
          <div className="btn">Get Started</div>
          <div className="btn">Learn More</div>
        </div>
      </div>

      <div className="right-h">
        <div className="btn">Join Now</div>

        <motion.div
          initial={{ opacity: 0, right: '-1rem' }}
          animate={{ opacity: 1, right: '4rem' }}
          transition={{ ease: 'easeInOut', type: 'tween', duration: 3 }}
          className="heart-rate">
          <img src={heart} alt="" />
          <span>Heart Rate </span><span>116 bpm</span>
        </motion.div>

        <img src={hero_image} alt="" className='hero-image' />
        <motion.img
          initial={{ opacity: 0, right: '85%' }}
          animate={{ opacity: 1, right: '95%' }}
          transition={{ ease: 'easeInOut', type: 'tween', duration: 3 }}
          src={hero_image_back} alt="" className='hero-image-back' />

        <motion.div
          initial={{ opacity: 0, right: '40rem' }}
          animate={{ opacity: 1, right: '35rem' }}
          transition={{ ease: 'easeInOut', type: 'tween', duration: 3 }}
          className="calories">
          <img src={calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>
              <NumberCounter end={220} start={150} delay='3' preFix="+" /> kcal
            </span>
          </div>
        </motion.div>

      </div>

    </div>
  )
}

export default Hero