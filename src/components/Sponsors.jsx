// src/components/Sponsors.jsx
import { sponsors } from "../constants";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { CheckCircle } from "lucide-react";


const Sponsors = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
  id="sponsors"
  dir="rtl"
  className="py-20 bg-neutral-50 dark:bg-neutral-900"
>
  <div className="max-w-6xl mx-auto px-4">
    <h2
      className="text-3xl sm:text-5xl font-bold text-center mb-16"
      data-aos="fade-up"
    >
      رعاتنا
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {sponsors.map((sponsor, index) => (
        <div
          key={index}
          className={`relative flex flex-col items-center text-center rounded-xl shadow-lg border dark:border-neutral-700 bg-white dark:bg-neutral-800 overflow-hidden hover:scale-[1.03] transition-transform duration-300`}
          data-aos="fade-up"
          data-aos-delay={index * 150}
        >
          {/* شريط علوي بلون الفئة */}
          <div
            className={`w-full h-2 bg-gradient-to-r ${sponsor.color}`}
          ></div>

          {/* الشعار */}
          <div
            className={`mt-6 w-28 h-28 flex items-center justify-center rounded-full bg-gradient-to-r ${sponsor.color} shadow-lg`}
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="w-16 h-16 object-contain drop-shadow-lg"
            />
          </div>

          {/* المستوى */}
          <div
            className={`mt-4 px-4 py-1 rounded-full text-white text-sm font-semibold shadow-md bg-gradient-to-r ${sponsor.color}`}
          >
            {sponsor.level}
          </div>

          {/* الوصف */}
          <p className="px-4 mt-4 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {sponsor.description}
          </p>

          {/* قائمة المزايا - اختيارية */}
          {/* 
          <ul className="text-sm text-neutral-700 dark:text-neutral-300 space-y-2 w-full border-t mt-4 pt-4 px-4">
            {sponsor.benefits.map((benefit, i) => (
              <li key={i} className="flex items-center gap-2 justify-start">
                <CheckCircle size={16} className="text-green-500" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          */}
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Sponsors;
