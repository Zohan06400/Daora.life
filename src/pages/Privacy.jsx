import { useState } from 'react'
import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

function ChevronDown() {
  return (
    <svg className="accordion-chevron" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

const sections = [
  {
    title: '1. About Daora',
    content: (
      <>
        <p>
          Daora is a personal productivity and self-reflection application for iOS. It helps
          you plan your day, organize tasks and projects, track habits and routines, use a
          focused work mode, write evening reflections, and review patterns in your daily
          life over time.
        </p>
        <p>
          Daora is a productivity and organization tool. It is not a medical device, mental
          health treatment, therapy, diagnosis tool, financial advisor, or legal advisor. It
          is not a substitute for professional medical, psychological, financial, or legal
          guidance.
        </p>
      </>
    ),
  },
  {
    title: '2. Data We Collect',
    content: (
      <>
        <p>Daora may collect the following types of information depending on features you use:</p>
        <ul>
          <li>
            <strong>Content you create:</strong> Tasks, projects, habits, routines, morning
            plans, focus sessions, evening reflections, notes, ratings, and other content
            you enter into the app. This content is created by you and belongs to you.
          </li>
          <li>
            <strong>Device and technical information:</strong> Device model, operating system
            version, app version, and device identifiers, which may be collected automatically
            to diagnose technical issues.
          </li>
          <li>
            <strong>Usage data:</strong> Features used, session frequency, and interaction
            patterns, which may be collected through analytics tools to help us understand
            how the app is used and improve it.
          </li>
          <li>
            <strong>Crash reports:</strong> Technical error data collected automatically
            when the app experiences a crash or unexpected error.
          </li>
          <li>
            <strong>Support communications:</strong> If you contact us by email, we retain
            your email address and the content of your message in order to respond to you.
          </li>
        </ul>
        <p>
          We do not collect your name, phone number, physical address, health data, financial
          data, location data, or contacts from your device.
        </p>
      </>
    ),
  },
  {
    title: '3. AI Features',
    content: (
      <>
        <p>
          Daora includes AI-powered features to assist with daily planning and self-reflection
          suggestions. If you use these features, relevant content you have entered (such as
          task descriptions or reflection prompts) may be processed by an AI service provider
          to generate responses.
        </p>
        <p>
          AI-generated suggestions in Daora are intended as general productivity prompts only.
          They are not medical, psychological, financial, or legal advice, and should not be
          treated as such.
        </p>
        <p style={{ fontStyle: 'italic', color: 'var(--t2)' }}>
          The specific AI provider used will be disclosed here once confirmed. If you have
          questions about how your content is processed by AI features, contact us at{' '}
          <a href="mailto:hello@daora.life">hello@daora.life</a>.
        </p>
      </>
    ),
  },
  {
    title: '4. How We Use Your Data',
    content: (
      <>
        <p>Information collected may be used to:</p>
        <ul>
          <li>Provide, operate, and improve the app and its features.</li>
          <li>Diagnose and resolve technical issues and crashes.</li>
          <li>Understand how the app is used and which features are most valuable.</li>
          <li>Respond to your support requests and communications.</li>
          <li>Comply with applicable legal obligations.</li>
        </ul>
        <p>
          We do not sell, rent, or share your personal data with third parties for advertising
          or marketing purposes.
        </p>
      </>
    ),
  },
  {
    title: '5. Data Storage',
    content: (
      <>
        <p>
          Content you create in Daora — including daily plans, tasks, habits, reflections,
          and notes — is stored locally on your device by default. This data does not leave
          your device unless a cloud sync or account feature is explicitly enabled.
        </p>
        <p>
          If you use cloud sync or account-based features, your data may be stored on
          third-party servers. This policy will be updated to reflect those practices when
          such features are available.
        </p>
        <p>
          Analytics and crash reporting data may be processed by third-party service
          providers acting as data processors on our behalf. These providers are bound by
          contractual obligations to protect your data.
        </p>
      </>
    ),
  },
  {
    title: '6. Third-Party Services',
    content: (
      <>
        <p>
          Daora may use the following categories of third-party services, each of which may
          process limited data as described:
        </p>
        <ul>
          <li><strong>Analytics:</strong> To understand usage patterns and improve the app. Analytics data is typically aggregated and not linked to your identity.</li>
          <li><strong>Crash reporting:</strong> To detect and diagnose technical errors. Crash data may include device information and app state at the time of the error.</li>
          <li><strong>AI processing:</strong> To power AI-assisted planning and reflection features. Only content relevant to the AI feature is processed.</li>
          <li><strong>Payment processing:</strong> If you purchase a subscription, payments are processed by Apple through the App Store. We do not receive or store your payment information.</li>
        </ul>
        <p>
          We will update this section with the specific names of third-party providers as
          the app is finalized. If you have questions about third-party data processing,
          contact us at <a href="mailto:hello@daora.life">hello@daora.life</a>.
        </p>
      </>
    ),
  },
  {
    title: '7. Your Rights (GDPR)',
    content: (
      <>
        <p>
          If you are located in the European Union or European Economic Area, you have the
          following rights under the General Data Protection Regulation (GDPR):
        </p>
        <ul>
          <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
          <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
          <li><strong>Erasure:</strong> Request deletion of your personal data ("right to be forgotten").</li>
          <li><strong>Portability:</strong> Request your data in a portable, machine-readable format.</li>
          <li><strong>Objection:</strong> Object to certain types of data processing.</li>
          <li><strong>Restriction:</strong> Request that we limit how we process your data in certain circumstances.</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{' '}
          <a href="mailto:hello@daora.life">hello@daora.life</a>. We will respond
          within 30 days as required by applicable law.
        </p>
        <p>
          You also have the right to lodge a complaint with your national data protection
          authority. In France, this is the CNIL (Commission Nationale de l'Informatique
          et des Libertés) at <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>.
        </p>
      </>
    ),
  },
  {
    title: '8. Data Deletion',
    content: (
      <>
        <p>
          <strong>If data is stored locally on your device:</strong> You can delete all
          local data by deleting the Daora app from your device. This permanently removes
          all locally stored content.
        </p>
        <p>
          <strong>If an account exists:</strong> You can request account and data deletion
          directly within the app, or by contacting us at{' '}
          <a href="mailto:hello@daora.life">hello@daora.life</a> with the subject line
          "Data Deletion Request." We will process your request within 30 days.
        </p>
        <p>
          Upon deletion, your personal data will be permanently removed or anonymized,
          including any content, analytics identifiers, and account information. Certain
          data may be retained for a limited period where required by law.
        </p>
      </>
    ),
  },
  {
    title: '9. Children',
    content: (
      <>
        <p>
          Daora is intended for users aged 17 and older. We do not knowingly collect
          personal information from children under 13. If you believe a child under 13 has
          provided us with personal data, please contact us at{' '}
          <a href="mailto:hello@daora.life">hello@daora.life</a> and we will take
          steps to delete that information promptly.
        </p>
      </>
    ),
  },
  {
    title: '10. Changes to This Policy',
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time. When we make significant
          changes, we will update the "Last updated" date at the top of this page. We
          encourage you to review this policy periodically.
        </p>
        <p>
          Continued use of the app after changes are posted constitutes acceptance of the
          updated policy.
        </p>
      </>
    ),
  },
  {
    title: '11. Contact',
    content: (
      <>
        <p>
          If you have questions, concerns, or requests regarding this Privacy Policy or your
          personal data, please contact us:
        </p>
        <ul>
          <li><strong>Privacy requests:</strong> <a href="mailto:hello@daora.life">hello@daora.life</a></li>
          <li><strong>General support:</strong> <a href="mailto:hello@daora.life">hello@daora.life</a></li>
          <li><strong>Location:</strong> France / European Union</li>
        </ul>
      </>
    ),
  },
]

export default function Privacy() {
  const [open, setOpen] = useState(0)

  usePageMeta({
    title: 'Privacy Policy — Daora',
    description: 'Daora Privacy Policy. Learn how we collect, use, and protect your information.',
  })

  return (
    <div>
      <Link to="/" className="inner-back">← Back to home</Link>

      <div className="inner-header">
        <h1>Privacy Policy</h1>
        <p>Your privacy is important to us. This policy explains what data Daora collects, how it is used, and your rights.</p>
      </div>

      <div className="inner-content">
        <span className="accordion-date">
          Last updated: May 23, 2026
        </span>

        <p style={{ fontSize: 15, color: 'var(--t2)', lineHeight: 1.75, marginBottom: 28 }}>
          This Privacy Policy applies to the Daora iOS application and the daora.life
          website. Please read it carefully. If you have questions, contact us at{' '}
          <a href="mailto:hello@daora.life">hello@daora.life</a>.
        </p>

        <div className="accordion">
          {sections.map(({ title, content }, i) => (
            <div className={`accordion-item${open === i ? ' open' : ''}`} key={title}>
              <button
                className="accordion-trigger"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {title}
                <ChevronDown />
              </button>
              <div className="accordion-body">{content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
