"use client"

import { useState, useEffect } from "react"
import "./MyPortfolio.css"

// Portfolio item component
const PortfolioItem = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 100)

    return () => clearTimeout(timer)
  }, [index])

  return (
    <div
      className={`portfolio-item ${isVisible ? "visible" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={`portfolio-card ${isHovered ? "hovered" : ""}`}>
        {/* Image container */}
        <div className="image-container h-[300px]">
          <img src={item.image || "/placeholder.svg"} alt={item.title} className="portfolio-image" />

          {/* Overlay */}
          <div className={`portfolio-overlay ${isHovered ? "active" : ""}`}>
            <div className="overlay-content">
              <h3 className="portfolio-title">{item.title}</h3>
              <p className="portfolio-category">{item.category}</p>
              <div className="portfolio-actions">
                {/* <button className="action-btn view-btn">
                  <ViewIcon />
                </button> */}
                <button className="action-btn link-btn">
                  <a href={`${item.link}`} target="_blank" rel="noopener noreferrer">
                  <LinkIcon />
                  </a>
                </button>
              </div>
            </div>
          </div>

          {/* Hover effects */}
          <div className={`hover-border ${isHovered ? "active" : ""}`}></div>
        </div>

        {/* Category badge */}
        <div className={`category-badge ${item.category.toLowerCase()}`}>{item.category}</div>
      </div>
    </div>
  )
}

// Filter button component
const FilterButton = ({ category, isActive, onClick }) => (
  <button className={`filter-btn ${isActive ? "active" : ""}`} onClick={() => onClick(category)}>
    {category}
  </button>
)

// Icon components
const ViewIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="3" strokeWidth="2" />
  </svg>
)

const LinkIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const MyPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All")
  const [filteredItems, setFilteredItems] = useState([])

  const portfolioItems = [
    {
      id: 1,
      title: "SpaCy-Ollama Text Processing Pipeline",
      link: "https://github.com/vipul1009/llm_Assignment",
      category: "AI/ML",
      image: "/image.png",
      description: "This project implements a system for detecting named entities in a user prompt using spaCy NER and paraphrasing the prompt using the deepseek-r1:1.5b model via Ollama's REST API. The system uses FastAPI for the backend and updates a provided HTML GUI to display results.",
    },
    {
      id: 2,
      title: "Data Analysis Project",
      link: "https://github.com/vipul1009/Movie-DataAnalysis",
      category: "DATA",
      image: "/image2.jpg",
      description: "This project analyzes a dataset of over 9,000 movies to gain insights into movie trends, popularity, and audience preferences. The dataset includes details like movie titles, release years, genres, popularity scores, and vote counts. The analysis is performed using Python, with data preprocessing, cleaning, and visualization to extract meaningful insights.",
    },
    {
      id: 3,
      title: "Interact Video Confrencing Android App",
      link: "https://github.com/vipul1009/Interact",
      category: "APP-DEV",
      image: "/WhatsApp Image 2025-06-20 at 14.28.46_17eb003f.jpg",
      description: "--",
    },
    {
      id: 4,
      title: "SchoolDekho - Data Integration",
      link: "https://github.com/vipul1009/SchoolDekho",
      category: "DATA",
      image: "/schoolDekho Logo - Professional Blue-Green Aesthetic.png",
      description: "--",
    },
    {
      id: 5,
      title: "ONLINE-STORE-MANAGEMENT",
      link: "https://github.com/vipul1009/ONLINE-STORE-MANAGEMENT",
      category: "DATA",
      image: "/DBMS.png",
      description: "--",
    },
    {
      id: 6,
      title: "JAVA Game - Stick Hero",
      link: "https://github.com/vipul1009/JAVA-Game-Stick-Hero",
      category: "JAVA",
      image: "/StickHero.png",
      description: "--",
    },
    {
      id: 7,
      title: "Aventis Consultancy Website (Freelancing Project)",
      link: "https://github.com/vipul1009/create-react-app",
      category: "WEB-DEV",
      image: "/WhatsApp Image 2025-06-20 at 16.50.16_13f18391.jpg",
      description: "--",
    },
    {
      id: 8,
      title: "Flight-Tracker (Kotlin-JetpackCompose) ",
      link: "https://github.com/vipul1009/FlightTrackerApp2",
      category: "APP-DEV",
      image: "/unnamed.png",
      description: "--", 
    },
    {
      id: 9,
      title: "Matrix Calculator & WiFi Logger ",
      link: "https://github.com/vipul1009/MatrixSensingApp2",
      category: "APP-DEV",
      image: "/matrix-icon-design-vector.jpg",
      description: "--", 
    },
  ]

  const filterCategories = ["All", "AI/ML", "DATA", "APP-DEV", "WEB-DEV", "JAVA"]

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredItems(portfolioItems)
    } else {
      setFilteredItems(portfolioItems.filter((item) => item.category === activeFilter))
    }
  }, [activeFilter])

  const handleFilterClick = (category) => {
    setActiveFilter(category)
  }

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <div className="title-underline">
            <div className="underline-left"></div>
            <div className="underline-center"></div>
            <div className="underline-right"></div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="filter-container">
          {filterCategories.map((category) => (
            <FilterButton
              key={category}
              category={category}
              isActive={activeFilter === category}
              onClick={handleFilterClick}
            />
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredItems.map((item, index) => (
            <PortfolioItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MyPortfolio
