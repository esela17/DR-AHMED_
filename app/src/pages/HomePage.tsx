import { useLanguage } from '@/context/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import HeroSection from '@/components/sections/HeroSection';
import TrustBarSection from '@/components/sections/TrustBarSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import MediaSection from '@/components/sections/MediaSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BranchesSection from '@/components/sections/BranchesSection';

export default function HomePage() {
  const { lang } = useLanguage();

  useSEO({
    title: lang === 'ar' 
      ? 'أ.د. أحمد عبدالله مهلهل | دكتور عيون في الفيوم والدقي | استشاري شبكية ومياه بيضاء وليزك' 
      : 'Prof. Dr. Ahmed Abdullah Mohelhel | Best Eye Doctor in Fayoum & Cairo',
    description: lang === 'ar'
      ? 'أ.د. أحمد عبدالله مهلهل – أستاذ طب وجراحة العيون بجامعة القاهرة (قصر العيني). أفضل دكتور عيون في الفيوم والدقي متخصص في جراحات الشبكية، إزالة المياه البيضاء بالفاكو، الفيمتو ليزك، والجلوكوما. احجز كشفك الآن.'
      : 'Prof. Dr. Ahmed Abdullah Mohelhel – Ophthalmology Professor (Kasr Al-Ainy) and Consultant specializing in retina, cataracts, and LASIK in Fayoum & Cairo. Book your appointment now.',
    keywords: lang === 'ar'
      ? 'دكتور أحمد عبدالله مهلهل, دكتور عيون في الفيوم, افضل دكتور عيون في الفيوم, دكتور مياه بيضاء في الفيوم, دكتور شبكية في الفيوم, دكتور ليزك في الفيوم, استشاري طب وجراحة العيون الفيوم, عملية المياه البيضاء في الفيوم, علاج الشبكية في الفيوم, أفضل دكتور عيون قريب مني, دكتور عيون الدقي, قصر العيني'
      : 'Ahmed Abdullah Mahlehl, Ophthalmologist Fayoum, Best Eye Doctor Fayoum, Eye Doctor in Fayoum Egypt, Cataract Surgeon Fayoum, Retina Specialist Fayoum, LASIK Surgeon Fayoum, Eye Surgery Egypt, Ahmed Mohelhel',
    path: '/',
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
    </main>
  );
}
