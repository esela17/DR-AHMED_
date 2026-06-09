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
      ? 'أ.د. أحمد عبدالله مهلهل | أستاذ طب وجراحة العيون قصر العيني' 
      : 'Prof. Dr. Ahmed Abdullah Mohelhel | Professor of Ophthalmology',
    description: lang === 'ar'
      ? 'أ.د. أحمد عبدالله مهلهل – أستاذ طب وجراحة العيون بجامعة القاهرة (قصر العيني) واستشاري جراحات الشبكية والمياه البيضاء وتصحيح الإبصار بخبرة 27+ عاماً. احجز موعدك الآن بالدقي والفيوم والشيخ زايد.'
      : 'Prof. Dr. Ahmed Abdullah Mohelhel – Ophthalmology Professor (Kasr Al-Ainy) and Consultant specializing in retina, cataracts, and LASIK with 27+ years experience. Book in Dokki, Fayoum & Sheikh Zayed.',
    keywords: lang === 'ar'
      ? 'دكتور عيون متخصص, أستاذ طب العيون, استشاري شبكية, جراحة المياه البيضاء, دكتور ليزك الدقي, عيادة عيون الفيوم, عيادة الشيخ زايد, تصحيح البصر بالليزر, أفضل دكتور عيون بمصر, أحمد عبدالله مهلهل, قصر العيني'
      : 'ophthalmologist Cairo, ophthalmology professor, retina consultant, cataract surgery Egypt, LASIK doctor Dokki, Fayoum eye clinic, Sheikh Zayed eye clinic, vision correction, best eye doctor Egypt, Ahmed Mohelhel',
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
