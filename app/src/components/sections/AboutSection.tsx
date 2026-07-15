import { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import { getAssetUrl } from '@/lib/utils';
import SectionBadge from '@/components/shared/SectionBadge';
import { GraduationCap, Award, Activity, Check, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const { lang, dir } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isRtl = dir === 'rtl';

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Row 1 entry animation
      gsap.fromTo('.about-portrait', { opacity: 0, x: isRtl ? 40 : -40 }, {
        opacity: 1, x: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-row-1', start: 'top 75%' },
      });
      gsap.fromTo('.about-intro-text > *', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-row-1', start: 'top 75%' },
      });

      // Row 2 cards entry animation
      gsap.fromTo('.about-card', { opacity: 0, y: 40, scale: 0.96 }, {
        opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-row-2', start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [isRtl]);

  const fontClass = lang === 'ar' ? 'font-cairo' : 'font-outfit';

  return (
    <section id="about" ref={sectionRef} className="bg-[#F8FAFC] py-20 lg:py-32 relative overflow-hidden">
      {/* Visual background decorations */}
      <div className="absolute top-1/4 left-0 w-[450px] h-[450px] rounded-full bg-medical-blue/[0.02] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] rounded-full bg-warm-gold/[0.02] blur-3xl pointer-events-none" />

      <div className="content-container relative z-10">
        {/* Row 1: Portrait & Biography */}
        <div className="about-row-1 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Portrait Image Column */}
          <div className="about-portrait relative max-w-md lg:max-w-none mx-auto w-full">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(7,26,43,0.08)] border border-divider/40 bg-white">
              <img 
                src={getAssetUrl('/images/doctor-portrait.png')} 
                alt={lang === 'ar' ? 'أ.د. أحمد عبدالله مهلهل' : 'Prof. Dr. Ahmed Abdullah Mohelhel'} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                loading="lazy" 
              />
            </div>
            {/* Floating Credentials Card */}
            <div className={`about-credcard absolute -bottom-5 ${isRtl ? '-left-4' : '-right-4'} bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-[0_12px_30px_rgba(7,26,43,0.08)] border border-divider/60 max-w-[280px]`}>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-medical-blue/10 flex items-center justify-center text-medical-blue shrink-0">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <p className="text-deep-navy text-sm font-bold mb-0.5 leading-snug">
                    {lang === 'ar' ? 'دكتوراة طب العين وجراحتها' : 'MD in Ophthalmology'}
                  </p>
                  <p className="text-slate-custom text-[11px] font-semibold uppercase tracking-wider mb-2">
                    {lang === 'ar' ? 'جامعة القاهرة' : 'Cairo University'}
                  </p>
                  <p className="text-[#0D1D2D] text-xs font-semibold">
                    {lang === 'ar' ? 'استشاري المياه البيضاء والشبكية والليزك' : 'Consultant in Retina, Cataract & LASIK'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Intro Biography Column */}
          <div className="about-intro-text flex flex-col justify-center">
            <div className="mb-4">
              <SectionBadge label={t('about.badge', lang)} />
            </div>
            <h2 className={`about-headline ${fontClass} text-3xl md:text-4xl lg:text-[44px] font-bold text-deep-navy leading-[1.45] mb-5`}>
              {t('about.headline', lang)}
            </h2>
            <p className="about-subtitle text-lg md:text-xl text-medical-blue font-semibold mb-6">
              {t('about.subtitle', lang)}
            </p>
            <div className="space-y-4 mb-8 text-slate-custom text-sm md:text-base leading-relaxed">
              <p>{t('about.p1', lang)}</p>
              <p>{t('about.p2', lang)}</p>
              <p>{t('about.p3', lang)}</p>
            </div>

            {/* Micro Vision Block */}
            <div className="about-vision bg-soft-blue/60 rounded-2xl p-5 border-r-4 border-medical-blue flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-medical-blue/10 flex items-center justify-center text-medical-blue shrink-0 mt-0.5">
                <ShieldCheck size={18} />
              </div>
              <div>
                <h4 className="text-medical-blue font-bold text-sm mb-1">{t('about.vision.title', lang)}</h4>
                <p className="text-deep-navy text-xs md:text-sm leading-relaxed mb-0">{t('about.vision.text', lang)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Spaced Professional Profile Cards Grid */}
        <div className="about-row-2 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Academic & Memberships */}
          <div className="about-card bg-white border border-divider/60 rounded-3xl p-8 shadow-sm hover:shadow-[0_12px_40px_rgba(7,26,43,0.04)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-medical-blue/10 flex items-center justify-center text-medical-blue mb-6">
                <GraduationCap size={24} />
              </div>
              <h3 className={`${fontClass} text-lg md:text-xl font-bold text-deep-navy mb-6`}>
                {lang === 'ar' ? 'المؤهلات الأكاديمية والشهادات' : 'Academic Credentials'}
              </h3>
              <ul className="space-y-4">
                {[
                  { ar: 'دكتوراة في طب وجراحة العيون – كلية الطب قصر العيني (جامعة القاهرة)', en: 'MD in Ophthalmology – Kasr Al-Ainy, Cairo University' },
                  { ar: 'ماجستير في طب وجراحة العيون – كلية الطب قصر العيني (جامعة القاهرة)', en: 'Master\'s Degree in Ophthalmology – Kasr Al-Ainy, Cairo University' },
                  { ar: 'بكالوريوس طب وجراحة العيون – جامعة القاهرة بتقدير ممتاز مع مرتبة الشرف', en: 'Bachelor of Medicine & Surgery – Cairo University (Honors)' },
                  { ar: 'زمالة المجلس الطبي العالمي لأساسيات طب العيون (FICO)', en: 'Fellowship of the International Council of Ophthalmology (FICO)' },
                  { ar: 'عضو جمعية الشبكية الأوروبية (EURETINA)', en: 'Member of the European Society of Retina Specialists (EURETINA)' },
                  { ar: 'عضو الجمعية الشبكية المصرية (EGVRS)', en: 'Member of the Egyptian Vitreoretinal Society (EGVRS)' },
                  { ar: 'عضو الجمعية الرمدية المصرية (EOS)', en: 'Member of the Egyptian Ophthalmological Society (EOS)' },
                  { ar: 'عضو المجلس الطبي العالمي لأساسيات طب العيون (ICO)', en: 'Member of the International Council of Ophthalmology (ICO)' },
                  { ar: 'عضو الأكاديمية الأمريكية لطب العيون (AAO)', en: 'Member of the American Academy of Ophthalmology (AAO)' },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-custom leading-relaxed">
                    <Check size={16} className="text-medical-blue shrink-0 mt-0.5" />
                    <span>{lang === 'ar' ? item.ar : item.en}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2: Current Positions & Clinics */}
          <div className="about-card bg-white border border-divider/60 rounded-3xl p-8 shadow-sm hover:shadow-[0_12px_40px_rgba(7,26,43,0.04)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-medical-blue/10 flex items-center justify-center text-medical-blue mb-6">
                <Award size={24} />
              </div>
              <h3 className={`${fontClass} text-lg md:text-xl font-bold text-deep-navy mb-6`}>
                {lang === 'ar' ? 'المناصب والخبرات الحالية' : 'Positions & Affiliations'}
              </h3>
              <ul className="space-y-4">
                {[
                  { ar: 'أستاذ بكلية الطب – جامعة القاهرة (قصر العيني).', en: 'Professor at Faculty of Medicine – Cairo University (Kasr Al-Ainy).' },
                  { ar: 'استشاري طب وجراحة العيون وجراحة الشبكية لدى مستشفى العيون الدولي.', en: 'Consultant of Ophthalmology and Vitreoretinal Surgery at International Eye Hospital.' },
                  { ar: 'استشاري معتمد بوزارة الصحة ونقابة الأطباء المصرية.', en: 'Certified Ophthalmology Consultant by the MOH & Syndicate.' },
                  { ar: 'طبيب استشاري بمركز نور العيون التخصصي – الهرم (الشبكية والليزك).', en: 'Consultant Ophthalmologist at Nour El-Oyoun Specialized Center.' },
                  { ar: 'تدريب الأطباء المقيمين وورش العمل التخصصية بقصر العيني.', en: 'Training ophthalmology residents and holding clinical workshops at Kasr Al-Ainy.' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-custom leading-relaxed">
                    <Check size={16} className="text-trust-green shrink-0 mt-0.5" />
                    <span>{lang === 'ar' ? item.ar : item.en}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 3: Clinical Technology & Diagnostics */}
          <div className="about-card bg-white border border-divider/60 rounded-3xl p-8 shadow-sm hover:shadow-[0_12px_40px_rgba(7,26,43,0.04)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-medical-blue/10 flex items-center justify-center text-medical-blue mb-6">
                <Activity size={24} />
              </div>
              <h3 className={`${fontClass} text-lg md:text-xl font-bold text-deep-navy mb-5`}>
                {lang === 'ar' ? 'التجهيزات والفحوصات بالعيادة' : 'Clinical Equipment'}
              </h3>
              <p className="text-slate-custom text-xs md:text-sm leading-relaxed mb-4">
                {lang === 'ar'
                  ? 'تشخيص متكامل بأدق الأجهزة مثل مجهر المصباح الشقي (Slit Lamp) للفحص العياني، وأشعة الـ OCT للشبكية.'
                  : 'Accurate diagnoses using Slit Lamp microscopes, OCT optical scanning, and advanced ocular ultrasound.'}
              </p>

              {/* Sub-grid of images */}
              <div className="grid grid-cols-2 gap-3 mt-2">
                <div className="bg-[#F8FAFC] p-2 rounded-xl border border-divider/50 flex flex-col items-center">
                  <div className="w-full h-16 rounded overflow-hidden mb-1.5">
                    <img 
                      src={getAssetUrl('/images/slit-lamp-examination.png')} 
                      alt="Slit Lamp Exam" 
                      className="w-full h-full object-cover" 
                      loading="lazy" 
                    />
                  </div>
                  <span className="text-[9px] text-slate-custom text-center leading-tight font-medium">
                    {lang === 'ar' ? 'فحص المصباح الشقي' : 'Slit Lamp Exam'}
                  </span>
                </div>

                <div className="bg-[#F8FAFC] p-2 rounded-xl border border-divider/50 flex flex-col items-center">
                  <div className="w-full h-16 rounded overflow-hidden mb-1.5 bg-white flex items-center justify-center">
                    <img 
                      src={getAssetUrl('/images/retina-layers.png')} 
                      alt="Retina Layers" 
                      className="w-full h-full object-contain" 
                      loading="lazy" 
                    />
                  </div>
                  <span className="text-[9px] text-slate-custom text-center leading-tight font-medium">
                    {lang === 'ar' ? 'طبقات الشبكية' : 'Retina Layers'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spaced Call to Action Button */}
        <div className="text-center mt-14">
          <a 
            href="#booking" 
            className="about-cta inline-flex items-center px-8 py-4 bg-medical-blue text-white text-sm font-semibold rounded-xl hover:bg-electric-blue transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cta"
          >
            {t('about.cta', lang)}
          </a>
        </div>
      </div>
    </section>
  );
}
