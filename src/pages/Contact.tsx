import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Mail, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-[700px] mx-auto text-center hero-stagger">
          <h1 className="font-['Instrument_Serif'] text-[clamp(2.5rem,5vw,4rem)] font-normal text-white mb-4">
            Contact Us
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            Let's Build Something Together. Book a free 30-minute call. We'll walk through your goals, design the right voice AI setup, and show you exactly how it fits your business.
          </p>
          <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-10 mb-10">
            <div className="flex items-center justify-center gap-2 text-[var(--color-accent)] mb-4">
              <Calendar size={24} />
              <h2 className="text-xl font-semibold">Book a Free Strategy Call</h2>
            </div>
            <p className="text-muted-foreground mb-6 text-sm">
              30 minutes. No sales pressure. Walk away with a clear picture of how voice AI fits your business.
            </p>
            <a
              href="https://calendar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white rounded-full px-8 py-3 font-semibold text-sm btn-glow"
            >
              Choose a time →
            </a>
          </div>
          <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-8">
            <h3 className="text-white font-semibold text-lg mb-6">Contact Information</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-3">
                <Mail size={16} className="text-[var(--color-accent)]" />
                <span>Email: hello@tanda.ai</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <span className="text-base">💬</span>
                <span>Response time: Within 24 hours</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Globe size={16} className="text-[var(--color-accent)]" />
                <span>We work with teams worldwide, fully remote</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
