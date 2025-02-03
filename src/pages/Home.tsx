import React from "react";
import HeroSection from "../components/HeroSection";
import ContactForm from "../components/ContactForm";
import HomeIntro from "../components/HomeIntro";
import PeopleSay from "../components/PeopleSay";
import Blogs from "../components/Blogs";
import CareerBanner from "../components/CareerBanner";

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <HomeIntro />
      <PeopleSay />
      <Blogs />
      <CareerBanner />
      <ContactForm />
    </div>
  );
};

export default Home;
