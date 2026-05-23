import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

const cards = [
  {
    icon: '✉️',
    title: 'Email us',
    body: null,
    link: { href: 'mailto:[ADD SUPPORT EMAIL HERE]', label: '[ADD SUPPORT EMAIL HERE]' },
  },
  {
    icon: '⏱',
    title: 'Response time',
    body: 'We typically respond within 24–48 hours.',
    link: null,
  },
  {
    icon: '💬',
    title: 'Help topics',
    body: 'Account & Data, App Features, Feedback, Technical Issues',
    link: null,
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
          We're here to help. If you have any questions, feedback, or need
          assistance, feel free to reach out to us.
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
          {[
            {
              q: 'How do I get started with Daora?',
              a: "Open Morning Planning to set your top priorities for the day. Use Projects & Tasks to organize your work, Focus Mode when it's time to concentrate, and Evening Reflection to review and improve at the end of the day.",
            },
            {
              q: 'Where is my data stored?',
              a: 'Your data is stored locally on your device. It does not leave your device unless a cloud sync feature is explicitly enabled.',
            },
            {
              q: 'How do I report a bug?',
              a: 'Email us with your device model, iOS version, app version, and a short description of the issue. Screenshots help us resolve things faster.',
            },
            {
              q: 'How do I request data deletion?',
              a: 'Email us with the subject line "Data Deletion Request." We will process your request in accordance with applicable privacy regulations, including GDPR.',
            },
          ].map(({ q, a }) => (
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
      </div>
    </div>
  )
}
