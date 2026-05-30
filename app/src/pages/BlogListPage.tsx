import { useState, useMemo, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { t } from '@/data/translations';
import { articles } from '@/data/articles';
import BlogCard from '@/components/shared/BlogCard';
import { Search } from 'lucide-react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const categories = [
  { key: 'blog.tab.all', value: 'all' },
  { key: 'blog.tab.surgery', value: 'Eye Surgery' },
  { key: 'blog.tab.diseases', value: 'Eye Diseases' },
  { key: 'blog.tab.tips', value: 'Health Tips' },
  { key: 'blog.tab.stories', value: 'Patient Stories' },
];

export default function BlogListPage() {
  const { lang, dir } = useLanguage();
  
  useSEO({
    title: lang === 'ar' 
      ? 'المدونة الطبية وصحة العيون | أ.د. أحمد عبدالله مهلهل' 
      : 'Medical Blog & Eye Health | Prof. Dr. Ahmed Abdullah Mohelhel',
    description: lang === 'ar'
      ? 'مقالات طبية مبسطة وموثوقة لتحسين صحة العيون والوقاية من المشاكل البصرية بقلم الأستاذ الدكتور أحمد عبدالله مهلهل.'
      : 'Simplified and reliable medical articles to improve eye health and prevent vision problems by Prof. Dr. Ahmed Abdullah Mohelhel.',
    keywords: lang === 'ar'
      ? 'مدونة طب العيون, نصائح صحة العيون, جراحة العيون, الوقاية من جفاف العين, الليزك والمياه البيضاء'
      : 'ophthalmology blog, eye health tips, eye surgery articles, prevent dry eyes, LASIK blog',
    lang
  });

  const [search, setSearch] = useState('');
  const [activeCat, setActiveCat] = useState('all');
  const [visibleCount, setVisibleCount] = useState(6);
  const pageRef = useRef<HTMLDivElement>(null);
  const isRtl = dir === 'rtl';

  const filtered = useMemo(() => {
    return articles.filter(a => {
      const matchCat = activeCat === 'all' || a.categoryEn === activeCat;
      const q = search.toLowerCase();
      const matchSearch = !q ||
        a.titleAr.toLowerCase().includes(q) ||
        a.titleEn.toLowerCase().includes(q) ||
        a.excerptAr.toLowerCase().includes(q) ||
        a.excerptEn.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [search, activeCat]);

  const featured = articles.find(a => a.featured);
  const regular = filtered.filter(a => !a.featured).slice(0, visibleCount);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.blog-header > *', { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
      });
      gsap.fromTo('.blog-featured', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out',
      });
      gsap.fromTo('.blog-card', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.1, delay: 0.4, ease: 'power3.out',
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fontClass = lang === 'ar' ? 'font-cairo' : 'font-outfit';

  return (
    <div ref={pageRef} className="min-h-screen bg-[#F7F9FC]">
      {/* Header */}
      <div className="bg-[#F7F9FC] pt-28 pb-10">
        <div className="content-container">
          <div className="blog-header">
            <p className="text-slate-custom text-xs mb-3">
              <Link to="/" className="hover:text-medical-blue transition-colors">{t('nav.home', lang)}</Link>
              {' / '}
              <span className="text-deep-navy font-medium">{t('blog.title', lang)}</span>
            </p>
            <h1 className={`${fontClass} text-2xl md:text-4xl font-bold text-deep-navy mb-3`}>
              {t('blog.title', lang)}
            </h1>
            <p className="text-slate-custom text-base max-w-[560px] mb-8">
              {t('blog.subtitle', lang)}
            </p>

            {/* Search + Filter */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search size={18} className={`absolute top-1/2 -translate-y-1/2 text-slate-custom ${isRtl ? 'right-4' : 'left-4'}`} />
                <input
                  type="text"
                  placeholder={t('blog.search', lang)}
                  value={search}
                  onChange={e => { setSearch(e.target.value); setVisibleCount(6); }}
                  className="w-full pl-12 pr-4 py-3.5 border border-divider rounded-xl text-sm bg-white text-deep-navy placeholder-light-slate focus:outline-none focus:border-medical-blue focus:ring-2 focus:ring-medical-blue/10 transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-container pb-20">
        {/* Featured Article */}
        {featured && activeCat === 'all' && !search && (
          <div className="blog-featured mb-12">
            <BlogCard article={featured} featured />
          </div>
        )}

        {/* Category Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => { setActiveCat(cat.value); setVisibleCount(6); }}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                activeCat === cat.value
                  ? 'bg-medical-blue text-white'
                  : 'bg-white text-slate-custom border border-divider hover:bg-soft-blue'
              }`}
            >
              {t(cat.key, lang)}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regular.map(article => (
            <div key={article.id} className="blog-card">
              <BlogCard article={article} />
            </div>
          ))}
        </div>

        {regular.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-custom text-lg">{lang === 'ar' ? 'لا توجد مقالات مطابقة' : 'No matching articles found'}</p>
          </div>
        )}

        {/* Load More */}
        {visibleCount < filtered.filter(a => !a.featured).length && (
          <button
            onClick={() => setVisibleCount(prev => prev + 6)}
            className="mx-auto mt-10 block px-8 py-3.5 bg-white border border-divider text-deep-navy text-sm font-semibold rounded-xl hover:bg-soft-blue hover:border-medical-blue transition-all"
          >
            {t('blog.loadMore', lang)}
          </button>
        )}

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-br from-medical-blue to-electric-blue rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className={`${fontClass} text-xl md:text-2xl font-bold text-white mb-2`}>
              {t('blog.newsletter.title', lang)}
            </h3>
            <p className="text-white/80 text-sm max-w-[400px]">
              {t('blog.newsletter.subtitle', lang)}
            </p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              placeholder={t('blog.newsletter.placeholder', lang)}
              className="flex-1 md:w-64 px-4 py-3.5 bg-white/15 border border-white/30 rounded-xl text-white text-sm placeholder-white/50 focus:outline-none focus:border-white/60 transition-all"
            />
            <button className="px-6 py-3.5 bg-white text-medical-blue text-sm font-semibold rounded-xl hover:bg-white/90 transition-all shrink-0">
              {t('blog.newsletter.submit', lang)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
