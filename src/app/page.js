import CTASection from "@/components/CTASection/CTASection";
import FeaturedCars from "@/components/FeaturedCars/FeaturedCars";
import HeroSection from "@/components/HeroSection/HeroSection";

import TestimonialsSection from "@/components/Testimonials/Testimonials";
import WhyChooseUsSection from "@/components/WhyChooseUsSection/WhyChooseUsSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <FeaturedCars />
      <TestimonialsSection />
      <CTASection />
      <WhyChooseUsSection />
    </div>
  );
}
