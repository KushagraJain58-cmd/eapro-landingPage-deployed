import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ProductsSection from '../components/ProductsSection';
import PillarsSection from '../components/PillarsSection';
import CompanyOverview from '../components/CompanyOverview';
import WhyChooseEapro from '../components/WhyChooseEapro';
import InnovationSection from '../components/InnovationSection';
import SustainabilitySection from '../components/SustainabilitySection';
import GlobalReachSection from '../components/GlobalReachSection';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <PillarsSection />
      <WhyChooseEapro />
      <ProductsSection />
      <CompanyOverview />
      <InnovationSection />
      <SustainabilitySection />
      <GlobalReachSection />
      <CallToAction />
      <Footer />
    </div>
  );
}
