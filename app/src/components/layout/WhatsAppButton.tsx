import { useLanguage } from '@/context/LanguageContext';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const { lang } = useLanguage();

  return (
    <div className="fixed bottom-6 left-6 z-[999] flex flex-col gap-4">
      {/* Dokki WhatsApp */}
      <div className="group relative">
        <a
          href="https://wa.me/201110505253?text=%D8%B9%D8%A7%D9%8A%D8%B2%20%D8%A7%D8%AD%D8%AC%D8%B2%20%D8%A7%D9%84%D8%A7%D9%86"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300"
          aria-label="WhatsApp Dokki"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
          <MessageCircle size={26} className="relative z-10" />
        </a>
        <span className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-deep-navy text-white text-sm font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-lg">
          {lang === 'ar' ? 'عيادة الدقي' : 'Dokki Clinic'}
        </span>
      </div>

      {/* Fayoum WhatsApp */}
      <div className="group relative">
        <a
          href="https://wa.me/201007513010?text=%D8%B9%D8%A7%D9%8A%D8%B2%20%D8%A7%D8%AD%D8%AC%D8%B2%20%D8%A7%D9%84%D8%A7%D9%86"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 rounded-full bg-[#128C7E] flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300"
          aria-label="WhatsApp Fayoum"
        >
          <span className="absolute inset-0 rounded-full bg-[#128C7E] animate-pulse-ring" />
          <MessageCircle size={26} className="relative z-10" />
        </a>
        <span className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-deep-navy text-white text-sm font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-lg">
          {lang === 'ar' ? 'عيادة الفيوم' : 'Fayoum Clinic'}
        </span>
      </div>
    </div>
  );
}
