const ICONS = {
  layers:     ['M12 2L2 7l10 5 10-5-10-5', 'M2 17l10 5 10-5', 'M2 12l10 5 10-5'],
  helpCircle: [
    'M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10',
    'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3',
    'M12 17h.01',
  ],
  bell: [
    'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9',
    'M13.73 21a2 2 0 0 1-3.46 0',
  ],
  xCircle: [
    'M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10',
    'M15 9l-6 6M9 9l6 6',
  ],
  calCheck: [
    'M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z',
    'M16 2v4M8 2v4M3 10h18',
    'M9 16l2 2 4-4',
  ],
  target: [
    'M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10',
    'M12 18c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6',
    'M12 14c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2',
  ],
  moon:      ['M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'],
  barChart:  ['M18 20V10', 'M12 20V4', 'M6 20v-6'],
  arrowDown: ['M12 5v14', 'M5 12l7 7 7-7'],
  check:     ['M20 6 9 17l-5-5'],
}

const Icon = ({ name, size = 18, color = 'currentColor' }) => (
  <svg
    width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true"
  >
    {(ICONS[name] ?? []).map((d, i) => <path key={i} d={d} />)}
  </svg>
)

const beforeCards = [
  {
    icon: 'layers',
    bg: 'rgba(220,50,50,.14)', color: '#ff8888',
    title: 'Scattered tasks',
    desc: 'Notes, reminders, and ideas live everywhere.',
    rot: '-1.5deg',
  },
  {
    icon: 'helpCircle',
    bg: 'rgba(220,50,50,.14)', color: '#ff8888',
    title: 'No clear priority',
    desc: 'Everything feels important at the same time.',
    rot: '0.7deg',
  },
  {
    icon: 'bell',
    bg: 'rgba(220,50,50,.14)', color: '#ff8888',
    title: 'Reactive focus',
    desc: 'Notifications and distractions control your attention.',
    rot: '-0.9deg',
  },
  {
    icon: 'xCircle',
    bg: 'rgba(220,50,50,.14)', color: '#ff8888',
    title: 'No reflection',
    desc: 'The day ends without clear lessons.',
    rot: '1.1deg',
  },
]

const afterCards = [
  {
    icon: 'calCheck',
    bg: 'rgba(94,142,255,.14)', color: '#7ba8ff',
    title: 'Clear daily plan',
    desc: 'Start with your priorities and non-negotiable task.',
  },
  {
    icon: 'target',
    bg: 'rgba(155,114,255,.14)', color: '#b899ff',
    title: 'Focused execution',
    desc: 'Move through the day with intention.',
  },
  {
    icon: 'moon',
    bg: 'rgba(94,142,255,.14)', color: '#7ba8ff',
    title: 'Evening clarity',
    desc: 'Review what mattered and what blocked you.',
  },
  {
    icon: 'barChart',
    bg: 'rgba(155,114,255,.14)', color: '#b899ff',
    title: 'Personal insights',
    desc: 'Understand the patterns behind your best days.',
  },
]

const chaosChips = [
  { label: 'Buy gift',        tag: 'Later',    tagCls: 'chip-tag-later', rot: '-2.5deg' },
  { label: 'Work on project', tag: 'Too many', tagCls: 'chip-tag-many',  rot: '1.8deg'  },
  { label: 'Reply to emails', tag: 'Later',    tagCls: 'chip-tag-later', rot: '-1.2deg' },
]

const miniRows = ['Top priority', 'Morning habit', 'Deep work']

export default function BeforeAfterSection() {
  return (
    <section className="section ba-section">
      <div className="container">

        {/* Header */}
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

        {/* Comparison grid */}
        <div className="ba-comparison">

          {/* ── Before panel */}
          <div className="ba-panel ba-panel-before">
            <div className="ba-panel-head">
              <div className="ba-panel-head-text">
                <div className="ba-badge ba-badge-before">
                  <span aria-hidden="true">⚡</span> Before Daora
                </div>
                <p className="ba-intro">Your day feels busy, but not always meaningful.</p>
              </div>

              <div className="ba-chaos-chips" aria-hidden="true">
                {chaosChips.map(({ label, tag, tagCls, rot }) => (
                  <div className="ba-chip" key={label} style={{ '--chip-rot': rot }}>
                    <span className="ba-chip-label">{label}</span>
                    <span className={`ba-chip-tag ${tagCls}`}>{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            <ul className="ba-cards" role="list">
              {beforeCards.map(({ icon, bg, color, title, desc, rot }, i) => (
                <li
                  key={title}
                  className="ba-card ba-card-before reveal"
                  style={{ '--reveal-delay': `${i * 0.08}s`, '--card-rot': rot }}
                >
                  <div className="ba-icon" style={{ background: bg, color }}>
                    <Icon name={icon} size={16} color={color} />
                  </div>
                  <div className="ba-card-body">
                    <span className="ba-card-title">{title}</span>
                    <span className="ba-card-desc">{desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Transformation divider */}
          <div className="ba-divider reveal" aria-hidden="true">
            <div className="ba-div-line" />
            <div className="ba-div-circle-wrap">
              <div className="ba-div-glow" />
              <div className="ba-div-circle">
                <Icon name="arrowDown" size={18} color="#a67dff" />
              </div>
              <div className="ba-div-particles">
                <span /><span /><span /><span />
              </div>
            </div>
            <div className="ba-div-label">
              <span className="ba-noise">Noise</span>
              <span className="ba-arr">→</span>
              <span className="ba-clarity">Clarity</span>
            </div>
            <div className="ba-div-line" />
          </div>

          {/* ── After panel */}
          <div className="ba-panel ba-panel-after">
            <div className="ba-panel-head">
              <div className="ba-panel-head-text">
                <div className="ba-badge ba-badge-after">
                  <span aria-hidden="true">✦</span> After Daora
                </div>
                <p className="ba-intro">Your day becomes a system you can trust.</p>
              </div>

              <div className="ba-app-mini" aria-hidden="true">
                <div className="ba-mini-header">Today</div>
                {miniRows.map(row => (
                  <div className="ba-mini-row" key={row}>
                    <div className="ba-mini-check">
                      <Icon name="check" size={9} color="#30d158" />
                    </div>
                    <span className="ba-mini-label">{row}</span>
                  </div>
                ))}
                <div className="ba-mini-habit">
                  <span>Habit</span>
                  <div className="ba-mini-habit-bar">
                    <div className="ba-mini-habit-fill" />
                  </div>
                  <span>5/7</span>
                </div>
              </div>
            </div>

            <ul className="ba-cards" role="list">
              {afterCards.map(({ icon, bg, color, title, desc }, i) => (
                <li
                  key={title}
                  className="ba-card ba-card-after reveal"
                  style={{ '--reveal-delay': `${i * 0.08}s` }}
                >
                  <div className="ba-icon" style={{ background: bg, color }}>
                    <Icon name={icon} size={16} color={color} />
                  </div>
                  <div className="ba-card-body">
                    <span className="ba-card-title">{title}</span>
                    <span className="ba-card-desc">{desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Finale */}
        <div className="ba-finale-card reveal">
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
