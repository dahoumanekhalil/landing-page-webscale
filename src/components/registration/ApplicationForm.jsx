import { motion } from "framer-motion";
import RegistrationForm from "./RegistrationForm";
import AsideInfo from "./AsideInfo";

const BRAND = "#FABC05";
const fadeInUp = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

export default function ApplicationForm() {
  return (
    <section
      id="apply"
      dir="rtl"
      className="relative py-20 md:py-28 bg-gradient-to-b from-yellow-50 via-white to-yellow-100 
                 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900 overflow-hidden"
      style={{ "--brand": BRAND }}
    >
      <div className="container relative mx-auto px-4">
        <motion.div {...fadeInUp} transition={{ duration: 0.8 }} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            قدِّم طلبك للانضمام
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            المجتمع مغلق وبالقبول فقط. نراجع الطلبات ونرسل دعوة خاصة للمرشَّحين المؤهلين.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
          <RegistrationForm />
          <AsideInfo fadeInUp={fadeInUp} />
        </div>
      </div>
    </section>
  );
}










// // src/components/registration/ApplicationForm.jsx
// "use client";
// import { useMemo, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const BRAND = "#FABC05";
// const SCRIPT_URL = import.meta.env.VITE_REGISTRATION_SCRIPT_URL;

// const fieldBase =
//   "w-full rounded-xl border px-3 py-2 outline-none transition " +
//   "border-gray-300 bg-white text-gray-900 " +
//   "dark:border-neutral-600 dark:bg-neutral-800 dark:text-gray-100 " +
//   "focus:border-[var(--brand)] focus:ring-2 focus:ring-[color:var(--brand)]/40";

// const labelBase =
//   "block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200";

// const errorText = "mt-1 text-xs text-red-600 dark:text-red-400";

// function OptionPills({ label, options, value, onChange, required, name }) {
//   const groupRef = useRef(null);

//   const handleKeyDown = (e) => {
//     const idx = options.findIndex((o) => o === value);
//     if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
//       e.preventDefault();
//       const delta = e.key === "ArrowRight" ? -1 : 1;
//       const next =
//         options[
//           idx === -1 ? 0 : (idx + delta + options.length) % options.length
//         ];
//       onChange(next);
//     }
//   };

//   return (
//     <div className="md:col-span-2">
//       <label className={labelBase}>
//         {label} {required && <span className="text-red-500">*</span>}
//       </label>

//       <div
//         ref={groupRef}
//         role="radiogroup"
//         aria-label={label}
//         onKeyDown={handleKeyDown}
//         className="flex flex-wrap gap-2"
//       >
//         {options.map((opt) => {
//           const active = value === opt;
//           return (
//             <motion.button
//               key={opt}
//               type="button"
//               role="radio"
//               aria-checked={active}
//               onClick={() => onChange(opt)}
//               whileHover={{ y: -2 }}
//               whileTap={{ scale: 0.97 }}
//               className={`px-4 py-2 rounded-xl border text-sm font-medium transition-all focus:outline-none focus-visible:ring-2
//                 ${
//                   active
//                     ? "bg-[var(--brand)] text-white border-[var(--brand)] shadow-md"
//                     : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 " +
//                       "dark:bg-neutral-800 dark:text-gray-300 dark:border-neutral-600 dark:hover:bg-neutral-700"
//                 }`}
//               style={{ "--brand": BRAND }}
//             >
//               {opt}
//             </motion.button>
//           );
//         })}
//       </div>

//       {required && (
//         <input
//           tabIndex={-1}
//           readOnly
//           value={value ? "chosen" : ""}
//           required
//           className="sr-only"
//           name={name}
//         />
//       )}
//     </div>
//   );
// }

// const initialForm = {
//   name: "",
//   email: "",
//   phone: "",
//   jobTitle: "",
//   company: "",
//   sector: "",
//   employees: "",
//   subscription: "",
//   notes: "",
//   honey: "",
// };

