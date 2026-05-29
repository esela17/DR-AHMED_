import { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import { services } from '@/data/services';
import SectionBadge from '@/components/shared/SectionBadge';
import ServiceCard from '@/components/shared/ServiceCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const { lang } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.services-header > *', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' },
      });
      gsap.fromTo('.service-card', { opacity: 0, y: 40, scale: 0.97 }, {
        opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.services-grid', start: 'top 85%', toggleActions: 'play none none none' },
      });
      gsap.fromTo('.services-bottom', { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.6,
        scrollTrigger: { trigger: '.services-bottom', start: 'top 90%', toggleActions: 'play none none none' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const fontClass = lang === 'ar' ? 'font-cairo' : 'font-outfit';

  return (
    <section id="services" ref={sectionRef} className="bg-white py-20 lg:py-32">
      <div className="content-container">
        <div className="services-header text-center mb-14">
          <SectionBadge label={t('services.badge', lang)} />
          <h2 className={`${fontClass} text-2xl md:text-4xl lg:text-[44px] font-bold text-deep-navy leading-tight mb-4`}>
            {t('services.headline', lang)}
          </h2>
          <p className="text-slate-custom text-base max-w-[600px] mx-auto">
            {t('services.subtitle', lang)}
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        <div className="services-bottom text-center mt-12">
          <p className="text-slate-custom text-base mb-3">{t('services.bottom.text', lang)}</p>
          <a href="#booking" className="inline-flex items-center px-8 py-3.5 bg-medical-blue text-white text-sm font-semibold rounded-xl hover:bg-electric-blue transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cta">
            {t('services.bottom.cta', lang)}
          </a>
        </div>
      </div>
    </section>
  );
}
