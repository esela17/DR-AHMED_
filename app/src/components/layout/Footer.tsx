import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import { Mail, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const quickLinks = [
  { key: 'nav.home', href: '#hero' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.services', href: '#services' },
  { key: 'nav.beforeafter', href: '/before-after' },
  { key: 'nav.faq', href: '/faq' },
  { key: 'nav.news', href: '/news' },
  { key: 'nav.blog', href: '/blog' },
];

const serviceLinks = [
  'service.lasik',
  'service.cataract',
  'service.retina',
  'service.glaucoma',
  'service.pediatric',
];

export default function Footer() {
  const { lang } = useLanguage();
  const navigate = useNavigate();

  const handleClick = (href: string) => {
    if (href.startsWith('#')) {
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <footer className="bg-deep-navy border-t border-white/5">
      <div className="content-container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="font-cairo font-bold text-2xl text-white block">أ.د. أحمد عبدالله مهلهل</span>
              <span className="font-outfit font-semibold text-[10px] text-warm-gold tracking-[0.15em] uppercase">PROF. DR. AHMED MOHELHEL</span>
            </div>
            <p className="text-slate-custom text-sm mb-6">{t('footer.tagline', lang)}</p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'youtube'].map(social => (
                <a key={social} href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-custom hover:text-white hover:bg-white/10 transition-all duration-300">
                  <SocialIcon name={social} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-5">{t('footer.quickLinks', lang)}</h4>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.key}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-slate-custom hover:text-white text-sm transition-colors duration-300"
                  >
                    {t(link.key, lang)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-5">{t('footer.services', lang)}</h4>
            <ul className="space-y-3">
              {serviceLinks.map(link => (
                <li key={link}>
                  <a href="#services" className="text-slate-custom hover:text-white text-sm transition-colors duration-300">
                    {t(link, lang)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-5">{t('footer.contact', lang)}</h4>
            <div className="space-y-6 text-sm text-slate-custom">
              {/* Dokki Branch */}
              <div className="space-y-1.5">
                <p className="font-bold text-white mb-1 flex items-center gap-1.5">
                  <MapPin size={16} className="text-medical-blue" />
                  {lang === 'ar' ? 'عيادة الدقي (الجيزة):' : 'Dokki Clinic (Giza):'}
                </p>
                <p className="text-xs leading-relaxed pl-5 pr-5 mb-1">
                  {lang === 'ar' ? 'برج الإخلاص للأطباء، 96 أ شارع التحرير، الدقي' : 'El-Ekhlas Doctors Tower, 96A El-Tahrir St., Dokki'}
                </p>
                <div className="pl-5 pr-5 flex flex-col gap-1 text-xs">
                  <a href="tel:01110505253" className="hover:text-medical-blue transition-colors">📱 01110505253</a>
                  <a href="tel:02337485244" className="hover:text-medical-blue transition-colors">☎️ 02337485244 (أرضي)</a>
                </div>
              </div>

              {/* Fayoum Branch */}
              <div className="space-y-1.5">
                <p className="font-bold text-white mb-1 flex items-center gap-1.5">
                  <MapPin size={16} className="text-medical-blue" />
                  {lang === 'ar' ? 'عيادة الفيوم:' : 'Fayoum Clinic:'}
                </p>
                <p className="text-xs leading-relaxed pl-5 pr-5 mb-1">
                  {lang === 'ar' ? 'الفيوم، أمام مستشفى التحرير، مطلع الكوبري العلوي' : 'In front of El-Tahrir Hospital, at the entrance of the Flyover Bridge, Fayoum'}
                </p>
                <div className="pl-5 pr-5 flex flex-col gap-1 text-xs">
                  <a href="tel:01007513010" className="hover:text-medical-blue transition-colors">📱 01007513010</a>
                </div>
              </div>

              {/* Sheikh Zayed Branch */}
              <div className="space-y-1.5">
                <p className="font-bold text-white mb-1 flex items-center gap-1.5">
                  <MapPin size={16} className="text-medical-blue" />
                  {lang === 'ar' ? 'عيادة الشيخ زايد (قريباً):' : 'Sheikh Zayed Clinic (Soon):'}
                </p>
                <p className="text-xs leading-relaxed pl-5 pr-5 mb-1">
                  {lang === 'ar' ? 'قريباً في 205 الشيخ زايد' : 'Soon at 205 Sheikh Zayed'}
                </p>
                <div className="pl-5 pr-5 flex flex-col gap-1 text-xs">
                  <a href="tel:01110505253" className="hover:text-medical-blue transition-colors">📱 01110505253</a>
                </div>
              </div>

              {/* WhatsApp & Email */}
              <div className="pt-2 space-y-3">
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-medical-blue" />
                  <a href="mailto:info@dramedmohelhel.com" className="hover:text-medical-blue transition-colors text-xs">info@dramedmohelhel.com</a>
                </div>
                <a
                  href="https://wa.me/201110505253"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-trust-green text-white text-xs font-semibold rounded-lg text-center block hover:brightness-110 transition-all"
                >
                  {t('footer.whatsapp', lang)}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <a href="https://cureztyx.xyz" target="_blank" rel="noopener noreferrer" className="text-light-slate text-xs hover:text-white transition-colors">
            {t('footer.copyright', lang)}
          </a>
          <div className="flex gap-6">
            <a href="#" className="text-light-slate text-xs hover:text-white transition-colors">{t('footer.privacy', lang)}</a>
            <a href="#" className="text-light-slate text-xs hover:text-white transition-colors">{t('footer.terms', lang)}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  if (name === 'facebook') {
    return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
  }
  if (name === 'instagram') {
    return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>;
  }
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>;
}