// const fadeInUp = {
//   initial: { opacity: 0, y: 40 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
// };

// export default function ApplicationForm() {
//   const [form, setForm] = useState(initialForm);
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [status, setStatus] = useState(null);

//   const disabled = useMemo(() => {
//     const requiredFilled =
//       form.name &&
//       form.email &&
//       form.phone &&
//       form.jobTitle &&
//       form.company &&
//       form.sector &&
//       form.employees &&
//       form.subscription;
//     return isSubmitting || !requiredFilled;
//   }, [form, isSubmitting]);

//   const validate = () => {
//     const e = {};
//     if (!form.name.trim()) e.name = "هذا الحقل مطلوب";
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
//       e.email = "بريد غير صحيح";
//     if (!form.phone.trim()) e.phone = "هذا الحقل مطلوب";
//     if (!form.jobTitle) e.jobTitle = "اختر المسمى الوظيفي";
//     if (!form.company.trim()) e.company = "هذا الحقل مطلوب";
//     if (!form.sector.trim()) e.sector = "هذا الحقل مطلوب";
//     if (!form.employees) e.employees = "اختر عدد الموظفين";
//     if (!form.subscription) e.subscription = "اختر خيار الاشتراك";
//     return e;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (form.honey) return;

//     const v = validate();
//     setErrors(v);
//     if (Object.keys(v).length) {
//       setStatus(null);
//       return;
//     }

//     setIsSubmitting(true);
//     setStatus(null);

//     try {
//       const payload = {
//         ...form,
//         timestamp: new Date().toISOString(),
//         source: "webscale-landing",
//       };

//       const res = await fetch(SCRIPT_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (!res.ok) throw new Error("Bad response");

//       setStatus("success");
//       setForm(initialForm);
//     } catch (err) {
//       console.error(err);
//       setStatus("error");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section
//       id="apply"
//       dir="rtl"
//       className="relative py-20 md:py-28 bg-gradient-to-b from-yellow-50 via-white to-yellow-100 
//                  dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900 overflow-hidden"
//       style={{ "--brand": BRAND }}
//     >
//       {/* خلفية مزخرفة متناسقة مع Hero */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div
//           className="absolute -top-10 -right-10 w-72 h-72 bg-[var(--brand)]/20 rounded-full blur-3xl opacity-70"
//           animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.8, 0.6] }}
//           transition={{ duration: 6, repeat: Infinity }}
//         />
//         <motion.div
//           className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--brand)]/30 rounded-full blur-3xl opacity-70"
//           animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.7, 0.5] }}
//           transition={{ duration: 8, repeat: Infinity }}
//         />
//       </div>

//       <div className="container relative mx-auto px-4">
//         {/* العنوان */}
//         <motion.div
//           {...fadeInUp}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-14"
//         >
//           <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
//             قدِّم طلبك للانضمام
//           </h2>
//           <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             المجتمع مغلق وبالقبول فقط. نراجع الطلبات ونرسل دعوة خاصة للمرشَّحين
//             المؤهلين.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-3 gap-10">
//           {/* النموذج */}
//           <motion.div
//             {...fadeInUp}
//             transition={{ duration: 0.6 }}
//             className="lg:col-span-2 rounded-3xl border border-gray-200 dark:border-neutral-700 
//                        bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl p-8 shadow-xl hover:shadow-2xl transition"
//             whileHover={{ y: -3 }}
//           >
//             <AnimatePresence>
//               {status === "success" && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   className="mb-6 rounded-xl border border-green-200 bg-green-50 dark:bg-green-900/30 dark:border-green-800 px-4 py-3 text-sm text-green-700 dark:text-green-300"
//                 >
//                   ✅ تم إرسال طلبك بنجاح. سنراجع بياناتك ونتواصل معك قريبًا.
//                 </motion.div>
//               )}
//               {status === "error" && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   className="mb-6 rounded-xl border border-red-200 bg-red-50 dark:bg-red-900/30 dark:border-red-800 px-4 py-3 text-sm text-red-700 dark:text-red-300"
//                 >
//                   ⚠️ تعذر إرسال الطلب. تأكد من الاتصال أو حدّث الصفحة وحاول مرة
//                   أخرى.
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             <form
//               onSubmit={handleSubmit}
//               className="grid grid-cols-1 md:grid-cols-2 gap-6"
//             >
//               {/* حقل فخ للسبام */}
//               <input
//                 type="text"
//                 name="website"
//                 value={form.honey}
//                 onChange={(e) => setForm({ ...form, honey: e.target.value })}
//                 className="hidden"
//                 tabIndex={-1}
//                 autoComplete="off"
//               />

