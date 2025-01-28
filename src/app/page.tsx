import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import BookingSection from '@/components/BookingSection';
import HoursSection from '@/components/HoursSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <GallerySection />
      <BookingSection />
      <HoursSection />
    </main>
  );
}
