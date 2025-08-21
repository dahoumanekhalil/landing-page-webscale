// src/components/registration/RegistrationForm.jsx 
"use client";
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OptionPills from "./OptionPills";

const BRAND = "#FABC05";
const SCRIPT_URL = import.meta.env.VITE_REGISTRATION_SCRIPT_URL;

const fieldBase =
  "w-full rounded-xl border px-3 py-2 outline-none transition " +
  "border-gray-300 bg-white text-gray-900 " +
  "dark:border-neutral-600 dark:bg-neutral-800 dark:text-gray-100 " +
  "focus:border-[var(--brand)] focus:ring-2 focus:ring-[color:var(--brand)]/40";

const labelBase =
  "block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200";

const errorText = "mt-1 text-xs text-red-600 dark:text-red-400";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  jobTitle: "",
  company: "",
  sector: "",
  employees: "",
  subscription: "",
  notes: "",
  honey: "",
};

export default function RegistrationForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState(null); // {type, message}

  // إغلاق النافذة تلقائيًا بعد 5 ثوانٍ
  useEffect(() => {
    if (modal) {
      const timer = setTimeout(() => setModal(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [modal]);

  const disabled = useMemo(() => {
    return (
      isSubmitting ||
      !(
        form.name &&
        form.email &&
        form.phone &&
        form.jobTitle &&
        form.company &&
        form.sector &&
        form.employees &&
        form.subscription
      )
    );
  }, [form, isSubmitting]);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "هذا الحقل مطلوب";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "بريد غير صحيح";
    if (!form.phone.trim()) e.phone = "هذا الحقل مطلوب";
    if (!form.jobTitle) e.jobTitle = "اختر المسمى الوظيفي";
    if (!form.company.trim()) e.company = "هذا الحقل مطلوب";
    if (!form.sector.trim()) e.sector = "هذا الحقل مطلوب";
    if (!form.employees) e.employees = "اختر عدد الموظفين";
    if (!form.subscription) e.subscription = "اختر خيار الاشتراك";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.honey) return;
  
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;
  
    setIsSubmitting(true);
  
    try {
      const payload = {
        ...form,
        timestamp: new Date().toISOString(),
        source: "webscale-landing",
      };
  
      // ✅ تجهيز FormData
      const formPayload = new FormData();
      Object.entries(payload).forEach(([key, val]) => {
        formPayload.append(key, val);
      });
  
      // ✅ إرسال الطلب بدون headers (CORS-friendly)
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        body: formPayload,
      });
  
      const data = await res.json().catch(() => ({}));
      console.log("Response from server:", data);
  
      if (res.ok && data.status === "success") {
        setModal({
          type: "success",
          message: "✅ تم إرسال طلبك بنجاح. سنراجع بياناتك ونتواصل معك قريبًا.",
        });
        setForm(initialForm);
      } else {
        setModal({
          type: "error",
          message: "⚠️ تعذر إرسال الطلب. حاول مرة أخرى.",
        });
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setModal({
        type: "error",
        message: "⚠️ حدث خطأ غير متوقع. تحقق من اتصالك وحاول مجددًا.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <>
      {/* ✅ نافذة منبثقة */}
      <AnimatePresence>
        {modal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`max-w-md w-full rounded-2xl p-6 shadow-xl text-center relative ${
                modal.type === "success"
                  ? "bg-green-50 border border-green-300 text-green-800"
                  : "bg-red-50 border border-red-300 text-red-800"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold mb-3">
                {modal.type === "success" ? "🎉 نجاح" : "⚠️ خطأ"}
              </h3>
              <p className="leading-relaxed">{modal.message}</p>
              <button
                onClick={() => setModal(null)}
                className="mt-5 px-4 py-2 rounded-xl bg-[var(--brand)] text-black font-medium shadow hover:shadow-lg transition"
              >
                إغلاق
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ الفورم */}
      <motion.div id="register"
        transition={{ duration: 0.6 }}
        className="lg:col-span-2 rounded-3xl border border-gray-200 dark:border-neutral-700 
                   bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl p-8 shadow-xl hover:shadow-2xl transition"
        whileHover={{ y: -3 }}
      >
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* بقية الحقول كما عندك */}
          {/* الاسم الكامل */}
          <div>
            <label className={labelBase}>
              الاسم الكامل <span className="text-red-500">*</span>
            </label>
            <input
              className={fieldBase}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && <div className={errorText}>{errors.name}</div>}
          </div>

          {/* البريد الإلكتروني */}
         <div>
           <label className={labelBase}>
             البريد الإلكتروني <span className="text-red-500">*</span>
           </label>
           <input
            type="email"
            className={fieldBase}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && <div className={errorText}>{errors.email}</div>}
        </div>

        {/* رقم الهاتف */}
        <div>
          <label className={labelBase}>
            رقم الهاتف (واتساب مفضل) <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            className={fieldBase}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="مثال: 2136xxxxxxx+"
          />
          {errors.phone && <div className={errorText}>{errors.phone}</div>}
        </div>

        {/* المسمى الوظيفي */}
        <div>
          <label className={labelBase}>
            المسمى الوظيفي <span className="text-red-500">*</span>
          </label>
          <select
            className={fieldBase}
            value={form.jobTitle}
            onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
          >
            <option value="">اختر</option>
            <option value="صاحب شركة">صاحب شركة</option>
            <option value="مدير أو مسير شركة">مدير أو مسير شركة</option>
            <option value="وظيفة أخرى">وظيفة أخرى</option>
          </select>
          {errors.jobTitle && (
            <div className={errorText}>{errors.jobTitle}</div>
          )}
        </div>

        {/* اسم المؤسسة */}
        <div>
          <label className={labelBase}>
            اسم المؤسسة <span className="text-red-500">*</span>
          </label>
          <input
            className={fieldBase}
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
          />
          {errors.company && <div className={errorText}>{errors.company}</div>}
        </div>

        {/* القطاع */}
        <div>
          <label className={labelBase}>
            القطاع الذي تعمل فيه <span className="text-red-500">*</span>
          </label>
          <input
            className={fieldBase}
            value={form.sector}
            onChange={(e) => setForm({ ...form, sector: e.target.value })}
            placeholder="تقنية، تجارة، تعليم، خدمات... إلخ"
          />
          {errors.sector && <div className={errorText}>{errors.sector}</div>}
        </div>

        {/* عدد الموظفين */}
        <OptionPills
          label="عدد الموظفين"
          required
          name="employees"
          options={["أقل من 5", "من 5 إلى 20", "من 20 الى 100","اكثر من 100"]}
          value={form.employees}
          onChange={(val) => setForm({ ...form, employees: val })}
        />


        {/* الاشتراك */}
        <OptionPills
          label="اختر الاشتراك المناسب"
          required
          name="subscription"
          options={["STARTER","VIP","VIP+"]}
          value={form.subscription}
          onChange={(val) => setForm({ ...form, subscription: val })}
        />

        {/* ملاحظات */}
        <div className="md:col-span-2">
          <label className={labelBase}>ملاحظات إضافية أو استفسار؟</label>
          <textarea
            rows={4}
            className={fieldBase + " resize-none"}
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
          />
        </div>

          {/* زر الإرسال */}
          <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-2">
            <motion.button
              whileHover={{ scale: disabled ? 1 : 1.03 }}
              whileTap={{ scale: disabled ? 1 : 0.97 }}
              type="submit"
              disabled={disabled}
              className="rounded-xl px-6 py-3 text-sm font-semibold shadow-md hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed
                         text-black bg-[var(--brand)]"
            >
              {isSubmitting ? "جاري الإرسال..." : "إرسال الطلب"}
            </motion.button>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              بالنقر على "إرسال الطلب"، أوافق على معالجة بياناتي لأغراض التقييم
              والتواصل.
            </p>
          </div>
        </form>
      </motion.div>
    </>
  );
}


// "use client";
// import { useState, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import OptionPills from "./OptionPills";

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

// export default function RegistrationForm() {
//   const [form, setForm] = useState(initialForm);
//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [status, setStatus] = useState(null);

//   const disabled = useMemo(() => {
//     return (
//       isSubmitting ||
//       !(
//         form.name &&
//         form.email &&
//         form.phone &&
//         form.jobTitle &&
//         form.company &&
//         form.sector &&
//         form.employees &&
//         form.subscription
//       )
//     );
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
    
//       const data = await res.json(); // 👈 قراءة الرد
//       console.log("Response from server:", data);
    
//       if (res.ok && data.status === "success") {
//         setStatus("success");
//         setForm(initialForm);
//       } else {
//         setStatus("error");
//       }
//     } catch (err) {
//       console.error("Fetch error:", err);
//       setStatus("error");
//     } finally {
//       setIsSubmitting(false);
//     }
    
//   };

//   return (
//     <motion.div
//       transition={{ duration: 0.6 }}
//       className="lg:col-span-2 rounded-3xl border border-gray-200 dark:border-neutral-700 
//                  bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl p-8 shadow-xl hover:shadow-2xl transition"
//       whileHover={{ y: -3 }}
//     >
//       <AnimatePresence>
//         {status === "success" && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             className="mb-6 rounded-xl border border-green-200 bg-green-50 dark:bg-green-900/30 px-4 py-3 text-sm text-green-700 dark:text-green-300"
//           >
//             ✅ تم إرسال طلبك بنجاح. سنراجع بياناتك ونتواصل معك قريبًا.
//           </motion.div>
//         )}
//         {status === "error" && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             className="mb-6 rounded-xl border border-red-200 bg-red-50 dark:bg-red-900/30 px-4 py-3 text-sm text-red-700 dark:text-red-300"
//           >
//             ⚠️ تعذر إرسال الطلب. حاول مرة أخرى.
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <form
//         onSubmit={handleSubmit}
//         className="grid grid-cols-1 md:grid-cols-2 gap-6"
//       >
//         {/* حقل فخ للسبام */}
//         <input
//           type="text"
//           name="website"
//           value={form.honey}
//           onChange={(e) => setForm({ ...form, honey: e.target.value })}
//           className="hidden"
//           tabIndex={-1}
//           autoComplete="off"
//         />

//         {/* الاسم الكامل */}
//         <div>
//           <label className={labelBase}>
//             الاسم الكامل <span className="text-red-500">*</span>
//           </label>
//           <input
//             className={fieldBase}
//             value={form.name}
//             onChange={(e) => setForm({ ...form, name: e.target.value })}
//           />
//           {errors.name && <div className={errorText}>{errors.name}</div>}
//         </div>

//         {/* البريد الإلكتروني */}
//         <div>
//           <label className={labelBase}>
//             البريد الإلكتروني <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="email"
//             className={fieldBase}
//             value={form.email}
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//           />
//           {errors.email && <div className={errorText}>{errors.email}</div>}
//         </div>

//         {/* رقم الهاتف */}
//         <div>
//           <label className={labelBase}>
//             رقم الهاتف (واتساب مفضل) <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="tel"
//             className={fieldBase}
//             value={form.phone}
//             onChange={(e) => setForm({ ...form, phone: e.target.value })}
//             placeholder="مثال: 2136xxxxxxx+"
//           />
//           {errors.phone && <div className={errorText}>{errors.phone}</div>}
//         </div>

//         {/* المسمى الوظيفي */}
//         <div>
//           <label className={labelBase}>
//             المسمى الوظيفي <span className="text-red-500">*</span>
//           </label>
//           <select
//             className={fieldBase}
//             value={form.jobTitle}
//             onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
//           >
//             <option value="">اختر</option>
//             <option value="صاحب شركة">صاحب شركة</option>
//             <option value="مدير أو مسير شركة">مدير أو مسير شركة</option>
//             <option value="وظيفة أخرى">وظيفة أخرى</option>
//           </select>
//           {errors.jobTitle && (
//             <div className={errorText}>{errors.jobTitle}</div>
//           )}
//         </div>

//         {/* اسم المؤسسة */}
//         <div>
//           <label className={labelBase}>
//             اسم المؤسسة <span className="text-red-500">*</span>
//           </label>
//           <input
//             className={fieldBase}
//             value={form.company}
//             onChange={(e) => setForm({ ...form, company: e.target.value })}
//           />
//           {errors.company && <div className={errorText}>{errors.company}</div>}
//         </div>

//         {/* القطاع */}
//         <div>
//           <label className={labelBase}>
//             القطاع الذي تعمل فيه <span className="text-red-500">*</span>
//           </label>
//           <input
//             className={fieldBase}
//             value={form.sector}
//             onChange={(e) => setForm({ ...form, sector: e.target.value })}
//             placeholder="تقنية، تجارة، تعليم، خدمات... إلخ"
//           />
//           {errors.sector && <div className={errorText}>{errors.sector}</div>}
//         </div>

//         {/* عدد الموظفين */}
//         <OptionPills
//           label="عدد الموظفين"
//           required
//           name="employees"
//           options={["أقل من 5", "من 5 إلى 20", "أكثر من 20"]}
//           value={form.employees}
//           onChange={(val) => setForm({ ...form, employees: val })}
//         />

//         {/* الاشتراك */}
//         <OptionPills
//           label="هل أنت مهتم بالاشتراك السنوي في WEBSCALE VIP؟"
//           required
//           name="subscription"
//           options={["نعم مهتم", "أريد تفاصيل أخرى", "غير مهتم حالياً"]}
//           value={form.subscription}
//           onChange={(val) => setForm({ ...form, subscription: val })}
//         />

//         {/* ملاحظات */}
//         <div className="md:col-span-2">
//           <label className={labelBase}>ملاحظات إضافية أو استفسار؟</label>
//           <textarea
//             rows={4}
//             className={fieldBase + " resize-none"}
//             value={form.notes}
//             onChange={(e) => setForm({ ...form, notes: e.target.value })}
//           />
//         </div>

//         {/* زر الإرسال */}
//         <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-2">
//           <motion.button
//             whileHover={{ scale: disabled ? 1 : 1.03 }}
//             whileTap={{ scale: disabled ? 1 : 0.97 }}
//             type="submit"
//             disabled={disabled}
//             className="rounded-xl px-6 py-3 text-sm font-semibold shadow-md hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed
//                        text-black bg-[var(--brand)]"
//           >
//             {isSubmitting ? "جاري الإرسال..." : "إرسال الطلب"}
//           </motion.button>
//           <p className="text-xs text-gray-500 dark:text-gray-400">
//             بالنقر على "إرسال الطلب"، أوافق على معالجة بياناتي لأغراض التقييم
//             والتواصل.
//           </p>
//         </div>
//       </form>
//     </motion.div>
//   );
// }
