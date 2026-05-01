import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = heroRef.current;
    if (!canvas || !hero) return;

    const ctx = canvas.getContext('2d')!;
    let animId: number;
    const mouse = { x: -9999, y: -9999 };
    const COUNT = 60;
    const LINK_DIST = 130;
    const REPEL = 80;

    type Particle = { x: number; y: number; vx: number; vy: number; r: number; blue: boolean };
    let particles: Particle[] = [];

    const rand = (min: number, max: number) => Math.random() * (max - min) + min;

    function resize() {
      canvas!.width = hero!.offsetWidth;
      canvas!.height = hero!.offsetHeight;
    }

    function init() {
      particles = Array.from({ length: COUNT }, () => ({
        x: rand(0, canvas!.width),
        y: rand(0, canvas!.height),
        vx: rand(-0.2, 0.2),
        vy: rand(-0.15, 0.15),
        r: rand(1, 2.2),
        blue: Math.random() > 0.65,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);

      for (const p of particles) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < REPEL) {
          const force = ((REPEL - dist) / REPEL) * 0.8;
          p.vx += (dx / dist) * force * 0.3;
          p.vy += (dy / dist) * force * 0.3;
        }
        p.vx *= 0.99;
        p.vy *= 0.99;
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 0.6) { p.vx = (p.vx / speed) * 0.6; p.vy = (p.vy / speed) * 0.6; }
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas!.width;
        if (p.x > canvas!.width) p.x = 0;
        if (p.y < 0) p.y = canvas!.height;
        if (p.y > canvas!.height) p.y = 0;
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK_DIST) {
            const alpha = (1 - d / LINK_DIST) * 0.18;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 153, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.blue ? 'rgba(0, 153, 255, 0.7)' : 'rgba(213, 219, 230, 0.5)';
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = hero!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      if (spotRef.current) {
        spotRef.current.style.left = mouse.x + 'px';
        spotRef.current.style.top = mouse.y + 'px';
      }
    };
    const onMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
      if (spotRef.current) spotRef.current.style.opacity = '0';
    };
    const onMouseEnter = () => {
      if (spotRef.current) spotRef.current.style.opacity = '1';
    };

    hero.addEventListener('mousemove', onMouseMove);
    hero.addEventListener('mouseleave', onMouseLeave);
    hero.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('resize', () => { resize(); init(); });

    resize();
    init();
    draw();

    return () => {
      cancelAnimationFrame(animId);
      hero.removeEventListener('mousemove', onMouseMove);
      hero.removeEventListener('mouseleave', onMouseLeave);
      hero.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen min-h-[600px] flex items-center justify-center text-center overflow-hidden">
      <canvas ref={canvasRef} id="particle-canvas" />

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
        <div
          className="w-[700px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(ellipse, rgba(212,168,67,0.08) 0%, transparent 65%)' }}
        />
      </div>
      <div ref={spotRef} className="hero-spotlight" />

      <div className="relative z-10 max-w-[800px] px-6 hero-stagger">
        <div className="inline-flex items-center gap-2 bg-[rgba(212,168,67,0.1)] border border-[rgba(212,168,67,0.3)] rounded-full px-4 py-1.5 text-xs tracking-widest uppercase text-[var(--color-accent)] mb-8">
          <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full shadow-[0_0_8px_var(--color-accent)]" />
          Voice AI Agency
        </div>

        <h1 className="font-['Instrument_Serif'] text-[clamp(3rem,7vw,6rem)] leading-[1.05] font-normal text-white mb-4">
          Your Customers Call.{' '}
          <em className="italic bg-gradient-to-br from-white to-[var(--color-accent)] bg-clip-text text-transparent">
            Your AI Answers.
          </em>
        </h1>

        <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-xl mx-auto">
          Intelligent Voice AI Agents for Modern Businesses
        </p>

        <a
          href="https://calendar.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-black rounded-full px-8 py-3.5 font-semibold text-base btn-glow"
        >
          Book A Free Call →
        </a>

        <div className="mt-16">
          <ChevronDown className="mx-auto text-muted-foreground animate-float" size={28} />
        </div>
      </div>
    </section>
  );
}
