import React, { useState } from 'react'
import './testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'
import rightArrow from '../../assets/rightArrow.png';
import leftArrow from '../../assets/leftArrow.png';

import { motion } from 'framer-motion'

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  const trnasition = { type: 'spring', duration: 30 }

  return (
    <div className="testimonials" id='testemonials'>

      <div className="left-t">
        <span>Testimonials</span>
        <span className='stroke-text'>What they</span>
        <span>say about us</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: '-100px' }}
          animate={{ opacity: 1, x: '0px' }}
          exit={{ opacity: 0, x: '100px' }}
          transition={{ ease: 'easeInOut', type: 'tween', duration: 1 }}
        > {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span style={{ color: 'var(--orange)' }}>
            {testimonialsData[selected].name}
          </span> {" "}
          - {testimonialsData[selected].status}
        </span>
      </div>

      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: '-100px' }}
          animate={{ opacity: 1, x: '0px' }}
          transition={{ ease: 'easeInOut', type: 'tween', duration: 2 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: '100px' }}
          animate={{ opacity: 1, x: '0px' }}
          transition={{ ease: 'easeInOut', type: 'tween', duration: 2 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: '100px' }}
          animate={{ opacity: 1, x: '0px' }}
          exit={{ opacity: 0, x: '-100px' }}
          transition={{ ease: 'easeInOut', type: 'tween', duration: 1 }}
          src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1)
            }}
            src={leftArrow} alt="" />
          <img
            onClick={() => {
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1)
            }}
            src={rightArrow} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Testimonials