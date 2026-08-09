import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { t } from '@/data/translations';
import { Link } from 'react-router-dom';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import gsap from 'gsap';

const faqs = [
  {
    id: 1,
    qAr: 'مين أحسن دكتور عيون لعملية الليزك؟',
    qEn: 'Who is the best eye doctor for LASIK?',
    aAr: 'يعتبر أ.د. أحمد عبدالله مهلهل من أفضل أطباء العيون لعمليات الليزك، فهو أستاذ طب وجراحة العيون بقصر العيني وخبير في تصحيح الإبصار بالليزر والفيمتو ليزك بخبرة تتجاوز 27 عاماً بالفيوم والدقي.',
    aEn: 'Prof. Dr. Ahmed Abdullah Mohelhel is considered one of the best eye doctors for LASIK. He is a professor at Kasr Al-Ainy with over 27 years of experience in laser vision correction in Fayoum and Dokki.'
  },
  {
    id: 2,
    qAr: 'إمتى أحتاج أعمل عملية مياه بيضاء؟',
    qEn: 'When do I need cataract surgery?',
    aAr: 'تحتاج لعملية مياه بيضاء عندما تؤثر ضبابية الرؤية وزغللة العين على أنشطتك اليومية مثل القراءة أو القيادة، ويتم التدخل بأحدث تقنيات الفاكو واليزر لضمان أفضل نتيجة بأمان.',
    aEn: 'You need cataract surgery when blurry vision affects your daily activities like reading or driving. It is performed safely using advanced Phaco and laser techniques.'
  },
  {
    id: 3,
    qAr: 'هل عملية الليزك بتوجع؟',
    qEn: 'Is LASIK surgery painful?',
    aAr: 'العملية غير مؤلمة تماماً بفضل استخدام قطرات التخدير الموضعي. قد تشعر بضغط بسيط جداً لثوانٍ معدودة أثناء العملية. التعافي سريع وتتحسن الرؤية خلال أول 24 ساعة.',
    aEn: 'The procedure is entirely painless due to the use of local anesthetic drops. You might feel a slight pressure for a few seconds. Recovery is fast, with improved vision within 24 hours.'
  },
  {
    id: 4,
    qAr: 'إيه الفرق بين الفيمتو ليزك والليزك العادي؟',
    qEn: 'What is the difference between Femto-LASIK and regular LASIK?',
    aAr: 'في الفيمتو ليزك يتم استخدام ليزر دقيق جداً (الفيمتو ثانية) لرفع قشرة القرنية بدلاً من المشرط الدقيق المستخدم في الليزك العادي، مما يجعله أكثر أماناً، أسرع في التعافي، وأقل ألماً، ويصلح لدرجات ضعف النظر الأكبر.',
    aEn: 'In Femto-LASIK, a highly precise femtosecond laser is used to create the corneal flap instead of the microkeratome blade used in regular LASIK, making it safer, faster to heal, and suitable for higher prescriptions.'
  },
  {
    id: 5,
    qAr: 'إزاي أحجز كشف عيون أونلاين؟',
    qEn: 'How can I book an eye exam online?',
    aAr: 'يمكنك بسهولة حجز موعد دكتور عيون عبر موقعنا عن طريق إرسال نموذج الحجز الإلكتروني أو بالاتصال على رقم دكتور عيون العيادة 01110505253 (مكالمة أو واتساب) لتحديد أقرب موعد.',
    aEn: 'You can easily book an eye exam through our website by submitting the online booking form or calling the clinic directly at 01110505253 to schedule your appointment.'
  },
  {
    id: 6,
    qAr: 'ما هي مدة الكشف الطبي بالعيادة وماذا يتضمن؟',
    qEn: 'How long does the medical exam take and what does it include?',
    aAr: 'يستغرق الكشف الطبي الكامل والدقيق من 10 إلى 15 دقيقة. يتضمن قياس ضغط العين الوقائي، فحص حدة الإبصار وتحديد عيوب الانكسار، فحص الجزء الأمامي للعين، وفحص قاع العين المباشر والشبكية.',
    aEn: 'The comprehensive medical exam takes between 10 to 15 minutes. It includes preventive intraocular pressure checking, visual acuity and refraction measurements, anterior segment examination, and direct dilated fundus check.'
  }
];

