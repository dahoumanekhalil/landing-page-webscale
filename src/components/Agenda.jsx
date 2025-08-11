// src/components/Agenda.jsx
import { Clock, Users, Mic } from "lucide-react";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Agenda = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const agendaItems = [
    {
      time: "09:00 - 09:30",
      title: "الافتتاح الرسمي",
      description: "كلمة ترحيبية من منظمي ملتقى WEBSCALE وممثل وزارة المؤسسات الناشئة.",
      icon: <Mic className="text-primary" size={24} />,
    },
    {
      time: "09:30 - 10:30",
      title: "محاضرات فردية",
      description: "مداخلات قصيرة من خبراء ومسيرين حول أحدث تطبيقات الذكاء الاصطناعي في التجارة الإلكترونية.",
      icon: <Users className="text-primary" size={24} />,
    },
    {
      time: "10:30 - 12:00",
      title: "دراسات حالة جزائرية",
      description: "عرض تجارب عملية لأفضل استخدامات أدوات AI في السوق المحلي.",
      icon: <Clock className="text-primary" size={24} />,
    },
    {
      time: "13:30 - 15:00",
      title: "أجنحة عرض تقنية",
      description: "استكشاف أحدث الحلول التقنية والتطبيقات الموجهة للتجار الإلكترونيين.",
      icon: <Users className="text-primary" size={24} />,
    },
    {
      time: "15:00 - 16:00",
      title: "جلسة ختامية",
      description: "إعلان التوصيات النهائية وتوزيع شهادات المشاركة.",
      icon: <Mic className="text-primary" size={24} />,
    },
  ];

  return (
    <section id="agenda" className="py-10 dark:bg-neutral-900 px-4">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl sm:text-5xl text-neutral-800 dark:text-neutral-100 font-bold text-center mb-12"
          data-aos="fade-up"
        >
          جدول الفعاليات
        </h2>
        <div className="space-y-8">
          {agendaItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-white dark:bg-neutral-800 rounded-lg shadow hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex-shrink-0">{item.icon}</div>
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
