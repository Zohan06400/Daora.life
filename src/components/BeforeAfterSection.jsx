const beforeCards = [
  {
    icon: '🗂️', bg: 'rgba(220,50,50,.14)', color: '#ff8888',
    title: 'Scattered tasks',
    desc: 'Notes, reminders, and ideas live everywhere.',
    rot: '-1.5deg',
  },
  {
    icon: '❓', bg: 'rgba(220,50,50,.14)', color: '#ff8888',
    title: 'No clear priority',
    desc: 'Everything feels important at the same time.',
    rot: '0.7deg',
  },
  {
    icon: '🔔', bg: 'rgba(220,50,50,.14)', color: '#ff8888',
    title: 'Reactive focus',
    desc: 'Notifications and distractions control your attention.',
    rot: '-0.9deg',
  },
  {
    icon: '✕', bg: 'rgba(220,50,50,.14)', color: '#ff8888',
    title: 'No reflection',
    desc: 'The day ends without clear lessons.',
    rot: '1.1deg',
  },
]

const afterCards = [
  {
    icon: '📅', bg: 'rgba(94,142,255,.14)', color: '#7ba8ff',
    title: 'Clear daily plan',
    desc: 'Start with your priorities and non-negotiable task.',
  },
  {
    icon: '🎯', bg: 'rgba(155,114,255,.14)', color: '#b899ff',
    title: 'Focused execution',
    desc: 'Move through the day with intention.',
  },
  {
    icon: '🌙', bg: 'rgba(94,142,255,.14)', color: '#7ba8ff',
    title: 'Evening clarity',
    desc: 'Review what mattered and what blocked you.',
  },
  {
    icon: '📊', bg: 'rgba(155,114,255,.14)', color: '#b899ff',
    title: 'Personal insights',
    desc: 'Understand the patterns behind your best days.',
  },
]

export default function BeforeAfterSection() {
  return (
    <section className="section ba-section">
      <div className="container">

        {/* ── Header ── */}
        <div className="ba-header reveal">
          <span className="section-label">Before &amp; After</span>
          <h2 className="ba-headline">
            From scattered days to{' '}
            <span className="gradient-text">structured progress</span>
          </h2>
          <p className="ba-subtitle">
            Replace mental noise with a simple daily system for planning,
            focus, reflection, and growth.
          </p>
        </div>

        {/* ── Comparison ── */}
        <div className="ba-comparison">

          {/* Before panel */}
          <div className="ba-panel ba-panel-before">
            <div className="ba-panel-head">
              <div className="ba-badge ba-badge-before">
                <span aria-hidden="true">⚡</span> Before Daora
              </div>
              <p className="ba-intro">
                Your day feels busy, but not always meaningful.
              </p>
            </div>
            <ul className="ba-cards" role="list">
              {beforeCards.map(({ icon, bg, color, title, desc, rot }, i) => (
                <li
                  key={title}
                  className="ba-card ba-card-before reveal"
                  style={{ '--reveal-delay': `${i * 0.08}s`, '--card-rot': rot }}
                >
                  <div className="ba-icon" style={{ background: bg, color }}>{icon}</div>
                  <div className="ba-card-body">
                    <span className="ba-card-title">{title}</span>
                    <span className="ba-card-desc">{desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="ba-divider reveal" aria-hidden="true">
            <div className="ba-div-line" />
            <div className="ba-div-circle">↓</div>
            <div className="ba-div-label">
              <span className="ba-noise">Noise</span>
              <span className="ba-arr">→</span>
              <span className="ba-clarity">Clarity</span>
            </div>
            <div className="ba-div-line" />
          </div>

          {/* After panel */}
          <div className="ba-panel ba-panel-after">
            <div className="ba-panel-head">
              <div className="ba-badge ba-badge-after">
                <span aria-hidden="true">✦</span> After Daora
              </div>
              <p className="ba-intro">
                Your day becomes a system you can trust.
              </p>
            </div>
            <ul className="ba-cards" role="list">
              {afterCards.map(({ icon, bg, color, title, desc }, i) => (
                <li
                  key={title}
                  className="ba-card ba-card-after reveal"
                  style={{ '--reveal-delay': `${i * 0.08}s` }}
                >
                  <div className="ba-icon" style={{ background: bg, color }}>{icon}</div>
                  <div className="ba-card-body">
                    <span className="ba-card-title">{title}</span>
                    <span className="ba-card-desc">{desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Finale ── */}
        <div className="ba-finale reveal">
          <div className="ba-finale-icon" aria-hidden="true">💜</div>
          <p className="ba-finale-text">
            Daora does not just organize your tasks.{' '}
            <span className="gradient-text">
              It helps you understand how you live, work, and grow.
            </span>
          </p>
        </div>

      </div>
    </section>
  )
}
