import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { projects } from '../constants'
import { SectionWrapper } from '../hoc'

interface Tag {
  name: string
  color: string
}

interface Project {
  name: string
  description: string
  tags: Tag[]
  link?: string
}

const ProjectCard = ({ index, project }: { index: number; project: Project }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
      <div className="relative w-full h-[230px]">
        <div className="w-full h-full bg-black-200 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 flex justify-center items-center">
            <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <p className="mt-2 text-secondary text-[14px]">{project.description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}

    {project.link && (
        <div className="mt-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-[#12053c] text-white rounded-lg hover:bg-blue-900 transition"
          >
            Navigate to Project
          </a>
        </div>
      )}
      </div>
    </div>
  </motion.div>
)

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects showcase my skills and experience through real-world examples of my work.
          Each project is briefly described with links to the code repositories and live demos.
          It reflects my ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            project={project}
          />
          
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Projects, "projects") 