"use client"

import { useState } from "react"
import "./Contact.css"

// Send icon component
const SendIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <line x1="22" y1="2" x2="11" y2="13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <polygon points="22,2 15,22 11,13 2,9 22,2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// Input field component
const InputField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required = false,
  isTextarea = false,
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)

  const handleChange = (e) => {
    const newValue = e.target.value
    onChange(name, newValue)
    setHasValue(newValue.length > 0)
  }

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  const InputComponent = isTextarea ? "textarea" : "input"

  return (
    <div className={`input-group ${isFocused ? "focused" : ""} ${hasValue ? "has-value" : ""}`}>
      <label className="input-label" htmlFor={name}>
        {label}
        {required && <span className="required">*</span>}
      </label>
      <div className="input-wrapper">
        <InputComponent
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          className={`form-input ${isTextarea ? "textarea" : ""}`}
          required={required}
          rows={isTextarea ? 6 : undefined}
        />
        <div className="input-border"></div>
      </div>
    </div>
  )
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    telephone: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzfAmBQqlne-USqrlfq2NMo0gAqtPSf14GYNGlzotDipaoWXUb3isoCT8_5Kd4NLgGQyg/exec", {
        method: "POST",
        mode: "no-cors", // no-cors to avoid CORS error (Google Apps Script limitation)
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      setSubmitStatus("success")
      setFormData({
        name: "",
        telephone: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 3000)
    }
  }



  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Contact</h2>
          <div className="title-underline">
            <div className="underline-left"></div>
            <div className="underline-center"></div>
            <div className="underline-right"></div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* First Row */}
            <div className="form-row">
              <InputField
                label="Your Name:"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
              />
              <InputField
                label="Telephone:"
                name="telephone"
                type="tel"
                value={formData.telephone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
              />
            </div>

            {/* Second Row */}
            <div className="form-row">
              <InputField
                label="Email:"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                required
              />
              <InputField
                label="Subject:"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Enter message subject"
                required
              />
            </div>

            {/* Message Field */}
            <div className="form-row full-width">
              <InputField
                label="Message:"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Enter your message here..."
                required
                isTextarea
              />
            </div>

            {/* Submit Button */}
            <div className="form-submit">
              <button
                type="submit"
                className={`send-message-btn ${isSubmitting ? "submitting" : ""}`}
                disabled={isSubmitting}
              >
                <span className="btn-text">{isSubmitting ? "Sending..." : "Send Message"}</span>
                <SendIcon />
                <div className="btn-ripple"></div>
              </button>
            </div>

            {/* Status Message */}
            {submitStatus && (
              <div className={`status-message ${submitStatus}`}>
                {submitStatus === "success"
                  ? "Message sent successfully!"
                  : "Failed to send message. Please try again."}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
