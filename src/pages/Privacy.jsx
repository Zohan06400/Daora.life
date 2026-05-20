import { usePageMeta } from '../hooks/usePageMeta'

function PH({ children }) {
  return <span className="placeholder-tag">{children}</span>
}

export default function Privacy() {
  usePageMeta({
    title: 'Privacy Policy — Daora',
    description: 'Daora Privacy Policy. Learn how we collect, use, and protect your information.',
  })

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>How we handle your information in Daora.</p>
        </div>
      </section>

      <div className="prose">
        <span className="last-updated">Last updated: <PH>[ADD DATE]</PH></span>

        <h2>1. Introduction</h2>
        <p>
          This Privacy Policy describes how <PH>[ADD LEGAL NAME OR COMPANY NAME]</PH>{' '}
          ("we," "our," or "us") collects, uses, and handles information in connection
          with the Daora mobile application (the "App").
        </p>
        <p>
          By using Daora, you agree to the practices described in this Privacy Policy.
          If you do not agree, please discontinue use of the App.
        </p>
        <p>
          <strong>
            The actual data practices of the App depend on its current implementation
            and any third-party services integrated at a given time. This policy reflects
            our general approach and will be updated as the App evolves.
          </strong>
        </p>

        <h2>2. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>
            <strong>Content you create:</strong> Tasks, plans, reflections, habit entries,
            notes, and other content you enter directly into the App.
          </li>
          <li>
            <strong>Device information:</strong> Information about the device you use,
            such as device model, operating system version, and unique device identifiers,
            which may be collected automatically.
          </li>
          <li>
            <strong>Usage data:</strong> Information about how you interact with the App,
            such as features used, session duration, and interaction patterns, which may
            be collected through analytics tools.
          </li>
          <li>
            <strong>Crash reports:</strong> Technical information about errors or crashes
            that occur while using the App, which helps us improve stability.
          </li>
        </ul>

        <h2>3. How We Use Information</h2>
        <p>Information we collect may be used to:</p>
        <ul>
          <li>Provide, maintain, and improve the App and its features.</li>
          <li>Analyze usage patterns to understand how the App is being used.</li>
          <li>Diagnose and resolve technical issues.</li>
          <li>Respond to support requests and communicate with users.</li>
          <li>Comply with legal obligations.</li>
        </ul>

        <h2>4. Local Data and App Data</h2>
        <p>
          Much of the data you create in Daora — such as your daily plans, habit logs,
          reflections, and tasks — is stored locally on your device. This data may not
          leave your device unless a cloud sync or backup feature is enabled. Please
          review the App's current settings and features to understand where your data
          is stored at any given time.
        </p>
        <p>
          If the App supports cloud sync, backups, or account-based features, the
          relevant data may be stored on third-party servers. We will update this policy
          to reflect those practices when applicable.
        </p>

        <h2>5. Third-Party Services</h2>
        <p>
          The App may integrate third-party services for purposes such as analytics,
          crash reporting, or cloud infrastructure. These services may collect information
          as described in their own privacy policies.
        </p>
        <p>
          Third-party services currently used or potentially used include:{' '}
          <PH>[ADD THIRD-PARTY SERVICES IF ANY — e.g. Firebase, Sentry, RevenueCat]</PH>.
        </p>
        <p>
          We encourage you to review the privacy policies of any third-party services
          integrated with the App.
        </p>

        <h2>6. Analytics and Crash Reports</h2>
        <p>
          We may use third-party analytics or crash reporting tools to collect aggregated
          and anonymized data about App usage and stability. This data helps us understand
          feature usage and improve the user experience. We do not use this data to
          identify individual users unless required by law.
        </p>

        <h2>7. Data Sharing</h2>
        <p>
          We do not sell, rent, or trade your personal information to third parties for
          marketing purposes. We may share data in the following limited circumstances:
        </p>
        <ul>
          <li>
            <strong>Service providers:</strong> Third-party vendors that help us operate
            the App (e.g., hosting, analytics, crash reporting), subject to confidentiality
            obligations.
          </li>
          <li>
            <strong>Legal requirements:</strong> When required by applicable law, regulation,
            legal process, or governmental request.
          </li>
          <li>
            <strong>Business transfers:</strong> In connection with a merger, acquisition,
            or sale of assets, your information may be transferred as part of that transaction.
          </li>
        </ul>

        <h2>8. Data Retention</h2>
        <p>
          We retain information for as long as necessary to provide the App's services,
          comply with legal obligations, resolve disputes, and enforce our agreements.
          Content stored locally on your device is retained until you delete it or
          uninstall the App.
        </p>

        <h2>9. Your Rights</h2>
        <p>
          Depending on your location, you may have the following rights regarding your
          personal data:
        </p>
        <ul>
          <li>
            <strong>Access:</strong> Request a copy of the personal data we hold about you.
          </li>
          <li>
            <strong>Rectification:</strong> Request correction of inaccurate or incomplete data.
          </li>
          <li>
            <strong>Erasure:</strong> Request deletion of your personal data ("right to be forgotten").
          </li>
          <li>
            <strong>Portability:</strong> Request your data in a structured, machine-readable format.
          </li>
          <li>
            <strong>Objection:</strong> Object to certain types of processing of your data.
          </li>
        </ul>
        <p>
          If you are located in the European Union or European Economic Area, these rights
          are provided under the General Data Protection Regulation (GDPR). To exercise
          any of these rights, contact us at: <PH>[ADD CONTACT EMAIL]</PH>.
        </p>

        <h2>10. Children's Privacy</h2>
        <p>
          The App is not directed to children under the age of 13 (or the applicable
          minimum age in your jurisdiction). We do not knowingly collect personal
          information from children. If you believe a child has provided us with personal
          information, please contact us so we can delete it.
        </p>

        <h2>11. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we make significant
          changes, we will update the "Last updated" date at the top of this page. We
          encourage you to review this policy periodically. Continued use of the App
          after changes constitutes acceptance of the updated policy.
        </p>

        <h2>12. Contact</h2>
        <p>
          If you have questions, concerns, or requests regarding this Privacy Policy or
          your personal data, please contact us at:
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
