import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a passionate Computer Science Engineering student with a strong foundation in full-stack development.
        Through my internship at Teleparadigm Networks, I've gained hands-on experience with modern technologies
        like NestJS, React, PHP, and WordPress. I have a proven track record of developing innovative solutions,
        from healthcare systems to environmental monitoring platforms. My background in both Army and Navy NCC
        has instilled in me strong leadership qualities, discipline, and teamwork skills. I'm always eager to
        learn new technologies and take on challenging projects that can make a positive impact.
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about") 