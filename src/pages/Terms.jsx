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
    title: '1. Acceptance of Terms',
    content: (
      <>
        <p>
          By downloading, installing, or using the Daora application (the "App"), you
          agree to be bound by these Terms of Use ("Terms"). If you do not agree with
          these Terms, do not use the App.
        </p>
        <p>
          These Terms constitute a legally binding agreement between you and the individual
          developer operating Daora, based in France / European Union ("we," "our," or "us").
        </p>
      </>
    ),
  },
  {
    title: '2. What Daora Is',
    content: (
      <>
        <p>
          Daora is a personal productivity and self-reflection application. It is designed
          to help you plan your day, organize tasks and projects, track habits and routines,
          use a focused work mode, write reflections, and review personal patterns over time.
        </p>
        <p>
          <strong>
            Daora does not provide medical, psychological, mental health, financial, legal,
            or any other professional advice. Daora is not a therapy tool, a diagnostic tool,
            a crisis resource, or a substitute for professional guidance of any kind. Do not
            rely on Daora for decisions that require professional expertise.
          </strong>
        </p>
        <p>
          If you are experiencing a mental health crisis or emergency, please contact a
          qualified professional or your local emergency services.
        </p>
      </>
    ),
  },
  {
    title: '3. Your Responsibilities',
    content: (
      <>
        <p>You agree to use Daora only for lawful, personal, non-commercial purposes. You agree not to:</p>
        <ul>
          <li>Use the App for any unlawful purpose or in violation of applicable laws or regulations.</li>
          <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the App.</li>
          <li>Copy, modify, distribute, sell, sublicense, or lease any part of the App without our prior written consent.</li>
          <li>Attempt to gain unauthorized access to any part of the App or its related systems or networks.</li>
          <li>Use the App in any way that could damage, disable, or impair it.</li>
          <li>Use the App to store or transmit content that is unlawful, harmful, or violates the rights of others.</li>
        </ul>
      </>
    ),
  },
  {
    title: '4. Subscriptions & Payments',
    content: (
      <>
        <p>
          Daora may offer free and paid subscription tiers. If you choose to purchase a
          subscription, you agree to the pricing and terms presented at the time of
          purchase within the App.
        </p>
        <p>
          All purchases are processed by Apple through the App Store. We do not collect
          or store your payment information. Subscriptions automatically renew unless
          cancelled before the renewal date. Refunds are subject to Apple's refund
          policies, available in your App Store account settings.
        </p>
      </>
    ),
  },
  {
    title: '5. Intellectual Property',
    content: (
      <>
        <p>
          The Daora name, logo, design, code, and all original content in the App are the
          intellectual property of the developer. Nothing in these Terms grants you any
          rights in the App's brand, design, or proprietary technology beyond the limited
          right to use the App for personal purposes.
        </p>
        <p>
          Content you create within the App — tasks, reflections, notes, habits — remains
          yours. We do not claim ownership of the content you enter.
        </p>
      </>
    ),
  },
  {
    title: '6. Third-Party Services',
    content: (
      <>
        <p>
          Daora may use third-party services for analytics, crash reporting, AI features,
          and payment processing. Your use of features powered by third-party services is
          also subject to those providers' terms and privacy policies.
        </p>
        <p>
          We are not responsible for the practices or content of third-party services.
          All purchases through the App are subject to Apple's terms and conditions.
        </p>
      </>
    ),
  },
  {
    title: '7. Disclaimer of Warranties',
    content: (
      <>
        <p>
          The App is provided "as is" and "as available" without warranties of any kind,
          either express or implied, including but not limited to implied warranties of
          merchantability, fitness for a particular purpose, or non-infringement.
        </p>
        <p>
          We do not guarantee specific outcomes, productivity improvements, habit formation
          results, or personal growth. Results vary by individual and depend entirely on
          how you use the App.
        </p>
        <p>
          We do not guarantee that the App will be error-free, uninterrupted, or available
          at all times. We may modify, suspend, or discontinue the App at any time without
          prior notice.
        </p>
      </>
    ),
  },
  {
    title: '8. Limitation of Liability',
    content: (
      <>
        <p>
          To the maximum extent permitted by applicable law, we shall not be liable for
          any indirect, incidental, special, consequential, or punitive damages arising
          from your use of or inability to use the App, including but not limited to loss
          of data, loss of profits, or any other losses.
        </p>
        <p>
          Nothing in these Terms limits liability for fraud, death, or personal injury
          caused by negligence, or any other liability that cannot be excluded under
          applicable law.
        </p>
      </>
    ),
  },
  {
    title: '9. Governing Law',
    content: (
      <>
        <p>
          These Terms are governed by the laws of France, without regard to its conflict
          of law provisions. If you are located in the European Union, mandatory consumer
          protection laws of your country of residence may also apply.
        </p>
        <p>
          Any disputes arising from these Terms shall first be submitted to good-faith
          negotiation. If unresolved, disputes may be submitted to the competent courts
          of France.
        </p>
      </>
    ),
  },
  {
    title: '10. Changes to These Terms',
    content: (
      <>
        <p>
          We reserve the right to modify these Terms at any time. When we make changes,
          we will update the "Last updated" date at the top of this page. Continued use of
          the App after changes are posted constitutes your acceptance of the updated Terms.
        </p>
        <p>
          If changes are material, we will make reasonable efforts to notify you, such as
          through an in-app notice.
        </p>
      </>
    ),
  },
  {
    title: '11. Contact',
    content: (
      <>
        <p>If you have questions about these Terms, please contact us:</p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:hello@daora.life">hello@daora.life</a></li>
          <li><strong>Location:</strong> France / European Union</li>
        </ul>
      </>
    ),
  },
]

export default function Terms() {
  const [open, setOpen] = useState(0)

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
          Last updated: May 23, 2026
        </span>

        <p style={{ fontSize: 15, color: 'var(--t2)', lineHeight: 1.75, marginBottom: 28 }}>
          These Terms may be updated from time to time. Continued use of Daora after
          changes are posted means you accept the updated Terms.
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
