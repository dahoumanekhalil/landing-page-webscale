// src/pages/InvestorLandingPage.jsx
import { communityLinks, eventPlatformLinks, eventResourcesLinks } from "@/constants";
import { useEffect, useState } from "react";
import InvestorHero from "../components/investor/InvestorHero";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const InvestorLandingPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Navigation configuration for investor page
  const investorNav = {
    links: [
      { label: "الرئيسية", href: "/" },
      { label: "عن Webscale", href: "/#about" }
    ],
    actions: [
      { label: "تواصل معنا", href: "/#contact", type: "primary" }
    ]
  };

  return (
    <div className="bg-neutral-900 text-white min-h-screen">
      <Navbar navConfig={investorNav} />
      <div className="max-w-7xl mx-auto">
        <InvestorHero />
        <Footer
          resourcesLinks={eventResourcesLinks}
          platformLinks={eventPlatformLinks}
          communityLinks={communityLinks}
        />
      </div>
    </div>
  );
};

export default InvestorLandingPage;
