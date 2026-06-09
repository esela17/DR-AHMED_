import { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { t } from '@/data/translations';
import { Link } from 'react-router-dom';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import gsap from 'gsap';

const items = [
  {
    id: 1,
    titleAr: 'أ.د. أحمد عبدالله يشارك بأبحاث شبكية جديدة في مؤتمر EURETINA بباريس',
    titleEn: 'Prof. Ahmed Abdullah presents new retinal papers at EURETINA Paris',
    date: '2026-05-15',
    categoryAr: 'مؤتمرات دولية',
    categoryEn: 'International Conferences',
    descAr: 'عرض أوراق بحثية متقدمة حول علاج اعتلال الشبكية السكري بالحقن وتقليل تكرار حدوث الارتشاح البقعي.',
    descEn: 'Presented advanced papers on treatment of diabetic retinopathy via injections to reduce macular edema recurrence rates.',
  },
  {
    id: 2,
    titleAr: 'تكريم بقسم طب وجراحة العيون (قصر العيني) لتميزه الأكاديمي والتدريبي',
    titleEn: 'Honored at Ophthalmology Dept (Kasr Al-Ainy) for teaching excellence',
    date: '2026-04-10',
    categoryAr: 'جوائز وتكريمات',
    categoryEn: 'Awards & Honors',
    descAr: 'تم تكريم الأستاذ الدكتور أحمد عبدالله مهلهل لمساهمته الكبيرة في تدريب وتوجيه أطباء العيون المقيمين بقصر العيني.',
    descEn: 'Prof. Dr. Ahmed Abdullah Mohelhel was recognized for his outstanding contribution to mentoring residents at Kasr Al-Ainy.',
  },
  {
    id: 3,
    titleAr: 'إلقاء محاضرة رئيسية في مؤتمر الجمعية الرمدية المصرية السنوي',
    titleEn: 'Keynote lecture at the Egyptian Ophthalmological Society annual meeting',
    date: '2026-02-28',
    categoryAr: 'محاضرات علمية',
    categoryEn: 'Scientific Lectures',
    descAr: 'محاضرة مفصلة حول أحدث أساليب استئصال الجسم الزجاجي بدون غرز (تقنية 27G) لعلاج الانفصال الشبكي المعقد.',
    descEn: 'Detailed lecture on modern 27G sutureless vitrectomy approaches in managing complex retinal detachments.',
  }
];

export default function NewsPage() {
  const { lang } = useLanguage();
  const pageRef = useRef<HTMLDivElement>(null);

  useSEO({
    title: lang === 'ar'
      ? 'أخبار وإنجازات علمية | أ.د. أحمد عبدالله مهلهل'
      : 'News & Academic Achievements | Prof. Ahmed Abdullah Mohelhel',
    description: lang === 'ar'
      ? 'تابع آخر الأخبار الأكاديمية والمهنية، واللقاءات، والمؤتمرات الدولية للأستاذ الدكتور أحمد عبدالله مهلهل أستاذ طب العيون بقصر العيني.'
      : 'Follow the latest academic achievements, lectures, and global participations of Prof. Ahmed Abdullah Mohelhel, Ophthalmology Professor at Kasr Al-Ainy.',
    keywords: lang === 'ar'
      ? 'اخبار قصر العيني عيون, ابحاث شبكية العين, مؤتمر رمد مصر, احمد عبدالله مهلهل, انجازات طبية'
      : 'Kasr Al-Ainy eye news, retina research, Egypt ophthalmology meeting, Ahmed Mohelhel achievements',
    lang
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.news-header > *', { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
      });
      gsap.fromTo('.news-card', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.15, delay: 0.3, ease: 'power3.out',
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const fontClass = lang === 'ar' ? 'font-cairo' : 'font-outfit';

  return (
    <div ref={pageRef} className="min-h-screen bg-[#F8FAFC]">
      {/* Page Header */}
      <div className="pt-28 pb-10 bg-white border-b border-divider/50">
        <div className="content-container">
          <div className="news-header">
            <p className="text-slate-custom text-xs mb-3">
              <Link to="/" className="hover:text-medical-blue transition-colors">{t('nav.home', lang)}</Link>
              {' / '}
              <span className="text-deep-navy font-medium">{lang === 'ar' ? 'أخبار وإنجازات' : 'News & Achievements'}</span>
            </p>
            <h1 className={`${fontClass} text-2xl md:text-4xl font-bold text-deep-navy mb-3 flex items-center gap-2`}>
              <Award className="text-warm-gold" size={28} />
              {lang === 'ar' ? 'الأخبار الطبية والإنجازات الأكاديمية' : 'News & Academic Achievements'}
            </h1>
            <p className="text-slate-custom text-base max-w-[650px] mb-0">
              {lang === 'ar'
                ? 'متابعة لأحدث التطورات العلمية، الأوراق البحثية، والمشاركات الدولية للأستاذ الدكتور أحمد عبدالله مهلهل.'
                : 'Stay informed about the latest scientific developments, medical journals, and congress contributions by Prof. Dr. Ahmed Abdullah Mohelhel.'}
            </p>
          </div>
        </div>
      </div>

      {/* Grid Content */}
      <div className="content-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="news-card bg-white border border-divider/60 rounded-3xl p-6 lg:p-8 shadow-sm hover:shadow-form hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-medical-blue/10 text-medical-blue rounded-full text-xs font-semibold">
                    {lang === 'ar' ? item.categoryAr : item.categoryEn}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-custom">
                    <Calendar size={14} />
                    <span>{item.date}</span>
                  </div>
                </div>

                <h3 className={`${fontClass} text-lg md:text-xl font-bold text-deep-navy mb-3 leading-snug`}>
                  {lang === 'ar' ? item.titleAr : item.titleEn}
                </h3>
                
                <p className="text-slate-custom text-xs md:text-sm leading-relaxed mb-6">
                  {lang === 'ar' ? item.descAr : item.descEn}
                </p>
              </div>

              <div className="pt-4 border-t border-divider/40 flex items-center justify-between">
                <span className="text-xs text-slate-custom font-medium">
                  {lang === 'ar' ? 'المصدر: جامعة القاهرة' : 'Source: Cairo University'}
                </span>
                <a
                  href="#booking"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('booking');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-medical-blue hover:text-electric-blue transition-colors flex items-center gap-1"
                >
                  <span>{lang === 'ar' ? 'احجز استشارة' : 'Book Exam'}</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
