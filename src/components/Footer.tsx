import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-10 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">© 2026 Tanda AI.</p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[var(--color-text)] transition-colors">
            Services
          </button>
          <button onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[var(--color-text)] transition-colors">
            FAQ
          </button>
          <Link to="/contact" className="hover:text-[var(--color-text)] transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
