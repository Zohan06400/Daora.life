import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -56px 0px' }
    )
    const setup = () =>
      document.querySelectorAll('.reveal:not(.revealed)').forEach(el => observer.observe(el))
    setup()
    const raf = requestAnimationFrame(setup)
    return () => { cancelAnimationFrame(raf); observer.disconnect() }
  }, [pathname])

  return (
    <>
      <Navbar />
      <main>
        <div key={pathname} className="page-enter">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  )
}
