// src/components/sponsoring/HeroSection.jsx
import { CalendarDays, Edit3 } from "lucide-react";
import { useEffect, useState } from "react";
import UnifiedRegistrationForm from "./UnifiedRegistrationForm"; // الفورم الجديد
// import video1 from "../assets/video1.mp4";
// import video2 from "../assets/video2.mp4";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      dir="rtl"
      className="flex flex-col items-center mt-6 lg:mt-5 text-center px-4 bg-white dark:bg-neutral-900 transition-colors duration-300"
      id="hero"
    >
      {/* العنوان */}
      <h1
        className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-wide text-neutral-900 dark:text-white"
        data-aos="fade-up"
      >
        ملتقى
        <span className="bg-gradient-to-r from-[#fbbc05] to-[#e0bb57] text-transparent bg-clip-text">
          {" "}WEBSCALE
        </span>
        حول
        <br className="hidden sm:block" />
        استخدام الذكاء الاصطناعي في التجارة الإلكترونية
      </h1>

      {/* التاريخ والمكان */}
      <p
        className="mt-4 text-lg font-medium text-primary text-neutral-800 dark:text-neutral-100"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        📅 الثلاثاء 30 سبتمبر 2025 – 📍 المركز الثقافي بجامع الجزائر
      </p>

      {/* الوصف */}
      <p
        className="mt-6 text-lg text-neutral-600 dark:text-neutral-300 max-w-4xl leading-relaxed"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        انضم إلينا في أكبر يوم دراسي مخصص لأرباب العمل حول تقنيات الذكاء الاصطناعي في التجارة الالكترونية
        <br />
        دراسة حالة, محتوى عملي مباشر, مداخلات الخبراء, تشبيك علاقات
      </p>

      {/* الأزرار */}
      <div
        className="flex flex-wrap justify-center gap-4 my-8"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        {/* زر التسجيل */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-[#fbbc05] to-[#715a1a] text-white py-3 px-8 rounded-md hover:opacity-90 transition"
        >
          <Edit3 size={20} />
          سجل الآن
        </button>
      </div>

      {/* الفيديوهات (مخفية حاليا) */}

      {/* الفورم كنافذة منبثقة */}
      <UnifiedRegistrationForm
        mode="modal"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default HeroSection;
