// src/components/registration/RegistrationForm.jsx 
"use client";
import { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OptionPills from "./OptionPills";
import AlgeriaWilayas from "../shared/AlgeriaWilayas";

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
  wilaya: "",
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

  // ✅ refs لكل الحقول
  const fieldRefs = {
    name: useRef(null),
    email: useRef(null),
    phone: useRef(null),
    jobTitle: useRef(null),
    company: useRef(null),
    wilaya: useRef(null),
    sector: useRef(null),
    employees: useRef(null),
    subscription: useRef(null),
  };

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
    if (!form.wilaya) e.wilaya = "اختر الولاية";
    if (!form.sector.trim()) e.sector = "هذا الحقل مطلوب";
    if (!form.employees) e.employees = "اختر عدد الموظفين";
    if (!form.subscription) e.subscription = "اختر خيار الاشتراك";
    return e;
  };

  const validatePhone = (phone) => {
    const regex = /^\+?\d{9,}$/;
    return regex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.honey) return; // 🐝 حماية من bots

    const v = validate();
    setErrors(v);

    // ✅ إذا فيه أخطاء → مرر للشاشة لأول خطأ
    if (Object.keys(v).length) {
      const firstErrorField = Object.keys(v)[0];
      if (fieldRefs[firstErrorField]?.current) {
        fieldRefs[firstErrorField].current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        fieldRefs[firstErrorField].current.focus();
      }
      return;
    }

    // ✅ تحقق إضافي للهاتف
    if (!validatePhone(form.phone)) {
      const err = {
        ...errors,
        phone:
          "⚠️ الرجاء إدخال رقم هاتف صحيح (9 أرقام على الأقل، مع إمكانية + في البداية).",
      };
      setErrors(err);
      fieldRefs.phone.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      fieldRefs.phone.current.focus();
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        ...form,
        timestamp: new Date().toISOString(),
        source: "webscale-landing",
      };

      const formPayload = new FormData();
      Object.entries(payload).forEach(([key, val]) => {
        formPayload.append(key, val);
      });

      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        body: formPayload,
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.status === "success") {
  setModal({
    type: "success",
    message: "✅ تم تسجيلك بنجاح! سنراجع طلبك ونتواصل معك قريبًا.",
  });
  setForm(initialForm);
} else if (data.status === "error") {
  if (data.message && data.message.includes("البريد مسجل")) {
    // ✅ خطأ خاص بالبريد → نعرضه تحت الحقل
    setErrors({ ...errors, email: "⚠️ هذا البريد الإلكتروني مسجل مسبقًا." });
    fieldRefs.email.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    fieldRefs.email.current.focus();
  } else {
    // باقي الأخطاء العامة
    setModal({
      type: "error",
      message: data.message || "⚠️ حدث خطأ غير متوقع.",
    });
  }
} else {
  setModal({
    type: "error",
    message: "⚠️ لم نتمكن من إتمام العملية. حاول مرة أخرى.",
  });
}

    } catch (err) {
      console.error("Fetch error:", err);
      setModal({
        type: "error",
        message: "⚠️ حدث خطأ في الاتصال. تحقق من الإنترنت وحاول مجددًا.",
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
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`max-w-md w-full rounded-2xl p-6 shadow-2xl text-center relative
              ${
                modal.type === "success"
                  ? "bg-gradient-to-br from-green-50 to-green-100 border border-green-300 text-green-900"
                  : "bg-gradient-to-br from-red-50 to-red-100 border border-red-300 text-red-900"
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-4xl mb-3">
              {modal.type === "success" ? "✅" : "⚠️"}
            </div>
            <h3 className="text-2xl font-bold mb-2">
              {modal.type === "success" ? "تم تسجيل طلبك" : "حدث خطأ"}
            </h3>
            <p className="leading-relaxed text-sm md:text-base">
              {modal.message}
            </p>
            <div className="mt-5 flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setModal(null)}
                className="px-5 py-2 rounded-xl bg-[var(--brand)] text-black font-medium shadow hover:shadow-lg transition"
              >
                إغلاق
              </button>
              {modal.type === "success" && (
                <button
                  onClick={() => {
                    setModal(null);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="px-5 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium shadow hover:shadow-lg transition"
                >
                  العودة للرئيسية
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ الفورم */}
      <motion.div
        id="register"
        transition={{ duration: 0.6 }}
        className="lg:col-span-2 rounded-3xl border border-gray-200 dark:border-neutral-700 
                   bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl p-8 shadow-xl hover:shadow-2xl transition"
        whileHover={{ y: -3 }}
      >
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* الاسم الكامل */}
          <div>
            <label className={labelBase}>
              الاسم الكامل <span className="text-red-500">*</span>
            </label>
            <input
              ref={fieldRefs.name}
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
              ref={fieldRefs.email}
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
              ref={fieldRefs.phone}
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
              ref={fieldRefs.jobTitle}
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
              ref={fieldRefs.company}
              className={fieldBase}
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            />
            {errors.company && <div className={errorText}>{errors.company}</div>}
          </div>

          {/* الولاية */}
          <div>
            <label htmlFor="wilaya" className={labelBase}>
              الولاية <span className="text-red-500">*</span>
            </label>
            <div ref={fieldRefs.wilaya}>
              <AlgeriaWilayas
                value={form.wilaya}
                onChange={(val) => setForm({ ...form, wilaya: val })}
                name="wilaya"
              />
            </div>
            {errors.wilaya && <div className={errorText}>{errors.wilaya}</div>}
          </div>

          {/* القطاع */}
          <div>
            <label className={labelBase}>
              القطاع الذي تعمل فيه <span className="text-red-500">*</span>
            </label>
            <input
              ref={fieldRefs.sector}
              className={fieldBase}
              value={form.sector}
              onChange={(e) => setForm({ ...form, sector: e.target.value })}
              placeholder="تقنية، تجارة، تعليم، خدمات... إلخ"
            />
            {errors.sector && <div className={errorText}>{errors.sector}</div>}
          </div>

          {/* عدد الموظفين */}
          <div ref={fieldRefs.employees} className="md:col-span-2">
            <OptionPills
              label="عدد الموظفين"
              required
              name="employees"
              options={[
                "أقل من 5",
                "من 5 إلى 20",
                "من 20 الى 100",
                "اكثر من 100",
              ]}
              value={form.employees}
              onChange={(val) => setForm({ ...form, employees: val })}
            />
            {errors.employees && (
              <div className={errorText}>{errors.employees}</div>
            )}
          </div>

          {/* الاشتراك */}
          <div ref={fieldRefs.subscription} className="md:col-span-2">
            <OptionPills
              label="اختر الاشتراك المناسب"
              required
              name="subscription"
              options={["STARTER", "VIP", "VIP+", "free"]}
              value={form.subscription}
              onChange={(val) => setForm({ ...form, subscription: val })}
            />
            {errors.subscription && (
              <div className={errorText}>{errors.subscription}</div>
            )}
          </div>

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
