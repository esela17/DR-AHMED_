import { useLanguage } from '@/context/LanguageContext';
import type { TestimonialData } from '@/types';
import { Star } from 'lucide-react';

interface Props {
  testimonial: TestimonialData;
}

export default function TestimonialCard({ testimonial }: Props) {
  const { lang } = useLanguage();

  return (
    <div className="bg-white/95 rounded-2xl p-7 shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] mb-5">
      <div className="flex gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} className={i < testimonial.rating ? 'text-warm-gold fill-warm-gold' : 'text-gray-300'} />
        ))}
      </div>
      <p className="text-deep-navy text-sm leading-relaxed italic mb-4">
        &ldquo;{lang === 'ar' ? testimonial.quoteAr : testimonial.quoteEn}&rdquo;
      </p>
      <div className="border-t border-divider pt-4 flex items-center gap-3">
        <img src={testimonial.avatar} alt={lang === 'ar' ? testimonial.nameAr : testimonial.nameEn} className="w-11 h-11 rounded-full object-cover" />
        <div>
          <p className="text-deep-navy text-sm font-semibold">
            {lang === 'ar' ? testimonial.nameAr : testimonial.nameEn}
          </p>
          <p className="text-slate-custom text-xs">
            {testimonial.age} · {lang === 'ar' ? testimonial.caseAr : testimonial.caseEn}
          </p>
        </div>
      </div>
    </div>
  );
}
