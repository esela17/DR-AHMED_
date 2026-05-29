import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const { lang, dir } = useLanguage();
  const isRtl = dir === 'rtl';

  return (
    <div className={`fixed bottom-24 z-[999] group ${isRtl ? 'left-6' : 'right-6'}`}>
      <a
        href="https://wa.me/201001234567"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full bg-trust-green flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-trust-green animate-pulse-ring" />
        <MessageCircle size={24} className="relative z-10" />
      </a>
      <span className={`absolute ${isRtl ? 'left-full ml-3' : 'right-full mr-3'} top-1/2 -translate-y-1/2 px-3 py-1.5 bg-deep-navy text-white text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none`}>
        {t('float.whatsapp', lang)}
      </span>
    </div>
  );
}
