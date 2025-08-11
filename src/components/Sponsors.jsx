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
    <section className="py-20 bg-neutral-50 dark:bg-neutral-900" id="sponsors">
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
              className="relative p-6 rounded-xl shadow-lg border dark:border-neutral-700 flex flex-col items-center text-center bg-white dark:bg-neutral-800 hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {/* badge */}
              <div
                className={`absolute -top-4 px-4 py-1 rounded-full text-white text-sm font-semibold shadow-md bg-gradient-to-r ${sponsor.color}`}
              >
                {sponsor.level}
              </div>

              <div
                className={`w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-r ${sponsor.color} mb-4 shadow-lg`}
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-14 h-14 object-contain drop-shadow-lg"
                />
              </div>

              {/* name  */}
              <h3 className="text-lg font-bold mb-1">{sponsor.name}</h3>

              {/* description */}
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                {sponsor.description}
              </p>

              {/* features */}
              <ul className="text-sm text-neutral-700 dark:text-neutral-300 space-y-2 w-full border-t pt-4">
                {sponsor.benefits.map((benefit, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 justify-start"
                  >
                    <CheckCircle size={16} className="text-green-500" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
