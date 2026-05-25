import { usePageMeta } from '../hooks/usePageMeta'
import BeforeAfterSection from '../components/BeforeAfterSection'

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
    title: '1. Morning Planning',
    desc: 'Start the day with intention instead of reaction. Choose your Top 3 priorities, prepare your routine, and decide what really deserves your energy today.',
    purpose: 'Clarity before action',
    helpsYou: 'Avoid random busy work',
  },
  {
    icon: '📋',
    bg: 'linear-gradient(135deg,#0071e3,#34aadc)',
    title: '2. Projects & Tasks',
    desc: 'Organize meaningful work with impact value, energy required, time estimate, reminders, and notes — so every task has context, not just a checkbox.',
    purpose: 'Turn goals into steps',
    helpsYou: 'Focus on high-impact work',
  },
  {
    icon: '🎯',
    bg: 'linear-gradient(135deg,#ff375f,#ff6b6b)',
    title: '3. Focus Mode',
    desc: 'Protect your attention when it is time to work. Start a focused session, follow the timer, reduce distractions, and stay connected to one important task.',
    purpose: 'Deep work protection',
    helpsYou: 'Stop switching and scrolling',
  },
  {
    icon: '✅',
    bg: 'linear-gradient(135deg,#1dbd6a,#30d158)',
    title: '4. Habit Tracker',
    desc: 'Build consistency through morning and evening routines. Track the small actions that support your energy, discipline, and emotional stability over time.',
    purpose: 'Daily stability',
    helpsYou: 'Build identity daily',
  },
  {
    icon: '🌙',
    bg: 'linear-gradient(135deg,#6e40c9,#9b72ff)',
    title: '5. Evening Reflection',
    desc: 'Close the day with honesty. Rate your day, write what mattered most, identify what helped or blocked you, and choose what to adjust tomorrow.',
    purpose: 'Learn from the day',
    helpsYou: 'Stop repeating mistakes',
  },
  {
    icon: '📊',
    bg: 'linear-gradient(135deg,#1dbd6a,#20c0a0)',
    title: '6. Patterns & Insights',
    desc: 'See how your habits, tasks, energy, focus, and reflections connect. Daora helps you discover what creates your best days — and what quietly blocks them.',
    purpose: 'Self-knowledge through data',
    helpsYou: 'Plan smarter every week',
  },
  {
    icon: '✨',
    bg: 'linear-gradient(135deg,#5e8eff,#9b72ff)',
    title: '7. Memory Capsules',
    desc: 'Turn your day into a clean, beautiful recap. Save meaningful moments, celebrate progress, and create a personal archive of who you are becoming.',
    purpose: 'Emotional memory',
    helpsYou: 'Make progress visible',
  },
  {
    icon: '🔄',
    bg: 'linear-gradient(135deg,#34aadc,#5e8eff)',
    title: '8. The Daily Loop',
    desc: 'Plan in the morning, execute during the day, reflect in the evening, and let your patterns improve tomorrow\'s plan. Every day teaches the next.',
    purpose: 'Continuous improvement',
    helpsYou: 'Make every day better',
  },
]

