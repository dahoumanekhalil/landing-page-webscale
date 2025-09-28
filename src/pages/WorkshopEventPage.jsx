// src/pages/WorkshopEventPage.jsx
import { workshopEventNav } from "@/constants";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import WorkshopRegistrationForm from "../components/workshop/WorkshopRegistrationForm";

const WorkshopEventPage = () => {
  const [darkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const workshops = [
    {
      id: "jumia",
      name: "Jumia",
      description: "عرض الخدمات الجديدة للتجار الإلكترونيين وكيفية الاستفادة منها لتعزيز مبيعاتك."
    },
    {
      id: "alarbi",
      name: "العربي محمد هوامل",
      description: "تقنيات البيع الحديثة وإستراتيجيات إغلاق الصفقات بفعالية."
    },
    {
      id: "rasalam",
      name: "راسلام",
      description: "الذكاء الاصطناعي والأتمتة: كيف تساعدك التكنولوجيا على تقليل التكاليف وزيادة الإنتاجية."
    }
  ];

  const benefits = [
    "ستتعلم من خبراء ميدانيين",
    "ستكتشف حلول عملية لتطوير تجارتك",
    "فرصة للتواصل (Networking) مع أصحاب مشاريع وتجّار آخرين"
  ];

  return (
    <div className="bg-white dark:bg-neutral-900 dark:text-white min-h-screen arabic-text" dir="rtl">
      <Helmet>
        <title>ملتقى الأعوان الذكية في خدمة تجارتك الإلكترونية - 30 سبتمبر 2025</title>
        <meta name="description" content="في يوم 30 سبتمبر 2025، نلتقي جميعًا في المركز الثقافي لجامع الجزائر في حدث استثنائي يجمع أصحاب الأعمال، المسيرين، والتجار الإلكترونيين." />
        <meta name="keywords" content="الأعوان الذكية, تجارة إلكترونية, ورشات, Jumia, العربي محمد هوامل, راسلام, الجزائر" />
        <meta property="og:title" content="ملتقى الأعوان الذكية في خدمة تجارتك الإلكترونية" />
        <meta property="og:description" content="في يوم 30 سبتمبر 2025، نلتقي جميعًا في المركز الثقافي لجامع الجزائر في حدث استثنائي يجمع أصحاب الأعمال، المسيرين، والتجار الإلكترونيين." />
        <meta property="og:url" content="https://webscale.dz/workshop-event" />
        <link rel="canonical" href="https://webscale.dz/workshop-event" />
      </Helmet>
      
      <Navbar navConfig={workshopEventNav} />
      
      <div className="max-w-7xl mx-auto pt-20 px-6">
        {/* Hero Section */}
        <section id="hero" className="text-center py-16">
          <div className="mb-8">
            <img 
              src="/src/assets/logo.png" 
              alt="شعار الحدث" 
              className="mx-auto h-16 w-auto mb-6"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              🚀 ملتقى "الأعوان الذكية في خدمة تجارتك الإلكترونية"
            </h1>
            <div className="bg-gradient-to-r from-[#fbbc05] to-[#e0bb57] text-white px-8 py-4 rounded-full inline-block text-xl font-semibold shadow-lg">
              سجّل الآن وحدد ورشتك المفضلة
            </div>
          </div>
        </section>

        {/* Event Introduction */}
        <section id="about" className="py-16">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-3xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                في يوم 30 سبتمبر 2025، نلتقي جميعًا في المركز الثقافي لجامع الجزائر
              </h2>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
                في حدث استثنائي يجمع أصحاب الأعمال، المسيرين، والتجار الإلكترونيين.
                الملتقى يجمع بين محاضرات ملهمة وورشات تطبيقية تمنحك أدوات عملية لتطوير تجارتك الإلكترونية والانطلاق بخطوات واثقة نحو المستقبل.
              </p>
            </div>
          </div>
        </section>

        {/* Workshops Section */}
        <section id="workshops" className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              🎯 اختر الورشة التي تناسبك أكثر
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              كل ورشة تمنحك قيمة عملية مركّزة. يمكنك اختيار الورشة التي تود حضورها عند التسجيل:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <div key={workshop.id} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#fbbc05] to-[#e0bb57] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {workshop.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {workshop.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Attend Section */}
        <section id="benefits" className="py-16">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              لماذا تحضر؟
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-8 h-8 bg-[#fbbc05] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Form Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ✍️ سجّل معلوماتك واختر ورشتك
            </h2>
          </div>
          
          <WorkshopRegistrationForm workshops={workshops} />
        </section>

        {/* Final CTA */}
        <section className="py-16 text-center">
          <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ✅ احجز مقعدك الآن قبل اكتمال العدد!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              المقاعد محدودة - سارع بالتسجيل الآن
            </p>
            <button 
              onClick={() => document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-red-500 px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              سجّل الآن
            </button>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default WorkshopEventPage;
