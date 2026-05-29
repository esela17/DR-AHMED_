import { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import { getAssetUrl } from '@/lib/utils';
import SectionBadge from '@/components/shared/SectionBadge';
import { GraduationCap, Globe, Heart } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const { lang, dir } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isRtl = dir === 'rtl';

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none none' },
      });
      tl.fromTo('.about-badge', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 })
        .fromTo('.about-headline', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3')
        .fromTo('.about-subtitle', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
        .fromTo('.about-portrait', { opacity: 0, x: isRtl ? 40 : -40 }, { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }, '-=0.8')
        .fromTo('.about-credcard', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.5')
        .fromTo('.about-para', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 }, '-=0.4')
        .fromTo('.about-cred-item', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }, '-=0.3')
        .fromTo('.about-vision', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
        .fromTo('.about-cta', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3');
    }, sectionRef);
    return () => ctx.revert();
  }, [isRtl]);

  const fontClass = lang === 'ar' ? 'font-cairo' : 'font-outfit';

  return (
    <section id="about" ref={sectionRef} className="bg-[#F7F9FC] py-20 lg:py-32">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Portrait */}
          <div className="about-portrait relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(7,26,43,0.12)]">
              <img src={getAssetUrl('/images/doctor-portrait.png')} alt={lang === 'ar' ? 'د. أحمد عبدالله مهلهل' : 'Dr. Ahmed Abdullah Muhlhal'} className="w-full h-full object-cover" loading="lazy" />
            </div>
            {/* Credential Card */}
            <div className={`about-credcard absolute -bottom-5 ${isRtl ? '-left-5' : '-right-5'} glassmorphism-light p-5 max-w-[260px]`}>
              <p className="text-deep-navy text-sm font-semibold mb-0.5">{t('about.card.degree', lang)}</p>
              <p className="text-slate-custom text-xs mb-3">{t('about.card.university', lang)}</p>
              <p className="text-deep-navy text-sm font-semibold mb-0.5">{t('about.card.fellowship', lang)}</p>
              <p className="text-slate-custom text-xs">{t('about.card.board', lang)}</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="about-badge">
              <SectionBadge label={t('about.badge', lang)} />
            </div>
            <h2 className={`about-headline ${fontClass} text-2xl md:text-4xl lg:text-[44px] font-bold text-deep-navy leading-tight mb-4`}>
              {t('about.headline', lang)}
            </h2>
            <p className="about-subtitle text-xl text-slate-custom font-normal mb-6">
              {t('about.subtitle', lang)}
            </p>
            <div className="space-y-4 mb-8">
              <p className="about-para text-slate-custom text-base leading-relaxed">{t('about.p1', lang)}</p>
              <p className="about-para text-slate-custom text-base leading-relaxed">{t('about.p2', lang)}</p>
              <p className="about-para text-slate-custom text-base leading-relaxed">{t('about.p3', lang)}</p>
            </div>

            {/* Credentials Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { icon: <GraduationCap size={32} className="text-medical-blue" />, text: t('about.cred1', lang) },
                { icon: <Globe size={32} className="text-medical-blue" />, text: t('about.cred2', lang) },
                { icon: <Heart size={32} className="text-trust-green" />, text: t('about.cred3', lang) },
              ].map((c, i) => (
                <div key={i} className="about-cred-item flex items-center gap-3 p-4 bg-white rounded-xl border border-divider/50">
                  {c.icon}
                  <span className="text-deep-navy text-sm font-medium">{c.text}</span>
                </div>
              ))}
            </div>

            {/* Vision Block */}
            <div className="about-vision bg-soft-blue rounded-xl p-6 border-r-4 border-medical-blue mb-8">
              <h4 className="text-medical-blue font-semibold text-lg mb-2">{t('about.vision.title', lang)}</h4>
              <p className="text-deep-navy text-sm leading-relaxed">{t('about.vision.text', lang)}</p>
            </div>

            <a href="#booking" className="about-cta inline-flex items-center px-8 py-3.5 bg-medical-blue text-white text-sm font-semibold rounded-xl hover:bg-electric-blue transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cta">
              {t('about.cta', lang)}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
