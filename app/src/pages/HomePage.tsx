import { useLanguage } from '@/context/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import HeroSection from '@/components/sections/HeroSection';
import TrustBarSection from '@/components/sections/TrustBarSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import MediaSection from '@/components/sections/MediaSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BranchesSection from '@/components/sections/BranchesSection';
import BookingSection from '@/components/sections/BookingSection';

export default function HomePage() {
  const { lang } = useLanguage();

  useSEO({
    title: lang === 'ar' 
      ? 'أ.د. أحمد عبدالله مهلهل | أستاذ مساعد طب وجراحة العيون قصر العيني' 
      : 'Prof. Dr. Ahmed Abdullah Mohelhel | Assistant Professor of Ophthalmology',
    description: lang === 'ar'
      ? 'أ.د. أحمد عبدالله مهلهل – استشاري طب وجراحة العيون (قصر العيني) ومتخصص في الشبكية والمياه البيضاء والليزك وتصحيح الإبصار. احجز موعدك الآن بالدقي والفيوم.'
      : 'Prof. Dr. Ahmed Abdullah Mohelhel – Ophthalmology Consultant (Kasr Al-Ainy) specializing in retina, cataracts, and LASIK with clinics in Dokki & Fayoum.',
    keywords: lang === 'ar'
      ? 'دكتور عيون متخصص, استشاري شبكية, جراحة المياه البيضاء, دكتور ليزك الدقي, عيادة عيون الفيوم, تصحيح البصر بالليزر, افضل دكتور عيون, أحمد عبدالله مهلهل, قصر العيني'
      : 'ophthalmologist Cairo, retina consultant, cataract surgery Egypt, LASIK doctor Dokki, Fayoum eye clinic, vision correction, best eye doctor Egypt, Ahmed Mohelhel',
    lang
  });
  return (
    <main>
      <HeroSection />
      <TrustBarSection />
      <AboutSection />
      <ServicesSection />
      <MediaSection />
      <TestimonialsSection />
      <BranchesSection />
      <BookingSection />
    </main>
  );
}
