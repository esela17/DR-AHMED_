import { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import SectionBadge from '@/components/shared/SectionBadge';
import { Play, Youtube, Tv } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const videoList = [
  {
    id: 1,
    embedUrl: 'https://www.youtube.com/embed/4DkL80FOx4E',
    titleAr: 'لقاء طبي عن أمراض الشبكية والحقن',
    titleEn: 'Medical Interview: Retina & Injections',
    descAr: 'لقاء طبي يشرح فيه الأستاذ الدكتور أحمد عبدالله مهلهل تفصيلياً أمراض الشبكية، حقن الكورتيزون، وعلاج الرشح السكري.',
    descEn: 'Detailed interview explaining retinal diseases, intravitreal corticosteroid injections, and diabetic macular edema.',
    icon: <Tv size={20} className="text-medical-blue" />,
    aspectRatio: 'aspect-video', // 16:9
  },
  {
    id: 2,
    embedUrl: 'https://www.youtube.com/embed/EMpQLV2J_lQ',
    titleAr: 'نبذة عن استشاري الشبكية وتصحيح الإبصار',
    titleEn: 'Retinal & Refractive Specialist Promo',
    descAr: 'فيديو قصير (شورتس) للتعريف بالأستاذ الدكتور أحمد عبدالله مهلهل كاستشاري للشبكية وتصحيح الإبصار بالمركز.',
    descEn: 'A short promo clip introducing Prof. Dr. Ahmed Abdullah Mohelhel as a key retinal and refractive consultant.',
    icon: <Play size={20} className="text-warm-gold" />,
    aspectRatio: 'aspect-[9/16] max-w-[280px] mx-auto', // Shorts aspect ratio (vertical)
  },
  {
    id: 3,
    embedUrl: 'https://www.youtube.com/embed/D4H8t-EzFRs',
    titleAr: 'فيديو المركز الترويجي العام',
    titleEn: 'General Clinic Center Promo',
    descAr: 'فيديو ترويجي لمركز جراحات العيون والليزك، مسلطاً الضوء على رعاية المرضى وكفاءة الكادر الطبي الاستشاري.',
    descEn: 'Promotional video for the eye surgery and LASIK center featuring Dr. Mohelhel among its expert panel.',
    icon: <Youtube size={20} className="text-red-500" />,
    aspectRatio: 'aspect-video', // 16:9
  },
];

export default function MediaSection() {
  const { lang } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.media-header > *', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      });
      gsap.fromTo('.video-card', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const fontClass = lang === 'ar' ? 'font-cairo' : 'font-outfit';

  return (
    <section id="media" ref={sectionRef} className="py-20 lg:py-32 bg-[#F7F9FC] relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-medical-blue/[0.03] blur-3xl pointer-events-none" />

      <div className="content-container relative z-10">
        {/* Header */}
        <div className="media-header text-center mb-16">
          <SectionBadge label={t('media.badge', lang)} />
          <h2 className={`${fontClass} text-2xl md:text-4xl lg:text-[44px] font-bold text-deep-navy leading-tight mb-4`}>
            {t('media.headline', lang)}
          </h2>
          <p className="text-slate-custom text-base max-w-[600px] mx-auto">
            {t('media.subtitle', lang)}
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {videoList.map((video) => (
            <div
              key={video.id}
              className="video-card bg-white rounded-2xl border border-divider/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(7,26,43,0.08)] hover:-translate-y-1 flex flex-col h-full"
            >
              {/* Iframe Container */}
              <div className={`${video.aspectRatio} bg-black relative shrink-0 overflow-hidden`}>
                <iframe
                  src={video.embedUrl}
                  title={lang === 'ar' ? video.titleAr : video.titleEn}
                  className="w-full h-full border-0 absolute inset-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              {/* Details */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-soft-blue/40 flex items-center justify-center">
                    {video.icon}
                  </div>
                  <h3 className={`${fontClass} text-base md:text-lg font-bold text-deep-navy leading-snug`}>
                    {lang === 'ar' ? video.titleAr : video.titleEn}
                  </h3>
                </div>
                <p className="text-slate-custom text-sm leading-relaxed mb-0">
                  {lang === 'ar' ? video.descAr : video.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
