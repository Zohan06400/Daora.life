import { usePageMeta } from '../hooks/usePageMeta'

const screenshotLabels = [
  'Morning Planning',
  'Focus Mode',
  'Evening Reflection',
  'Habit Tracker',
  'Patterns & Insights',
  'Memory Capsules',
]

export default function Press() {
  usePageMeta({
    title: 'Press Kit — Daora',
    description: 'Daora press kit. App descriptions, logo assets, and media contact.',
  })

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Press Kit</h1>
          <p>Everything you need to write about Daora.</p>
        </div>
      </section>

      <div className="press-page">
        {/* Logo */}
        <div className="press-section">
          <h2>Logo</h2>
          <div className="press-logo-placeholder">
            <div className="logo-preview">D</div>
            <p>Logo assets coming soon. Contact us to request files.</p>
          </div>
        </div>

        {/* Short description */}
        <div className="press-section">
          <h2>About Daora</h2>
          <div className="press-description-box">
            <h3>Short Description</h3>
            <p>
              Daora is a personal productivity app that helps you plan your day,
              track habits, focus deeply, reflect honestly, and understand your
              growth patterns — all in one place.
            </p>
          </div>
        </div>

        <div className="press-description-box">
          <h3>Long Description</h3>
          <p>
            Daora is a daily productivity and personal growth app designed to help
            you build better days, one at a time. It combines morning planning,
            task and project management, a focused work mode, habit tracking,
            evening reflection, and pattern analysis into a single, cohesive
            experience.
          </p>
          <p style={{ marginTop: '16px' }}>
            Each morning, Daora guides you through setting your top priorities and
            preparing your routine. Throughout the day, you organize your projects
            and tasks with context — including impact value, energy level, and time
            estimates. When it's time to work, Focus Mode keeps you on track.
            Evening Reflection helps you review what went well, what blocked you,
            and how to improve tomorrow. And over time, Patterns & Insights reveals
            how your habits, energy, and focus shape your best days.
          </p>
          <p style={{ marginTop: '16px' }}>
            Memory Capsules let you capture meaningful moments from each day in a
            clean, shareable format — turning your daily log into a personal record
            of growth.
          </p>
          <p style={{ marginTop: '16px' }}>
            Daora is built with a premium, minimal design philosophy. No noise.
            No distractions. Just the tools you need to build momentum every day.
          </p>
        </div>

        {/* Screenshots */}
        <div className="press-section">
          <h2>App Screenshots</h2>
          <div className="press-screenshots-grid">
            {screenshotLabels.map((label) => (
              <div className="press-screenshot-placeholder" key={label}>
                <span>📱</span>
                <p>{label}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '16px', fontSize: '14px', color: 'var(--text-tertiary)' }}>
            Screenshots available upon request once the app launches.
          </p>
        </div>

        {/* App details */}
        <div className="press-section">
          <h2>App Details</h2>
          <div className="press-description-box">
            <h3>Key Facts</h3>
            <p><strong>App Name:</strong> Daora</p>
            <p style={{ marginTop: '8px' }}><strong>Tagline:</strong> Build your future daily.</p>
            <p style={{ marginTop: '8px' }}><strong>Platform:</strong> iOS (App Store)</p>
            <p style={{ marginTop: '8px' }}><strong>Category:</strong> Productivity / Personal Growth</p>
            <p style={{ marginTop: '8px' }}><strong>Origin:</strong> France / European Union</p>
            <p style={{ marginTop: '8px' }}><strong>Status:</strong> Coming soon</p>
          </div>
        </div>

        {/* Contact */}
        <div className="press-section">
          <h2>Press Contact</h2>
          <div className="support-contact-card">
            <p>
              For press inquiries, interview requests, or media assets,
              please reach out by email.
            </p>
            <a href="mailto:[ADD BUSINESS EMAIL HERE]" className="email-chip">
              <span>📬</span>
              [ADD BUSINESS EMAIL HERE]
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
