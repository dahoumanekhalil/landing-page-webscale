// PartnersSection.jsx
"use client";
import { motion } from "framer-motion";

const partners = [
  { name: "Webscale", logo: "/logos/webscale.png" },
  { name: "Google", logo: "/logos/google.png" },
  { name: "AWS", logo: "/logos/aws.png" },
  { name: "Microsoft", logo: "/logos/microsoft.png" },
  { name: "OpenAI", logo: "/logos/openai.png" },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* العنوان */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            شركاؤنا ورعاتنا
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            شركاء مختارون يدعمون نجاح هذا الملتقى · يتم تحديث القائمة باستمرار
          </p>
        </div>

        {/* صندوق الشركاء */}
        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-12 animate-marquee"
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[...partners, ...partners].map((p, i) => (
              <div
                key={i}
                className="flex items-center justify-center min-w-[160px] h-20 rounded-2xl border bg-white shadow-sm dark:bg-neutral-800 dark:border-neutral-700"
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-12 object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
