import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import { testimonials } from '@/data/testimonials';
import TestimonialCard from '@/components/shared/TestimonialCard';
import SectionBadge from '@/components/shared/SectionBadge';
import { useIsMobile } from '@/hooks/useMediaQuery';
import { Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsSection() {
  const { lang } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [activeSlide, setActiveSlide] = useState(0);

  // Mobile auto-advance
  useEffect(() => {
    if (!isMobile) return;
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isMobile]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.test-header > *', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      });
      gsap.fromTo('.test-columns', { opacity: 0 }, {
        opacity: 1, duration: 1, delay: 0.3,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      });
      gsap.fromTo('.test-bottom', { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.6, delay: 0.5,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 60%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const fontClass = lang === 'ar' ? 'font-cairo' : 'font-outfit';
  const col1 = testimonials.slice(0, 4);
  const col2 = testimonials.slice(4, 8);

  return (
    <section id="testimonials" ref={sectionRef} className="relative bg-deep-navy py-20 lg:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-[30%] -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-medical-blue/[0.06] blur-3xl pointer-events-none" />

      <div className="content-container relative">
        <div className="test-header text-center mb-14">
          <SectionBadge label={t('testimonials.badge', lang)} variant="dark" />
          <h2 className={`${fontClass} text-2xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight mb-4`}>
            {t('testimonials.headline', lang)}
          </h2>
          <p className="text-white/70 text-base max-w-[560px] mx-auto">
            {t('testimonials.subtitle', lang)}
          </p>
        </div>

        {isMobile ? (
          // Mobile: Horizontal swipe carousel
          <div className="relative">
            <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-5 px-5">
              <div className="flex gap-4" style={{ width: `${testimonials.length * 340}px` }}>
                {testimonials.map((t) => (
                  <div key={t.id} className="snap-center shrink-0" style={{ width: '320px' }}>
                    <TestimonialCard testimonial={t} />
                  </div>
                ))}
              </div>
            </div>
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setActiveSlide(dotIdx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${dotIdx === activeSlide ? 'bg-medical-blue w-6' : 'bg-white/30'}`}
                />
              ))}
            </div>
          </div>
        ) : (
          // Desktop: Dual-column infinite scroll
          <div className="test-columns grid grid-cols-2 gap-6 max-h-[600px] overflow-hidden">
            {/* Column 1 - scrolls up */}
            <div className="relative overflow-hidden">
              <div className="animate-scroll-up hover:[animation-play-state:paused]">
                {[...col1, ...col1].map((t, i) => (
                  <TestimonialCard key={`c1-${i}`} testimonial={t} />
                ))}
              </div>
            </div>
            {/* Column 2 - scrolls down */}
            <div className="relative overflow-hidden">
              <div className="animate-scroll-down hover:[animation-play-state:paused]">
                {[...col2, ...col2].map((t, i) => (
                  <TestimonialCard key={`c2-${i}`} testimonial={t} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bottom Trust Signal */}
        <div className="test-bottom flex flex-wrap items-center justify-center gap-6 lg:gap-10 mt-12">
          <div className="flex items-center gap-2">
            <Star size={18} className="text-warm-gold fill-warm-gold" />
            <span className="text-white font-bold text-lg">{t('testimonials.rating', lang)}</span>
            <span className="text-white/60 text-sm">{t('testimonials.ratingLabel', lang)}</span>
          </div>
          <div className="w-px h-8 bg-white/10 hidden lg:block" />
          <span className="text-white/60 text-sm">{t('testimonials.google', lang)}</span>
        </div>
      </div>
    </section>
  );
}
