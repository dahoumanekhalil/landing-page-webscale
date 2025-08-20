import { motion } from "framer-motion";

const BRAND = "#FABC05";

export default function AsideInfo({ fadeInUp }) {
  return (
    <motion.aside
      {...fadeInUp}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="rounded-3xl border border-gray-200 dark:border-neutral-700 
                 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl p-6 shadow-xl hover:shadow-2xl transition"
      whileHover={{ y: -3 }}
      style={{ "--brand": BRAND }}
    >
      <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">معايير القبول</h3>
      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
        <li className="flex items-start gap-2">
          <span className="text-green-500 mt-1">✓</span>
          <span>أن تكون <strong>صاحب شركة</strong> أو <strong>مديراً</strong> على الأقل.</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-500 mt-1">✓</span>
          <span>شركة قائمة (أو قيد النمو) وحجم فريق مبدئي.</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-500 mt-1">✓</span>
          <span>رغبة واضحة في تطبيق تقنيات عملية وأتمتة.</span>
        </li>
      </ul>

      <div className="mt-6 h-px bg-gray-200 dark:bg-neutral-700" />

      <h4 className="mt-6 font-semibold text-gray-900 dark:text-white mb-2">ماذا بعد قبولك؟</h4>
      <ol className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
        <li className="flex gap-2"><span className="font-medium text-[var(--brand)]">1.</span> تستلم بريد قبول مع <strong>رابط دعوة</strong>.</li>
        <li className="flex gap-2"><span className="font-medium text-[var(--brand)]">2.</span> تُفتح لك القنوات المناسبة لباقة الاشتراك.</li>
        <li className="flex gap-2"><span className="font-medium text-[var(--brand)]">3.</span> دعوة لأول بث مباشر وجدولة جلسة تعريف.</li>
      </ol>
    </motion.aside>
  );
}
