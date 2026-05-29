import { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import { useRGBCanvas } from '@/hooks/useCanvas';
import { ArrowDown, MessageCircle } from 'lucide-react';
import gsap from 'gsap';

export default function HeroSection() {
  const { lang, dir } = useLanguage();
  const canvasRef = useRGBCanvas();
  const contentRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const isRtl = dir === 'rtl';

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.fromTo('.hero-badge', { opacity: 0, x: isRtl ? 20 : -20 }, { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' })
        .fromTo('.hero-headline', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.3')
        .fromTo('.hero-subtitle', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
        .fromTo('.hero-cta-1', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
        .fromTo('.hero-cta-2', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.5')
        .fromTo('.hero-stat', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, ease: 'power3.out' }, '-=0.3')
        .fromTo('.hero-indicator', { opacity: 0 }, { opacity: 1, duration: 0.5 }, '-=0.3');

      gsap.to('.hero-indicator', { opacity: 0, delay: 3.5, duration: 0.5 });
    });
    return () => ctx.revert();
  }, [isRtl]);

  const fontClass = lang === 'ar' ? 'font-cairo' : 'font-outfit';

  return (
    <section id="hero" className="relative w-full min-h-[100dvh] overflow-hidden bg-deep-navy flex items-center">
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ imageRendering: 'pixelated' }}
        role="img"
        aria-label={lang === 'ar' ? 'خلفية تفاعلية' : 'Interactive background'}
      />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 content-container py-24 lg:py-0">
        <div className="max-w-[700px]">
          {/* Glassmorphism Card */}
          <div className="glassmorphism p-8 md:p-12">
            <span className="hero-badge inline-block px-4 py-1.5 bg-soft-blue/20 text-medical-blue text-xs font-semibold rounded-full mb-5 border-r-2 border-r-warm-gold">
              {t('hero.badge', lang)}
            </span>

            <h1 className={`hero-headline ${fontClass} text-3xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight lg:leading-[1.2] mb-5`}>
              {t('hero.headline', lang)}
            </h1>

            <p className="hero-subtitle text-white/75 text-base leading-relaxed mb-8 max-w-[560px]">
              {t('hero.subtitle', lang)}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#booking" className="hero-cta-1 inline-flex items-center px-8 py-3.5 bg-medical-blue text-white text-sm font-semibold rounded-xl hover:bg-electric-blue transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cta">
                {t('hero.cta.primary', lang)}
              </a>
              <a href="https://wa.me/201001234567" target="_blank" rel="noopener noreferrer" className="hero-cta-2 inline-flex items-center gap-2 px-8 py-3.5 border-[1.5px] border-white/40 text-white text-sm font-semibold rounded-xl hover:bg-white/10 hover:border-white/70 transition-all duration-300">
                <MessageCircle size={18} />
                {t('hero.cta.secondary', lang)}
              </a>
            </div>

            {/* Trust Stats */}
            <div className="border-t border-white/15 pt-6 grid grid-cols-3 gap-4">
              {[
                { num: t('hero.stat1.num', lang), label: t('hero.stat1.label', lang) },
                { num: t('hero.stat2.num', lang), label: t('hero.stat2.label', lang) },
                { num: t('hero.stat3.num', lang), label: t('hero.stat3.label', lang) },
              ].map((stat, i) => (
                <div key={i} className="hero-stat text-center">
                  <div className="text-white text-2xl md:text-4xl font-bold leading-none">{stat.num}</div>
                  <div className="text-white/60 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mouse Indicator */}
      <div ref={indicatorRef} className="hero-indicator absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs flex flex-col items-center gap-2 z-10 pointer-events-none">
        <span>{t('hero.mouse', lang)}</span>
        <ArrowDown size={18} className="animate-bounce-arrow" />
      </div>
    </section>
  );
}
