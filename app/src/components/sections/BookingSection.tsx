import { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import SectionBadge from '@/components/shared/SectionBadge';
import BookingForm from '@/components/shared/BookingForm';
import { Clock, MessageCircle, Shield, Phone } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: <Clock size={20} />, titleKey: 'booking.feature1.title', descKey: 'booking.feature1.desc' },
  { icon: <MessageCircle size={20} />, titleKey: 'booking.feature2.title', descKey: 'booking.feature2.desc' },
  { icon: <Shield size={20} />, titleKey: 'booking.feature3.title', descKey: 'booking.feature3.desc' },
  { icon: <Phone size={20} />, titleKey: 'booking.feature4.title', descKey: 'booking.feature4.desc' },
];

export default function BookingSection() {
  const { lang } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.booking-left > *', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      });
      gsap.fromTo('.booking-form-wrap', { opacity: 0, y: 40, scale: 0.97 }, {
        opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const fontClass = lang === 'ar' ? 'font-cairo' : 'font-outfit';

  return (
    <section id="booking" ref={sectionRef} className="bg-deep-navy py-20 lg:py-32">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="booking-left">
            <SectionBadge label={t('booking.badge', lang)} variant="dark" />
            <h2 className={`${fontClass} text-2xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight mb-4`}>
              {t('booking.headline', lang)}
            </h2>
            <p className="text-white/75 text-base mb-10 max-w-[480px]">
              {t('booking.subtitle', lang)}
            </p>

            <div className="space-y-5 mb-10">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-medical-blue shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t(f.titleKey, lang)}</p>
                    <p className="text-white/60 text-xs">{t(f.descKey, lang)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-white/60 text-sm mb-3">{t('booking.orContact', lang)}</p>
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/201001234567" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-trust-green text-white text-sm font-semibold rounded-xl hover:brightness-110 transition-all">
                  <MessageCircle size={18} /> {t('booking.whatsapp', lang)}
                </a>
                <a href="tel:+201001234567" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white text-sm font-semibold rounded-xl hover:bg-white/20 transition-all">
                  <Phone size={18} /> {t('booking.phone', lang)}
                </a>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="booking-form-wrap">
            <BookingForm lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
}