//               {/* الاسم الكامل */}
//               <div>
//                 <label className={labelBase}>
//                   الاسم الكامل <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   className={fieldBase}
//                   value={form.name}
//                   onChange={(e) => setForm({ ...form, name: e.target.value })}
//                 />
//                 {errors.name && <div className={errorText}>{errors.name}</div>}
//               </div>

//               {/* البريد الإلكتروني */}
//               <div>
//                 <label className={labelBase}>
//                   البريد الإلكتروني <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="email"
//                   className={fieldBase}
//                   value={form.email}
//                   onChange={(e) => setForm({ ...form, email: e.target.value })}
//                 />
//                 {errors.email && (
//                   <div className={errorText}>{errors.email}</div>
//                 )}
//               </div>

//               {/* رقم الهاتف */}
//               <div>
//                 <label className={labelBase}>
//                   رقم الهاتف (واتساب مفضل) <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="tel"
//                   className={fieldBase}
//                   value={form.phone}
//                   onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                   placeholder="مثال: 2136xxxxxxx+"
//                 />
//                 {errors.phone && (
//                   <div className={errorText}>{errors.phone}</div>
//                 )}
//               </div>

//               {/* المسمى الوظيفي */}
//               <div>
//                 <label className={labelBase}>
//                   المسمى الوظيفي <span className="text-red-500">*</span>
//                 </label>
//                 <select
//                   className={fieldBase}
//                   value={form.jobTitle}
//                   onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
//                 >
//                   <option value="">اختر</option>
//                   <option value="صاحب شركة">صاحب شركة</option>
//                   <option value="مدير أو مسير شركة">مدير أو مسير شركة</option>
//                   <option value="وظيفة أخرى">وظيفة أخرى</option>
//                 </select>
//                 {errors.jobTitle && (
//                   <div className={errorText}>{errors.jobTitle}</div>
//                 )}
//               </div>

//               {/* اسم المؤسسة */}
//               <div>
//                 <label className={labelBase}>
//                   اسم المؤسسة <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   className={fieldBase}
//                   value={form.company}
//                   onChange={(e) => setForm({ ...form, company: e.target.value })}
//                 />
//                 {errors.company && (
//                   <div className={errorText}>{errors.company}</div>
//                 )}
//               </div>

//               {/* القطاع */}
//               <div>
//                 <label className={labelBase}>
//                   القطاع الذي تعمل فيه <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   className={fieldBase}
//                   value={form.sector}
//                   onChange={(e) => setForm({ ...form, sector: e.target.value })}
//                   placeholder="تقنية، تجارة، تعليم، خدمات... إلخ"
//                 />
//                 {errors.sector && (
//                   <div className={errorText}>{errors.sector}</div>
//                 )}
//               </div>

//               {/* عدد الموظفين */}
//               <OptionPills
//                 label="عدد الموظفين"
//                 required
//                 name="employees"
//                 options={["أقل من 5", "من 5 إلى 20", "أكثر من 20"]}
//                 value={form.employees}
//                 onChange={(val) => setForm({ ...form, employees: val })}
//               />
//               {errors.employees && (
//                 <div className="md:col-span-2">
//                   <div className={errorText}>{errors.employees}</div>
//                 </div>
//               )}

