// /app/page.tsx

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CompanyLogosSection from './components/CompanyLogosSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import MainTestimonial from './components/MainTestimonial';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <MainTestimonial />
        <CompanyLogosSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      {/* <Footer /> */}  {/* Comment out this line */}
    </div>
  );
}

