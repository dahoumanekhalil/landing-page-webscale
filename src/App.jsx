// src/App.jsx
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
// import Pricing from "./components/Pricing";
// import Testimonials from "./components/Testimonials";
import RegisterForm from "./components/RegisterForm";
import Agenda from "./components/Agenda";
import Sponsors from "./components/Sponsors";

const App = () => {
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
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <Agenda /> 
        <Sponsors/> 
        <FeatureSection />
        <RegisterForm />
        <Workflow />
        {/* <Pricing /> */}
        {/* <Testimonials /> */}
        <Footer />
      </div>
    </div>
  );
};

export default App;

