// /app/page.tsx

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CompanyLogosSection from './components/CompanyLogosSection';
import HowItWorks from './components/HowItWorks';
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
        <HowItWorks />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      {/* <Footer /> */}  {/* Comment out this line */}
    </div>
  );
}

