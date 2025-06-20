"use client"

import { useState, useEffect } from "react"
import "./MyServices.css"

// Service card component
const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 150)

    return () => clearTimeout(timer)
  }, [index])

  return (
    <div
      className={`service-card ${isVisible ? "visible" : ""} ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Background effects */}
      <div className={`card-background ${isHovered ? "active" : ""}`}></div>
      <div className={`card-glow ${isHovered ? "active" : ""}`}></div>

      {/* Icon container */}
      <div className={`icon-container ${isHovered ? "hovered" : ""}`}>
        <div className="icon-background"></div>
        <service.icon className={`service-icon ${isHovered ? "animated" : ""}`} />
      </div>

      {/* Content */}
      <div className="service-content">
        <h3 className={`service-title ${isHovered ? "highlighted" : ""}`}>{service.title}</h3>
        <p className={`service-description ${isHovered ? "visible" : ""}`}>{service.description}</p>
      </div>

      {/* Hover border effect */}
      <div className={`hover-border ${isHovered ? "active" : ""}`}></div>

      {/* Floating particles effect */}
      <div className={`particles ${isHovered ? "active" : ""}`}>
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
      </div>
    </div>
  )
}

// Icon components
const WebDevelopmentIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <polyline points="14,2 14,8 20,8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="16" y1="13" x2="8" y2="13" strokeWidth="2" strokeLinecap="round" />
    <line x1="16" y1="17" x2="8" y2="17" strokeWidth="2" strokeLinecap="round" />
    <polyline points="10,9 9,9 8,9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const WebDesignIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <circle cx="12" cy="12" r="3" strokeWidth="2" />
    <path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      strokeWidth="2"
    />
  </svg>
)

const SocialMediaIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth="2" />
    <line x1="9" y1="9" x2="9" y2="15" strokeWidth="2" strokeLinecap="round" />
    <line x1="15" y1="9" x2="15" y2="15" strokeWidth="2" strokeLinecap="round" />
    <line x1="9" y1="12" x2="15" y2="12" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const PhotographyIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="13" r="4" strokeWidth="2" />
  </svg>
)

const GraphicDesignIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <line x1="18" y1="20" x2="18" y2="10" strokeWidth="2" strokeLinecap="round" />
    <line x1="12" y1="20" x2="12" y2="4" strokeWidth="2" strokeLinecap="round" />
    <line x1="6" y1="20" x2="6" y2="14" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const AutomationIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Gear 1 */}
    <path d="M6.5 14a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm0-2c-.5 0-1 .1-1.5.3l-.4-1.1-2 .6.4 1.1a4.8 4.8 0 0 0-.9 1.4l-1.2-.3-.6 2 1.2.3a4.8 4.8 0 0 0 0 1.6l-1.2.3.6 2 1.2-.3a4.8 4.8 0 0 0 .9 1.4l-.4 1.1 2 .6.4-1.1c.5.2 1 .3 1.5.3s1-.1 1.5-.3l.4 1.1 2-.6-.4-1.1a4.8 4.8 0 0 0 .9-1.4l1.2.3.6-2-1.2-.3a4.8 4.8 0 0 0 0-1.6l1.2-.3-.6-2-1.2.3a4.8 4.8 0 0 0-.9-1.4l.4-1.1-2-.6-.4 1.1c-.5-.2-1-.3-1.5-.3Zm11-9a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm0-2c-.5 0-1 .1-1.5.3l-.4-1.1-2 .6.4 1.1a4.8 4.8 0 0 0-.9 1.4l-1.2-.3-.6 2 1.2.3a4.8 4.8 0 0 0 0 1.6l-1.2.3.6 2 1.2-.3a4.8 4.8 0 0 0 .9 1.4l-.4 1.1 2 .6.4-1.1c.5.2 1 .3 1.5.3s1-.1 1.5-.3l.4 1.1 2-.6-.4-1.1a4.8 4.8 0 0 0 .9-1.4l1.2.3.6-2-1.2-.3a4.8 4.8 0 0 0 0-1.6l1.2-.3-.6-2-1.2.3a4.8 4.8 0 0 0-.9-1.4l.4-1.1-2-.6-.4 1.1c-.5-.2-1-.3-1.5-.3Z" />
  </svg>
);

const AppDevIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7 2C5.9 2 5 2.9 5 4v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H7Zm5 18.5c-.8 0-1.5-.7-1.5-1.5S11.2 17.5 12 17.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5Zm3-4.5H9V5h6v11Z" />
  </svg>
);

const DataCleaningIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Sparkle for "cleaning" */}
    <path d="M5 2a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2H6v1a1 1 0 1 1-2 0V6H3a1 1 0 1 1 0-2h1V3a1 1 0 0 1 1-1Z" />

    {/* Table/Grid Icon - data cleaning context */}
    <path d="M3 10a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6Zm2 0v2h2v-2H5Zm0 4v2h2v-2H5Zm4-4v2h2v-2H9Zm0 4v2h2v-2H9Z" />

    {/* Chart Bars - data visualization */}
    <rect x="15" y="11" width="2" height="7" rx="1" />
    <rect x="18.5" y="8" width="2" height="10" rx="1" />
    <rect x="22" y="5" width="2" height="13" rx="1" />
  </svg>
);

const EventManagementIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Calendar base */}
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 8h18" fill="none" stroke="white" strokeWidth="1" />

    {/* Calendar rings */}
    <rect x="7" y="2" width="2" height="4" rx="1" />
    <rect x="15" y="2" width="2" height="4" rx="1" />

    {/* Microphone (symbol of speaker or host) */}
    <path d="M12 12a2 2 0 0 0 2-2V7a2 2 0 1 0-4 0v3a2 2 0 0 0 2 2Z" />
    <path d="M10 13h4v1a2 2 0 0 1-4 0v-1Z" />

    {/* Gear symbol (tech/operations) */}
    <path d="M19.5 18a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
    <path d="M18 15.5v-1M18 20.5v-1M16.6 17.1l-.7-.7M19.4 19.9l-.7-.7M16.6 19.9l.7-.7M19.4 17.1l-.7.7" />
  </svg>
);




const ContentWritingIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <circle cx="12" cy="12" r="4" strokeWidth="2" />
    <path
      d="M16 8v5a3 3 0 0 0 6 0v-5a10 10 0 1 0-20 0v5a3 3 0 0 0 6 0V8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const MyServices = () => {
  const services = [
    {
      id: 1,
      title: "Data Scraping",
      description:
        "Automated data extraction from websites for research, lead generation, and analytics.",
      icon: WebDevelopmentIcon,
    },
    {
      id: 2,
      title: "Web-Dev & App-Dev",
      description:
        "Custom, responsive websites and applications built with modern frameworks for businesses, portfolios, or startups.",
      icon: AppDevIcon,
    },
    {
      id: 3,
      title: "Data Cleaning & Visualization",
      description:
        "Transform messy data into actionable insights with clean datasets and stunning visual dashboards.",
      icon: DataCleaningIcon,
    },
    {
      id: 4,
      title: "Automation Scripts",
      description:
        "Boost productivity with custom Python/JS automation tools for repetitive tasks and workflows.",
      icon: AutomationIcon,
    },
    {
      id: 5,
      title: "Graphic Design",
      description:
        "Creative design solutions including logos, posters, banners, and social media graphics.",
      icon: GraphicDesignIcon,
    },
    {
      id: 6,
      title: "Tech Event Management",
      description:
        "End-to-end planning, coordination, and technical support for tech meetups, hackathons, and webinars.",
      icon: EventManagementIcon,
    },
  ]

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">My Services</h2>
          <div className="title-underline">
            <div className="underline-left"></div>
            <div className="underline-center"></div>
            <div className="underline-right"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MyServices
