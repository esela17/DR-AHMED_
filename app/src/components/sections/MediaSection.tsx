import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import SectionBadge from '@/components/shared/SectionBadge';
import { Play, Youtube, Tv, ExternalLink, Facebook, Video } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface VideoItem {
  id: number;
  platform: 'youtube' | 'facebook';
  embedUrl?: string;
  externalUrl: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  icon: React.ReactNode;
  aspectRatio: string;
}

const videoList: VideoItem[] = [
  {
    id: 1,
    platform: 'youtube',
    embedUrl: 'https://www.youtube.com/embed/4DkL80FOx4E',
    externalUrl: 'https://www.youtube.com/watch?v=4DkL80FOx4E',
    titleAr: 'لقاء طبي عن أمراض الشبكية والحقن',
    titleEn: 'Medical Interview: Retina & Injections',
    descAr: 'لقاء طبي يشرح فيه الأستاذ الدكتور أحمد عبدالله مهلهل تفصيلياً أمراض الشبكية، حقن الكورتيزون، وعلاج الرشح السكري.',
    descEn: 'Detailed interview explaining retinal diseases, intravitreal corticosteroid injections, and diabetic macular edema.',
    icon: <Tv size={20} className="text-medical-blue" />,
    aspectRatio: 'aspect-video',
  },
  {
    id: 2,
    platform: 'youtube',
    embedUrl: 'https://www.youtube.com/embed/EMpQLV2J_lQ',
    externalUrl: 'https://www.youtube.com/watch?v=EMpQLV2J_lQ',
    titleAr: 'نبذة عن استشاري الشبكية وتصحيح الإبصار',
    titleEn: 'Retinal & Refractive Specialist Promo',
    descAr: 'فيديو قصير (شورتس) للتعريف بالأستاذ الدكتور أحمد عبدالله مهلهل كاستشاري للشبكية وتصحيح الإبصار بالمركز.',
    descEn: 'A short promo clip introducing Prof. Dr. Ahmed Abdullah Mohelhel as a key retinal and refractive consultant.',
    icon: <Play size={20} className="text-warm-gold" />,
    aspectRatio: 'aspect-[9/16] max-w-[280px] mx-auto',
  },
  {
    id: 3,
    platform: 'youtube',
    embedUrl: 'https://www.youtube.com/embed/D4H8t-EzFRs',
    externalUrl: 'https://www.youtube.com/watch?v=D4H8t-EzFRs',
    titleAr: 'فيديو المركز الترويجي العام',
    titleEn: 'General Clinic Center Promo',
    descAr: 'فيديو ترويجي لمركز جراحات العيون والليزك، مسلطاً الضوء على رعاية المرضى وكفاءة الكادر الطبي الاستشاري.',
    descEn: 'Promotional video for the eye surgery and LASIK center featuring Dr. Mohelhel among its expert panel.',
    icon: <Youtube size={20} className="text-red-500" />,
    aspectRatio: 'aspect-video',
  },
  {
    id: 4,
    platform: 'facebook',
    externalUrl: 'https://www.facebook.com/share/1SbWrQe5ps/?mibextid=wwXIfr',
    titleAr: 'نصائح وشروحات طبية عن صحة العيون والشبكية',
    titleEn: 'Educational Video on Retina & Eye Health',
    descAr: 'شروحات ونصائح طبية هامة من الصفحة الرسمية للأستاذ الدكتور أحمد عبدالله مهلهل على فيسبوك، تتناول الوقاية من أمراض الشبكية ومتابعة الفحص الدوري.',
    descEn: 'Important medical explanations and health tips from Prof. Dr. Ahmed Mohelhel official Facebook page regarding eye health and routine check-ups.',
    icon: <Facebook size={18} className="text-[#1877F2]" />,
    aspectRatio: 'aspect-video',
  },
  {
    id: 5,
    platform: 'facebook',
    externalUrl: 'https://www.facebook.com/share/v/1BLkNmieZ8/?mibextid=wwXIfr',
    titleAr: 'تقنيات علاج أمراض العيون ومتابعة الحالات الجراحية',
    titleEn: 'Eye Surgical Treatments & Patient Follow-up',
    descAr: 'مقطع فيديو تثقيفي ومقابلة طبية يسلط فيها الدكتور أحمد مهلهل الضوء على أحدث تقنيات علاج وجراحات العيون وكيفية المتابعة لضمان أفضل النتائج للمرضى.',
    descEn: 'An informative medical video clip highlighting modern techniques for treating eye diseases, surgeries, and ensuring optimal patient recovery.',
    icon: <Facebook size={18} className="text-[#1877F2]" />,
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
              className="video-card group bg-white rounded-2xl border border-divider/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] overflow-hidden transition-all duration-300 hover:shadow-[0_16px_45px_rgba(24,119,242,0.12)] hover:-translate-y-1.5 flex flex-col h-full"
            >
              {/* Thumbnail Container */}
              <div className={`${video.aspectRatio} bg-deep-navy relative shrink-0 overflow-hidden flex items-center justify-center`}>
                {video.platform === 'youtube' && video.embedUrl ? (
                  <iframe
                    src={video.embedUrl}
                    title={lang === 'ar' ? video.titleAr : video.titleEn}
                    className="w-full h-full border-0 absolute inset-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                ) : (
                  /* Custom Facebook Interactive Video Preview Box */
                  <a
                    href={video.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full absolute inset-0 flex flex-col items-center justify-between p-5 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#1877F2]/60 text-white group-hover:to-[#1877F2]/80 transition-all duration-500 cursor-pointer overflow-hidden"
                  >
                    {/* Top Badge */}
                    <div className="w-full flex items-center justify-between z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1877F2] text-white text-xs font-bold shadow-md tracking-wide">
                        <Facebook size={13} className="fill-white" />
                        <span>{lang === 'ar' ? 'فيديو فيسبوك' : 'Facebook Video'}</span>
                      </span>
                      <span className="text-white/70 text-xs flex items-center gap-1">
                        <Video size={13} />
                        <span>{lang === 'ar' ? 'الصفحة الرسمية' : 'Official Page'}</span>
                      </span>
                    </div>

                    {/* Center Play Button with Glow */}
                    <div className="flex flex-col items-center justify-center my-auto z-10">
                      <div className="w-16 h-16 rounded-full bg-[#1877F2] group-hover:scale-110 group-hover:bg-[#166FE5] text-white flex items-center justify-center shadow-[0_0_30px_rgba(24,119,242,0.6)] transition-all duration-300">
                        <Play size={28} className="fill-white ml-0.5" />
                      </div>
                      <span className="mt-3 text-sm font-semibold text-white/90 group-hover:text-white transition-colors">
                        {lang === 'ar' ? 'انقر للمشاهدة مباشرة على فيسبوك' : 'Click to watch on Facebook'}
                      </span>
                    </div>

                    {/* Bottom Decorative Bar */}
                    <div className="w-full pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/70 z-10">
                      <span className="truncate max-w-[80%] font-medium">
                        {lang === 'ar' ? 'د. أحمد عبدالله مهلهل' : 'Dr. Ahmed Abdullah Mohelhel'}
                      </span>
                      <ExternalLink size={13} className="shrink-0 text-[#1877F2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>

                    {/* Background Glow Effect */}
                    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#1877F2]/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />
                  </a>
                )}
              </div>

              {/* Details */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                      video.platform === 'facebook' ? 'bg-[#1877F2]/10 text-[#1877F2]' : 'bg-soft-blue/40'
                    }`}>
                      {video.icon}
                    </div>
                    <h3 className={`${fontClass} text-base md:text-lg font-bold text-deep-navy leading-snug group-hover:text-medical-blue transition-colors`}>
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
                    className={`mt-3 inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-bold text-xs md:text-sm transition-all duration-300 shadow-sm ${
                      video.platform === 'facebook'
                        ? 'bg-[#1877F2] hover:bg-[#166FE5] text-white shadow-[#1877F2]/20 hover:shadow-md hover:shadow-[#1877F2]/30'
                        : 'bg-soft-blue/60 hover:bg-soft-blue text-medical-blue'
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      {video.platform === 'facebook' && <Facebook size={16} className="fill-white" />}
                      <span>
                        {lang === 'ar'
                          ? (video.platform === 'facebook' ? 'مشاهدة الفيديو على فيسبوك' : 'مشاهدة مباشرة')
                          : (video.platform === 'facebook' ? 'Watch on Facebook' : 'Watch Directly')}
                      </span>
                    </span>
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
