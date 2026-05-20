import { usePageMeta } from '../hooks/usePageMeta'

const faqs = [
  {
    q: 'How do I start using Daora?',
    a: 'Start by planning your day in the Morning Planning section, choosing your top priorities. Then track your habits throughout the day, use Focus Mode when you need deep work, and complete your Evening Reflection at the end of the day.',
  },
  {
    q: 'How do I report a bug?',
    a: 'Send us a short description of the issue, your device model, the app version, and screenshots if possible. The more detail you provide, the faster we can investigate and resolve the problem.',
  },
  {
    q: 'How do I request a feature?',
    a: 'Send your suggestion by email with a short explanation of how it would help your daily planning or reflection. We read every message and consider all feedback when planning future updates.',
  },
  {
    q: 'How can I request data deletion?',
    a: 'Contact us by email and include the details needed to identify your account or app data. We will process your request in accordance with applicable privacy regulations.',
  },
]

export default function Support() {
  usePageMeta({
    title: 'Support — Daora',
    description: 'Need help with Daora? Find answers to common questions or contact our support team directly.',
  })

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Daora Support</h1>
          <p>Need help with Daora? We're here to help.</p>
        </div>
      </section>

      <div className="support-sections">
        {/* Contact */}
        <div className="support-section">
          <h2>Contact Support</h2>
          <div className="support-contact-card">
            <p>
              For questions, feedback, bug reports, or feature requests,
              reach out to us directly by email. We read every message.
            </p>
            <a
              href="mailto:[ADD SUPPORT EMAIL HERE]"
              className="email-chip"
            >
              <span>✉️</span>
              [ADD SUPPORT EMAIL HERE]
            </a>
          </div>
        </div>

        {/* FAQ */}
        <div className="support-section">
          <h2>Common Questions</h2>
          <div className="faq-list">
            {faqs.map(({ q, a }) => (
              <div className="faq-item" key={q}>
                <h3>{q}</h3>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Response time */}
        <div className="support-section">
          <h2>Response Time</h2>
          <div className="response-time-note">
            <span>⏱</span>
            <span>
              We usually respond within <strong>2–5 business days</strong>.
              For urgent issues, please mention it in your subject line.
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
