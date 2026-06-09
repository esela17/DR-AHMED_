import { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { t } from '@/data/translations';
import { Link } from 'react-router-dom';
import { Sparkles, Eye, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';

const cases = [
  {
    id: 1,
    titleAr: 'تصحيح الإبصار بالفيمتو ليزك (الفيمتوليزك)',
    titleEn: 'Femto-LASIK Vision Correction',
    conditionAr: 'قصر نظر شديد (-6 درجات) مع استجماتيزم',
    conditionEn: 'Severe Myopia (-6.0D) with Astigmatism',
    resultAr: 'رؤية كاملة 6/6 بدون نظارة خلال 24 ساعة',
    resultEn: 'Complete 6/6 vision without glasses within 24 hours',
    descAr: 'تم الفحص الدقيق والخرائطي للقرنية والتصحيح بنجاح تام وبأعلى نسب الأمان.',
    descEn: 'Precise corneal mapping followed by successful correction with maximum safety.',
  },
  {
    id: 2,
    titleAr: 'جراحة المياه البيضاء وزراعة عدسة متعددة البؤر',
    titleEn: 'Cataract Surgery & Multifocal IOL Implantation',
    conditionAr: 'عتامة كاملة بعدسة العين وصعوبة في القراءة والمسافات',
    conditionEn: 'Total lens opacity with reading and distance difficulties',
    resultAr: 'استعادة رؤية نقية للمسافات البعيدة والقريبة دون نظارة',
    resultEn: 'Restored clear distance and near vision without reading glasses',
    descAr: 'تمت إزالة المياه البيضاء بالموجات فوق الصوتية (الفاكو) وزراعة عدسة لينة مطوية.',
    descEn: 'Cloudy lens emulsified via Phaco and replaced with a high-end foldable multifocal IOL.',
  },
  {
    id: 3,
    titleAr: 'إصلاح انفصال شبكي واستئصال الجسم الزجاجي (27G)',
    titleEn: 'Retinal Detachment Repair & Vitrectomy (27G)',
    conditionAr: 'انفصال شبكي جزئي مع تدهور بصر حاد ومفاجئ',
    conditionEn: 'Partial retinal detachment with sudden severe vision loss',
    resultAr: 'إعادة تثبيت الشبكية وامتصاص السوائل واستعادة البصر تدريجياً',
    resultEn: 'Successfully reattached retina, resolved fluids, and gradual vision recovery',
    descAr: 'جراحة دقيقة ميكروسكوبية بدون غرز باستخدام زيت السيليكون عالي النقاء.',
    descEn: 'Sutureless micro-surgery under local drop anesthesia using high-purity silicone oil.',
  }
];

export default function BeforeAfterPage() {
  const { lang } = useLanguage();
  const pageRef = useRef<HTMLDivElement>(null);

  useSEO({
    title: lang === 'ar'
      ? 'معرض نتائج العمليات وقبل وبعد | أ.د. أحمد عبدالله مهلهل'
      : 'Before & After Surgery Gallery | Prof. Ahmed Abdullah Mohelhel',
    description: lang === 'ar'
      ? 'شاهد نتائج جراحات المياه البيضاء، تصحيح الإبصار بالليزر، وعمليات الشبكية المعقدة في عيادات أ.د. أحمد عبدالله مهلهل.'
      : 'Browse successful results of cataract surgeries, laser vision correction, and complex retina operations at Prof. Dr. Ahmed Abdullah Mohelhel clinics.',
    keywords: lang === 'ar'
      ? 'نتائج العمليات, قبل وبعد ليزك, علاج المياه البيضاء, استعادة البصر, قصص نجاح طب العيون'
      : 'surgery results, before and after LASIK, cataract recovery, vision restoration, ophthalmology success stories',
    lang
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.gallery-header > *', { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
      });
      gsap.fromTo('.case-card', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.15, delay: 0.3, ease: 'power3.out',
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
          <div className="gallery-header">
            <p className="text-slate-custom text-xs mb-3">
              <Link to="/" className="hover:text-medical-blue transition-colors">{t('nav.home', lang)}</Link>
              {' / '}
              <span className="text-deep-navy font-medium">{lang === 'ar' ? 'معرض قبل وبعد' : 'Before & After'}</span>
            </p>
            <h1 className={`${fontClass} text-2xl md:text-4xl font-bold text-deep-navy mb-3 flex items-center gap-2`}>
              <Sparkles className="text-warm-gold" size={28} />
              {lang === 'ar' ? 'معرض الحالات ونتائج العمليات' : 'Before & After Surgery Gallery'}
            </h1>
            <p className="text-slate-custom text-base max-w-[650px] mb-0">
              {lang === 'ar'
                ? 'نتائج حقيقية لمرضانا بعد إجراء العمليات الجراحية والتصحيحية بأحدث التقنيات الطبية وبأعلى معايير الدقة.'
                : 'Real results from our patients following micro-surgeries and vision correction procedures with state-of-the-art medical systems.'}
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="content-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c) => (
            <div
              key={c.id}
              className="case-card bg-white border border-divider/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-form transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Placeholder for Eye/Vision Improvement */}
                <div className="bg-gradient-to-br from-deep-navy to-medical-blue p-8 flex flex-col items-center justify-center text-center text-white relative h-48">
                  <div className="absolute top-4 right-4 bg-white/10 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider">
                    {lang === 'ar' ? 'حالة ناجحة' : 'Successful Case'}
                  </div>
                  <Eye className="text-warm-gold animate-pulse mb-3" size={44} />
                  <p className="font-bold text-sm tracking-wide">
                    {lang === 'ar' ? 'رؤية فائقة الجودة' : 'High Quality Vision'}
                  </p>
                  <span className="text-[10px] text-white/60">
                    {lang === 'ar' ? 'Top quality vision is our ultimate mission' : 'Top quality vision is our ultimate mission'}
                  </span>
                </div>

                <div className="p-6 lg:p-8">
                  <h3 className={`${fontClass} text-lg md:text-xl font-bold text-deep-navy mb-4`}>
                    {lang === 'ar' ? c.titleAr : c.titleEn}
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="bg-red-50/50 border border-red-100 p-3 rounded-xl">
                      <p className="text-[11px] text-red-500 font-bold uppercase tracking-wider mb-0.5">
                        {lang === 'ar' ? 'الحالة قبل العملية:' : 'Before Operation:'}
                      </p>
                      <p className="text-deep-navy text-xs md:text-sm font-semibold mb-0">
                        {lang === 'ar' ? c.conditionAr : c.conditionEn}
                      </p>
                    </div>
                    <div className="bg-green-50/50 border border-green-100 p-3 rounded-xl">
                      <p className="text-[11px] text-trust-green font-bold uppercase tracking-wider mb-0.5 flex items-center gap-1">
                        <CheckCircle2 size={12} />
                        {lang === 'ar' ? 'النتيجة بعد العملية:' : 'Result After:'}
                      </p>
                      <p className="text-deep-navy text-xs md:text-sm font-bold mb-0">
                        {lang === 'ar' ? c.resultAr : c.resultEn}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-custom text-xs md:text-sm leading-relaxed mb-0">
                    {lang === 'ar' ? c.descAr : c.descEn}
                  </p>
                </div>
              </div>
              
              <div className="p-6 pt-0 border-t border-divider/40 mt-4 flex items-center justify-between">
                <span className="text-xs text-slate-custom font-medium">
                  {lang === 'ar' ? 'بإشراف أ.د/ أحمد عبدالله' : 'Under Prof. Ahmed Abdullah'}
                </span>
                <Link
                  to="#booking"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('booking');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-medical-blue hover:text-electric-blue transition-colors"
                >
                  {lang === 'ar' ? 'احجز استشارتك الآن ←' : 'Book Your Exam Now →'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
