import HeroSection from '@/components/sections/HeroSection';
import TrustBarSection from '@/components/sections/TrustBarSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BookingSection from '@/components/sections/BookingSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustBarSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <BookingSection />
    </main>
  );
}
