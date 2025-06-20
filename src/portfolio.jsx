"use client"

import { useState, useRef } from "react"
import "./Portfolio.css"
// import { GithubIcon } from 'lucide-react';


// Icon components (you can replace these with actual icon libraries or SVGs)

const LinkedinIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const GithubIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.617-4.033-1.617-.546-1.386-1.333-1.755-1.333-1.755-1.089-.746.083-.73.083-.73 1.205.085 1.839 1.238 1.839 1.238 1.07 1.834 2.807 1.304 3.492.997.107-.774.418-1.304.762-1.603-2.665-.306-5.467-1.333-5.467-5.93 0-1.31.469-2.38 1.236-3.22-.124-.304-.535-1.525.117-3.177 0 0 1.008-.322 3.3 1.23a11.47 11.47 0 0 1 6 0c2.29-1.552 3.296-1.23 3.296-1.23.653 1.652.243 2.873.12 3.177.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.624-5.475 5.93.43.37.813 1.102.813 2.22v3.293c0 .32.216.693.825.576C20.565 22.096 24 17.596 24 12.297 24 5.67 18.627 0.297 12 0.297z" />
  </svg>
)
const MenuIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
    <path
      d="M5 12h14M12 5l7 7-7 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Portfolio = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const imageRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!imageRef.current) return

    const rect = imageRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY

    const rotateX = (mouseY / (rect.height / 2)) * -10
    const rotateY = (mouseX / (rect.width / 2)) * 10

    setTilt({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <div id="home" className="portfolio">
      {/* Header */}
      <header className="header">
        <div className="logo">Portfolio.</div>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <a href="#home" className="nav-link active">
            HOME
          </a>
          <a href="#about" className="nav-link">
            ABOUT
          </a>
          <a href="#experience" className="nav-link">
            EXPERIENCE
          </a>
          <a href="#portfolio" className="nav-link">
            PROJECTS
          </a>
          <a href="#services" className="nav-link">
            SERVICES
          </a>
          {/* <a href="#" className="nav-link">
            BLOG
          </a> */}
          <a href="#contact" className="nav-link">
            CONTACT
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="menu-button">
          <MenuIcon />
        </button>
      </header>

      {/* Hero Section */}
      <main className="hero">
        {/* Left Content */}
        <div className="hero-content">
          <p className="greeting">Hello, I am</p>
          <h1 className="name">VIPUL MISHRA</h1>
          <p className="title">Software Developer & AI/ML Engineer</p>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/vipulmishra22596/" className="social-link">
              <LinkedinIcon />
            </a>
            <a href="https://github.com/vipul1009" className="social-link">
              <GithubIcon />
            </a>
          </div>

          {/* Portfolio Button with Hover Effect */}
          <a href="#portfolio" className="portfolio-button">
            View My Projects
            <ArrowRightIcon />
          </a>
        </div>

        {/* Right Content - Profile Image with 3D Tilt Effect */}
        <div className="hero-image-container">
          <div
            ref={imageRef}
            className="image-wrapper"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <div className="image-container">
              <img
                src="\profile_pic-removebg-preview-removebg-preview.png"
                alt="Vipul Mishra - Software Developer & AI/ML Engineer"
                className="profile-image"
              />
              {/* Subtle overlay for enhanced 3D effect */}
              <div
                className="image-overlay"
                style={{
                  opacity: Math.abs(tilt.x) + Math.abs(tilt.y) > 0 ? 0.3 : 0,
                  transition: "opacity 0.1s ease-out",
                }}
              />
            </div>

            {/* Floating shadow effect */}
            <div
              className="floating-shadow"
              style={{
                transform: `translateY(${Math.abs(tilt.x) * 2 + Math.abs(tilt.y) * 2 + 10}px) scale(0.95)`,
                opacity: 0.3 + (Math.abs(tilt.x) + Math.abs(tilt.y)) * 0.02,
                transition: "all 0.1s ease-out",
              }}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Portfolio
