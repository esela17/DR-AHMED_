import { useLanguage } from '@/context/LanguageContext';
import { Link } from 'react-router-dom';
import { Eye, Home } from 'lucide-react';

export default function NotFoundPage() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-deep-navy flex items-center justify-center px-4">
      <div className="text-center max-w-[480px]">
        {/* Icon */}
        <div className="w-24 h-24 rounded-full bg-medical-blue/20 flex items-center justify-center mx-auto mb-8">
          <Eye size={48} className="text-medical-blue" />
        </div>

        {/* 404 */}
        <h1 className="font-outfit text-8xl font-bold text-white/10 mb-2">404</h1>

        {/* Message */}
        <h2 className="font-cairo text-2xl font-bold text-white mb-4">
          {lang === 'ar' ? 'الصفحة غير موجودة' : 'Page Not Found'}
        </h2>
        <p className="text-white/60 text-base mb-10">
          {lang === 'ar'
            ? 'عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.'
            : 'Sorry, the page you are looking for does not exist or has been moved.'}
        </p>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-medical-blue text-white text-sm font-semibold rounded-xl hover:bg-electric-blue transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cta"
          >
            <Home size={18} />
            {lang === 'ar' ? 'الصفحة الرئيسية' : 'Go Home'}
          </Link>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white text-sm font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
          >
            {lang === 'ar' ? 'المدونة الطبية' : 'Medical Blog'}
          </Link>
        </div>
      </div>
    </div>
  );
}
