import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import { useIsMobile } from '@/hooks/useMediaQuery';
import { Menu, X, Phone } from 'lucide-react';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';

const navLinks = [
  { key: 'nav.home', href: '#hero' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.services', href: '#services' },
  { key: 'nav.testimonials', href: '#testimonials' },
  { key: 'nav.blog', href: '/blog' },
  { key: 'nav.contact', href: '#booking' },
];

export default function Navigation() {
  const { lang, toggleLang } = useLanguage();
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 100);
      if (y < 100) {
        setVisible(true);
      } else {
        setVisible(y < lastScrollY.current);
      }
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('#')) {
      // If we're not on the home page, navigate there first then scroll
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

  useEffect(() => {
    if (navRef.current) {
      gsap.to(navRef.current, {
        y: visible ? 0 : -100,
        duration: 0.4,
        ease: 'power2.out',
      });
    }
  }, [visible]);

  const fontClass = lang === 'ar' ? 'font-cairo' : 'font-outfit';

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-colors duration-300 ${
          scrolled
            ? 'bg-deep-navy/95 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="content-container h-full flex items-center justify-between">
          {/* Logo */}
          <a href="/" onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }} className="flex flex-col items-start shrink-0">
            <span className={`font-cairo font-bold text-[20px] text-white leading-tight`}>
              أ.د. أحمد عبدالله مهلهل
            </span>
            <span className="font-outfit font-semibold text-[10px] text-warm-gold tracking-[0.15em] uppercase">
              PROF. DR. AHMED MOHELHEL
            </span>
          </a>

          {/* Desktop Nav Links */}
          {!isMobile && (
            <div className={`flex items-center gap-1 ${fontClass}`}>
              {navLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => handleNavClick(link.href)}
                  className="px-3 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 rounded-md hover:bg-white/5"
                >
                  {t(link.key, lang)}
                </button>
              ))}

              {/* Language Toggle */}
              <button
                onClick={toggleLang}
                className="mx-3 px-3 py-1.5 text-xs font-semibold border border-white/15 rounded-md text-white hover:bg-white/10 transition-colors duration-300"
              >
                {lang === 'ar' ? 'EN' : 'عربي'}
              </button>

              {/* CTA */}
              <button
                onClick={() => handleNavClick('#booking')}
                className="mr-2 px-6 py-2.5 bg-medical-blue text-white text-sm font-semibold rounded-lg hover:bg-electric-blue transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cta"
              >
                {t('nav.book', lang)}
              </button>
            </div>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-white"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobile && mobileOpen && (
        <div className="fixed inset-0 z-40 bg-deep-navy flex flex-col items-center justify-center gap-6">
          {navLinks.map((link, i) => (
            <button
              key={link.key}
              onClick={() => handleNavClick(link.href)}
              className={`text-2xl font-semibold text-white/90 hover:text-medical-blue transition-colors ${fontClass}`}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {t(link.key, lang)}
            </button>
          ))}
          <button
            onClick={toggleLang}
            className="mt-4 px-6 py-3 border border-white/20 rounded-lg text-white font-semibold"
          >
            {lang === 'ar' ? 'English' : 'العربية'}
          </button>
          <button
            onClick={() => handleNavClick('#booking')}
            className="mt-2 px-8 py-3 bg-medical-blue text-white font-semibold rounded-lg flex items-center gap-2"
          >
            <Phone size={18} />
            {t('nav.book', lang)}
          </button>
        </div>
      )}
    </>
  );
}
