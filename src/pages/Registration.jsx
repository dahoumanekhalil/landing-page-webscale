// src/pages/Registration.jsx
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Hero from "@/components/registration/Hero";
import ApplicationForm from "@/components/registration/ApplicationForm";
// import FAQItem from "@/components/registration/FAQItem";
import FAQSection from "@/components/registration/FAQSection";
import ContactSection from "@/components/registration/ContactSection";
// import PartnersSection from "@/components/PartnersSection";

export default function Registration() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar مشترك */}
      <Navbar />
      <Hero/>
      <main className="flex-grow">
        <ApplicationForm />
      </main>
      {/* <FAQItem/> */}
      <FAQSection/>
      <ContactSection/>
      {/* <PartnersSection/> */}
      {/* المحتوى الرئيسي */}
      {/* <main className="flex-grow pt-20">
        <div className="max-w-4xl mx-auto text-center py-20">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
            صفحة التسجيل
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            قم بملء الاستمارة أدناه للتسجيل في الملتقى.
          </p>
        </div>
      </main> */}

      {/* Footer مشترك */}
      <Footer />
    </div>
  );
}
