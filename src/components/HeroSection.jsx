// src/components/HeroSection.jsx
import { useState, useEffect } from "react";
import { CalendarDays, Edit3 } from "lucide-react";
import RegistrationModal from "./RegistrationModal";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // تهيئة مكتبة AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="flex flex-col items-center mt-6 lg:mt-5 text-center px-4 bg-white dark:bg-neutral-900 transition-colors duration-300"
      id="hero"
    >
      {/* title */}
      <h1
        className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-wide text-neutral-900 dark:text-white"
        data-aos="fade-up"
      >
        ملتقى
        <span className="bg-gradient-to-r from-[#fbbc05] to-[#e0bb57] text-transparent bg-clip-text">
          {" "}WEBSCALE
        </span>
        <br className="hidden sm:block" />
        مستقبل الويب بين يديك
      </h1>

      {/* date and place */}
      <p
        className="mt-4 text-lg font-medium text-primary text-neutral-800 dark:text-neutral-100"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        📅 الثلاثاء 30 سبتمبر 2025 – 📍 المركز الثقافي بجامع الجزائر
      </p>

      {/* description */}
      <p
        className="mt-6 text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        انضم إلينا في أضخم ملتقى للمطورين والمبدعين في عالم الذكاء الاصطناعي.
        <br />
        ورش عمل، جلسات نقاشية، وفرصة للتواصل مع خبراء الصناعة.
      </p>

      {/* buttons */}
      <div
        className="flex flex-wrap justify-center gap-4 my-8"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-[#fbbc05] to-[#715a1a] text-white py-3 px-8 rounded-md hover:opacity-90 transition"
        >
          <Edit3 size={20} />
          سجل الآن
        </button>
        <a
          href="#agenda"
          className="flex items-center gap-2 py-3 px-8 rounded-md border border-neutral-500 dark:border-neutral-300 hover:bg-neutral-100 text-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-800 transition"
        >
          <CalendarDays size={20} />
          جدول الفعاليات
        </a>
      </div>

      {/* videos */}
      <div
        className="flex flex-col lg:flex-row mt-10 justify-center items-center gap-6 w-full lg:w-4/5"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <div className="w-full lg:w-1/2">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="rounded-lg border border-[#fbbc05] shadow-lg shadow-[#e0bb57] w-full"
          >
            <source src={video1} type="video/mp4" />
          </video>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            لقطات من ورش العمل السابقة
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="rounded-lg border border-[#fbbc05] shadow-lg shadow-[#e0bb57] w-full"
          >
            <source src={video2} type="video/mp4" />
          </video>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            لقاءات مع خبراء ومتحدثين عالميين
          </p>
        </div>
      </div>

      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default HeroSection;
