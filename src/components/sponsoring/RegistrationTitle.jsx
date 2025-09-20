// src/components/sponsoring/RegistrationTitle.jsx
import AOS from "aos";
import "aos/dist/aos.css";
import { Edit3 } from "lucide-react";
import { useEffect } from "react";

const RegistrationTitle = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-12 px-4" dir="rtl">
      <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Edit3 className="text-yellow-500 dark:text-yellow-400" size={32} />
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
            استمارة التسجيل لحضور الملتقى
          </h2>
        </div>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
          سجل الآن لضمان مقعدك في هذا الحدث المميز وكن جزءاً من التطور التقني
        </p>
      </div>
    </section>
  );
};

export default RegistrationTitle;