export default function FAQPage() {
  const { lang } = useLanguage();
  const pageRef = useRef<HTMLDivElement>(null);
  const [openId, setOpenId] = useState<number | null>(null);

  useSEO({
    title: lang === 'ar'
      ? 'الأسئلة الشائعة وإرشادات المرضى | أ.د. أحمد عبدالله مهلهل'
      : 'Frequently Asked Questions | Prof. Dr. Ahmed Abdullah Mohelhel',
    description: lang === 'ar'
      ? 'إجابات شاملة ومفصلة عن الأسئلة الشائعة حول الكشف، الليزك، عمليات الشبكية، الفروع وطرق الحجز في عيادات أ.د. أحمد عبدالله مهلهل.'
      : 'Comprehensive answers to common questions about vision correction, retina, cataracts, branches, and booking at Prof. Dr. Ahmed Abdullah Mohelhel clinics.',
    keywords: lang === 'ar'
      ? 'اسئلة واجوبة ليزك, كشف عيون الدقي, كشف عيون الفيوم, اسعار كشف المياه البيضاء, حجز عيادة عيون'
      : 'LASIK FAQ, Dokki eye exam, Fayoum ophthalmologist, cataract surgery cost, book eye doctor Cairo',
    path: '/faq',
    lang
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.faq-header > *', { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
      });
      gsap.fromTo('.faq-item', { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 0.3, ease: 'power3.out',
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const toggleFaq = (id: number) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  const fontClass = lang === 'ar' ? 'font-cairo' : 'font-outfit';

  return (
    <div ref={pageRef} className="min-h-screen bg-[#F8FAFC]">
      {/* FAQ JSON-LD Schema for Google Rich Results */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.qAr,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.aAr
          }
        }))
      })}} />
      {/* Page Header */}
      <div className="pt-28 pb-10 bg-white border-b border-divider/50">
        <div className="content-container">
          <div className="faq-header">
            <p className="text-slate-custom text-xs mb-3">
              <Link to="/" className="hover:text-medical-blue transition-colors">{t('nav.home', lang)}</Link>
              {' / '}
              <span className="text-deep-navy font-medium">{lang === 'ar' ? 'الأسئلة الشائعة' : 'FAQ'}</span>
            </p>
            <h1 className={`${fontClass} text-2xl md:text-4xl font-bold text-deep-navy mb-3 flex items-center gap-2`}>
              <HelpCircle className="text-medical-blue" size={28} />
              {lang === 'ar' ? 'الأسئلة الشائعة وإرشادات المرضى' : 'Frequently Asked Questions'}
            </h1>
            <p className="text-slate-custom text-base max-w-[650px] mb-0">
              {lang === 'ar'
                ? 'إجابات على كافة استفساراتكم المتكررة لمساعدتكم قبل زيارة العيادة أو إجراء العمليات.'
                : 'Clear answers to help you understand what to expect before visiting the clinic or going through a surgery.'}
            </p>
          </div>
        </div>
      </div>

      {/* Accordion Content */}
      <div className="content-container py-16 max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="faq-item bg-white border border-divider/60 rounded-2xl overflow-hidden transition-all duration-300 hover:border-medical-blue/30 shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-right focus:outline-none"
                >
                  <span className={`${fontClass} text-sm md:text-base font-bold text-deep-navy leading-snug`}>
                    {lang === 'ar' ? faq.qAr : faq.qEn}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-custom shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-medical-blue' : ''}`}
                  />
                </button>
                
                {/* Expandable answer panel */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[500px] border-t border-divider/40 bg-soft-blue/20' : 'max-h-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 py-5 text-xs md:text-sm text-slate-custom leading-relaxed">
                    {lang === 'ar' ? faq.aAr : faq.aEn}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 bg-white border border-divider/60 rounded-3xl p-8 text-center shadow-sm">
          <MessageSquare className="text-warm-gold mx-auto mb-4" size={36} />
          <h3 className={`${fontClass} text-lg font-bold text-deep-navy mb-2`}>
            {lang === 'ar' ? 'هل لديك استفسار آخر؟' : 'Still Have Questions?'}
          </h3>
          <p className="text-slate-custom text-xs md:text-sm max-w-md mx-auto mb-6">
            {lang === 'ar'
              ? 'تواصل معنا مباشرة عبر الواتساب وسيقوم أحد أعضاء فريقنا الطبي بالإجابة عليك فوراً.'
              : 'Contact our medical staff directly on WhatsApp and we will get back to you immediately.'}
          </p>
          <a
            href="https://wa.me/201110505253"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-trust-green text-white text-sm font-semibold rounded-xl hover:brightness-110 transition-all shadow-md"
          >
            {lang === 'ar' ? 'استشيرنا عبر واتساب' : 'Consult via WhatsApp'}
          </a>
        </div>
      </div>
    </div>
  );
}
