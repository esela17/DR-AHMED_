import HeroSection from '@/components/sections/HeroSection';
import TrustBarSection from '@/components/sections/TrustBarSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import MediaSection from '@/components/sections/MediaSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BranchesSection from '@/components/sections/BranchesSection';
import BookingSection from '@/components/sections/BookingSection';

export default function HomePage() {
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
