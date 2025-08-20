// src/components/sponsoring/AboutEvent.jsx
import { Lightbulb, Target, Users, Rocket, Award, Star, Briefcase } from "lucide-react";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const AboutEvent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const iconColor = "text-yellow-500 dark:text-yellow-400";

  const goals = [
    { icon: <Lightbulb className={iconColor} size={28} />, title: "الإلهام", desc: "عرض رؤى تطبيقية تُظهر أثر الذكاء الاصطناعي على الربحية وتجربة الزبون." },
    { icon: <Target className={iconColor} size={28} />, title: "التعليم", desc: "تمكين المشاركين من أدوات وخطوات قابلة للتطبيق فورًا." },
    { icon: <Users className={iconColor} size={28} />, title: "ربط الشبكات", desc: "لقاءات موجّهة بين أرباب العمل، مزوّدي الحلول، والمستثمرين." },
    { icon: <Rocket className={iconColor} size={28} />, title: "دعم المشاريع", desc: "خلق فرص شراكات، عقود تجريبية، وتوأمة مع خبراء." },
  ];

  const highlights = [
    "دراسات حالة جزائرية قابلة للتطبيق",
    "ورش تطبيقية مع خبراء",
    "شبكة علاقات عالية القيمة",
    "أجنحة عرض للرعاة",
  ];

  const audience = [
    "أصحاب المؤسسات",
    "المسيرون والمديرون",
    "رواد التجارة الإلكترونية",
  ];

  const results = [
    "حضور نوعي لا يقل عن 1200 مشارك + 200 VIP.",
    "5+ رعاة عبر مستويات رعاية (Premium / Platinum / Gold / Silver).",
    "تغطيات إعلامية ومخرجات مكتوبة (كتيّب توصيات ما بعد الحدث).",
    "دعم حكومي رسمي للمبادرة.",
  ];

  return (
    <section id="about-event" className="relative py-20 px-4 dark:bg-neutral-900" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* العنوان */}
        <h2 className="text-4xl font-bold text-center mb-8 text-neutral-900 dark:text-white" data-aos="fade-up">
          عن <span className="text-yellow-500">الحدث</span>
        </h2>

        {/* المقدمة */}
        <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed text-center max-w-4xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
          يوم دراسي عملي مخصّص لعرض أفضل الاستخدامات الفعلية للذكاء الاصطناعي داخل سلاسل قيمة التجارة الإلكترونية في الجزائر 
          (من الإعلانات وتخصيص المتجر إلى خدمة العملاء واللوجستيك وغيرها).
          <br />
          <span className="font-medium">
            ما يميّزه: لجنة علمية لانتقاء محتوى تطبيقي؛ دراسات حالة واقعية؛ تشبيك علاقات، ورش مفتوحة؛ أجنحة عرض؛ حضور إعلامي.
          </span>
          <br />
          <span className="font-medium text-yellow-600 dark:text-yellow-400">
            الفئة المستهدفة: 1200 حضور من أصحاب المؤسسات والمسيرين + 200 دعوة VIP منتقاة.
          </span>
        </p>

        {/* ما يميز الحدث */}
        <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-8 text-center" data-aos="fade-up">
          ⭐ ما يميز الحدث
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, i) => (
            <div key={i} className="bg-white dark:bg-neutral-800 rounded-xl p-5 shadow-md hover:shadow-xl transition flex items-center gap-3" data-aos="fade-up" data-aos-delay={i * 100}>
              <Star className={iconColor} size={24} />
              <span className="text-neutral-700 dark:text-neutral-300">{item}</span>
            </div>
          ))}
        </div>

        {/* الفئة المستهدفة */}
        <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-8 text-center" data-aos="fade-up">
          الفئة المستهدفة
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {audience.map((item, i) => (
            <div key={i} className="bg-white dark:bg-neutral-800 rounded-xl p-5 shadow-md hover:shadow-xl transition flex items-center gap-3 justify-center" data-aos="fade-up" data-aos-delay={i * 100}>
              <Briefcase className={iconColor} size={24} />
              <span className="text-neutral-700 dark:text-neutral-300">{item}</span>
            </div>
          ))}
        </div>

        {/* أهداف الحدث */}
        <h3 id="goals" className="text-2xl font-semibold text-neutral-900 dark:text-white mb-8 text-center" data-aos="fade-up">
          أهداف الحدث
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {goals.map((goal, i) => (
            <div key={i} className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-md hover:shadow-xl transition" data-aos="fade-up" data-aos-delay={200 + i * 100}>
              <div className="mb-4">{goal.icon}</div>
              <h4 className="text-lg font-bold mb-2 text-neutral-900 dark:text-white">{goal.title}</h4>
              <p className="text-neutral-600 dark:text-neutral-400">{goal.desc}</p>
            </div>
          ))}
        </div>

        {/* النتائج المتوقعة */}
        <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6 text-center" data-aos="fade-up">
          النتائج المتوقعة
        </h3>
        <ul className="max-w-4xl mx-auto space-y-4">
          {results.map((res, i) => (
            <li key={i} className="flex items-start gap-3 bg-white dark:bg-neutral-800 rounded-lg p-4 shadow-sm hover:shadow-md transition" data-aos="fade-up" data-aos-delay={100 + i * 100}>
              <Award className="text-yellow-500 dark:text-yellow-400 mt-1 flex-shrink-0" size={22} />
              <span className="text-neutral-700 dark:text-neutral-300">{res}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutEvent;
