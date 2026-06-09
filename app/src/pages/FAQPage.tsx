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
    qAr: 'ما هي مدة الكشف الطبي بالعيادة وماذا يتضمن؟',
    qEn: 'How long does the medical exam take and what does it include?',
    aAr: 'يستغرق الكشف الطبي الكامل والدقيق من 10 إلى 15 دقيقة. يتضمن قياس ضغط العين الوقائي، فحص حدة الإبصار وتحديد عيوب الانكسار، فحص الجزء الأمامي للعين بمجهر المصباح الشقي، وفحص قاع العين المباشر والشبكية والاطمئنان على العصب البصري والجسم الزجاجي.',
    aEn: 'The comprehensive medical exam takes between 10 to 15 minutes. It includes preventive intraocular pressure checking, visual acuity and refraction measurements, slit-lamp examination of the anterior segment, and direct dilated fundus retinal check to inspect the optic nerve and vitreous humor.'
  },
  {
    id: 2,
    qAr: 'هل عمليات تصحيح الإبصار بالليزر (الليزك) مؤلمة؟',
    qEn: 'Are laser vision correction surgeries (LASIK) painful?',
    aAr: 'العمليات غير مؤلمة تماماً بفضل استخدام قطرات التخدير الموضعي. قد يشعر المريض بضغط بسيط جداً لدقائق معدودة أثناء العملية. فترة التعافي سريعة جداً حيث تظهر النتائج ويتحسن الإبصار خلال أول 24 ساعة.',
    aEn: 'The procedures are entirely painless due to the use of local drop anesthesia. The patient might feel a slight pressure for a couple of minutes during the procedure. Recovery is highly accelerated, and patients experience sharp vision within 24 hours.'
  },
  {
    id: 3,
    qAr: 'ما هي طرق الدفع المعتمدة للحجوزات والعمليات؟',
    qEn: 'What are the approved payment methods for booking and surgeries?',
    aAr: 'تسهيلاً لإجراءات العمل الإدارية بالعيادة، يتم دفع رسوم الكشف الطبي والمتابعات نقداً (Cash) فقط بالعيادة. للعمليات الجراحية الكبرى، يرجى التنسيق المسبق مع إدارة الفرع.',
    aEn: 'To simplify administrative workflows in the clinics, medical examination and follow-up fees are payable in cash only at the clinic. For major surgeries, please coordinate in advance with the branch administration.'
  },
  {
    id: 4,
    qAr: 'هل عيادات أ.د. أحمد عبدالله مهلهل مجهزة لاستقبال كبار السن وذوي الاحتياجات الخاصة؟',
    qEn: 'Are Prof. Ahmed Mohelhel clinics accessible for seniors and disabled patients?',
    aAr: 'نعم بالتأكيد. تتوفر عياداتنا على مصاعد كهربائية مجهزة بالكامل وممرات ملائمة لتسهيل حركة كبار السن ومرضى جراحات العيون وضمان وصولهم الآمن والدخول والخروج بيسر دون مشقة.',
    aEn: 'Yes, absolutely. Our clinics are located in modern towers equipped with elevators and spacious entry paths to facilitate easy and comfortable access for elderly patients and those recovering from ophthalmic operations.'
  },
  {
    id: 5,
    qAr: 'كيف يمكنني تأكيد أو تعديل موعد الحجز الخاص بي؟',
    qEn: 'How can I confirm or modify my appointment slot?',
    aAr: 'بعد إرسال نموذج الحجز الإلكتروني عبر الموقع، سيقوم الفريق الطبي بالتواصل معك لتأكيد الموعد وإرسال تفاصيل الحجز وتنبيهات التذكير عبر الواتساب. يمكنك التواصل مباشرة لمراجعة الحجوزات أو الاستفسار عبر رقم الواتساب المخصص: 01110505253.',
    aEn: 'Upon submitting the online booking form, our medical staff will contact you to confirm the exact slot and send confirmation alerts and reminders via WhatsApp. You can coordinate or ask questions directly on the designated WhatsApp line: 01110505253.'
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
