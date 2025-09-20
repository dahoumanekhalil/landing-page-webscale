// src/pages/EventLandingPage.jsx
import { communityLinks, eventNav, eventPlatformLinks, eventResourcesLinks } from "@/constants";
import { useEffect, useState } from "react";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import AboutEvent from "../components/sponsoring/AboutEvent";
import AboutWebscale from "../components/sponsoring/AboutWebscale";
import FeatureSection from "../components/sponsoring/FeatureSection";
import HeroSection from "../components/sponsoring/HeroSection";
import ImportanceSection from "../components/sponsoring/ImportanceSection";
import RegistrationTitle from "../components/sponsoring/RegistrationTitle";
import UnifiedRegistrationForm from "../components/sponsoring/UnifiedRegistrationForm";

const EventLandingPage = () => {
  const [darkMode] = useState(false);

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
        <ImportanceSection />
        <AboutWebscale />
        <AboutEvent />
        {/* <Agenda /> */}
        {/* <Sponsors /> */}
        <FeatureSection />
        <RegistrationTitle />
        <UnifiedRegistrationForm mode="inline" />
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
