import { usePageMeta } from '../hooks/usePageMeta'

function PH({ children }) {
  return <span className="placeholder-tag">{children}</span>
}

export default function Terms() {
  usePageMeta({
    title: 'Terms of Use — Daora',
    description: 'Daora Terms of Use. Read our terms and conditions before using the app.',
  })

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Terms of Use</h1>
          <p>Please read these terms carefully before using Daora.</p>
        </div>
      </section>

      <div className="prose">
        <span className="last-updated">Last updated: <PH>[ADD DATE]</PH></span>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By downloading, installing, or using the Daora application (the "App"), you
          agree to be bound by these Terms of Use ("Terms"). If you do not agree to these
          Terms, do not use the App.
        </p>
        <p>
          These Terms constitute a legally binding agreement between you and{' '}
          <PH>[ADD LEGAL NAME OR COMPANY NAME]</PH> ("we," "our," or "us"), the operator
          of Daora.
        </p>

        <h2>2. Use of the App</h2>
        <p>
          You may use Daora for personal, non-commercial purposes in accordance with these
          Terms. You agree not to:
        </p>
        <ul>
          <li>Use the App for any unlawful purpose or in violation of applicable laws.</li>
          <li>
            Reverse engineer, decompile, disassemble, or attempt to derive the source code
            of the App.
          </li>
          <li>
            Copy, modify, distribute, sell, or lease any part of the App or its content
            without our prior written consent.
          </li>
          <li>
            Use the App to transmit any harmful, offensive, or unauthorized content.
          </li>
          <li>
            Attempt to gain unauthorized access to any part of the App or its related
            systems.
          </li>
        </ul>
        <p>
          We reserve the right to suspend or terminate access to the App for users who
          violate these Terms.
        </p>

        <h2>3. Productivity and Personal Growth Disclaimer</h2>
        <p>
          Daora is a personal productivity, planning, and reflection tool. It is designed
          to help you organize your day, track habits, build focus, and reflect on your
          progress.
        </p>
        <p>
          <strong>
            The App provides tools for organizational and informational purposes only.
            It does not guarantee specific outcomes, productivity levels, habit formation,
            or personal growth results. Results depend entirely on your own efforts,
            consistency, and individual circumstances.
          </strong>
        </p>

        <h2>4. No Medical, Psychological, Financial, or Legal Advice</h2>
        <p>
          Nothing in Daora — including its features, content, suggestions, prompts, or
          any guidance provided — constitutes medical, psychological, financial, or
          legal advice.
        </p>
        <p>
          The App is not a substitute for professional advice from a qualified healthcare
          provider, mental health professional, financial advisor, or legal counsel. If
          you have concerns about your health, mental wellbeing, financial situation, or
          legal matters, please consult the appropriate professional.
        </p>
        <p>
          Do not rely on Daora for decisions that require professional expertise.
        </p>

        <h2>5. User Responsibility</h2>
        <p>
          You are solely responsible for the content you create, store, and share within
          the App. You are also responsible for maintaining the security of your device and
          any account credentials associated with the App.
        </p>
        <p>
          We are not responsible for any loss of data resulting from device failure,
          accidental deletion, or failure to maintain appropriate backups.
        </p>

        <h2>6. Intellectual Property</h2>
        <p>
          The App, including its design, code, graphics, features, and all associated
          content, is the exclusive property of{' '}
          <PH>[ADD LEGAL NAME OR COMPANY NAME]</PH> and is protected by applicable
          intellectual property laws.
        </p>
        <p>
          You retain ownership of any content you create within the App. By using the
          App, you grant us a limited, non-exclusive license to store and process your
          content solely for the purpose of providing the App's services.
        </p>
        <p>
          "Daora" and its associated logo and branding are trademarks of{' '}
          <PH>[ADD LEGAL NAME OR COMPANY NAME]</PH>. You may not use our trademarks
          without prior written permission.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by applicable law, we shall not be liable for
          any indirect, incidental, special, consequential, or punitive damages, including
          but not limited to loss of data, loss of productivity, loss of revenue, or any
          other damages arising out of or related to your use of or inability to use the App.
        </p>
        <p>
          The App is provided "as is" and "as available" without warranties of any kind,
          either express or implied, including but not limited to warranties of
          merchantability, fitness for a particular purpose, or non-infringement.
        </p>
        <p>
          Some jurisdictions do not allow the exclusion of certain warranties or
          limitation of liability for consequential damages, so the above limitations may
          not apply to you.
        </p>

        <h2>8. Changes to the Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. When we make changes,
          we will update the "Last updated" date at the top of this page. In the case of
          significant changes, we may notify you through the App or by other means.
        </p>
        <p>
          Your continued use of the App after any changes to these Terms constitutes your
          acceptance of the updated Terms. If you do not agree with the updated Terms,
          you must stop using the App.
        </p>

        <h2>9. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of
          France, without regard to its conflict of law provisions. Any disputes arising
          under these Terms shall be subject to the exclusive jurisdiction of the courts
          of France, unless otherwise required by applicable consumer protection laws in
          your jurisdiction.
        </p>

        <h2>10. Contact</h2>
        <p>
          If you have any questions about these Terms of Use, please contact us at:
        </p>
        <ul>
          <li><strong>Entity:</strong> <PH>[ADD LEGAL NAME OR COMPANY NAME]</PH></li>
          <li><strong>Email:</strong> <PH>[ADD CONTACT EMAIL]</PH></li>
          <li><strong>Location:</strong> France / European Union</li>
        </ul>
      </div>
    </>
  )
}
