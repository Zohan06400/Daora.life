import { usePageMeta } from '../hooks/usePageMeta'

const flowSteps = [
  {
    icon: '☀️',
    bg: 'linear-gradient(135deg,#ff9f0a,#ffd60a)',
    title: 'Morning',
    sub: 'Start with clarity.',
    desc: 'Choose your priorities, prepare your routine, and define what matters most today.',
  },
  {
    icon: '📋',
    bg: 'linear-gradient(135deg,#0071e3,#34aadc)',
    title: 'Day',
    sub: 'Move with focus.',
    desc: 'Work through tasks and projects with impact, energy, and time in mind.',
  },
  {
    icon: '🌙',
    bg: 'linear-gradient(135deg,#6e40c9,#9b72ff)',
    title: 'Evening',
    sub: 'Reflect honestly.',
    desc: 'Review what helped, what blocked you, and what you should adjust tomorrow.',
  },
  {
    icon: '📊',
    bg: 'linear-gradient(135deg,#1dbd6a,#30d158)',
    title: 'Patterns',
    sub: 'Understand yourself.',
    desc: 'See how your habits, focus, energy, and routines affect your best days over time.',
  },
]

const whyCards = [
  {
    icon: '🎯',
    bg: 'linear-gradient(135deg,#ff375f,#ff6b6b)',
    title: 'Plan with intention',
    desc: 'Focus on what truly matters and design days that support your goals.',
  },
  {
    icon: '⚡',
    bg: 'linear-gradient(135deg,#ff9f0a,#ffd60a)',
    title: 'Execute with focus',
    desc: 'Stay in control of your attention and build momentum that compounds.',
  },
  {
    icon: '💫',
    bg: 'linear-gradient(135deg,#6e40c9,#9b72ff)',
    title: 'Reflect with awareness',
    desc: 'Learn from your day, adjust with honesty, and grow with consistency.',
  },
]

const features = [
  {
    icon: '☀️',
    bg: 'linear-gradient(135deg,#ff9f0a,#ffd60a)',
    title: 'Morning Planning',
    desc: 'Plan the day around your real priorities, not just a random task list.',
  },
  {
    icon: '📋',
    bg: 'linear-gradient(135deg,#0071e3,#34aadc)',
    title: 'Projects & Tasks',
    desc: 'Organize work by impact, energy, and time so you know what deserves attention first.',
  },
  {
    icon: '🎯',
    bg: 'linear-gradient(135deg,#ff375f,#ff6b6b)',
    title: 'Focus Mode',
    desc: 'Enter a distraction-free flow and stay connected to the task that matters now.',
  },
  {
    icon: '✅',
    bg: 'linear-gradient(135deg,#1dbd6a,#30d158)',
    title: 'Habit Tracker',
    desc: 'Track morning and evening routines that support consistency, focus, and recovery.',
  },
  {
    icon: '🌙',
    bg: 'linear-gradient(135deg,#6e40c9,#9b72ff)',
    title: 'Evening Reflection',
    desc: 'Close the day with awareness: what worked, what blocked you, and what to adjust.',
  },
  {
    icon: '📊',
    bg: 'linear-gradient(135deg,#1dbd6a,#20c0a0)',
    title: 'Patterns & Insights',
    desc: 'Discover which routines, habits, and focus patterns are linked to your best days.',
  },
  {
    icon: '✨',
    bg: 'linear-gradient(135deg,#5e8eff,#9b72ff)',
    title: 'Memory Capsules',
    desc: 'Turn meaningful daily moments into clean, shareable personal summaries.',
  },
]

