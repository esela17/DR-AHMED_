import { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import SectionBadge from '@/components/shared/SectionBadge';
import { Play, Youtube, Tv, Share2, ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const videoList = [
  {
    id: 1,
    embedUrl: 'https://www.youtube.com/embed/4DkL80FOx4E',
    externalUrl: 'https://www.youtube.com/watch?v=4DkL80FOx4E',
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
    externalUrl: 'https://www.youtube.com/watch?v=EMpQLV2J_lQ',
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
    externalUrl: 'https://www.youtube.com/watch?v=D4H8t-EzFRs',
    titleAr: 'فيديو المركز الترويجي العام',
    titleEn: 'General Clinic Center Promo',
    descAr: 'فيديو ترويجي لمركز جراحات العيون والليزك، مسلطاً الضوء على رعاية المرضى وكفاءة الكادر الطبي الاستشاري.',
    descEn: 'Promotional video for the eye surgery and LASIK center featuring Dr. Mohelhel among its expert panel.',
    icon: <Youtube size={20} className="text-red-500" />,
    aspectRatio: 'aspect-video', // 16:9
  },
  {
    id: 4,
    embedUrl: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1SbWrQe5ps%2F&show_text=0',
    externalUrl: 'https://www.facebook.com/share/1SbWrQe5ps/?mibextid=wwXIfr',
    titleAr: 'لقاء وفيديو توضيحي من صفحة فيسبوك (١)',
    titleEn: 'Educational Video from Official Facebook (1)',
    descAr: 'شاهد الشروحات والنصائح الطبية الهامة من صفحة الأستاذ الدكتور أحمد عبدالله مهلهل الرسمية على فيسبوك حول صحة العيون والشبكية.',
    descEn: 'Watch important medical explanations and health tips from Prof. Dr. Ahmed Abdullah Mohelhel official Facebook page regarding eye health.',
    icon: <Share2 size={18} className="text-[#1877F2]" />,
    aspectRatio: 'aspect-video',
  },
  {
    id: 5,
    embedUrl: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F1BLkNmieZ8%2F&show_text=0',
    externalUrl: 'https://www.facebook.com/share/v/1BLkNmieZ8/?mibextid=wwXIfr',
    titleAr: 'لقاء وفيديو توضيحي من صفحة فيسبوك (٢)',
    titleEn: 'Educational Video from Official Facebook (2)',
    descAr: 'مقطع فيديو طبي وتثقيفي من حساب الدكتور على فيسبوك يسلط الضوء على تقنيات علاج أمراض وجراحات العيون ومتابعة الحالات.',
    descEn: 'An informative medical video clip from Dr. Mohelhel Facebook account highlighting techniques for treating eye diseases and patient follow-up.',
    icon: <Share2 size={18} className="text-[#1877F2]" />,
    aspectRatio: 'aspect-video',
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
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const fontClass = lang === 'ar' ? 'font-arabic' : 'font-sans';

  return (
    <section ref={sectionRef} id="media" className="py-24 bg-soft-blue/30 relative">
      <div className="content-container">
        {/* Section Header */}
        <div className="media-header max-w-2xl mx-auto text-center mb-16">
          <SectionBadge label={t('media.badge', lang)} />
          <h2 className={`${fontClass} text-3xl md:text-4xl lg:text-5xl font-bold text-deep-navy tracking-tight mb-4`}>
            {t('media.headline', lang)}
          </h2>
          <p className="text-slate-custom text-base md:text-lg leading-relaxed">
            {t('media.desc', lang)}
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {videoList.map((video) => (
            <div
              key={video.id}
              className="video-card bg-white rounded-2xl border border-divider/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(7,26,43,0.08)] hover:-translate-y-1 flex flex-col h-full"
            >
              {/* Iframe Container */}
              <div className={`${video.aspectRatio} bg-black relative shrink-0 overflow-hidden flex items-center justify-center`}>
                <iframe
                  src={video.embedUrl}
                  title={lang === 'ar' ? video.titleAr : video.titleEn}
                  className="w-full h-full border-0 absolute inset-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              {/* Details */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-soft-blue/40 flex items-center justify-center shrink-0">
                      {video.icon}
                    </div>
                    <h3 className={`${fontClass} text-base md:text-lg font-bold text-deep-navy leading-snug`}>
                      {lang === 'ar' ? video.titleAr : video.titleEn}
                    </h3>
                  </div>
                  <p className="text-slate-custom text-sm leading-relaxed mb-4">
                    {lang === 'ar' ? video.descAr : video.descEn}
                  </p>
                </div>
                {video.externalUrl && (
                  <a
                    href={video.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-soft-blue/60 hover:bg-soft-blue text-medical-blue font-semibold text-xs md:text-sm transition-all duration-300"
                  >
                    <span>{lang === 'ar' ? 'مشاهدة مباشرة' : 'Watch Directly'}</span>
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
