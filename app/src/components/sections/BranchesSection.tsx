import { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import SectionBadge from '@/components/shared/SectionBadge';
import { MapPin, Phone, Landmark, Navigation, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const branchList = [
  {
    id: 'c1',
    nameAr: 'عيادة الدقي (الجيزة - القاهرة)',
    nameEn: 'Dokki Clinic (Giza - Cairo)',
    addressAr: 'برج الإخلاص للأطباء، 96 أ شارع التحرير، الدقي، الجيزة',
    addressEn: 'El-Ekhlas Doctors Tower, 96A El-Tahrir St., Dokki, Giza',
    landmarkAr: 'برج الإخلاص للأطباء',
    landmarkEn: 'El-Ekhlas Doctors Tower',
    mobiles: ['01110505253'],
    landlines: ['02337485244'],
    mapUrl: 'https://www.google.com/maps?cid=12444534766943707157',
  },
  {
    id: 'c2',
    nameAr: 'عيادة الفيوم (الحادقة)',
    nameEn: 'Fayoum Clinic (El-Hadeqa)',
    addressAr: 'برج الحادقة - أمام مستشفى التحرير، محافظة الفيوم',
    addressEn: 'El-Hadeqa Tower - In front of El-Tahrir Hospital, Fayoum',
    landmarkAr: 'أمام مستشفى التحرير بالفيوم',
    landmarkEn: 'In front of El-Tahrir Hospital',
    mobiles: ['01159353553', '01007513010', '01110505235'],
    landlines: [],
    mapUrl: 'https://www.google.com/maps/place/%D9%85%D8%B3%D8%AA%D8%B4%D9%81%D9%89+%D8%A7%D9%84%D8%AA%D8%AD%D8%B1%D9%8A%D8%B1+%D8%A8%D8%A7%D9%84%D9%81%D9%8A%D9%85%D9%85%E2%80%AD/@29.3071012,30.8507241,766m/data=!3m2!1e3!4b1!4m6!3m5!1s0x145978d7e9d1b8ff:0xdaa1ad79a655d369!8m2!3d29.3071012!4d30.8507241!16s%2Fg%2F11cmgl4qwg?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D',
  },
];

export default function BranchesSection() {
  const { lang, dir } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isRtl = dir === 'rtl';

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.branches-header > *', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      });
      gsap.fromTo('.branch-card', { opacity: 0, scale: 0.95, y: 30 }, {
        opacity: 1, scale: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleBookClick = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fontClass = lang === 'ar' ? 'font-cairo' : 'font-outfit';

  return (
    <section id="branches" ref={sectionRef} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-trust-green/[0.02] blur-3xl pointer-events-none" />

      <div className="content-container relative z-10">
        {/* Header */}
        <div className="branches-header text-center mb-16">
          <SectionBadge label={t('branches.badge', lang)} />
          <h2 className={`${fontClass} text-2xl md:text-4xl lg:text-[44px] font-bold text-deep-navy leading-tight mb-4`}>
            {t('branches.headline', lang)}
          </h2>
          <p className="text-slate-custom text-base max-w-[600px] mx-auto">
            {t('branches.subtitle', lang)}
          </p>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {branchList.map((branch) => (
            <div
              key={branch.id}
              className="branch-card bg-[#F8FAFC] border border-divider/50 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-form hover:-translate-y-1 group"
            >
              <div>
                {/* Branch Logo / Icon */}
                <div className="w-12 h-12 rounded-2xl bg-medical-blue/10 flex items-center justify-center text-medical-blue mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={24} />
                </div>

                {/* Title */}
                <h3 className={`${fontClass} text-xl md:text-2xl font-bold text-deep-navy mb-4`}>
                  {lang === 'ar' ? branch.nameAr : branch.nameEn}
                </h3>

                {/* Landmark badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-divider/60 rounded-full text-xs text-slate-custom font-medium mb-6">
                  <Landmark size={14} className="text-warm-gold" />
                  <span>{lang === 'ar' ? branch.landmarkAr : branch.landmarkEn}</span>
                </div>

                {/* Info List */}
                <div className="space-y-4 mb-8">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <span className="text-xs text-slate-custom font-semibold shrink-0 mt-1 block min-w-[60px]">
                      {t('branches.address', lang)}
                    </span>
                    <p className="text-deep-navy text-sm font-medium leading-relaxed mb-0">
                      {lang === 'ar' ? branch.addressAr : branch.addressEn}
                    </p>
                  </div>

                  {/* Landlines */}
                  {branch.landlines.length > 0 && (
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-custom font-semibold shrink-0 block min-w-[60px]">
                        {t('branches.landline', lang)}
                      </span>
                      <div className="flex gap-2">
                        {branch.landlines.map((num) => (
                          <a
                            key={num}
                            href={`tel:${num}`}
                            className="text-medical-blue hover:text-electric-blue text-sm font-bold transition-colors"
                          >
                            {num}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Mobiles */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-custom font-semibold shrink-0 block min-w-[60px]">
                      {t('branches.mobile', lang)}
                    </span>
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      {branch.mobiles.map((num) => (
                        <a
                          key={num}
                          href={`tel:${num}`}
                          className="text-medical-blue hover:text-electric-blue text-sm font-bold transition-colors flex items-center gap-1"
                        >
                          <Phone size={12} />
                          {num}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-divider/50">
                <a
                  href={branch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-medical-blue/30 text-medical-blue hover:bg-medical-blue hover:text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-sm"
                >
                  <Navigation size={15} />
                  {t('branches.mapLink', lang)}
                </a>
                <button
                  onClick={handleBookClick}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-deep-navy hover:bg-medical-blue text-white text-sm font-semibold rounded-xl transition-all duration-300"
                >
                  {t('branches.bookHere', lang)}
                  <ArrowRight size={15} className={`${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
