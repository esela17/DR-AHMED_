import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import { Phone } from 'lucide-react';

export default function EmergencyButton() {
  const { dir } = useLanguage();
  const isRtl = dir === 'rtl';

  return (
    <div className={`fixed bottom-6 z-[999] group ${isRtl ? 'left-6' : 'right-6'}`}>
      <a
        href="tel:+201001234567"
        className="relative w-14 h-14 rounded-full bg-gradient-to-br from-medical-blue to-electric-blue flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Call now"
      >
        <span className="absolute inset-0 rounded-full bg-medical-blue animate-pulse-ring" />
        <Phone size={24} className="relative z-10" />
      </a>
      <span className={`absolute ${isRtl ? 'left-full ml-3' : 'right-full mr-3'} top-1/2 -translate-y-1/2 px-3 py-1.5 bg-deep-navy text-white text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none`}>
        {t('float.emergency', useLanguage().lang)}
      </span>
    </div>
  );
}
