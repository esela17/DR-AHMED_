import { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { Link } from 'react-router-dom';
import { Award, Users, Star, CheckCircle2, GraduationCap, Building2, MapPin } from 'lucide-react';
import gsap from 'gsap';

const credentials = [
  {
    icon: GraduationCap,
    titleAr: 'بكالوريوس طب وجراحة - جامعة القاهرة',
    titleEn: 'Bachelor of Medicine & Surgery - Cairo University',
    yearAr: 'قصر العيني',
    yearEn: 'Kasr Al-Ainy Faculty of Medicine',
  },
  {
    icon: GraduationCap,
    titleAr: 'ماجستير طب وجراحة العيون - جامعة القاهرة',
    titleEn: 'Master\'s Degree in Ophthalmology - Cairo University',
    yearAr: 'قصر العيني',
    yearEn: 'Kasr Al-Ainy',
  },
  {
    icon: GraduationCap,
    titleAr: 'دكتوراه طب وجراحة العيون - جامعة القاهرة',
    titleEn: 'PhD in Ophthalmology - Cairo University',
    yearAr: 'قصر العيني',
    yearEn: 'Kasr Al-Ainy',
  },
  {
    icon: Award,
    titleAr: 'أستاذ طب وجراحة العيون - جامعة القاهرة',
    titleEn: 'Professor of Ophthalmology - Cairo University',
    yearAr: 'قسم طب وجراحة العيون - قصر العيني',
    yearEn: 'Department of Ophthalmology - Kasr Al-Ainy',
  },
];

const specialties = [
  { ar: 'جراحة الشبكية والجسم الزجاجي (Vitreoretinal Surgery)', en: 'Vitreoretinal Surgery' },
  { ar: 'جراحة المياه البيضاء بتقنية الفاكو وزراعة العدسات', en: 'Phaco Cataract Surgery & IOL Implantation' },
  { ar: 'تصحيح الإبصار بالليزر (الليزك / الفيمتو ليزك / سمايل)', en: 'LASIK / Femto-LASIK / SMILE Vision Correction' },
  { ar: 'علاج اعتلال الشبكية السكري والحقن داخل العين', en: 'Diabetic Retinopathy & Intravitreal Injections' },
  { ar: 'علاج الضمور البقعي السني (AMD)', en: 'Age-related Macular Degeneration (AMD)' },
  { ar: 'جراحة القرنية وعلاج القرنية المخروطية', en: 'Corneal Surgery & Keratoconus Treatment' },
  { ar: 'جراحة الجلوكوما وزراعة صمامات تصريف ضغط العين', en: 'Glaucoma Surgery & Drainage Implants' },
];

const societies = [
  { ar: 'الجمعية المصرية لطب العيون', en: 'Egyptian Ophthalmological Society' },
  { ar: 'الجمعية العربية لطب العيون', en: 'Arab Ophthalmological Society' },
  { ar: 'عضو هيئة التدريس - كلية الطب جامعة القاهرة', en: 'Faculty Member - Cairo University Faculty of Medicine' },
];

const stats = [
  { value: '27+', labelAr: 'سنة خبرة', labelEn: 'Years Experience' },
  { value: '10,000+', labelAr: 'عملية ناجحة', labelEn: 'Successful Operations' },
  { value: '3', labelAr: 'عيادات متخصصة', labelEn: 'Specialized Clinics' },
  { value: '100%', labelAr: 'التزام بالمريض', labelEn: 'Patient Commitment' },
];

export default function AboutPage() {
  const { lang } = useLanguage();
  const pageRef = useRef<HTMLDivElement>(null);

  useSEO({
    title: lang === 'ar'
      ? 'نبذة عن أ.د. أحمد مهلهل | أستاذ طب وجراحة العيون - قصر العيني'
      : 'About Prof. Dr. Ahmed Mohelhel | Ophthalmology Professor - Kasr Al-Ainy',
    description: lang === 'ar'
      ? 'أ.د. أحمد عبدالله مهلهل - أستاذ طب وجراحة العيون بجامعة القاهرة (قصر العيني) بخبرة 27+ عاماً. متخصص في جراحة الشبكية والجسم الزجاجي والمياه البيضاء وتصحيح الإبصار بالليزر. أجرى أكثر من 10,000 عملية ناجحة.'
      : 'Prof. Dr. Ahmed Abdullah Mohelhel - Ophthalmology Professor at Cairo University (Kasr Al-Ainy) with 27+ years of experience. Specialist in vitreoretinal surgery, cataract, and LASIK. Over 10,000 successful procedures.',
    keywords: lang === 'ar'
      ? 'أحمد عبدالله مهلهل, أستاذ طب العيون, قصر العيني, جامعة القاهرة, جراح شبكية, طبيب عيون الدقي'
      : 'Ahmed Mohelhel, ophthalmology professor, Kasr Al-Ainy, Cairo University, retina surgeon',
    path: '/about',
    lang,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-hero > *',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power2.out', delay: 0.2 }
      );
      gsap.fromTo('.stat-card',
        { y: 20, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.7)', delay: 0.5 }
      );
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const fontClass = lang === 'ar' ? 'font-cairo' : 'font-outfit';

  return (
    <div ref={pageRef} className="min-h-screen bg-[#F7F9FC]">
      {/* Physician JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Physician",
        "name": "أ.د. أحمد عبدالله مهلهل",
        "alternateName": "Prof. Dr. Ahmed Abdullah Mohelhel",
        "jobTitle": "أستاذ طب وجراحة العيون",
        "description": "أستاذ طب وجراحة العيون بجامعة القاهرة (قصر العيني) واستشاري جراحات الشبكية والمياه البيضاء وتصحيح الإبصار",
        "medicalSpecialty": "Ophthalmology",
        "image": "https://dr-ahmedmehalhel.com/images/doctor-portrait.png",
        "url": "https://dr-ahmedmehalhel.com/about",
        "telephone": "+201110505253",
        "yearsOfExperience": "27",
        "hasCredential": [
          { "@type": "EducationalOccupationalCredential", "credentialCategory": "Bachelor", "recognizedBy": { "@type": "EducationalOrganization", "name": "جامعة القاهرة - قصر العيني" } },
          { "@type": "EducationalOccupationalCredential", "credentialCategory": "Master", "recognizedBy": { "@type": "EducationalOrganization", "name": "جامعة القاهرة - قصر العيني" } },
          { "@type": "EducationalOccupationalCredential", "credentialCategory": "PhD", "recognizedBy": { "@type": "EducationalOrganization", "name": "جامعة القاهرة - قصر العيني" } },
          { "@type": "EducationalOccupationalCredential", "credentialCategory": "Professor", "recognizedBy": { "@type": "EducationalOrganization", "name": "جامعة القاهرة - قصر العيني" } }
        ],
        "alumniOf": { "@type": "EducationalOrganization", "name": "جامعة القاهرة - كلية الطب (قصر العيني)" },
        "worksFor": { "@type": "EducationalOrganization", "name": "جامعة القاهرة - قصر العيني" },
        "memberOf": [
          { "@type": "MedicalOrganization", "name": "الجمعية المصرية لطب العيون" },
          { "@type": "MedicalOrganization", "name": "الجمعية العربية لطب العيون" }
        ],
        "address": { "@type": "PostalAddress", "streetAddress": "برج الإخلاص للأطباء، 96 أ شارع التحرير، الدقي", "addressLocality": "الجيزة", "addressCountry": "EG" }
      })}} />

      {/* Hero */}
      <div className="bg-deep-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-medical-blue rounded-full blur-3xl translate-x-1/3 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-warm-gold rounded-full blur-3xl -translate-x-1/3 translate-y-1/2" />
        </div>
        <div className="content-container relative z-10">
          <div className="about-hero max-w-5xl mx-auto">
            <p className="text-soft-blue text-sm mb-4 text-center">
              <Link to="/" className="hover:text-white transition-colors">{lang === 'ar' ? 'الرئيسية' : 'Home'}</Link>
              {' / '}
              <span className="text-white font-medium">{lang === 'ar' ? 'نبذة عن الطبيب' : 'About the Doctor'}</span>
            </p>

            <div className="flex flex-col lg:flex-row items-center gap-12 mt-6">
              {/* Doctor Image */}
              <div className="shrink-0">
                <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border-4 border-warm-gold/30 shadow-2xl shadow-black/40">
                  <img
                    src="/images/doctor-portrait.png"
                    alt="أ.د. أحمد عبدالله مهلهل - أستاذ طب وجراحة العيون"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Intro Text */}
              <div className="text-center lg:text-start">
                <h1 className={`${fontClass} text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight`}>
                  {lang === 'ar' ? 'أ.د. أحمد عبدالله مهلهل' : 'Prof. Dr. Ahmed Abdullah Mohelhel'}
                </h1>
                <p className="text-warm-gold font-semibold text-lg mb-4">
                  {lang === 'ar'
                    ? 'أستاذ طب وجراحة العيون - جامعة القاهرة (قصر العيني)'
                    : 'Professor of Ophthalmology - Cairo University (Kasr Al-Ainy)'}
                </p>
                <p className="text-soft-blue/90 text-base leading-relaxed max-w-2xl">
                  {lang === 'ar'
                    ? 'بخبرة تمتد لأكثر من 27 عاماً في ميدان طب وجراحة العيون، يُعدّ الأستاذ الدكتور أحمد عبدالله مهلهل واحداً من أبرز أساتذة وجراحي العيون في مصر والمنطقة العربية، متخصصاً في جراحات الشبكية والجسم الزجاجي، والمياه البيضاء بالفاكو، وتصحيح الإبصار بأحدث تقنيات الليزر.'
                    : 'With over 27 years of experience in ophthalmology, Prof. Dr. Ahmed Abdullah Mohelhel is one of the most distinguished eye surgeons in Egypt, specializing in vitreoretinal surgery, phaco cataract surgery, and laser vision correction.'}
                </p>
                <div className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start">
                  <a href="https://wa.me/201110505253" target="_blank" rel="noopener noreferrer"
                    className="bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1ebe5d] transition-all hover:scale-105 shadow-lg">
                    {lang === 'ar' ? '📞 احجز موعد الآن' : '📞 Book Now'}
                  </a>
                  <Link to="/#services"
                    className="border border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all">
                    {lang === 'ar' ? 'استعرض الخدمات' : 'View Services'}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-medical-blue py-10">
        <div className="content-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="stat-card text-center text-white">
                <div className={`${fontClass} text-4xl font-bold text-warm-gold mb-1`}>{stat.value}</div>
                <div className="text-soft-blue/90 text-sm">{lang === 'ar' ? stat.labelAr : stat.labelEn}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="content-container py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Credentials */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className={`${fontClass} text-2xl md:text-3xl font-bold text-deep-navy mb-6 flex items-center gap-3`}>
                <GraduationCap className="text-medical-blue w-7 h-7" />
                {lang === 'ar' ? 'المؤهلات والدرجات العلمية' : 'Qualifications & Academic Degrees'}
              </h2>
              <div className="space-y-4">
                {credentials.map((cred, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-slate-200/60">
                    <div className="w-10 h-10 bg-soft-blue rounded-full flex items-center justify-center shrink-0">
                      <cred.icon className="w-5 h-5 text-medical-blue" />
                    </div>
                    <div>
                      <p className={`${fontClass} font-bold text-deep-navy`}>{lang === 'ar' ? cred.titleAr : cred.titleEn}</p>
                      <p className="text-slate-custom text-sm mt-1">{lang === 'ar' ? cred.yearAr : cred.yearEn}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialties */}
            <div>
              <h2 className={`${fontClass} text-2xl md:text-3xl font-bold text-deep-navy mb-6 flex items-center gap-3`}>
                <Star className="text-warm-gold w-7 h-7" />
                {lang === 'ar' ? 'التخصصات الجراحية' : 'Surgical Specialties'}
              </h2>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/60 space-y-3">
                {specialties.map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-medical-blue shrink-0 mt-0.5" />
                    <span className="text-deep-navy/85">{lang === 'ar' ? s.ar : s.en}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Memberships */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/60">
              <h3 className={`${fontClass} text-lg font-bold text-deep-navy mb-4 flex items-center gap-2`}>
                <Award className="text-warm-gold w-5 h-5" />
                {lang === 'ar' ? 'العضويات والانتماءات' : 'Memberships & Affiliations'}
              </h3>
              <ul className="space-y-3">
                {societies.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-deep-navy/80">
                    <span className="text-medical-blue mt-1">◆</span>
                    {lang === 'ar' ? s.ar : s.en}
                  </li>
                ))}
              </ul>
            </div>

            {/* Clinics */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/60">
              <h3 className={`${fontClass} text-lg font-bold text-deep-navy mb-4 flex items-center gap-2`}>
                <Building2 className="text-medical-blue w-5 h-5" />
                {lang === 'ar' ? 'العيادات والمواقع' : 'Clinics & Locations'}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-warm-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-deep-navy text-sm">{lang === 'ar' ? 'عيادة الدقي' : 'Dokki Clinic'}</p>
                    <p className="text-slate-custom text-xs mt-1">{lang === 'ar' ? 'برج الإخلاص، 96 أ شارع التحرير، الدقي' : 'Ikhlas Tower, 96A El-Tahrir St, Dokki'}</p>
                    <a href="https://wa.me/201110505253" className="text-medical-blue text-xs hover:underline">+201110505253</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-warm-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-deep-navy text-sm">{lang === 'ar' ? 'عيادة الفيوم' : 'Fayoum Clinic'}</p>
                    <p className="text-slate-custom text-xs mt-1">{lang === 'ar' ? 'أمام مستشفى التحرير، مطلع الكوبري العلوي' : 'Opposite El-Tahrir Hospital, Fayoum'}</p>
                    <a href="https://wa.me/201007513010" className="text-medical-blue text-xs hover:underline">+201007513010</a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-soft-blue rounded-xl p-6 border border-medical-blue/20 text-center">
              <Users className="w-10 h-10 text-medical-blue mx-auto mb-3" />
              <p className={`${fontClass} font-bold text-deep-navy mb-2`}>{lang === 'ar' ? 'احجز استشارتك الآن' : 'Book Your Consultation'}</p>
              <p className="text-slate-custom text-sm mb-4">{lang === 'ar' ? 'تشخيص دقيق وأمين مع أ.د. أحمد مهلهل' : 'Accurate diagnosis with Prof. Dr. Ahmed'}</p>
              <a href="https://wa.me/201110505253" target="_blank" rel="noopener noreferrer"
                className="block bg-medical-blue text-white py-3 rounded-full font-semibold hover:bg-medical-blue/90 transition-all hover:scale-105 shadow-lg shadow-medical-blue/20">
                {lang === 'ar' ? 'واتساب - الدقي' : 'WhatsApp - Dokki'}
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