const systemFlow = [
  { icon: '📋', label: 'Projects' },
  { icon: '☀️', label: 'Morning Plan' },
  { icon: '🎯', label: 'Focus' },
  { icon: '🌙', label: 'Reflect' },
  { icon: '📊', label: 'Patterns' },
  { icon: '✨', label: 'Better Tomorrow' },
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
          Coming soon on the App Store
        </div>

        <h1 className="hero-title">
          Build better days with structure and reflection.
        </h1>

        <p className="hero-subtitle">
          Daora helps you plan your day, follow routines, focus on important
          tasks, and understand the patterns behind your best days.
        </p>

        <div className="hero-cta-group">
          <a href="mailto:hello@daora.life" className="hero-app-btn">
            Get notified at launch
          </a>
        </div>

        <div className="phones-showcase">
          <div className="phone-wrapper phone-sm">
            <div className="phone">
              <div className="phone-screen"
                style={{ background: 'linear-gradient(160deg,#1a1230 0%,#0f0a20 100%)' }}>
                <div className="phone-screen-content">
                  <div className="phone-app-header">
                    <span>☀️</span>
                    <span className="phone-app-title">Morning Plan</span>
                  </div>
                  <div className="phone-app-items">
                    <div className="phone-app-item">
                      <span className="phone-item-dot" style={{ background: '#ff9f0a' }} />
                      <span>Top 3 Priorities</span>
                    </div>
                    <div className="phone-app-item">
                      <span className="phone-item-dot" style={{ background: '#5e8eff' }} />
                      <span>Morning Routine</span>
                    </div>
                    <div className="phone-app-item">
                      <span className="phone-item-dot" style={{ background: '#30d158' }} />
                      <span>Energy Check</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="phone-wrapper phone-md center">
            <div className="phone">
              <div className="phone-screen"
                style={{ background: 'linear-gradient(160deg,#110d28 0%,#1c1550 100%)' }}>
                <div className="phone-screen-content pday-content">
                  <div className="pday-date-row">
                    <span className="pday-arrow">‹</span>
                    <span className="pday-date-text">May 25, 2026</span>
                    <span className="pday-arrow">›</span>
                  </div>
                  <div className="pday-week">
                    {[['M',25],['T',26],['W',27],['T',28],['F',29],['S',30],['S',31]].map(([d,n],i) => (
                      <div key={i} className={`pday-day${i===0?' pday-day-a':''}`}>
                        <span className="pday-wd">{d}</span>
                        <span className="pday-wn">{n}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pday-routine">
                    <span>🌅</span>
                    <span className="pday-rname">Morning Routine</span>
                    <span className="pday-rtime">06:30</span>
                    <span className="pday-rprog">4/6</span>
                  </div>
                  <div className="pday-tasks">
                    <div className="pday-block">
                      <div className="pday-btime">8:00<br/>12:00</div>
                      <div className="pday-btask"><span>💼</span> Work</div>
                      <div className="pday-bfocus">▶ Focus</div>
                    </div>
                    <div className="pday-hint">Use 2h 30m wisely.</div>
                    <div className="pday-block">
                      <div className="pday-btime">14:30<br/>16:30</div>
                      <div className="pday-btask"><span>🏋️</span> Gym</div>
                      <div className="pday-bfocus">▶ Focus</div>
                    </div>
                  </div>
                  <div className="pday-nav">
                    {[['📁','Projects'],['📋','Plan'],['▶','Flow'],['🌙','Reflect'],['📊','Patterns']].map(([ic,lb]) => (
                      <div key={lb} className={`pday-ni${lb==='Flow'?' pday-ni-a':''}`}>
                        <span>{ic}</span>
                        <span>{lb}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="phone-wrapper phone-sm">
            <div className="phone">
              <div className="phone-screen"
                style={{ background: 'linear-gradient(160deg,#1a1030 0%,#120a28 100%)' }}>
                <div className="phone-screen-content">
                  <div className="phone-app-header">
                    <span>🌙</span>
                    <span className="phone-app-title">Evening Review</span>
                  </div>
                  <div className="phone-app-items">
                    <div className="phone-app-item">
                      <span className="phone-item-dot" style={{ background: '#ffd60a' }} />
                      <span>Daily Rating</span>
                    </div>
                    <div className="phone-app-item">
                      <span className="phone-item-dot" style={{ background: '#30d158' }} />
                      <span>What Helped</span>
                    </div>
                    <div className="phone-app-item">
                      <span className="phone-item-dot" style={{ background: '#ff375f' }} />
                      <span>What Blocked You</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="phones-caption">
          One system for planning your day, protecting your focus, and learning from your patterns.
        </p>
      </section>

      {/* ── How it works ── */}
      <section className="section how-section" id="how-it-works">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">How Daora works</span>
            <h2>A simple daily flow that creates clarity and momentum.</h2>
          </div>

          <div className="flow-outer">
            <div className="flow-line" />
            <div className="flow-cards">
              {flowSteps.map(({ icon, bg, title, sub, desc }, i) => (
                <div className="flow-card reveal" key={title}
                  style={{ '--reveal-delay': `${i * 0.1}s` }}>
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
          <div className="why-intro reveal">
            <span className="section-label">Why Daora is different</span>
            <h2>Not just a planner.<br />A daily growth system.</h2>
            <p>
              Daora connects your tasks, habits, routines, focus sessions,
              reflections, and patterns so every day becomes useful data for
              improving your life.
            </p>
          </div>

          <div className="why-cards">
            {whyCards.map(({ icon, bg, title, desc }, i) => (
              <div className="why-card reveal" key={title}
                style={{ '--reveal-delay': `${i * 0.1}s` }}>
                <div className="why-icon" style={{ background: bg }}>{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BeforeAfterSection />

      {/* ── Features ── */}
      <section className="features-section section" id="features">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Features</span>
            <h2 className="features-heading">
              A complete system for{' '}
              <span className="gradient-text">building better days.</span>
            </h2>
            <p className="features-subhead">
              Daora connects planning, routines, focus, reflection, and personal
              insights into one daily loop — so you do not just stay busy, you
              learn what actually helps you grow.
            </p>
          </div>

          <div className="features-grid-v2">
            {features.map(({ icon, bg, title, desc, purpose, helpsYou }, i) => (
              <div className="feature-card-v2 reveal" key={title}
                style={{ '--reveal-delay': `${(i % 4) * 0.08}s` }}>
                <div className="feature-icon-v2" style={{ background: bg }}>{icon}</div>
                <h3>{title}</h3>
                <p className="feature-card-desc">{desc}</p>
                <div className="feature-meta">
                  <div className="feature-meta-row">
                    <span className="meta-label">Purpose</span>
                    <span className="meta-val">{purpose}</span>
                  </div>
                  <div className="feature-meta-row">
                    <span className="meta-label">Helps you</span>
                    <span className="meta-val">{helpsYou}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="system-flow-card reveal" style={{ '--reveal-delay': '0.1s' }}>
            <div className="system-flow-steps">
              {systemFlow.flatMap(({ icon, label }, i) => {
                const step = (
                  <div className="sflow-step" key={label}>
                    <div className="sflow-circle">{icon}</div>
                    <span className="sflow-label">{label}</span>
                  </div>
                )
                return i < systemFlow.length - 1
                  ? [step, <span className="sflow-arrow" key={`a${i}`}>→</span>]
                  : [step]
              })}
            </div>
            <p className="system-tagline">
              Daora is not just a task manager. It is a feedback system for your life.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <h2 className="reveal">Your best days are not random.</h2>
        <p className="reveal" style={{ '--reveal-delay': '0.1s' }}>
          Daora helps you notice what creates momentum, what drains your
          energy, and what small actions move your life forward.
        </p>
        <a href="/contact" className="btn btn-glass reveal" style={{ '--reveal-delay': '0.2s' }}>Get in touch</a>
      </section>
    </>
  )
}
