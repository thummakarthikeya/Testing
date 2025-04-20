import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { skills } from '../constants'
import { SectionWrapper } from '../hoc'

const SkillCard = ({ skill, index }: { skill: string; index: number }) => (
  <motion.div
    variants={fadeIn("right", "spring", 0.1 * index, 0.75)}
    className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
  >
    <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[100px] flex justify-center items-center">
      <h3 className="text-white text-[20px] font-bold text-center">{skill}</h3>
    </div>
  </motion.div>
)

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My technical abilities</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7">
        {skills.map((skill, index) => (
          <div className="w-28 h-28" key={`skill-${index}`}>
            <SkillCard skill={skill} index={index} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Skills, "skills") 