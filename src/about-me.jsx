"use client"

import { useState, useEffect } from "react"
import "./about-me.css"

// Download icon component
const DownloadIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path
      d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
)

// Skill progress bar component
const SkillBar = ({ skill, percentage, delay = 0 }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage)
    }, delay)

    return () => clearTimeout(timer)
  }, [percentage, delay])

  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{skill}</span>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-bar-bg">
          <div
            className="skill-bar-fill"
            style={{
              width: `${animatedPercentage}%`,
              transition: "width 1.5s ease-out",
            }}
          />
        </div>
      </div>
    </div>
  )
}

const AboutMe = () => {
  const skills = [
    { name: "AI/ML", percentage: 95, delay: 200 },
    { name: "Web Development", percentage: 85, delay: 400 },
    { name: "Data Science", percentage: 90, delay: 600 },
    { name: "Android Development", percentage: 80, delay: 800 },
    { name: "Problem Solving", percentage: 85, delay: 1000 },
    { name: "Graphic Designing", percentage: 95, delay: 1200 },
  ]

  const handleDownloadCV = () => {
    // Add your CV download logic here
    console.log("Downloading CV...")
    window.open('https://drive.google.com/file/d/1-YJHpag7BCvCkl5K9yv-7KW8HfY7iiPa/view?usp=sharing', '_blank')
    // Example: window.open('/path-to-your-cv.pdf', '_blank')
  }

  return (
    <section id="about" className="about-me">

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline">
            <div className="underline-left"></div>
            <div className="underline-center"></div>
            <div className="underline-right"></div>
          </div>
        </div>

        {/* Content */}
        <div className="about-content">
          {/* Left Content */}
          <div className="about-text">
            <p className="description">
              Results-driven Computer Science and Social Sciences undergraduate at IIIT-Delhi with demonstrated expertise in AI/ML, 
              backend development, and data science. Proven track record in building scalable applications, 
              implementing LLM integrations, and delivering end-to-end full-stack solutions that drive measurable business outcomes. 
              Combines strong technical proficiency with strategic business acumen to solve complex problems and contribute to organizational growth. 
              Seeking opportunities to leverage interdisciplinary skills and innovative mindset in dynamic, technology-focused environments.
            </p>

            {/* Download CV Button with Hover Effect */}
            <button className="download-cv-button" onClick={handleDownloadCV}>
              <DownloadIcon />
              Download My CV
            </button>
          </div>

          {/* Right Content - Skills */}
          <div className="skills-section">
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill.name} percentage={skill.percentage} delay={skill.delay} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
