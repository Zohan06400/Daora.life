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
        <p>One email for everything — support, privacy, press, and general inquiries.</p>
      </div>

      <div className="inner-content">
        <div style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--r-xl)',
          padding: '32px',
          display: 'flex',
          gap: 20,
          alignItems: 'flex-start',
          marginBottom: 12,
        }}>
          <div style={{
            fontSize: 24,
            width: 48,
            height: 48,
            borderRadius: 14,
            background: 'var(--bg2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            ✉️
          </div>
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 650, marginBottom: 6, letterSpacing: '-.01em' }}>Email us</h3>
            <p style={{ fontSize: 14, color: 'var(--t2)', lineHeight: 1.65, marginBottom: 12 }}>
              For app support, bug reports, privacy and data requests, press inquiries,
              partnerships, or anything else — reach out to the same address.
            </p>
            <a href="mailto:hello@daora.life" style={{ fontSize: 15, fontWeight: 600 }}>hello@daora.life</a>
          </div>
        </div>

        <div style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--r-xl)',
          padding: '24px 28px',
          marginBottom: 12,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <span style={{ fontSize: 20 }}>⏱</span>
            <h3 style={{ fontSize: 15, fontWeight: 650, letterSpacing: '-.01em' }}>Response time</h3>
          </div>
          <p style={{ fontSize: 14, color: 'var(--t2)', lineHeight: 1.65, margin: 0 }}>
            We aim to respond within 1–3 business days. For privacy and data deletion
            requests, we respond within 30 days as required by GDPR.
          </p>
        </div>

        <div style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--r-xl)',
          padding: '24px 28px',
          marginBottom: 40,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <span style={{ fontSize: 20 }}>📍</span>
            <h3 style={{ fontSize: 15, fontWeight: 650, letterSpacing: '-.01em' }}>Based in France</h3>
          </div>
          <p style={{ fontSize: 14, color: 'var(--t2)', lineHeight: 1.65, margin: 0 }}>
            France / European Union — operating under EU privacy regulations (GDPR).
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
