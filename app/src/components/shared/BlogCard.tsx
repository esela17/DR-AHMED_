import { useLanguage } from '@/context/LanguageContext';
import type { ArticleData } from '@/types';
import { Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  article: ArticleData;
  featured?: boolean;
}

export default function BlogCard({ article, featured }: Props) {
  const { lang, dir } = useLanguage();
  const isRtl = dir === 'rtl';

  if (featured) {
    return (
      <div className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(7,26,43,0.08)] flex flex-col md:flex-row">
        <div className="md:w-1/2 aspect-video md:aspect-auto">
          <img
            src={article.image}
            alt={lang === 'ar' ? article.titleAr : article.titleEn}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
          <span className="inline-block self-start px-3 py-1 bg-warm-gold/15 text-warm-gold text-xs font-semibold rounded-full mb-3">
            {lang === 'ar' ? 'أهم المقالات' : 'Featured'}
          </span>
          <h2 className="text-2xl font-bold text-deep-navy mb-3 leading-snug">
            {lang === 'ar' ? article.titleAr : article.titleEn}
          </h2>
          <p className="text-slate-custom text-sm leading-relaxed mb-4 line-clamp-3">
            {lang === 'ar' ? article.excerptAr : article.excerptEn}
          </p>
          <div className="flex items-center gap-4 text-slate-custom text-xs mb-5">
            <span className="flex items-center gap-1"><Clock size={14} /> {article.readTime} {lang === 'ar' ? 'دقائق' : 'min'}</span>
            <span>{article.date}</span>
          </div>
          <Link to={`/blog/${article.slug}`} className="inline-flex items-center gap-2 text-medical-blue text-sm font-semibold hover:underline">
            {lang === 'ar' ? 'اقرأ المقال' : 'Read Article'}
            {isRtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <Link to={`/blog/${article.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={article.image}
          alt={lang === 'ar' ? article.titleAr : article.titleEn}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-soft-blue text-medical-blue text-xs font-semibold rounded-full mb-3">
          {lang === 'ar' ? article.categoryAr : article.categoryEn}
        </span>
        <h3 className="font-semibold text-lg text-deep-navy mb-2 line-clamp-2 leading-snug">
          {lang === 'ar' ? article.titleAr : article.titleEn}
        </h3>
        <p className="text-slate-custom text-sm line-clamp-3 mb-4">
          {lang === 'ar' ? article.excerptAr : article.excerptEn}
        </p>
        <div className="flex items-center justify-between text-slate-custom text-xs">
          <span className="flex items-center gap-1"><Clock size={14} /> {article.readTime} {lang === 'ar' ? 'دق' : 'min'}</span>
          <span>{article.date}</span>
        </div>
      </div>
    </Link>
  );
}
