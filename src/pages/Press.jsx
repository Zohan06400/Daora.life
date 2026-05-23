import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Press() {
  usePageMeta({
    title: 'Press — Daora',
    description: 'Daora press kit. Brand assets, app descriptions, and media contact.',
  })

  return (
    <div>
      <Link to="/" className="inner-back">← Back to home</Link>

      <div className="inner-header">
        <h1>Press</h1>
        <p>Press kit, brand assets, and media inquiries.</p>
      </div>

      <div className="inner-content">
        <div className="press-cards">
          <div className="press-card">
            <div className="press-card-icon">🗂</div>
            <h3>Press Kit</h3>
            <p>
              Logos, screenshots, and brand assets for Daora. Files will be available
              once the app launches. Contact us to request assets early.
            </p>
            <a href="mailto:hello@daora.life">hello@daora.life</a>
          </div>

          <div className="press-card">
            <div className="press-card-icon">📬</div>
            <h3>Media Inquiries</h3>
            <p>
              For press inquiries, interview requests, or coverage of Daora,
              reach out to our press contact directly.
            </p>
            <a href="mailto:hello@daora.life">hello@daora.life</a>
          </div>
        </div>

        <div style={{
          marginTop: 32,
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--r-xl)',
          padding: '28px 32px',
        }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 16 }}>About Daora</p>
          <p style={{ fontSize: 16, color: 'var(--t2)', lineHeight: 1.75, marginBottom: 16 }}>
            Daora is a personal productivity app that helps you plan your day,
            track habits, focus deeply, reflect honestly, and understand your
            growth patterns — all in one place.
          </p>
          <p style={{ fontSize: 16, color: 'var(--t2)', lineHeight: 1.75 }}>
            Daora connects morning planning, task and project management, a focused
            work mode, habit tracking, evening reflection, and pattern analysis into
            a single cohesive experience. Built with a premium, minimal design
            philosophy — no noise, no distractions, just the tools you need to build
            momentum every day.
          </p>
          <div style={{ marginTop: 24, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {[
              ['App Name', 'Daora'],
              ['Tagline', 'Build your future daily.'],
              ['Platform', 'iOS (App Store)'],
              ['Category', 'Productivity / Personal Growth'],
              ['Origin', 'France / European Union'],
              ['Status', 'Coming soon'],
            ].map(([k, v]) => (
              <div key={k}>
                <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 4 }}>{k}</p>
                <p style={{ fontSize: 14, color: 'var(--t1)', fontWeight: 500 }}>{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
