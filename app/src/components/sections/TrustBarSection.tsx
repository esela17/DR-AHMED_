import { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { stats } from '@/data/stats';
import { Award, Users, TrendingUp, Stethoscope } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award size={32} />, Users: <Users size={32} />,
  TrendingUp: <TrendingUp size={32} />, Stethoscope: <Stethoscope size={32} />,
};

export default function TrustBarSection() {
  const { lang } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance
      gsap.fromTo('.trust-item', { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.15,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' },
      });

      // Counter animation
      stats.forEach((stat, i) => {
        const el = counterRefs.current[i];
        if (!el) return;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: stat.value,
          duration: 2.5,
          ease: 'power2.out',
          delay: i * 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none none' },
          onUpdate: () => {
            const v = Math.round(obj.val);
            if (stat.value >= 1000) {
              el.textContent = v.toLocaleString('en') + stat.suffix;
            } else {
              el.textContent = v + stat.suffix;
            }
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-deep-navy py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-deep-navy pointer-events-none" />
      <div className="content-container relative">
        <div className="grid grid-cols-2 gap-8 lg:gap-16 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <div key={stat.id} className={`trust-item flex flex-col items-center text-center ${i < stats.length - 1 ? 'border-r border-white/10' : ''}`}>
              <div className="text-warm-gold mb-3 animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                {iconMap[stat.icon]}
              </div>
              <span ref={el => { counterRefs.current[i] = el; }} className="text-white text-3xl md:text-5xl font-bold leading-none">
                0{stat.suffix}
              </span>
              <span className="text-white/60 text-sm font-medium mt-2">
                {lang === 'ar' ? stat.labelAr : stat.labelEn}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
