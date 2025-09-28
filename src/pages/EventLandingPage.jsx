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
        {/* Registration Closed Section */}
        <section className="py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-3xl p-12 md:p-16">
              <div className="mb-8">
                <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">🚫</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  انتهت فترة التسجيل
                </h2>
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  نشكركم على اهتمامكم بالملتقى. لقد انتهت فترة التسجيل وتم إغلاق باب المشاركة.
                </p>
                <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    للمزيد من المعلومات حول الفعاليات القادمة، يرجى متابعة صفحتنا على وسائل التواصل الاجتماعي
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
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
