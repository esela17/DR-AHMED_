import { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const { dir } = useLanguage();
  const isRtl = dir === 'rtl';

  useEffect(() => {
    const update = () => {
      if (!barRef.current) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      barRef.current.style.height = `${progress}%`;
    };
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div className={`fixed top-0 ${isRtl ? 'right-0' : 'left-0'} w-[3px] h-screen bg-white/5 z-[100] hidden lg:block`}>
      <div ref={barRef} className="w-full bg-medical-blue transition-[height] duration-100" style={{ height: '0%' }} />
    </div>
  );
}
