import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import { getAssetUrl } from '@/lib/utils';
import { getArticleBySlug, getRelatedArticles } from '@/data/articles';
import BlogCard from '@/components/shared/BlogCard';
import { Clock, Calendar, Facebook, Twitter, Link2 } from 'lucide-react';
import gsap from 'gsap';

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang, dir } = useLanguage();
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeToc, setActiveToc] = useState('');
  const isRtl = dir === 'rtl';

  const article = slug ? getArticleBySlug(slug) : undefined;
  const related = slug ? getRelatedArticles(slug) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!article?.body) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.article-hero-img', { opacity: 0 }, { opacity: 1, duration: 0.6 });
      gsap.fromTo('.article-header > *', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 0.2 });
      gsap.fromTo('.article-body', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.3 });
      gsap.fromTo('.article-sidebar', { opacity: 0, x: isRtl ? -20 : 20 }, { opacity: 1, x: 0, duration: 0.6, delay: 0.5 });
    }, pageRef);
    return () => ctx.revert();
  }, [article, isRtl]);

  // TOC Intersection Observer — highlights the active heading
  useEffect(() => {
    if (!article?.body) return;
    const headings = document.querySelectorAll('.article-body h2');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveToc(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen bg-[#F7F9FC] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-deep-navy mb-2">{lang === 'ar' ? 'المقال غير موجود' : 'Article not found'}</h2>
          <Link to="/blog" className="text-medical-blue hover:underline">{t('nav.blog', lang)}</Link>
        </div>
      </div>
    );
  }

  const tocItems = article.body?.filter(s => s.type === 'h2').map((s, i) => ({
    id: `h2-${i}`,
    labelAr: s.contentAr,
    labelEn: s.contentEn,
  })) || [];

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  const fontClass = lang === 'ar' ? 'font-cairo' : 'font-outfit';

  const renderBody = () => {
    if (!article.body) return null;
    return article.body.map((section, i) => {
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
      {/* Hero Image */}
      <div className="article-hero-img relative w-full max-h-[400px] overflow-hidden">
        <img src={article.image} alt={lang === 'ar' ? article.titleAr : article.titleEn} className="w-full h-[300px] md:h-[400px] object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F7F9FC] via-transparent to-transparent" />
      </div>

      <div className="content-container -mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
          {/* Main Content */}
          <div>
            {/* Breadcrumb */}
            <p className="article-header text-slate-custom text-xs mb-4">
              <a href="/" className="hover:text-medical-blue transition-colors">{t('nav.home', lang)}</a>
              {' / '}
              <a href="/blog" className="hover:text-medical-blue transition-colors">{t('nav.blog', lang)}</a>
              {' / '}
              <span className="text-slate-custom">{(lang === 'ar' ? article.titleAr : article.titleEn).slice(0, 30)}...</span>
            </p>

            <div className="article-header mb-8">
              <span className="inline-block px-3 py-1 bg-soft-blue text-medical-blue text-xs font-semibold rounded-full mb-4">
                {lang === 'ar' ? article.categoryAr : article.categoryEn}
              </span>
              <h1 className={`${fontClass} text-2xl md:text-4xl lg:text-[44px] font-bold text-deep-navy leading-tight mb-4`}>
                {lang === 'ar' ? article.titleAr : article.titleEn}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-slate-custom text-xs">
                <span className="flex items-center gap-2">
                  <img src={getAssetUrl('/images/doctor-portrait.png')} alt={lang === 'ar' ? 'د. أحمد عبدالله مهلهل' : 'Dr. Ahmed Abdullah Muhlhal'} className="w-8 h-8 rounded-full object-cover" loading="lazy" />
                  <span className="font-semibold text-deep-navy">{lang === 'ar' ? 'د. أحمد عبدالله مهلهل' : 'Dr. Ahmed Abdullah Muhlhal'}</span>
                </span>
                <span className="flex items-center gap-1"><Calendar size={14} /> {article.date}</span>
                <span className="flex items-center gap-1"><Clock size={14} /> {article.readTime} {t('article.minRead', lang)}</span>
              </div>
            </div>

            {/* Article Body */}
            <article className="article-body bg-white rounded-2xl p-6 md:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              {renderBody()}

              {/* CTA at end */}
              <div className="mt-10 p-6 bg-gradient-to-br from-medical-blue to-electric-blue rounded-xl text-center">
                <h3 className={`${fontClass} text-xl font-bold text-white mb-2`}>
                  {lang === 'ar' ? 'احجز تشخيصك المجاني الآن' : 'Book Your Free Diagnosis Now'}
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  {lang === 'ar' ? 'فريقنا جاهز لمساعدتك في اختيار العلاج المناسب' : 'Our team is ready to help you choose the right treatment'}
                </p>
                <a href="/#booking" className="inline-flex items-center px-8 py-3 bg-white text-medical-blue font-semibold rounded-xl hover:bg-white/90 transition-all">
                  {t('nav.book', lang)}
                </a>
              </div>
            </article>

            {/* Author Bio */}
            <div className="flex items-start gap-5 bg-[#F7F9FC] rounded-xl p-6 mt-8">
              <img src={getAssetUrl('/images/doctor-portrait.png')} alt={lang === 'ar' ? 'د. أحمد عبدالله مهلهل' : 'Dr. Ahmed Abdullah Muhlhal'} className="w-14 h-14 rounded-full object-cover shrink-0" loading="lazy" />
              <div>
                <p className="text-slate-custom text-xs mb-1">{t('article.writtenBy', lang)}</p>
                <h4 className="text-deep-navy font-semibold text-lg mb-1">{lang === 'ar' ? 'د. أحمد عبدالله مهلهل' : 'Dr. Ahmed Abdullah Muhlhal'}</h4>
                <p className="text-slate-custom text-sm">
                  {lang === 'ar' ? 'أخصائي طب وجراحة العيون بخبرة ٢٠+ عاماً. يؤمن بأن كل مريض يستحق رؤية واضحة.' : 'Ophthalmology specialist with 20+ years of experience. Believes every patient deserves clear vision.'}
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {(lang === 'ar'
                ? ['ليزك', 'تصحيح النظر', 'فيمتو ليزك', 'عمليات العيون', 'صحة العيون']
                : ['LASIK', 'Vision Correction', 'Femto LASIK', 'Eye Surgery', 'Eye Health']
              ).map((tag, i) => (
                <span key={i} className="px-3.5 py-1.5 bg-soft-blue text-medical-blue text-xs font-medium rounded-full">{tag}</span>
              ))}
            </div>

            {/* Share */}
            <div className="flex items-center gap-3 mt-6">
              <span className="text-slate-custom text-sm">{t('article.share', lang)}</span>
              {[
                { icon: <Facebook size={18} />, href: '#' },
                { icon: <Twitter size={18} />, href: '#' },
                { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>, href: 'https://wa.me/201001234567' },
                { icon: <Link2 size={18} />, action: copyLink },
              ].map((btn, i) => (
                <button
                  key={i}
                  onClick={btn.action || (() => btn.href && window.open(btn.href, '_blank'))}
                  className="w-9 h-9 rounded-full bg-soft-blue flex items-center justify-center text-medical-blue hover:bg-medical-blue hover:text-white transition-all duration-300"
                >
                  {btn.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Sidebar - Desktop */}
          <aside className="article-sidebar hidden lg:block">
            <div className="sticky top-24 space-y-6">
              {/* TOC */}
              {tocItems.length > 0 && (
                <div className="bg-white rounded-xl p-6 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                  <h4 className="text-deep-navy font-semibold text-base mb-4">{t('article.toc', lang)}</h4>
                  <ul className="space-y-2">
                    {tocItems.map((item, i) => (
                      <li key={i}>
                        <button
                          onClick={() => {
                            const el = document.getElementById(`h2-${i}`);
                            el?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className={`text-sm transition-colors hover:text-medical-blue ${activeToc === `h2-${i}` ? 'text-medical-blue font-semibold' : 'text-slate-custom'}`}
                        >
                          {lang === 'ar' ? item.labelAr : item.labelEn}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Mini Booking CTA */}
              <div className="bg-gradient-to-br from-medical-blue to-electric-blue rounded-xl p-6 text-center">
                <h4 className="text-white font-semibold text-lg mb-2">{t('article.sidebar.cta', lang)}</h4>
                <p className="text-white/80 text-sm mb-5">{t('article.sidebar.ctaDesc', lang)}</p>
                <a href="/#booking" className="inline-block w-full py-3 bg-white text-medical-blue font-semibold rounded-xl hover:bg-white/90 transition-all">
                  {t('article.sidebar.book', lang)}
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className={`${fontClass} text-2xl md:text-3xl font-bold text-deep-navy mb-8`}>
              {t('article.related', lang)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map(a => <BlogCard key={a.id} article={a} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
