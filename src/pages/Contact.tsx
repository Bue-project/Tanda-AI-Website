import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('/#')) {
      const id = href.slice(2);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 nav-glass ${
          scrolled ? 'nav-scrolled' : 'bg-[rgba(4,7,13,0.75)]'
        } border-b border-[var(--color-border)]`}
        style={{ animation: 'heroFadeIn 0.4s cubic-bezier(0.16,1,0.3,1) both' }}
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 h-16">
          <Link to="/" className="flex items-center gap-2.5 font-semibold text-white">
            <img src={logo} alt="Tanda AI" className="h-8 w-auto" />
            <span
              className="text-lg font-bold tracking-wide"
              style={{
                background: 'linear-gradient(135deg, #FFD700, #DAA520, #F5C842)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              TANDA AI
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href.startsWith('/#') ? (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-muted-foreground hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-muted-foreground hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="https://calendar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--color-accent)] text-white rounded-full px-5 py-2 text-sm font-semibold btn-glow"
            >
              Book A Free Call →
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[200] bg-[var(--color-bg)] flex flex-col items-center justify-center gap-8">
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-5 right-6 text-white"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          {navLinks.map((link) =>
            link.href.startsWith('/#') ? (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-2xl text-white font-light"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="text-2xl text-white font-light"
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href="https://calendar.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[var(--color-accent)] text-white rounded-full px-8 py-3 text-lg font-semibold btn-glow"
          >
            Book A Free Call →
          </a>
        </div>
      )}
    </>
  );
}