export default function Home() {
  usePageMeta({
    title: 'Daora — Build your future daily.',
    description:
      'Plan your day, track habits, focus deeply, reflect honestly, and understand your personal growth patterns. Coming soon on the App Store.',
  })

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero" id="home">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          AI-powered daily planning &amp; self-reflection
        </div>

        <h1 className="hero-title">
          Design better days with clarity, focus, and reflection.
        </h1>

        <p className="hero-subtitle">
          Daora helps you plan your day, follow the routines that keep you
          grounded, stay focused on what matters, and understand the patterns
          behind your best days.
        </p>

        <div className="hero-cta-group">
          <a href="/contact" className="hero-app-btn">
            Coming soon on the App Store
          </a>
          <p className="hero-secondary">
            Be the first to know when Daora launches.{' '}
            <a href="/contact">Get in touch →</a>
          </p>
        </div>

        <div className="phones-showcase">
          <div className="phone-wrapper phone-sm">
            <div className="phone">
              <div className="phone-screen"
                style={{ background: 'linear-gradient(160deg,#1a1230 0%,#0f0a20 100%)' }}>
                <div className="phone-screen-content">
                  <div className="screen-icon">☀️</div>
                  <div className="screen-bars">
                    <div className="screen-bar long" />
                    <div className="screen-bar medium" />
                    <div className="screen-bar short" />
                  </div>
                  <div className="screen-label">Morning</div>
                </div>
              </div>
            </div>
          </div>

          <div className="phone-wrapper phone-md center">
            <div className="phone">
              <div className="phone-screen"
                style={{ background: 'linear-gradient(160deg,#0a0a1a 0%,#10103a 100%)' }}>
                <div className="phone-screen-content">
                  <div className="screen-icon">🎯</div>
                  <div className="screen-bars">
                    <div className="screen-bar long" />
                    <div className="screen-bar medium" />
                    <div className="screen-bar short" />
                    <div className="screen-bar long" />
                  </div>
                  <div className="screen-label">Focus Mode</div>
                </div>
              </div>
            </div>
          </div>

          <div className="phone-wrapper phone-sm">
            <div className="phone">
              <div className="phone-screen"
                style={{ background: 'linear-gradient(160deg,#1a1030 0%,#120a28 100%)' }}>
                <div className="phone-screen-content">
                  <div className="screen-icon">🌙</div>
                  <div className="screen-bars">
                    <div className="screen-bar medium" />
                    <div className="screen-bar long" />
                    <div className="screen-bar short" />
                  </div>
                  <div className="screen-label">Reflection</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="section how-section" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <span className="section-label">How Daora works</span>
            <h2>A simple daily flow that creates clarity and momentum.</h2>
          </div>

          <div className="flow-outer">
            <div className="flow-line" />
            <div className="flow-cards">
              {flowSteps.map(({ icon, bg, title, sub, desc }) => (
                <div className="flow-card" key={title}>
                  <div className="flow-dot" />
                  <div className="flow-icon" style={{ background: bg }}>{icon}</div>
                  <h3>{title}</h3>
                  <p className="flow-card-sub">{sub}</p>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why different ── */}
      <section className="section why-section" id="about">
        <div className="container">
          <div className="why-intro">
            <span className="section-label">Why Daora is different</span>
            <h2>Not just a planner.<br />A daily growth system.</h2>
            <p>
              Daora connects your tasks, habits, routines, focus sessions,
              reflections, and patterns so every day becomes useful data for
              improving your life.
            </p>
          </div>

          <div className="why-cards">
            {whyCards.map(({ icon, bg, title, desc }) => (
              <div className="why-card" key={title}>
                <div className="why-icon" style={{ background: bg }}>{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="section" id="features"
        style={{ background: 'linear-gradient(180deg,rgba(255,255,255,.02) 0%,transparent 100%)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Features</span>
            <h2>Everything connected for your best day.</h2>
            <p>
              Your tasks, habits, routines, reflections, and insights work
              together in one simple daily flow.
            </p>
          </div>

          <div className="features-grid">
            {features.map(({ icon, bg, title, desc }) => (
              <div className="feature-card" key={title}>
                <div className="feature-icon" style={{ background: bg }}>{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <h2>Your best days are not random.</h2>
        <p>
          Daora helps you notice what creates momentum, what drains your
          energy, and what small actions move your life forward.
        </p>
        <a href="/contact" className="btn btn-glass">Get in touch</a>
      </section>
    </>
  )
}