//               {/* الاشتراك */}
//               <OptionPills
//                 label="هل أنت مهتم بالاشتراك السنوي في WEBSCALE VIP؟"
//                 required
//                 name="subscription"
//                 options={[
//                   "نعم مهتم",
//                   "أريد تفاصيل أخرى",
//                   "غير مهتم حالياً",
//                 ]}
//                 value={form.subscription}
//                 onChange={(val) => setForm({ ...form, subscription: val })}
//               />
//               {errors.subscription && (
//                 <div className="md:col-span-2">
//                   <div className={errorText}>{errors.subscription}</div>
//                 </div>
//               )}

//               {/* ملاحظات */}
//               <div className="md:col-span-2">
//                 <label className={labelBase}>ملاحظات إضافية أو استفسار؟</label>
//                 <textarea
//                   rows={4}
//                   className={fieldBase + " resize-none"}
//                   value={form.notes}
//                   onChange={(e) => setForm({ ...form, notes: e.target.value })}
//                 />
//               </div>

//               {/* زر الإرسال */}
//               <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-2">
//                 <motion.button
//                   whileHover={{ scale: disabled ? 1 : 1.03 }}
//                   whileTap={{ scale: disabled ? 1 : 0.97 }}
//                   type="submit"
//                   disabled={disabled}
//                   className="rounded-xl px-6 py-3 text-sm font-semibold shadow-md hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed
//                              text-black bg-[var(--brand)]"
//                 >
//                   {isSubmitting ? "جاري الإرسال..." : "إرسال الطلب"}
//                 </motion.button>
//                 <p className="text-xs text-gray-500 dark:text-gray-400">
//                   بالنقر على "إرسال الطلب"، أوافق على معالجة بياناتي لأغراض التقييم والتواصل.
//                 </p>
//               </div>
//             </form>
//           </motion.div>

//           {/* Aside */}
//           <motion.aside
//             {...fadeInUp}
//             transition={{ duration: 0.6, delay: 0.15 }}
//             className="rounded-3xl border border-gray-200 dark:border-neutral-700 
//                        bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl p-6 shadow-xl hover:shadow-2xl transition"
//             whileHover={{ y: -3 }}
//           >
//             <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">
//               معايير القبول
//             </h3>
//             <ul className="space-y-2 text-gray-700 dark:text-gray-300">
//               <li className="flex items-start gap-2">
//                 <span className="text-green-500 mt-1">✓</span>
//                 <span>
//                   أن تكون <strong>صاحب شركة</strong> أو <strong>مديراً</strong> على
//                   الأقل.
//                 </span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <span className="text-green-500 mt-1">✓</span>
//                 <span>شركة قائمة (أو قيد النمو) وحجم فريق مبدئي.</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <span className="text-green-500 mt-1">✓</span>
//                 <span>رغبة واضحة في تطبيق تقنيات عملية وأتمتة.</span>
//               </li>
//             </ul>

//             <div className="mt-6 h-px bg-gray-200 dark:bg-neutral-700" />

//             <h4 className="mt-6 font-semibold text-gray-900 dark:text-white mb-2">
//               ماذا بعد قبولك؟
//             </h4>
//             <ol className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
//               <li className="flex gap-2">
//                 <span className="font-medium text-[var(--brand)]">1.</span>
//                 <span>
//                   تستلم بريد قبول يتضمن <strong>رابط دعوة خاص</strong> للـ Circle.
//                 </span>
//               </li>
//               <li className="flex gap-2">
//                 <span className="font-medium text-[var(--brand)]">2.</span>
//                 <span>تُفتح لك القنوات المناسبة لباقة الاشتراك.</span>
//               </li>
//               <li className="flex gap-2">
//                 <span className="font-medium text-[var(--brand)]">3.</span>
//                 <span>دعوة لأول بث مباشر وجدولة جلسة تعريف سريعة.</span>
//               </li>
//             </ol>
//           </motion.aside>
//         </div>
//       </div>
//     </section>
//   );
// }
