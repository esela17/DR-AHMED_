import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import type { ServiceData } from '@/types';
import { ScanEye, Droplets, Eye, Activity, Baby, Droplet, Search, Hexagon, ArrowLeft, ArrowRight, Check } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  ScanEye: <ScanEye size={28} />, Droplets: <Droplets size={28} />, Eye: <Eye size={28} />,
  Activity: <Activity size={28} />, Baby: <Baby size={28} />, Droplet: <Droplet size={28} />,
  Search: <Search size={28} />, Hexagon: <Hexagon size={28} />,
};

interface Props {
  service: ServiceData;
}

export default function ServiceCard({ service }: Props) {
  const { lang, dir } = useLanguage();
  const isRtl = dir === 'rtl';

  return (
    <Link to={`/services/${service.id}`} className="group block bg-[#F7F9FC] border border-divider rounded-2xl p-8 cursor-pointer transition-all duration-350 hover:-translate-y-1.5 hover:shadow-card-hover hover:border-medical-blue/20">
      <div className="w-14 h-14 rounded-full bg-ice-blue flex items-center justify-center text-medical-blue mb-4 transition-all duration-300 group-hover:bg-medical-blue group-hover:text-white">
        {iconMap[service.icon]}
      </div>
      <h3 className="font-semibold text-xl text-deep-navy mb-2">
        {lang === 'ar' ? service.titleAr : service.titleEn}
      </h3>
      <p className="text-slate-custom text-sm leading-relaxed mb-4 line-clamp-3">
        {lang === 'ar' ? service.descAr : service.descEn}
      </p>
      <ul className="space-y-2 mb-4">
        {(lang === 'ar' ? service.benefitsAr : service.benefitsEn).slice(0, 3).map((b, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-slate-custom">
            <Check size={14} className="text-trust-green shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2 text-medical-blue text-sm font-semibold group-hover:underline">
        <span>{lang === 'ar' ? 'اعرف المزيد' : 'Learn more'}</span>
        {isRtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
      </div>
    </Link>
  );
}
