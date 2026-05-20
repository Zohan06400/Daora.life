import { usePageMeta } from '../hooks/usePageMeta'

export default function Contact() {
  usePageMeta({
    title: 'Contact — Daora',
    description: "Get in touch with the Daora team. We'd love to hear from you.",
  })

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contact Daora</h1>
          <p>We'd love to hear from you. Reach out anytime.</p>
        </div>
      </section>

      <div className="contact-page">
        <div className="contact-card">
          <p className="contact-card-label">Support</p>
          <h2>App Support</h2>
          <p>
            Questions, feedback, bug reports, or feature requests — we read
            every message and do our best to respond within 2–5 business days.
          </p>
          <a href="mailto:[ADD SUPPORT EMAIL HERE]" className="email-chip">
            <span>✉️</span>
            [ADD SUPPORT EMAIL HERE]
          </a>
        </div>

        <div className="contact-card">
          <p className="contact-card-label">Business</p>
          <h2>Business & Partnerships</h2>
          <p>
            For press inquiries, partnership opportunities, or business-related
            questions, use our business email.
          </p>
          <a href="mailto:[ADD BUSINESS EMAIL HERE]" className="email-chip">
            <span>📬</span>
            [ADD BUSINESS EMAIL HERE]
          </a>
        </div>

        <div className="contact-location">
          <div className="contact-location-icon">📍</div>
          <div className="contact-location-text">
            <h3>Based in France</h3>
            <p>France / European Union — operating under EU privacy regulations (GDPR).</p>
          </div>
        </div>
      </div>
    </>
  )
}
