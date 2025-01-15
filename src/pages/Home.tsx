import React from "react";
import HeroSection from "../components/HeroSection";
import SolutionsSection from "../components/SolutionsSection";
import CreativeWorksSection from "../components/CreativeWorksSection";
import TeamSection from "../components/TeamSection";
import TestimonialsSection from "../components/TestimonialsSection";
import PricingSection from "../components/PricingSection";

import WorkShowcase from "../components/WorkShowcase";
import Intro from "../components/Intro";

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <WorkShowcase />
      <Intro/>
      <SolutionsSection />
      <CreativeWorksSection />
      <TeamSection />
      <TestimonialsSection />
      <PricingSection />
      
    </div>
  );
};

export default Home;
