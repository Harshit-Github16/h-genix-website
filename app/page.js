import Hero from './components/Hero';
import ServicesOverview from './components/ServicesOverview';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesOverview />
      <Portfolio />
      <WhyChooseUs />
      <TestimonialsCarousel />
    </main>
  );
}