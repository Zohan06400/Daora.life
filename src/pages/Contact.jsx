import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Contact() {
  usePageMeta({
    title: 'Contact — Daora',
    description: "Get in touch with the Daora team. We'd love to hear from you.",
  })

  return (
    <div>
      <Link to="/" className="inner-back">← Back to home</Link>

      <div className="inner-header">
        <h1>Contact</h1>
        <p>We'd love to hear from you.</p>
      </div>

      <div className="inner-content">
        <div className="contact-layout">
          <div className="contact-info">
            <div className="contact-info-card">
              <div className="contact-info-icon">✉️</div>
              <div className="contact-info-text">
                <h3>Email</h3>
                <a href="mailto:hello@daora.app">hello@daora.app</a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">📱</div>
              <div className="contact-info-text">
                <h3>Follow</h3>
                <p>@daora.app</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">📍</div>
              <div className="contact-info-text">
                <h3>Based in France</h3>
                <p>France / European Union — operating under EU privacy regulations (GDPR).</p>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <form onSubmit={e => e.preventDefault()}>
              <div className="form-field">
                <label htmlFor="name">Your name</label>
                <input id="name" type="text" placeholder="Your name" autoComplete="name" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email address</label>
                <input id="email" type="email" placeholder="you@example.com" autoComplete="email" />
              </div>
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="How can we help?" />
              </div>
              <button type="submit" className="form-submit">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
