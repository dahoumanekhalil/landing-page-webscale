// ContactSection.jsx
"use client";
import { motion } from "framer-motion";
import { Mail, Globe, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const socials = [
  { name: "Facebook", href: "https://facebook.com", icon: <Facebook size={18} /> },
  { name: "Twitter", href: "https://twitter.com", icon: <Twitter size={18} /> },
  { name: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin size={18} /> },
  { name: "Instagram", href: "https://instagram.com", icon: <Instagram size={18} /> },
];

export default function ContactSection({ scrollToSection }) {
  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-yellow-50 via-white to-yellow-100 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900 overflow-hidden"
    >
      {/* خلفية متحركة */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-10 -left-10 w-80 h-80 bg-yellow-300/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-10 right-0 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* العنوان */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            تواصل معنا
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            نسعد بالإجابة عن أسئلتك وتزويدك بالمعلومات اللازمة
          </p>
        </motion.div>

        {/* محتوى الصناديق */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* صندوق معلومات التواصل */}
          <motion.div
  whileHover={{ y: -5 }}
  transition={{ type: "spring", stiffness: 120 }}
  className="rounded-3xl border border-yellow-300/50 
             bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl 
             p-8 shadow-xl hover:shadow-2xl transition"
>
  <h3 className="font-bold text-xl text-[var(--brand)] mb-6">
    معلومات التواصل
  </h3>
  <div className="space-y-6 text-gray-700 dark:text-gray-300">
    <div className="flex items-start gap-4">
      <Mail className="text-[var(--brand)] shrink-0" size={24} />
      <div>
        <p className="font-medium">البريد الإلكتروني</p>
        <a
          href="mailto:webscale.pro@gmail.com"
          className="text-[var(--brand)] hover:underline"
        >
          webscale.pro@gmail.com
        </a>
      </div>
    </div>

              <div className="flex items-start gap-4">
                <Globe className="text-green-600 shrink-0" size={24} />
                <div>
                  <p className="font-medium">الموقع الرسمي</p>
                  <a
                    href="https://www.webscale.pro"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    www.webscale.pro
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <p className="font-medium text-gray-900 dark:text-white mb-3">
                  تابعنا على وسائل التواصل
                </p>
                <div className="flex flex-wrap gap-3">
                  {socials.map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm
                                 text-gray-700 dark:text-gray-300 dark:border-neutral-700 
                                 hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
                    >
                      {social.icon} {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* صندوق الانضمام */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="rounded-3xl border border-gray-200 dark:border-neutral-700 
                       bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl 
                       p-8 shadow-xl hover:shadow-2xl transition"
          >
            <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4">
              انضم الآن
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              إذا كنت صاحب قرار في شركتك، قدِّم طلبك وسنعاودك خلال وقت وجيز.
            </p>
            <button
  onClick={() => scrollToSection("apply")}
  className="w-full rounded-xl  text-white bg-[#FABC05] hover:bg-[#ecc03a]
             px-6 py-3 text-sm font-semibold 
             shadow-md hover:shadow-lg transition"
>
  الانتقال إلى نموذج التقديم
</button>
            <div className="text-xs text-gray-500 dark:text-gray-400 text-center mt-6 space-y-1">
              <p>⏳ أوقات الاستجابة: 24-48 ساعة عمل</p>
              <p>✅ معدل القبول: ~30% من المتقدمين</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


    // 📌 أضف البيانات في الجدول
    // sheet.appendRow([
    //   new Date(), // تاريخ الإرسال
    //   data.name || "",
    //   data.email || "",
    //   data.phone || "",
    //   data.jobTitle || "",
    //   data.company || "",
    //   data.sector || "",
    //   data.employees || "",
    //   data.subscription || "",
    //   data.notes || "",
    // ]);




    // var userMessage = `
    // مرحباً ${data.name},
    
    // شكراً لتسجيلك في ملتقى WEBSCALE.
    // هذه نسخة من بياناتك المسجلة:
    
    // البريد الإلكتروني: ${data.email}
    // الهاتف: ${data.phone}
    // اسم الوظيفة: ${data.jobTitle}
    // الشركة: ${data.company}

    // القطاع: ${data.sector}
    // العامل: ${data.employees}
    
    // الملاحظة: ${data.subscription}
    
    // النقاط الاضافية: ${data.notes}

    // سوف نتواصل معك قريباً.
    // فريق WEBSCALE
    // `;
    
        // 📌 نص الإيميل الذي سيتم إرساله لك
    //     var adminMessage = `
    // 📢 تسجيل جديد في ملتقى WEBSCALE:
    
    // اسم الشركة: ${data.companyName}
    // القطاع: ${data.sector} ${data.otherSector}
    // حجم الشركة: ${data.companySize}
    // الولاية: ${data.wilaya}
    
    // الاسم الكامل: ${data.fullName}
    // المنصب: ${data.role}
    // البريد الإلكتروني: ${data.email}
    // الهاتف: ${data.phone}
    
    // نوع الرعاية: ${data.sponsorshipType} ${data.otherSponsorType}
    // أهداف الرعاية: ${data.sponsorshipGoals} ${data.otherGoal}
    // الميزانية: ${data.budget}
    
    // ملاحظات إضافية: ${data.notes}
    // `;

//     // 🟣 إضافة البيانات كسطر جديد
//     sheet.appendRow([
//       new Date(),                 // Timestamp
//       data.name || "",
//       data.email || "",
//       data.phone || "",
//       data.jobTitle || "",
//       data.company || "",
//       data.sector || "",
//       data.employees || "",
//       data.subscription || "",
//       data.notes || ""
//     ]);
