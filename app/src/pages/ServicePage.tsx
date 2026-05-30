import { useEffect, useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { t } from '@/data/translations';
import { getServiceById, services } from '@/data/services';
import { ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';

export default function ServicePage() {
  const { id } = useParams();
  const { lang, dir } = useLanguage();
  const isRtl = dir === 'rtl';
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeHeading, setActiveHeading] = useState<string>('');
  const navigate = useNavigate();

  const service = id ? getServiceById(id) : null;

  useSEO({
    title: service 
      ? (lang === 'ar' ? `${service.titleAr} | أ.د. أحمد مهلهل` : `${service.titleEn} | Prof. Dr. Ahmed Mohelhel`)
      : (lang === 'ar' ? 'الخدمة الطبية | أ.د. أحمد مهلهل' : 'Medical Service | Prof. Dr. Ahmed Mohelhel'),
    description: service
      ? (lang === 'ar' ? service.descAr : service.descEn)
      : '',
    keywords: service
      ? (lang === 'ar' ? `${service.titleAr}, دكتور عيون, استشاري عيون, قصر العيني` : `${service.titleEn}, eye clinic, ophthalmologist Egypt`)
      : '',
    lang
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!service) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.service-hero-img',
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' }
      );
      gsap.fromTo('.service-header > *',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out', delay: 0.3 }
      );
      gsap.fromTo('.service-content > *',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out', delay: 0.6 }
      );
    }, pageRef);

    return () => ctx.revert();
  }, [service, id]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -60% 0px', threshold: 0.1 }
    );

    const headings = document.querySelectorAll('.service-content h2');
    headings.forEach((h) => observer.observe(h));

    return () => observer.disconnect();
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#F7F9FC] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-deep-navy mb-2">{lang === 'ar' ? 'الخدمة غير موجودة' : 'Service not found'}</h2>
          <Link to="/#services" className="text-medical-blue hover:underline">{lang === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}</Link>
        </div>
      </div>
    );
  }

  const tocItems = service.body?.filter(s => s.type === 'h2').map((s, i) => ({
    id: `h2-${i}`,
    labelAr: s.contentAr,
    labelEn: s.contentEn,
  })) || [];

  const fontClass = lang === 'ar' ? 'font-cairo' : 'font-outfit';

  const renderBody = () => {
    if (!service.body) {
      return (
        <div>
          <p className="text-deep-navy/85 text-base leading-[1.8] mb-6">
            {lang === 'ar' ? service.descAr : service.descEn}
          </p>
          <h3 className={`${fontClass} text-xl font-bold text-deep-navy mt-8 mb-4`}>
            {lang === 'ar' ? 'مميزات الخدمة' : 'Service Benefits'}
          </h3>
          <ul className="space-y-3 mb-6">
            {(lang === 'ar' ? service.benefitsAr : service.benefitsEn).map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-medical-blue shrink-0 mt-0.5" />
                <span className="text-deep-navy/85">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return service.body.map((section, i) => {
      const isAr = lang === 'ar';
      switch (section.type) {
        case 'h2':
          return <h2 key={i} id={`h2-${tocItems.findIndex(t => (isAr ? t.labelAr : t.labelEn) === (isAr ? section.contentAr : section.contentEn))}`} className={`${fontClass} text-2xl md:text-3xl font-bold text-deep-navy mt-10 mb-4 leading-snug`}>{isAr ? section.contentAr : section.contentEn}</h2>;
        case 'h3':
          return <h3 key={i} className={`${fontClass} text-xl font-bold text-deep-navy mt-8 mb-3`}>{isAr ? section.contentAr : section.contentEn}</h3>;
        case 'p':
          return <p key={i} className="text-deep-navy/85 text-base leading-[1.8] mb-4">{isAr ? section.contentAr : section.contentEn}</p>;
        case 'ul':
          return <ul key={i} className="list-disc list-inside space-y-2 mb-6 marker:text-medical-blue">{section.items?.map((item, j) => <li key={j} className="text-deep-navy/85 text-base leading-relaxed">{isAr ? item.contentAr : item.contentEn}</li>)}</ul>;
        case 'ol':
          return <ol key={i} className="list-decimal list-inside space-y-3 mb-6 marker:text-medical-blue marker:font-semibold">{section.items?.map((item, j) => <li key={j} className="text-deep-navy/85 text-base leading-relaxed">{isAr ? item.contentAr : item.contentEn}</li>)}</ol>;
        case 'blockquote':
          return <blockquote key={i} className={`border-r-4 border-warm-gold bg-soft-blue rounded-lg p-5 md:p-6 my-6 ${isRtl ? 'border-r-4' : 'border-l-4 border-r-0'}`}><p className="text-deep-navy italic text-base leading-relaxed">{isAr ? section.contentAr : section.contentEn}</p></blockquote>;
        default: return null;
      }
    });
  };

  return (
    <div ref={pageRef} className="min-h-screen bg-[#F7F9FC]">
      {/* Hero Header */}
      <div className="bg-deep-navy pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-medical-blue rounded-full blur-3xl translate-x-1/3 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-warm-gold rounded-full blur-3xl -translate-x-1/3 translate-y-1/2"></div>
        </div>
        <div className="content-container relative z-10">
          <div className="service-header max-w-4xl mx-auto text-center">
            <p className="text-soft-blue text-sm mb-4">
              <Link to="/" className="hover:text-white transition-colors">{t('nav.home', lang)}</Link>
              {' / '}
              <span className="text-white font-medium">{lang === 'ar' ? 'الخدمات' : 'Services'}</span>
            </p>
            <h1 className={`${fontClass} text-3xl md:text-5xl font-bold text-white mb-6`}>
              {lang === 'ar' ? service.titleAr : service.titleEn}
            </h1>
            <p className="text-soft-blue/90 text-lg max-w-2xl mx-auto">
              {lang === 'ar' ? service.descAr : service.descEn}
            </p>
          </div>
        </div>
      </div>

      <div className="content-container py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-16">
          
          {/* Main Content */}
          <div className="flex-1 w-full max-w-[800px]">
            <div className="service-content bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/60">
              {renderBody()}

              {/* Call to Action */}
              <div className="mt-12 p-8 bg-soft-blue rounded-xl text-center border border-medical-blue/20">
                <h3 className={`${fontClass} text-2xl font-bold text-deep-navy mb-3`}>
                  {lang === 'ar' ? 'هل تحتاج إلى استشارة طبية؟' : 'Need a medical consultation?'}
                </h3>
                <p className="text-deep-navy/80 mb-6">
                  {lang === 'ar' ? 'احجز موعدك الآن مع أ.د. أحمد عبدالله مهلهل للحصول على التشخيص الدقيق' : 'Book your appointment now with Prof. Dr. Ahmed Abdullah Mohelhel for an accurate diagnosis'}
                </p>
                <button 
                  onClick={() => navigate('/#booking')}
                  className="bg-medical-blue text-white px-8 py-3 rounded-full font-medium hover:bg-medical-blue/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-medical-blue/20"
                >
                  {t('hero.cta.primary', lang)}
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[320px] shrink-0">
            <div className="sticky top-24 space-y-6">
              
              {/* Table of Contents */}
              {tocItems.length > 0 && (
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/60">
                  <h3 className={`${fontClass} text-lg font-bold text-deep-navy mb-4`}>
                    {lang === 'ar' ? 'محتويات الصفحة' : 'Table of Contents'}
                  </h3>
                  <ul className="space-y-3 text-sm">
                    {tocItems.map((item) => (
                      <li key={item.id}>
                        <a 
                          href={`#${item.id}`}
                          className={`block transition-colors ${activeHeading === item.id ? 'text-medical-blue font-medium' : 'text-slate-custom hover:text-medical-blue'}`}
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }}
                        >
                          {lang === 'ar' ? item.labelAr : item.labelEn}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Other Services */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/60">
                <h3 className={`${fontClass} text-lg font-bold text-deep-navy mb-4`}>
                  {lang === 'ar' ? 'خدمات أخرى' : 'Other Services'}
                </h3>
                <ul className="space-y-0">
                  {services.filter(s => s.id !== service.id).map(s => (
                    <li key={s.id}>
                      <Link 
                        to={`/services/${s.id}`}
                        className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0 group"
                      >
                        <span className="text-deep-navy/80 group-hover:text-medical-blue font-medium transition-colors">
                          {lang === 'ar' ? s.titleAr : s.titleEn}
                        </span>
                        {isRtl ? (
                          <ChevronRight size={16} className="text-slate-400 group-hover:text-medical-blue transition-colors group-hover:-translate-x-1" />
                        ) : (
                          <ArrowRight size={16} className="text-slate-400 group-hover:text-medical-blue transition-colors group-hover:translate-x-1" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
