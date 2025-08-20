// src/pages/EventLandingPage.jsx
import { useState, useEffect } from "react";
import Navbar from "../components/shared/Navbar";
import HeroSection from "../components/sponsoring/HeroSection";
import FeatureSection from "../components/sponsoring/FeatureSection";
import Agenda from "../components/sponsoring/Agenda";
import Sponsors from "../components/sponsoring/Sponsors";
import AboutWebscale from "../components/sponsoring/AboutWebscale";
import AboutEvent from "../components/sponsoring/AboutEvent";
import UnifiedRegistrationForm from "../components/sponsoring/UnifiedRegistrationForm";
import LogosCarousel from "../components/sponsoring/PartnersMarquee";
import Footer from "../components/shared/Footer";
import { communityLinks, eventNav, eventPlatformLinks, eventResourcesLinks } from "@/constants";

const EventLandingPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-neutral-900 dark:text-white min-h-screen">
      <Navbar navConfig={eventNav} />
      {/* <Navbar darkMode={darkMode} setDarkMode={setDarkMode} /> */}
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <AboutWebscale />
        <AboutEvent />
        <Agenda />
        <Sponsors />
        <FeatureSection />
        <UnifiedRegistrationForm mode="inline" />
        <LogosCarousel />
        {/* <Footer /> */}
        <Footer
  resourcesLinks={eventResourcesLinks}
  platformLinks={eventPlatformLinks}
  communityLinks={communityLinks}
/>
      </div>
    </div>
  );
};

export default EventLandingPage;
