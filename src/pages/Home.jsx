import { usePageMeta } from '../hooks/usePageMeta'

const features = [
  {
    icon: '☀️',
    bg: 'linear-gradient(135deg, #ffe066, #ff9f0a)',
    title: 'Morning Planning',
    desc: 'Start your day with clarity by choosing your top priorities and preparing your routine.',
  },
  {
    icon: '📋',
    bg: 'linear-gradient(135deg, #70d7ff, #0071e3)',
    title: 'Projects & Tasks',
    desc: 'Organize important work with impact value, energy level, and time estimate.',
  },
  {
    icon: '🎯',
    bg: 'linear-gradient(135deg, #ff8a80, #ff375f)',
    title: 'Focus Mode',
    desc: 'Stay concentrated and move through your work with more control.',
  },
  {
    icon: '✅',
    bg: 'linear-gradient(135deg, #7eff8a, #34c759)',
    title: 'Habit Tracker',
    desc: 'Track morning and evening routines to build consistency over time.',
  },
  {
    icon: '🌙',
    bg: 'linear-gradient(135deg, #c99eff, #9b59b6)',
    title: 'Evening Reflection',
    desc: 'Review what went well, what blocked you, and what to adjust tomorrow.',
  },
  {
    icon: '📊',
    bg: 'linear-gradient(135deg, #60d0f0, #30b0d0)',
    title: 'Patterns & Insights',
    desc: 'Understand how your routines, focus, energy, and habits affect your best days.',
  },
  {
    icon: '✨',
    bg: 'linear-gradient(135deg, #ffb3d1, #ff375f)',
    title: 'Memory Capsules',
    desc: 'Capture meaningful daily moments in a clean, shareable format.',
  },
]

function PhoneMockup({ gradient, icon, label, size = 'md' }) {
  return (
    <div className={`phone-wrapper ${size === 'md' ? 'center' : ''}`}>
      <div className="phone">
        <div className="phone-screen" style={{ background: gradient }}>
          <div className="phone-screen-content">
            <div className="screen-icon">{icon}</div>
            <div className="screen-bars">
              <div className="screen-bar long"  />
              <div className="screen-bar medium"/>
              <div className="screen-bar short" />
              <div className="screen-bar medium"/>
            </div>
            <div className="screen-label">{label}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  usePageMeta({
    title: 'Daora — Build your future daily.',
    description:
      'Plan your day, track habits, focus deeply, reflect honestly, and understand your personal growth patterns. Coming soon on the App Store.',
  })

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot" />
          Coming soon on the App Store
        </div>

        <h1 className="hero-title">Daora</h1>
        <p className="hero-subtitle">Build your future daily.</p>
        <p className="hero-desc">
          Plan your day, track habits, focus deeply, reflect honestly,
          and understand your personal growth patterns.
        </p>

        <div className="hero-cta">
          <span className="coming-soon-badge">
            <span className="coming-soon-icon"></span>
            Available soon on the App Store
          </span>
        </div>

        {/* Phone mockups */}
        <div className="phones-showcase">
          <div className="phone-wrapper phone-sm">
            <div className="phone">
              <div
                className="phone-screen"
                style={{ background: 'linear-gradient(160deg, #1a1230 0%, #0f0a20 100%)' }}
              >
                <div className="phone-screen-content">
                  <div className="screen-icon">☀️</div>
                  <div className="screen-bars">
                    <div className="screen-bar long"  />
                    <div className="screen-bar medium"/>
                    <div className="screen-bar short" />
                  </div>
                  <div className="screen-label">Morning</div>
                </div>
              </div>
            </div>
          </div>

          <div className="phone-wrapper phone-md center">
            <div className="phone">
              <div
                className="phone-screen"
                style={{ background: 'linear-gradient(160deg, #0a0a1a 0%, #10103a 100%)' }}
              >
                <div className="phone-screen-content">
                  <div className="screen-icon">🎯</div>
                  <div className="screen-bars">
                    <div className="screen-bar long"  />
                    <div className="screen-bar medium"/>
                    <div className="screen-bar short" />
                    <div className="screen-bar long"  />
                  </div>
                  <div className="screen-label">Focus Mode</div>
                </div>
              </div>
            </div>
          </div>

          <div className="phone-wrapper phone-sm">
            <div className="phone">
              <div
                className="phone-screen"
                style={{ background: 'linear-gradient(160deg, #1a1030 0%, #120a28 100%)' }}
              >
                <div className="phone-screen-content">
                  <div className="screen-icon">🌙</div>
                  <div className="screen-bars">
                    <div className="screen-bar medium"/>
                    <div className="screen-bar long"  />
                    <div className="screen-bar short" />
                  </div>
                  <div className="screen-label">Reflection</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="features-header">
            <span className="section-label">Features</span>
            <h2>Everything you need for your best day.</h2>
            <p>Seven thoughtfully designed tools that work together to help you build momentum every day.</p>
          </div>

          <div className="features-grid">
            {features.map(({ icon, bg, title, desc }) => (
              <div className="feature-card" key={title}>
                <div className="feature-icon" style={{ background: bg }}>
                  {icon}
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA band ── */}
      <section className="cta-band">
        <h2>Your best days, by design.</h2>
        <p>
          Daora is coming soon to the App Store.
          Follow along and be the first to know when it launches.
        </p>
        <a href="/contact" className="btn-light">
          Get in touch
        </a>
      </section>
    </>
  )
}
