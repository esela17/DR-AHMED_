import { useLanguage } from '@/context/LanguageContext';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const { lang } = useLanguage();

  return (
    <div className="fixed bottom-6 left-6 z-[999] flex flex-col gap-3">
      {/* Dokki WhatsApp */}
      <a
        href="https://wa.me/201110505253?text=%D8%B9%D8%A7%D9%8A%D8%B2%20%D8%A7%D8%AD%D8%AC%D8%B2%20%D8%A7%D9%84%D8%A7%D9%86"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 p-1.5 pr-3 bg-white/95 backdrop-blur-sm border border-divider/50 shadow-md rounded-full hover:-translate-y-1 hover:shadow-lg hover:border-trust-green/30 transition-all duration-300 text-deep-navy group"
        aria-label="WhatsApp Dokki"
      >
        <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-sm">
          <MessageCircle size={14} />
        </div>
        <span className="font-semibold text-xs whitespace-nowrap">
          {lang === 'ar' ? 'عيادة الدقي' : 'Dokki Clinic'}
        </span>
      </a>

      {/* Fayoum WhatsApp */}
      <a
        href="https://wa.me/201007513010?text=%D8%B9%D8%A7%D9%8A%D8%B2%20%D8%A7%D8%AD%D8%AC%D8%B2%20%D8%A7%D9%84%D8%A7%D9%86"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 p-1.5 pr-3 bg-white/95 backdrop-blur-sm border border-divider/50 shadow-md rounded-full hover:-translate-y-1 hover:shadow-lg hover:border-trust-green/30 transition-all duration-300 text-deep-navy group"
        aria-label="WhatsApp Fayoum"
      >
        <div className="w-7 h-7 rounded-full bg-[#128C7E] flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-sm">
          <MessageCircle size={14} />
        </div>
        <span className="font-semibold text-xs whitespace-nowrap">
          {lang === 'ar' ? 'عيادة الفيوم' : 'Fayoum Clinic'}
        </span>
      </a>
    </div>
  );
}
