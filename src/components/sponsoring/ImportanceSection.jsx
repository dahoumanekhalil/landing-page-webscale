// src/components/sponsoring/ImportanceSection.jsx
import AOS from "aos";
import "aos/dist/aos.css";
import { Briefcase, Target, Users, Zap } from "lucide-react";
import { useEffect } from "react";

const ImportanceSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const iconColor = "text-yellow-500 dark:text-yellow-400";

  return (
    <section id="importance" className="relative py-20 px-4 bg-gray-50 dark:bg-neutral-800" dir="rtl">
      <div className="max-w-6xl mx-auto">
        {/* العنوان */}
        <h2 className="text-4xl font-bold text-center mb-8 text-neutral-900 dark:text-white" data-aos="fade-up">
          لماذا حضورك للحدث <span className="text-yellow-500">مهم؟</span>
        </h2>

        {/* الوصف الرئيسي */}
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
          <p className="text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-4xl mx-auto mb-8">
            ملتقانا الأول يجمع القادة، الخبراء، وأصحاب المؤسسات في يوم تطبيقي يحوّل الذكاء الاصطناعي إلى نتائج عملية مباشرة في زيادة مبيعات شركتك.
          </p>
        </div>

        {/* يوم تطبيقي شامل */}
        <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-lg mb-12" data-aos="fade-up" data-aos-delay="400">
          <div className="flex items-center gap-4 mb-6">
            <Zap className={iconColor} size={32} />
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
              يوم تطبيقي شامل
            </h3>
          </div>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            ورش عمل وجلسات تطبيقية مع خبراء لمساعدتك على تحويل الذكاء الاصطناعي إلى نتائج عملية في شركتك.
          </p>
        </div>

        {/* مميزات إضافية */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 shadow-md hover:shadow-xl transition" data-aos="fade-up" data-aos-delay="500">
            <div className="flex items-center gap-3 mb-4">
              <Target className={iconColor} size={28} />
              <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">
                نتائج فورية
              </h4>
            </div>
            <p className="text-neutral-600 dark:text-neutral-300">
              تطبيق مباشر للأدوات والتقنيات في عملك اليومي
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 shadow-md hover:shadow-xl transition" data-aos="fade-up" data-aos-delay="600">
            <div className="flex items-center gap-3 mb-4">
              <Users className={iconColor} size={28} />
              <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">
                شبكة علاقات
              </h4>
            </div>
            <p className="text-neutral-600 dark:text-neutral-300">
              تواصل مع القادة والخبراء في مجال التكنولوجيا
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 shadow-md hover:shadow-xl transition" data-aos="fade-up" data-aos-delay="700">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className={iconColor} size={28} />
              <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">
                حلول عملية
              </h4>
            </div>
            <p className="text-neutral-600 dark:text-neutral-300">
              استراتيجيات مجربة لزيادة المبيعات والنمو
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportanceSection;
