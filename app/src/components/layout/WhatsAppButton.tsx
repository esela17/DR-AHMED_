import { useLanguage } from '@/context/LanguageContext';
import { MessageCircle, Phone } from 'lucide-react';

export default function WhatsAppButton() {
  const { lang } = useLanguage();

  return (
    <div className="fixed bottom-8 left-6 z-[999] flex flex-col gap-4 items-start">
      {/* Dokki WhatsApp */}
      <a
        href="https://wa.me/201110505253?text=%D8%B9%D8%A7%D9%8A%D8%B2%20%D8%A7%D8%AD%D8%AC%D8%B2%20%D8%A7%D9%84%D8%A7%D9%86"
        target="_blank"
        rel="noopener noreferrer"
        className="relative px-6 h-14 rounded-full bg-trust-green flex items-center justify-center gap-3 text-white shadow-xl hover:scale-105 transition-transform duration-300"
        aria-label="WhatsApp Dokki"
      >
        <MessageCircle size={28} className="relative z-10" />
        <span className="relative z-10 font-bold text-base md:text-lg">
          {lang === 'ar' ? 'واتساب الدقي' : 'Dokki WhatsApp'}
        </span>
      </a>

      {/* Fayoum WhatsApp */}
      <a
        href="https://wa.me/201007513010?text=%D8%B9%D8%A7%D9%8A%D8%B2%20%D8%A7%D8%AD%D8%AC%D8%B2%20%D8%A7%D9%84%D8%A7%D9%86"
        target="_blank"
        rel="noopener noreferrer"
        className="relative px-6 h-14 rounded-full bg-[#128C7E] flex items-center justify-center gap-3 text-white shadow-xl hover:scale-105 transition-transform duration-300"
        aria-label="WhatsApp Fayoum"
      >
        <MessageCircle size={28} className="relative z-10" />
        <span className="relative z-10 font-bold text-base md:text-lg">
          {lang === 'ar' ? 'واتساب الفيوم' : 'Fayoum WhatsApp'}
        </span>
      </a>

      {/* Phone */}
      <a
        href="tel:01110505253"
        className="relative px-6 h-14 rounded-full bg-medical-blue flex items-center justify-center gap-3 text-white shadow-xl hover:scale-105 transition-transform duration-300"
        aria-label="Phone"
      >
        <Phone size={26} className="relative z-10" />
        <span className="relative z-10 font-bold text-base md:text-lg">
          {lang === 'ar' ? 'فون' : 'Call Us'}
        </span>
      </a>
    </div>
  );
}
