// src/components/Agenda.jsx
import { agenda } from "../constants";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Agenda = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="agenda"      dir="rtl"
    className="py-16 px-4 dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl sm:text-5xl font-bold text-center mb-12 text-neutral-800 dark:text-neutral-100"
          data-aos="fade-up"
        >
          جدول الفعاليات المقترح
        </h2>

        <div className="relative border-r-4 border-[#fbbc05] dark:border-[#fbbc05]/70 pr-6">
          {agenda.map((item, index) => (
            <div
              key={index}
              className="mb-8 flex items-start gap-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* النقطة في التايملاين */}
              {/* <div className="absolute right-[-14px] mt-2 w-6 h-6 rounded-full bg-[#fbbc05] border-4 border-white dark:border-neutral-900"></div> */}

              {/* الأيقونة */}
              <div className="flex-shrink-0 p-3 bg-[#fbbc05]/20 dark:bg-[#fbbc05]/10 rounded-full">
                {item.icon}
              </div>

              {/* المحتوى */}
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  {item.time} — {item.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;
