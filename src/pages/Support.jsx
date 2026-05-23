import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

const cards = [
  {
    icon: '✉️',
    title: 'Email support',
    body: null,
    link: { href: 'mailto:support@daora.life', label: 'support@daora.life' },
  },
  {
    icon: '⏱',
    title: 'Response time',
    body: 'We aim to respond within 1–3 business days.',
    link: null,
  },
  {
    icon: '💬',
    title: 'Help topics',
    body: 'App features, data & privacy, bug reports, account & subscriptions',
    link: null,
  },
]

const faqs = [
  {
    q: 'What is Daora?',
    a: 'Daora is a personal productivity and self-reflection app for iOS. It helps you plan your day, organize tasks and projects, track habits and routines, use a focused work mode, write evening reflections, and review patterns over time. Daora is not a medical device, therapy, or professional advice tool.',
  },
  {
    q: 'How do I get started?',
    a: 'Open Morning Planning to set your priorities for the day. Use Projects & Tasks to organize your work, Focus Mode when you need to concentrate, Habit Tracker to maintain your routines, and Evening Reflection to close the day with awareness.',
  },
  {
    q: 'Where is my data stored?',
    a: 'Your data is stored locally on your device by default. It does not leave your device unless a cloud sync feature is explicitly enabled. You can delete all local data at any time by deleting the app.',
  },
  {
    q: 'How do I delete my data?',
    a: 'To delete locally stored data, delete the Daora app from your device. This permanently removes all content stored locally. If you have an account or synced data, you can request deletion by emailing privacy@daora.life with the subject line "Data Deletion Request." We will process your request within 30 days.',
  },
  {
    q: 'How do I report a bug?',
    a: 'Email support@daora.life with your device model, iOS version, app version, a short description of the issue, and steps to reproduce it if possible. Screenshots or screen recordings help us resolve things faster.',
  },
  {
    q: 'What if my data disappears or the app does not load?',
    a: 'First, try closing and reopening the app. If the issue persists, restart your device. If data appears missing, do not delete the app before contacting us — email support@daora.life so we can help you investigate before any data is lost.',
  },
  {
    q: 'How do I contact privacy support?',
    a: 'For all privacy-related requests — including data access, correction, deletion, or portability — email privacy@daora.life. We respond to privacy requests within 30 days as required by applicable law, including GDPR.',
  },
  {
    q: 'Is Daora medical, psychological, financial, or legal advice?',
    a: 'No. Daora is a productivity and self-reflection tool. It is not medical advice, psychological treatment, therapy, financial advice, or legal advice. If you need professional support, please consult a qualified professional or your local emergency services.',
  },
]

export default function Support() {
  usePageMeta({
    title: 'Support — Daora',
    description: 'Need help with Daora? Find answers or reach out to our support team.',
  })

  return (
    <div>
      <Link to="/" className="inner-back">← Back to home</Link>

      <div className="inner-header">
        <h1>Support</h1>
        <p>
          We're here to help. Browse the common questions below or reach out to
          us directly — we'll get back to you as soon as we can.
        </p>
      </div>

      <div className="inner-content">
        <div className="support-cards">
          {cards.map(({ icon, title, body, link }) => (
            <div className="support-card" key={title}>
              <div className="support-card-icon">{icon}</div>
              <h3>{title}</h3>
              {body && <p>{body}</p>}
              {link && <a href={link.href}>{link.label}</a>}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48 }}>
          <h2 style={{ fontSize: 22, marginBottom: 24, letterSpacing: '-.02em' }}>Common Questions</h2>
          {faqs.map(({ q, a }) => (
            <div key={q} style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r-lg)',
              padding: '22px 24px',
              marginBottom: 10,
            }}>
              <h3 style={{ fontSize: 15, fontWeight: 650, marginBottom: 8, letterSpacing: '-.01em' }}>{q}</h3>
              <p style={{ fontSize: 14, color: 'var(--t2)', lineHeight: 1.65, margin: 0 }}>{a}</p>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 40,
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--r-xl)',
          padding: '24px 28px',
        }}>
          <p style={{ fontSize: 13, color: 'var(--t3)', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: 'var(--t2)' }}>Disclaimer:</strong> Daora is a productivity and self-reflection tool. It is not medical advice, psychological treatment, therapy, financial advice, or legal advice. It is not a substitute for professional guidance. If you are experiencing a crisis or need urgent support, please contact a qualified professional or your local emergency services.
          </p>
        </div>

        <div style={{ marginTop: 32, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Link to="/privacy" style={{ fontSize: 14, color: 'var(--t2)' }}>Privacy Policy</Link>
          <Link to="/terms" style={{ fontSize: 14, color: 'var(--t2)' }}>Terms of Use</Link>
          <Link to="/contact" style={{ fontSize: 14, color: 'var(--t2)' }}>Contact</Link>
        </div>
      </div>
    </div>
  )
}
