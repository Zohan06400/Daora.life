import { useState } from 'react'
import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

function PH({ children }) {
  return <span className="placeholder-tag">{children}</span>
}

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
    title: '1. Information We Collect',
    content: (
      <>
        <p>We may collect the following types of information:</p>
        <ul>
          <li><strong>Content you create:</strong> Tasks, plans, reflections, habit entries, notes, and other content you enter into the App.</li>
          <li><strong>Device information:</strong> Device model, operating system version, and unique device identifiers, which may be collected automatically.</li>
          <li><strong>Usage data:</strong> Features used, session duration, and interaction patterns, which may be collected through analytics tools.</li>
          <li><strong>Crash reports:</strong> Technical information about errors or crashes that occur while using the App.</li>
        </ul>
      </>
    ),
  },
  {
    title: '2. How We Use Information',
    content: (
      <>
        <p>Information we collect may be used to:</p>
        <ul>
          <li>Provide, maintain, and improve the App and its features.</li>
          <li>Analyze usage patterns to understand how the App is being used.</li>
          <li>Diagnose and resolve technical issues.</li>
          <li>Respond to support requests and communicate with users.</li>
          <li>Comply with legal obligations.</li>
        </ul>
      </>
    ),
  },
  {
    title: '3. Data Storage & Security',
    content: (
      <>
        <p>
          Much of the data you create in Daora — such as your daily plans, habit logs,
          reflections, and tasks — is stored locally on your device. This data does not
          leave your device unless a cloud sync or backup feature is enabled.
        </p>
        <p>
          If the App supports cloud sync or account-based features, the relevant data may
          be stored on third-party servers. We will update this policy to reflect those
          practices when applicable.
        </p>
        <p>
          Third-party services currently used or potentially used include:{' '}
          <PH>[ADD THIRD-PARTY SERVICES IF ANY — e.g. Firebase, Sentry, RevenueCat]</PH>.
        </p>
      </>
    ),
  },
  {
    title: '4. Your Choices',
    content: (
      <>
        <p>
          Depending on your location, you may have the following rights regarding your
          personal data:
        </p>
        <ul>
          <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
          <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
          <li><strong>Erasure:</strong> Request deletion of your personal data.</li>
          <li><strong>Portability:</strong> Request your data in a structured, machine-readable format.</li>
          <li><strong>Objection:</strong> Object to certain types of processing of your data.</li>
        </ul>
        <p>
          We do not sell, rent, or trade your personal information to third parties for
          marketing purposes. To exercise any of these rights, contact us at:{' '}
          <PH>[ADD CONTACT EMAIL]</PH>.
        </p>
      </>
    ),
  },
  {
    title: '5. Contact Us',
    content: (
      <>
        <p>
          If you have questions, concerns, or requests regarding this Privacy Policy or
          your personal data, please contact us:
        </p>
        <ul>
          <li><strong>Entity:</strong> <PH>[ADD LEGAL NAME OR COMPANY NAME]</PH></li>
          <li><strong>Email:</strong> <PH>[ADD CONTACT EMAIL]</PH></li>
          <li><strong>Location:</strong> France / European Union</li>
        </ul>
        <p>
          We may update this Privacy Policy from time to time. When we make significant
          changes, we will update the "Last updated" date. Continued use of the App after
          changes constitutes acceptance of the updated policy.
        </p>
      </>
    ),
  },
]

export default function Privacy() {
  const [open, setOpen] = useState(null)

  usePageMeta({
    title: 'Privacy Policy — Daora',
    description: 'Daora Privacy Policy. Learn how we collect, use, and protect your information.',
  })

  return (
    <div>
      <Link to="/" className="inner-back">← Back to home</Link>

      <div className="inner-header">
        <h1>Privacy Policy</h1>
        <p>Your privacy is important to us. This policy explains what data Daora collects, how it's used, and your choices.</p>
      </div>

      <div className="inner-content">
        <span className="accordion-date">
          Last updated: <PH>[ADD DATE]</PH>
        </span>

        <p style={{ fontSize: 15, color: 'var(--t2)', lineHeight: 1.75, marginBottom: 28 }}>
          This policy may be updated from time to time. Please review it periodically.
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
