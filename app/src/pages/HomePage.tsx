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
      ? 'دكتور عيون, طبيب عيون, عيادة عيون, أحسن دكتور عيون, أفضل دكتور رمد, دكتور عيون ممتاز, عيادة رمد, مستشفى عيون, مركز عيون, كشف نظارة, دكتور عيون شاطر, أخصائي طب وجراحة العيون, أقرب دكتور عيون, دكتور عيون قريب مني, أفضل دكتور عيون في الفيوم, أفضل دكتور عيون في القاهرة, عيادات عيون مفتوحة الآن, دكتور عيون طوارئ, دكتور عيون فاتح يوم الجمعة, رقم عيادة دكتور عيون, عنوان دكتور عيون, حجز كشف عيون أونلاين, دكتور عيون أطفال, أحسن دكتور رمد أطفال, دكتور حول أطفال, علاج حول الأطفال, كشف نظر للأطفال, علاج كسل العين عند الأطفال, عملية تسليك القناة الدمعية للرضع, أفضل دكتور لعملية الليزك, عملية تصحيح النظر, الفرق بين الليزك والفيمتو ليزك, عملية الفيمتو سمايل, زراعة العدسات لتصحيح النظر, تكلفة عملية الليزك 2026, شروط عملية الليزك, هل عملية الليزك مؤلمة, أفضل دكتور مياه بيضاء, عملية المياه البيضاء بالليزر, أسعار عمليات المياه البيضاء, أنواع عدسات المياه البيضاء, علاج المياه الزرقاء على العين, علاج الجلوكوما, أسباب ارتفاع ضغط العين, دكتور شبكية, أحسن دكتور شبكية عيون, علاج انفصال الشبكية, حقن العين لمرضى السكر, ارتشاح الشبكية, زراعة القرنية المخروطية, أفضل دكتور شبكية عيون في مصر 2026, أحسن دكتور عيون في القاهرة, افضل دكتور عيون في مصر لعام 2026 بشهادة عالمية, dr, افضل 737 دكتور عيون في مصر احجز الآن مجانا, افضل 10 عيادة دكتور عيون في الفيوم, افضل دكتور عيون في المهندسين, افضل دكتور عيون في مدينة نصر, افضل دكتور عيون في مصر الجديدة, افضل دكتور عيون في المعادي, افضل دكتور عيون في التجمع الخامس, افضل دكتور عيون في الشيخ زايد, افضل دكتور عيون في 6 اكتوبر, افضل دكتور عيون في الهرم, افضل دكتور عيون في فيصل, افضل دكتور عيون في الجيزة, افضل دكتور عيون في وسط البلد, افضل دكتور عيون في شبرا'
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
