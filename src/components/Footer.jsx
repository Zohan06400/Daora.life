import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h3>Daora</h3>
          <p>Build your future daily.</p>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <Link to="/support">Support</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Use</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/press">Press</Link>
        </nav>
      </div>
      <div className="footer-bottom">
        © 2026 Daora. All rights reserved.
      </div>
    </footer>
  )
}
