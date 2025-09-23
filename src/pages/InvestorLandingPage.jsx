// src/pages/InvestorLandingPage.jsx
import { communityLinks, eventPlatformLinks, eventResourcesLinks } from "@/constants";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>فرص الاستثمار في WEBSCALE - انضم إلى رحلتنا</title>
        <meta name="description" content="تفتح WEBSCALE الباب للمستثمرين المهتمين بالانضمام إلى رحلتنا نحو بناء مجتمع قوي لأصحاب المؤسسات ورواد الأعمال في الجزائر." />
        <meta name="keywords" content="webscale, استثمار, مستثمرين, الجزائر, مجتمع, أرباب العمل, رواد الأعمال" />
        <meta property="og:title" content="فرص الاستثمار في WEBSCALE - انضم إلى رحلتنا" />
        <meta property="og:description" content="تفتح WEBSCALE الباب للمستثمرين المهتمين بالانضمام إلى رحلتنا نحو بناء مجتمع قوي لأصحاب المؤسسات ورواد الأعمال في الجزائر." />
        <meta property="og:url" content="https://webscale.dz/investor" />
        <meta property="twitter:title" content="فرص الاستثمار في WEBSCALE - انضم إلى رحلتنا" />
        <meta property="twitter:description" content="تفتح WEBSCALE الباب للمستثمرين المهتمين بالانضمام إلى رحلتنا نحو بناء مجتمع قوي لأصحاب المؤسسات ورواد الأعمال في الجزائر." />
        <link rel="canonical" href="https://webscale.dz/investor" />
      </Helmet>
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
