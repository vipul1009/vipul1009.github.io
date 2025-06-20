"use client"

import { useState } from "react"
import "./Footer.css"

// Contact card component
const ContactCard = ({ contact, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleCardClick = () => {
    if (contact.type === "phone") {
      window.open(`tel:${contact.value}`, "_self")
    } else if (contact.type === "email") {
      window.open(`mailto:${contact.value}`, "_self")
    } else if (contact.type === "address") {
      window.open(`https://maps.google.com/?q=${encodeURIComponent(contact.value)}`, "_blank")
    }
  }

  return (
    <div
      className={`contact-card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Background effects */}
      <div className={`card-glow ${isHovered ? "active" : ""}`}></div>
      <div className={`card-ripple ${isHovered ? "active" : ""}`}></div>

      {/* Icon container */}
      <div className={`icon-container ${isHovered ? "animated" : ""}`}>
        <div className="icon-background"></div>
        <contact.icon className={`contact-icon ${isHovered ? "bouncing" : ""}`} />
      </div>

      {/* Content */}
      <div className="contact-content">
        <h3 className={`contact-title ${isHovered ? "highlighted" : ""}`}>{contact.title}</h3>
        <p className={`contact-value ${isHovered ? "emphasized" : ""}`}>{contact.displayValue || contact.value}</p>
      </div>

      {/* Hover border */}
      <div className={`hover-border ${isHovered ? "active" : ""}`}></div>

      {/* Click indicator */}
      <div className={`click-indicator ${isHovered ? "visible" : ""}`}>
        <ClickIcon />
      </div>
    </div>
  )
}

// Icon components
const PhoneIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const AddressIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="10" r="3" strokeWidth="2" />
  </svg>
)

const EmailIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <polyline points="22,6 12,13 2,6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ClickIcon = () => (
  <svg className="click-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M9 11l3 3L22 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ArrowUpIcon = () => (
  <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <line x1="12" y1="19" x2="12" y2="5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="5,12 12,5 19,12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Footer = () => {
  const [isScrollToTopHovered, setIsScrollToTopHovered] = useState(false)

  const contactInfo = [
    {
      id: 1,
      type: "phone",
      title: "Phone",
      value: "+918929224366",
      displayValue: "(+91) 89292 24366",
      icon: PhoneIcon,
    },
    {
      id: 2,
      type: "address",
      title: "Address",
      value: "IIIT Delhi, Okhla Phase III, New Delhi, Delhi 110020",
      icon: AddressIcon,
    },
    {
      id: 3,
      type: "email",
      title: "Email",
      value: "vipul22596@iiitd.ac.in",
      icon: EmailIcon,
    },
  ]

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer id="footer" className="footer-section">
      {/* Contact Information */}
      <div className="footer-content">
        <div className="container">
          <div className="contact-grid">
            {contactInfo.map((contact, index) => (
              <ContactCard key={contact.id} contact={contact} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="copyright-bar">
        <div className="container">
          <div className="copyright-content">
            <p className="copyright-text">© 2025 Vipul Mishra – Software & AI Solutions. All rights reserved.</p>
            <button
              className={`scroll-to-top ${isScrollToTopHovered ? "hovered" : ""}`}
              onClick={scrollToTop}
              onMouseEnter={() => setIsScrollToTopHovered(true)}
              onMouseLeave={() => setIsScrollToTopHovered(false)}
              aria-label="Scroll to top"
            >
              <ArrowUpIcon />
              <div className="button-ripple"></div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
