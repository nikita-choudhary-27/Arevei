import React from 'react'
import SolutionsSection from "../components/SolutionsSection";
import CreativeWorksSection from "../components/CreativeWorksSection";
import TeamSection from "../components/TeamSection";
import TestimonialsSection from "../components/TestimonialsSection";
import PricingSection from "../components/PricingSection";
import Intro from '../components/Intro';
import StudioHero from '../components/StudioHero';
import StudioWork from '../components/StudioWork';

const Studio: React.FC  = () => {
  return (
    <div>
      <StudioHero />
      <StudioWork />
      <Intro />
      <TeamSection />
      <SolutionsSection />
      <CreativeWorksSection />
      <TestimonialsSection />
      <PricingSection />
    </div>
  );
}

export default Studio