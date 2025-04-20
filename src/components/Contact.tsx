import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center">
              <i className="fas fa-phone text-white"></i>
            </div>
            <p className="text-white font-medium text-[16px]">
              +91 7981737055
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center">
              <i className="fas fa-envelope text-white"></i>
            </div>
            <p className="text-white font-medium text-[16px]">
              thummakarthikeya11@gmail.com
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center">
              <i className="fas fa-map-marker-alt text-white"></i>
            </div>
            <p className="text-white font-medium text-[16px]">
              Hyderabad, India
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center">
              <i className="fab fa-linkedin text-white"></i>
            </div>
            <a
              href="https://linkedin.com/in/karthikeya-thumma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium text-[16px] hover:text-secondary"
            >
              linkedin.com/in/karthikeya-thumma
            </a>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Contact, "contact") 