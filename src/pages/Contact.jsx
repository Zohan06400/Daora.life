import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

const contacts = [
  {
    icon: '🛠',
    title: 'App Support',
    desc: 'Questions about the app, bug reports, feature requests, or troubleshooting.',
    email: 'support@daora.life',
  },
  {
    icon: '🔒',
    title: 'Privacy & Data',
    desc: 'Data access, correction, deletion, portability, or any GDPR-related request.',
    email: 'privacy@daora.life',
  },
  {
    icon: '✉️',
    title: 'General Contact',
    desc: 'Partnerships, press, business inquiries, or anything else.',
    email: 'contact@daora.life',
  },
]

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
        <p>Use the right email for the fastest response.</p>
      </div>

      <div className="inner-content">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 48 }}>
          {contacts.map(({ icon, title, desc, email }) => (
            <div key={email} style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r-xl)',
              padding: '24px 28px',
              display: 'flex',
              gap: 20,
              alignItems: 'flex-start',
            }}>
              <div style={{
                fontSize: 24,
                width: 44,
                height: 44,
                borderRadius: 12,
                background: 'var(--bg2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                {icon}
              </div>
              <div>
                <h3 style={{ fontSize: 15, fontWeight: 650, marginBottom: 4, letterSpacing: '-.01em' }}>{title}</h3>
                <p style={{ fontSize: 14, color: 'var(--t2)', lineHeight: 1.6, marginBottom: 10 }}>{desc}</p>
                <a href={`mailto:${email}`} style={{ fontSize: 14, fontWeight: 500 }}>{email}</a>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--r-xl)',
          padding: '24px 28px',
          marginBottom: 32,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <span style={{ fontSize: 20 }}>📍</span>
            <h3 style={{ fontSize: 15, fontWeight: 650, letterSpacing: '-.01em' }}>Based in France</h3>
          </div>
          <p style={{ fontSize: 14, color: 'var(--t2)', lineHeight: 1.65, margin: 0 }}>
            France / European Union — operating under EU privacy regulations (GDPR).
            We aim to respond to all inquiries within 1–3 business days and to all
            privacy requests within 30 days.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Link to="/support" style={{ fontSize: 14, color: 'var(--t2)' }}>Support</Link>
          <Link to="/privacy" style={{ fontSize: 14, color: 'var(--t2)' }}>Privacy Policy</Link>
          <Link to="/terms" style={{ fontSize: 14, color: 'var(--t2)' }}>Terms of Use</Link>
        </div>
      </div>
    </div>
  )
}
