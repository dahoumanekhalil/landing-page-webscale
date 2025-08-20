// src/pages/Registration.jsx
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Hero from "@/components/registration/Hero";
import ApplicationForm from "@/components/registration/ApplicationForm";
import FAQSection from "@/components/registration/FAQSection";
import ContactSection from "@/components/registration/ContactSection";
import PricingSection from "@/components/registration/PricingSection";
import { communityLinks, footerLinksRegistration, registrationNav, registrationPlatformLinks, registrationResourcesLinks } from "@/constants";

export default function Registration() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar navConfig={registrationNav} />

      <Hero/>
      <PricingSection/>
      <main className="flex-grow">
        <ApplicationForm />
      </main>
      <FAQSection/>
      <ContactSection/>
      {/* <Footer /> */}
      <Footer 
  resourcesLinks={registrationPlatformLinks} 
  platformLinks={registrationResourcesLinks} 
  communityLinks={communityLinks}
/>
    </div>
  );
}
