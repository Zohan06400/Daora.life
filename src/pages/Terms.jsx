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
    title: '1. Acceptance of Terms',
    content: (
      <>
        <p>
          By downloading, installing, or using the Daora application (the "App"), you
          agree to be bound by these Terms of Use ("Terms"). If you do not agree, do not
          use the App.
        </p>
        <p>
          These Terms constitute a legally binding agreement between you and{' '}
          <PH>[ADD LEGAL NAME OR COMPANY NAME]</PH> ("we," "our," or "us"), the operator
          of Daora.
        </p>
      </>
    ),
  },
  {
    title: '2. Use of the App',
    content: (
      <>
        <p>
          Daora is a personal productivity, planning, habit tracking, reflection, and
          personal growth tool. You may use it for personal, non-commercial purposes in
          accordance with these Terms. You agree not to:
        </p>
        <ul>
          <li>Use the App for any unlawful purpose or in violation of applicable laws.</li>
          <li>Reverse engineer, decompile, or attempt to derive the source code of the App.</li>
          <li>Copy, modify, distribute, sell, or lease any part of the App without our prior written consent.</li>
          <li>Attempt to gain unauthorized access to any part of the App or its related systems.</li>
        </ul>
        <p>
          <strong>
            Daora does not provide medical, psychological, financial, legal, or
            professional advice. The App is not a substitute for professional guidance.
            Do not rely on Daora for decisions that require professional expertise.
          </strong>
        </p>
      </>
    ),
  },
  {
    title: '3. Subscriptions & Payments',
    content: (
      <>
        <p>
          Daora may offer free and paid subscription tiers. If you purchase a subscription,
          you agree to the pricing and payment terms presented at the time of purchase.
          Subscriptions auto-renew unless cancelled before the renewal date.
        </p>
        <p>
          All purchases are processed through the Apple App Store. Refunds are subject
          to Apple's refund policies.
        </p>
      </>
    ),
  },
  {
    title: '4. Disclaimer',
    content: (
      <>
        <p>
          The App is provided "as is" and "as available" without warranties of any kind,
          either express or implied. We do not guarantee specific outcomes, productivity
          levels, habit formation, or personal growth results.
        </p>
        <p>
          To the maximum extent permitted by applicable law, we shall not be liable for
          any indirect, incidental, or consequential damages arising from your use of the
          App.
        </p>
        <p>
          These Terms shall be governed by the laws of France, without regard to its
          conflict of law provisions.
        </p>
      </>
    ),
  },
  {
    title: '5. Contact Us',
    content: (
      <>
        <p>If you have questions about these Terms, please contact us:</p>
        <ul>
          <li><strong>Entity:</strong> <PH>[ADD LEGAL NAME OR COMPANY NAME]</PH></li>
          <li><strong>Email:</strong> <PH>[ADD CONTACT EMAIL]</PH></li>
          <li><strong>Location:</strong> France / European Union</li>
        </ul>
        <p>
          We reserve the right to modify these Terms at any time. Continued use of the
          App after changes constitutes acceptance of the updated Terms.
        </p>
      </>
    ),
  },
]

export default function Terms() {
  const [open, setOpen] = useState(null)

  usePageMeta({
    title: 'Terms of Use — Daora',
    description: 'Daora Terms of Use. Please read these terms carefully before using the app.',
  })

  return (
    <div>
      <Link to="/" className="inner-back">← Back to home</Link>

      <div className="inner-header">
        <h1>Terms of Use</h1>
        <p>By using Daora, you agree to these terms. Please read them carefully.</p>
      </div>

      <div className="inner-content">
        <span className="accordion-date">
          Last updated: <PH>[ADD DATE]</PH>
        </span>

        <p style={{ fontSize: 15, color: 'var(--t2)', lineHeight: 1.75, marginBottom: 28 }}>
          These terms may be updated from time to time. Continued use of Daora means you
          accept the updated terms.
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
