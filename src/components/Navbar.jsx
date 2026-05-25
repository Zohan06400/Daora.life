import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home',     href: '/'           },
  { label: 'Features', href: '/#features'  },
  { label: 'Privacy',  href: '/privacy'    },
  { label: 'Support',  href: '/support'    },
  { label: 'Contact',  href: '/contact'    },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav className="navbar">
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">Daora</Link>

          <ul className="navbar-links">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>

          <a href="mailto:hello@daora.life" className="nav-cta nav-cta-desktop">
            Get notified
          </a>

          <button
            className={`nav-toggle${open ? ' open' : ''}`}
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${open ? ' open' : ''}`} role="navigation">
        <ul>
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href} onClick={() => setOpen(false)}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
