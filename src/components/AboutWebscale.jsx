// src/components/AboutWebscale.jsx
import { Eye, Rocket, Star } from "lucide-react";

const AboutWebscale = () => {
  const values = ["الحكمة", "الابتكار", "التطبيق", "الشفافية", "الشراكة", "الأثر"];

  return (
    <section
      id="about-webscale"
      dir="rtl"
      className="py-20 px-4 dark:bg-neutral-900 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto space-y-6" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-neutral-900 dark:text-white text-center">
          من هي <span className="text-[#fbbc05]">واب سكايل؟</span>
        </h2>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed text-center">
          WEBSCALE منصة جزائرية تمكّن أصحاب المؤسسات ومسيريها من تحويل التكنولوجيا
          والذكاء الاصطناعي إلى ابتكار عملي لتحقيق أقصى نمو في مشاريعهم.
        </p>

        {/* الرؤية */}
        <div className="flex items-start gap-3">
          <Eye className="text-[#fbbc05] mt-1" size={24} />
          <div>
            <h3 className="font-semibold text-neutral-900 dark:text-white">الرؤية</h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              أن تكون WEBSCALE المرجع الجزائري لبيئة الأعمال الحديثة.
            </p>
          </div>
        </div>

        {/* الرسالة */}
        <div className="flex items-start gap-3">
          <Rocket className="text-[#fbbc05] mt-1" size={24} />
          <div>
            <h3 className="font-semibold text-neutral-900 dark:text-white">الرسالة</h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              تمكين القادة من فهم عميق وتطبيق فوري عبر محتوى تطبيقي، مجتمعات مغلقة،
              وبرامج بث أسبوعية مع خبراء.
            </p>
          </div>
        </div>

        {/* القيم */}
        <div className="flex items-start gap-3">
          <Star className="text-[#fbbc05] mt-1" size={24} />
          <div>
            <h3 className="font-semibold text-neutral-900 dark:text-white">القيم</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {values.map((val, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm rounded-full bg-[#fbbc05]/20 text-[#b58600] dark:bg-[#fbbc05]/10 dark:text-[#fbbc05] font-medium"
                >
                  {val}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWebscale;
