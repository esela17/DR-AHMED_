import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import { getAssetUrl } from '@/lib/utils';
import SectionBadge from '@/components/shared/SectionBadge';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const { lang, dir } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isRtl = dir === 'rtl';
  const [activeTab, setActiveTab] = useState<'profile' | 'edu' | 'exp' | 'tech'>('profile');

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
        .fromTo('.about-tabs-container', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
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
              <img src={getAssetUrl('/images/doctor-portrait.png')} alt={lang === 'ar' ? 'أ.د. أحمد عبدالله مهلهل' : 'Prof. Dr. Ahmed Abdullah Mohelhel'} className="w-full h-full object-cover" loading="lazy" />
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

            {/* Interactive Tabs Container */}
            <div className="about-tabs-container bg-white border border-divider/60 rounded-2xl p-6 shadow-sm mb-8">
              {/* Tab Header Selectors */}
              <div className="flex border-b border-divider mb-6 overflow-x-auto scrollbar-hide gap-1.5 pb-1">
                {[
                  { id: 'profile', labelAr: 'النبذة الشخصية', labelEn: 'Summary' },
                  { id: 'edu', labelAr: 'المؤهلات والشهادات', labelEn: 'Qualifications' },
                  { id: 'exp', labelAr: 'المناصب والخبرات', labelEn: 'Experience' },
                  { id: 'tech', labelAr: 'الأجهزة والتقنيات', labelEn: 'Clinical Tech' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-3 py-2 text-xs md:text-sm font-semibold border-b-2 whitespace-nowrap transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'border-medical-blue text-medical-blue font-bold'
                        : 'border-transparent text-slate-custom hover:text-deep-navy'
                    }`}
                  >
                    {lang === 'ar' ? tab.labelAr : tab.labelEn}
                  </button>
                ))}
              </div>

              {/* Tab Display Panel */}
              <div className="min-h-[200px]">
                {activeTab === 'profile' && (
                  <div className="space-y-4">
                    <p className="text-slate-custom text-sm md:text-base leading-relaxed">
                      {lang === 'ar'
                        ? 'الأستاذ الدكتور أحمد عبدالله مهلهل هو استشاري طب وجراحة العيون ومتخصّص في جراحات الشبكية والجسم الزجاجي وتصحيح الإبصار. يشغل منصب أستاذ مساعد في كلية الطب – قصر العيني بجامعة القاهرة، وحاصل على درجة الدكتوراه في طب العيون وجراحتها.'
                        : 'Prof. Dr. Ahmed Abdullah Mohelhel is a consultant of ophthalmology specializing in vitreoretinal surgery and vision correction. He serves as an Assistant Professor at Kasr Al-Ainy Faculty of Medicine, Cairo University, and holds an MD in Ophthalmology.'}
                    </p>
                    <p className="text-slate-custom text-sm md:text-base leading-relaxed">
                      {lang === 'ar'
                        ? 'يمتلك د. أحمد مهلهل خبرة طويلة في علاج أمراض العيون وجراحات المياه البيضاء والشبكية والليزك. وهو عضو بالأكاديمية الأمريكية لطب العيون وجمعية الشبكية الأوروبية، ويعمل بمركز نور العيون وعياداته بالدقي والفيوم.'
                        : 'Dr. Ahmed has extensive experience in managing eye conditions, cataract extraction, retinal surgeries, and LASIK. He is an active member of the American Academy of Ophthalmology and the European Society of Retina Specialists.'}
                    </p>
                  </div>
                )}

                {activeTab === 'edu' && (
                  <ul className="space-y-3">
                    {[
                      { ar: 'دكتوراه في طب وجراحة العيون – كلية الطب قصر العيني (جامعة القاهرة)', en: 'MD in Ophthalmology – Kasr Al-Ainy Faculty of Medicine, Cairo University' },
                      { ar: 'بكالوريوس طب وجراحة – جامعة القاهرة بتقدير ممتاز مع مرتبة الشرف', en: 'Bachelor of Medicine & Surgery – Cairo University with Honors' },
                      { ar: 'عضو الأكاديمية الأمريكية لطب العيون (AAO)', en: 'Member of the American Academy of Ophthalmology (AAO)' },
                      { ar: 'عضو جمعية الشبكية الأوروبية (EURETINA)', en: 'Member of the European Society of Retina Specialists (EURETINA)' },
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm md:text-base text-slate-custom">
                        <span className="text-medical-blue font-bold shrink-0 mt-0.5">✓</span>
                        <span>{lang === 'ar' ? item.ar : item.en}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === 'exp' && (
                  <ul className="space-y-3">
                    {[
                      { ar: 'أستاذ مساعد بكلية الطب – جامعة القاهرة (قصر العيني).', en: 'Assistant Professor of Ophthalmology at Kasr Al-Ainy, Cairo University.' },
                      { ar: 'استشاري طب وجراحة العيون معتمد بوزارة الصحة المصرية.', en: 'Certified Ophthalmology Consultant by the Egyptian Ministry of Health.' },
                      { ar: 'طبيب استشاري بمركز نور العيون التخصصي – الهرم (عيادة الشبكية والليزك).', en: 'Consultant Ophthalmologist at Nour El-Oyoun Specialized Center – Haram.' },
                      { ar: 'تدريب أطباء المستقبل في ورش عمل وجلسات عملية بأقسام العيون بقصر العيني.', en: 'Training medical students and residents in practical workshops in ophthalmology departments.' }
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm md:text-base text-slate-custom">
                        <span className="text-trust-green font-bold shrink-0 mt-1">●</span>
                        <span>{lang === 'ar' ? item.ar : item.en}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === 'tech' && (
                  <div className="space-y-4">
                    <p className="text-slate-custom text-sm leading-relaxed mb-0">
                      {lang === 'ar'
                        ? 'نستخدم في العيادة أحدث التجهيزات التشخيصية والعلاجية لضمان سلامة المرضى، بما في ذلك مجهر المصباح الشقي (Slit Lamp) للفحص التفصيلي، وأجهزة التصوير الطبقي (OCT) وموجات العين فوق الصوتية.'
                        : 'Our clinic uses state-of-the-art diagnostic tools for patient safety, including Slit Lamp bio-microscopes for comprehensive checking, OCT scanners, and ocular ultrasound.'}
                    </p>

                    {/* Dual Cards for Images */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      <div className="bg-[#F8FAFC] p-2.5 rounded-xl border border-divider/60 flex flex-col items-center">
                        <img 
                          src={getAssetUrl('/images/slit-lamp-examination.png')} 
                          alt="Slit Lamp Exam" 
                          className="w-full h-24 object-cover rounded-lg mb-2"
                          loading="lazy" 
                        />
                        <span className="text-[10px] text-slate-custom text-center font-medium leading-tight">
                          {lang === 'ar'
                            ? 'فحص المصباح الشقي (Slit Lamp) لتقييم القرنية والعدسة بدقة'
                            : 'Slit Lamp exam to check cornea & lens'}
                        </span>
                      </div>

                      <div className="bg-[#F8FAFC] p-2.5 rounded-xl border border-divider/60 flex flex-col items-center">
                        <img 
                          src={getAssetUrl('/images/retina-layers.png')} 
                          alt="Retina Anatomy" 
                          className="w-full h-24 object-contain rounded-lg mb-2 bg-white"
                          loading="lazy" 
                        />
                        <span className="text-[10px] text-slate-custom text-center font-medium leading-tight">
                          {lang === 'ar'
                            ? 'مقطع توضيحي لأغشية الشبكية لعلاج اعتلال الماكولا والانفصال'
                            : 'Anatomical retina layers diagram for advanced therapy'}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
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
