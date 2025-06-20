"use client"

import { useState, useEffect, useRef } from "react"
import "./Experience.css"

// Individual experience item component
const ExperienceItem = ({ experience, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false)
  const isLeft = index % 2 === 0

  return (
    <div
      className={`experience-item ${isLeft ? "left" : "right"} ${isVisible ? "visible" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Timeline dot */}
      <div className={`timeline-dot ${isHovered ? "hovered" : ""}`}>
        <div className="dot-inner"></div>
      </div>

      {/* Experience content */}
      <div className={`experience-content ${isHovered ? "hovered" : ""}`}>
        <div className="experience-header">
          <h3 className="job-title">{experience.title}</h3>
          <div className="duration-badge">
            <span className="duration">{experience.duration}</span>
            <span className="year">{experience.year}</span>
          </div>
        </div>
        <p className="job-description">{experience.description}</p>

        {/* Hover overlay effect */}
        <div className={`content-overlay ${isHovered ? "active" : ""}`}></div>
      </div>

      {/* Timeline connector line */}
      <div className={`timeline-connector ${isLeft ? "left-connector" : "right-connector"}`}></div>
    </div>
  )
}

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState([])
  const sectionRef = useRef(null)

  const experiences = [

    {
      title: "Founder at Tap&Draw Pvt. Ltd.",
      duration: "4Years",
      year: "2021",
      description:
        " It is a creative clothing startup founded by me and my co-founder during our school days, driven by a passion for design and self-expression. What began as a small initiative has grown into a brand that blends unique artwork with quality apparel, aiming to redefine personalized fashion for the youth. At Tap&Draw, every piece tells a story — bold, original, and proudly homegrown.",
    },

    {
      title: "Head Coordinator at CyFuse IIIT Delhi ",
      duration: "2 Years",
      year: "2023",
      description:
        "Led key club initiatives, including coding hackathons, boot camps, and tech conferences for students",
    },
    
    {
      title: "Web Developer at iuraverse Technologies Pvt. Ltd. ",
      duration: "3 Months",
      year: "2023",
      description:
        "During my internship as a Web Developer, I gained hands-on experience building responsive and user-friendly web applications using React.js, CSS, and HTML. I contributed to developing dynamic interfaces, implementing modern design principles, and ensuring cross-browser compatibility. This role helped me strengthen my front-end and back-end development skills and collaborate effectively within a development team.",
    },
    {
      title: "Research Intern at Infosys CAI",
      duration: "3 Months",
      year: "2025",
      description:
        "Working on cutting-edge research focused on the verbalization and summarization of Knowledge Graphs using large language models (LLMs) like GPT-2, BART and T5. Exploring the integration of generative AI with semantic web data to advance natural language generation techniques. Handling RDF datasets such as WebNLG and developing Python scripts and APIs to efficiently process, chunk, and verbalize triple-based data.",
    },
  ]

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.dataset.index)
            setVisibleItems((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.3 },
    )

    const items = document.querySelectorAll(".experience-item")
    items.forEach((item, index) => {
      item.dataset.index = index
      observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">My Experience</h2>
          <div className="title-underline">
            <div className="underline-left"></div>
            <div className="underline-center"></div>
            <div className="underline-right"></div>
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline-container">
          {/* Vertical timeline line */}
          <div className="timeline-line"></div>

          {/* Experience items */}
          <div className="timeline-content">
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={index}
                experience={experience}
                index={index}
                isVisible={visibleItems.includes(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
