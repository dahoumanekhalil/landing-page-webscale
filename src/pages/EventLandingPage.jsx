// src/pages/EventLandingPage.jsx
import { communityLinks, eventNav, eventPlatformLinks, eventResourcesLinks } from "@/constants";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>ملتقى WEBSCALE - استخدام الذكاء الاصطناعي في التجارة الإلكترونية</title>
        <meta name="description" content="انضم إلينا في أكبر يوم دراسي مخصص لأرباب العمل حول تقنيات الذكاء الاصطناعي في التجارة الالكترونية. الثلاثاء 30 سبتمبر 2025 – المركز الثقافي بجامع الجزائر" />
        <meta name="keywords" content="webscale, ملتقى, ذكاء اصطناعي, تجارة إلكترونية, الجزائر, أرباب العمل, يوم دراسي" />
        <meta property="og:title" content="ملتقى WEBSCALE - استخدام الذكاء الاصطناعي في التجارة الإلكترونية" />
        <meta property="og:description" content="انضم إلينا في أكبر يوم دراسي مخصص لأرباب العمل حول تقنيات الذكاء الاصطناعي في التجارة الالكترونية. الثلاثاء 30 سبتمبر 2025 – المركز الثقافي بجامع الجزائر" />
        <meta property="og:url" content="https://webscale.dz/event" />
        <meta property="twitter:title" content="ملتقى WEBSCALE - استخدام الذكاء الاصطناعي في التجارة الإلكترونية" />
        <meta property="twitter:description" content="انضم إلينا في أكبر يوم دراسي مخصص لأرباب العمل حول تقنيات الذكاء الاصطناعي في التجارة الالكترونية. الثلاثاء 30 سبتمبر 2025 – المركز الثقافي بجامع الجزائر" />
        <link rel="canonical" href="https://webscale.dz/event" />
      </Helmet>
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
