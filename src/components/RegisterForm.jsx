import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AlgeriaWilayas from "./AlgeriaWilayas";

const SCRIPT_URL = import.meta.env.VITE_SCRIPT_URL;


// زر اختيار
const ChoiceButton = ({ value, selected, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`px-4 py-2 rounded-lg border transition text-sm
      ${selected
        ? "bg-gradient-to-r from-[#fbbc05] to-[#715a1a] text-white border-transparent"
        : "border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
      }`}
  >
    {value}
  </button>
);

export default function RegistrationForm() {
  const [status, setStatus] = useState("idle");
  const [formDataState, setFormDataState] = useState({
    sector: "",
    companySize: "",
    wilaya: "",
    sponsorshipType: [],
    sponsorshipGoals: [],
    budget: "",
    consent: false
  });

  const toggleMultiSelect = (field, value) => {
    setFormDataState((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formDataState.consent) {
      alert("يجب الموافقة على التواصل قبل الإرسال");
      return;
    }
    setStatus("loading");
    try {
      const formData = new FormData(e.target);
      Object.entries(formDataState).forEach(([k, v]) =>
        formData.set(k, Array.isArray(v) ? v.join(", ") : v)
      );
      const res = await fetch(SCRIPT_URL, { method: "POST", body: formData });
      if (res.ok) {
        setStatus("success");
        e.target.reset();
        setFormDataState({
          sector: "",
          companySize: "",
          wilaya: "",
          sponsorshipType: [],
          sponsorshipGoals: [],
          budget: "",
          consent: false
        });
        setTimeout(() => setStatus("idle"), 10000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="register" dir="rtl" className="py-20 dark:bg-neutral-900 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white dark:bg-neutral-800 border-none shadow-xl">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold">
              استمارة تسجيل الرعاة <span className="text-[#fbbc05]">ملتقى WEBSCALE</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {status === "success" ? (
              <div className="text-center py-10">
                <h3 className="text-2xl font-bold text-green-500">✅ تم إرسال بياناتك!</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 text-right">
                {/* القسم 1 – معلومات الشركة */}
                <div>
                  <h4 className="font-bold mb-4 text-lg">القسم 1 – معلومات الشركة</h4>
                  <Label>اسم الشركة / المؤسسة *</Label>
                  <Input name="companyName" required className="mb-4" />

                  <Label>المجال أو القطاع</Label>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["تجارة إلكترونية", "خدمات رقمية", "تكنولوجيا", "صناعات صغيرة", "شركات ناشئة", "أخرى"].map((s) => (
                      <ChoiceButton
                        key={s}
                        value={s}
                        selected={formDataState.sector === s}
                        onClick={() => setFormDataState((prev) => ({ ...prev, sector: s }))}
                      />
                    ))}
                  </div>

                  <Label>حجم الشركة</Label>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["أقل من 10 موظفين", "10–50 موظف", "أكثر من 50 موظف"].map((size) => (
                      <ChoiceButton
                        key={size}
                        value={size}
                        selected={formDataState.companySize === size}
                        onClick={() => setFormDataState((prev) => ({ ...prev, companySize: size }))}
                      />
                    ))}
                  </div>

                  <Label>الموقع الجغرافي / الولاية</Label>
                  <AlgeriaWilayas
                    value={formDataState.wilaya} name="location"
                    onChange={(val) => setFormDataState((prev) => ({ ...prev, wilaya: val }))}
                  />
                </div>

                {/* القسم 2 – بيانات التواصل */}
                <div>
                  <h4 className="font-bold mb-4 text-lg">القسم 2 – بيانات التواصل</h4>
                  <Label>الاسم الكامل *</Label>
                  <Input name="fullName" required className="mb-4" />
                  <Label>المنصب / الدور *</Label>
                  <Input name="role" required className="mb-4" />
                  <Label>البريد الإلكتروني الرسمي *</Label>
                  <Input type="email" name="email" required className="mb-4" />
                  <Label>رقم الهاتف *</Label>
                  <Input type="tel" name="phone" required />
                </div>

                {/* القسم 3 – الاهتمامات وفرص الرعاية */}
                <div>
                  <h4 className="font-bold mb-4 text-lg">القسم 3 – الاهتمامات وفرص الرعاية</h4>
                  <Label>نوع الرعاية</Label>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["راعٍ ذهبي", "راعٍ فضي", "راعٍ برونزي", "شريك تقني / لوجستي", "أخرى"].map((t) => (
                      <ChoiceButton
                        key={t}
                        value={t}
                        selected={formDataState.sponsorshipType.includes(t)}
                        onClick={() => toggleMultiSelect("sponsorshipType", t)}
                      />
                    ))}
                  </div>

                  <Label>أهدافكم من الرعاية</Label>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["زيادة الوعي بالعلامة التجارية", "الوصول إلى شريحة مستهدفة من أصحاب الأعمال", "توليد عملاء محتملين", "بناء شراكات استراتيجية", "أخرى"].map((goal) => (
                      <ChoiceButton
                        key={goal}
                        value={goal}
                        selected={formDataState.sponsorshipGoals.includes(goal)}
                        onClick={() => toggleMultiSelect("sponsorshipGoals", goal)}
                      />
                    ))}
                  </div>

                  <Label>ميزانية الرعاية المتوقعة</Label>
                  <div className="flex flex-wrap gap-2">
                    {["أقل من 200,000 دج", "200,000 – 500,000 دج", "أكثر من 500,000 دج"].map((b) => (
                      <ChoiceButton
                        key={b}
                        value={b}
                        selected={formDataState.budget === b}
                        onClick={() => setFormDataState((prev) => ({ ...prev, budget: b }))}
                      />
                    ))}
                  </div>
                </div>

                {/* القسم 4 – ملاحظات إضافية */}
                <div>
                  <h4 className="font-bold mb-4 text-lg">القسم 4 – ملاحظات إضافية</h4>
                  <Textarea name="notes" rows={3} />
                </div>

                {/* القسم 5 – الموافقة */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="agreement"
                    checked={formDataState.consent}
                    onChange={(e) => setFormDataState((prev) => ({ ...prev, consent: e.target.checked }))}
                    required
                  />
                  <Label>أوافق على أن يتواصل معي فريق WEBSCALE لمناقشة فرص الرعاية</Label>
                </div>

                {/* الحالة */}
                {status === "loading" && <p className="text-blue-500">⏳ جاري الإرسال...</p>}
                {status === "error" && <p className="text-red-500">⚠️ حدث خطأ أثناء الإرسال</p>}

                {/* إرسال */}
                <Button type="submit" disabled={status === "loading"} className="w-full bg-gradient-to-r from-[#fbbc05] to-[#715a1a] text-white">
                  إرسال
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}


// // src/components/RegisterForm.jsx
// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// const SCRIPT_URL =
//   "https://script.google.com/macros/s/AKfycbzwz-RkSnP9Mvpz3pBdDGIYrTjm-7fwc34i1OoKlsNIDXiPQExREjuVL35LZV3sAEq5/exec";

// export default function RegistrationForm() {
//   const [status, setStatus] = useState("idle");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (status === "loading") return;
//     setStatus("loading");

//     try {
//       const formData = new FormData(e.target);
//       const res = await fetch(SCRIPT_URL, { method: "POST", body: formData });

//       if (res.ok) {
//         setStatus("success");
//         e.target.reset();
//         setTimeout(() => setStatus("idle"), 2500);
//       } else {
//         setStatus("error");
//       }
//     } catch {
//       setStatus("error");
//     }
//   };

//   // زر مخصص للـ checkbox/radio
//   const ToggleButton = ({ name, value, label }) => (
//     <label className="cursor-pointer">
//       <input type="checkbox" name={name} value={value} className="hidden peer" />
//       <div className="px-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-600 
//         peer-checked:bg-[#fbbc05] peer-checked:text-white peer-checked:border-[#fbbc05] 
//         transition select-none">
//         {label}
//       </div>
//     </label>
//   );

//   const RadioButton = ({ name, value, label }) => (
//     <label className="cursor-pointer">
//       <input type="radio" name={name} value={value} className="hidden peer" />
//       <div className="px-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-600 
//         peer-checked:bg-[#fbbc05] peer-checked:text-white peer-checked:border-[#fbbc05] 
//         transition select-none">
//         {label}
//       </div>
//     </label>
//   );

//   return (
//     <section id="register" className="py-20 bg-neutral-50 dark:bg-neutral-900 px-4">
//       <div className="max-w-4xl mx-auto">
//         <Card className="bg-white dark:bg-neutral-800 border-none shadow-xl">
//           <CardHeader>
//             <CardTitle className="text-center text-3xl font-bold">
//               سجل الآن <span className="text-[#fbbc05]">فرص الرعاية</span>
//             </CardTitle>
//             <p className="text-center text-sm text-neutral-500 dark:text-neutral-400">
//               📅 30 سبتمبر 2025 — 📍 المركز الثقافي بجامع الجزائر
//             </p>
//           </CardHeader>

//           <CardContent>
//             {status === "success" ? (
//               <div className="text-center py-10">
//                 <h3 className="text-2xl font-bold text-green-500">✅ تم تسجيلك بنجاح!</h3>
//                 <p className="mt-2">سنتواصل معك قريباً عبر البريد أو الهاتف.</p>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-8">
//                 {/* القسم 1 – معلومات الشركة */}
//                 <div>
//                   <h3 className="font-bold text-lg mb-3">القسم 1 – معلومات الشركة</h3>
//                   <Input name="companyName" placeholder="اسم الشركة / المؤسسة *" required />
//                   <div className="mt-4 flex flex-wrap gap-2">
//                     {["تجارة إلكترونية", "خدمات رقمية", "تكنولوجيا", "صناعات صغيرة", "شركات ناشئة", "أخرى"].map((opt) => (
//                       <RadioButton key={opt} name="sector" value={opt} label={opt} />
//                     ))}
//                   </div>
//                   <div className="mt-4 flex flex-wrap gap-2">
//                     {["أقل من 10 موظفين", "10–50 موظف", "أكثر من 50 موظف"].map((opt) => (
//                       <RadioButton key={opt} name="companySize" value={opt} label={opt} />
//                     ))}
//                   </div>
//                   <Input className="mt-4" name="location" placeholder="الموقع الجغرافي / الولاية" />
//                 </div>

//                 {/* القسم 2 – بيانات التواصل */}
//                 <div>
//                   <h3 className="font-bold text-lg mb-3">القسم 2 – بيانات التواصل</h3>
//                   <Input name="fullName" placeholder="الاسم الكامل *" required />
//                   <Input name="role" placeholder="المنصب / الدور *" required />
//                   <Input name="email" type="email" placeholder="البريد الإلكتروني الرسمي *" required />
//                   <Input name="phone" type="tel" placeholder="رقم الهاتف *" required />
//                 </div>

//                 {/* القسم 3 – الاهتمامات وفرص الرعاية */}
//                 <div>
//                   <h3 className="font-bold text-lg mb-3">القسم 3 – الاهتمامات وفرص الرعاية</h3>
//                   <p className="mb-2">نوع الرعاية التي تهتمون بها:</p>
//                   <div className="flex flex-wrap gap-2">
//                     {["راعٍ ذهبي", "راعٍ فضي", "راعٍ برونزي", "شريك تقني / لوجستي", "أخرى"].map((opt) => (
//                       <ToggleButton key={opt} name="sponsorshipType" value={opt} label={opt} />
//                     ))}
//                   </div>

//                   <p className="mt-4 mb-2">الأهداف الأساسية:</p>
//                   <div className="flex flex-wrap gap-2">
//                     {["زيادة الوعي بالعلامة التجارية", "الوصول إلى شريحة مستهدفة", "توليد عملاء محتملين", "بناء شراكات استراتيجية", "أخرى"].map((opt) => (
//                       <ToggleButton key={opt} name="goals" value={opt} label={opt} />
//                     ))}
//                   </div>

//                   <p className="mt-4 mb-2">ميزانية الرعاية المتوقعة:</p>
//                   <div className="flex flex-wrap gap-2">
//                     {["أقل من 200,000 دج", "200,000 – 500,000 دج", "أكثر من 500,000 دج"].map((opt) => (
//                       <RadioButton key={opt} name="budget" value={opt} label={opt} />
//                     ))}
//                   </div>
//                 </div>

//                 {/* القسم 4 – ملاحظات إضافية */}
//                 <div>
//                   <h3 className="font-bold text-lg mb-3">القسم 4 – ملاحظات إضافية</h3>
//                   <Textarea name="notes" placeholder="هل لديكم اقتراحات أو متطلبات خاصة؟" rows={3} />
//                 </div>

//                 {/* القسم 5 – الموافقة */}
//                 <div>
//                   <label className="flex items-center gap-2 cursor-pointer">
//                     <input type="checkbox" name="agreement" required className="w-4 h-4" />
//                     <span>أوافق على أن يتواصل معي فريق WEBSCALE لمناقشة فرص الرعاية.</span>
//                   </label>
//                 </div>

//                 {/* حالة الإرسال */}
//                 {status === "loading" && <p className="text-blue-500 text-sm">⏳ جاري الإرسال...</p>}
//                 {status === "error" && <p className="text-red-500 text-sm">⚠️ حدث خطأ أثناء الإرسال، حاول مرة أخرى.</p>}

//                 <Button
//                   type="submit"
//                   disabled={status === "loading"}
//                   className="w-full bg-gradient-to-r from-[#fbbc05] to-[#715a1a] text-white text-lg py-6"
//                 >
//                   إرسال التسجيل
//                 </Button>
//               </form>
//             )}
//           </CardContent>
//         </Card>
//       </div>
//     </section>
//   );
// }
