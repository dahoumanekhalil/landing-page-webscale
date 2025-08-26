// src/components/sponsoring/UnifiedRegistrationForm.jsx
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import AlgeriaWilayas from "../shared/AlgeriaWilayas";

const SCRIPT_URL = import.meta.env.VITE_REGISTRATION_SCRIPT_URL;
// const SCRIPT_URL = import.meta.env.VITE_SCRIPT_URL;

export default function UnifiedRegistrationForm({ mode = "inline", isOpen = false, onClose }) {
  const [status, setStatus] = useState("idle");
  const [showOtherSector, setShowOtherSector] = useState(false);
  const [showOtherSponsorType, setShowOtherSponsorType] = useState(false);
  const [showOtherGoal, setShowOtherGoal] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    sector: "",
    otherSector: "",
    companySize: "",
    wilaya: "",
    fullName: "",
    role: "",
    email: "",
    phone: "",
    sponsorshipType: [],
    otherSponsorType: "",
    sponsorshipGoals: [],
    otherGoal: "",
    budget: "",
    notes: "",
    consent: false
  });

  const firstInputRef = useRef(null);

  useEffect(() => {
    if (mode === "modal" && isOpen) {
      setTimeout(() => firstInputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [mode, isOpen]);

  const handleCheckboxArray = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(v => v !== value)
        : [...prev[field], value]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("يجب الموافقة على التواصل قبل الإرسال");
      return;
    }
    setStatus("loading");
    try {
      const formPayload = new FormData();
      Object.entries(formData).forEach(([key, val]) => {
        formPayload.append(key, Array.isArray(val) ? val.join(", ") : val);
      });
      const res = await fetch(SCRIPT_URL, { method: "POST", body: formPayload });
      if (res.ok) {
        setStatus("success");
        setTimeout(() => {
          setStatus("idle");
          if (mode === "modal") onClose?.();
        }, 2500);
        setFormData({
          companyName: "",
          sector: "",
          otherSector: "",
          companySize: "",
          wilaya: "",
          fullName: "",
          role: "",
          email: "",
          phone: "",
          sponsorshipType: [],
          otherSponsorType: "",
          sponsorshipGoals: [],
          otherGoal: "",
          budget: "",
          notes: "",
          consent: false
        });
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const FormUI = (
    <form id="register" onSubmit={handleSubmit} className="space-y-8 text-right">
      {/* القسم 1 – معلومات الشركة */}
      <div>
        <h4 className="font-bold mb-4 text-lg">القسم 1 – معلومات الشركة</h4>
        <Label>اسم الشركة / المؤسسة *</Label>
        <Input ref={firstInputRef} value={formData.companyName} onChange={(e) => setFormData({...formData, companyName: e.target.value})} required className="mb-4" />

        <Label>المجال أو القطاع</Label>
        <Select onValueChange={(val) => { setFormData({...formData, sector: val}); setShowOtherSector(val === "أخرى"); }}>
          <SelectTrigger dir="rtl" className="mb-4">
            <SelectValue placeholder="اختر القطاع" />
          </SelectTrigger>
          <SelectContent dir="rtl">
            {["تجارة إلكترونية", "خدمات رقمية", "تكنولوجيا", "صناعات صغيرة", "شركات ناشئة", "أخرى"].map((s) => (
              <SelectItem dir="rtl" key={s} value={s}>{s}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {showOtherSector && (
          <Input placeholder="اذكر القطاع" value={formData.otherSector} onChange={(e) => setFormData({...formData, otherSector: e.target.value})} className="mb-4" />
        )}

        <Label>حجم الشركة</Label>
        <div className="flex flex-wrap gap-2 mb-4">
          {["أقل من 10 موظفين", "10–50 موظف", "أكثر من 50 موظف"].map(size => (
            <Button type="button" key={size} variant={formData.companySize === size ? "default" : "outline"} onClick={() => setFormData({...formData, companySize: size})}>{size}</Button>
          ))}
        </div>

        {/* الموقع الجغرافي / الولاية */}
<Label>الموقع الجغرافي / الولاية</Label>
<AlgeriaWilayas
  value={formData.wilaya}
  onChange={(val) => setFormData({ ...formData, wilaya: val })}
/>
      </div>

      {/* القسم 2 – بيانات التواصل */}
      <div>
        <h4 className="font-bold mb-4 text-lg">القسم 2 – بيانات التواصل</h4>
        <Input placeholder="الاسم الكامل" required value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} className="mb-3" />
        <Input placeholder="المنصب / الدور" required value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})} className="mb-3" />
        <Input type="email" placeholder="البريد الإلكتروني" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="mb-3" />
        <Input type="tel" placeholder="رقم الهاتف" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
      </div>

      {/* القسم 3 – الاهتمامات */}
      <div>
        <h4 className="font-bold mb-4 text-lg">القسم 3 – الاهتمامات وفرص الرعاية</h4>
        <Label>نوع الرعاية</Label>
        <div className="flex flex-wrap gap-3 mb-4">
          {["راعٍ ذهبي", "راعٍ فضي", "راعٍ برونزي", "راع بلاتيني"].map(type => (
            <div key={type} className="flex items-center gap-2">
              <Checkbox checked={formData.sponsorshipType.includes(type)} onCheckedChange={() => { handleCheckboxArray("sponsorshipType", type); if (type === "أخرى") setShowOtherSponsorType(!showOtherSponsorType); }} />
              <span>{type}</span>
            </div>
          ))}
        </div>
        {showOtherSponsorType && (
          <Input placeholder="اذكر نوع الرعاية" value={formData.otherSponsorType} onChange={(e) => setFormData({...formData, otherSponsorType: e.target.value})} className="mb-4" />
        )}

        <Label>أهدافكم من الرعاية</Label>
        <div className="flex flex-wrap gap-3 mb-4">
          {["زيادة الوعي بالعلامة التجارية", "الوصول إلى شريحة مستهدفة", "توليد عملاء محتملين", "بناء شراكات استراتيجية", "أخرى"].map(goal => (
            <div key={goal} className="flex items-center gap-2">
              <Checkbox checked={formData.sponsorshipGoals.includes(goal)} onCheckedChange={() => { handleCheckboxArray("sponsorshipGoals", goal); if (goal === "أخرى") setShowOtherGoal(!showOtherGoal); }} />
              <span>{goal}</span>
            </div>
          ))}
        </div>
        {showOtherGoal && (
          <Input placeholder="اذكر الهدف" value={formData.otherGoal} onChange={(e) => setFormData({...formData, otherGoal: e.target.value})} className="mb-4" />
        )}

        <Label>ميزانية الرعاية</Label>
        <div className="flex flex-wrap gap-2 mb-4">
          {["أقل من 200,000 دج", "200,000 – 500,000 دج", "أكثر من 500,000 دج"].map(b => (
            <Button type="button" key={b} variant={formData.budget === b ? "default" : "outline"} onClick={() => setFormData({...formData, budget: b})}>{b}</Button>
          ))}
        </div>
      </div>

      {/* القسم 4 – ملاحظات */}
      <div>
        <h4 className="font-bold mb-4 text-lg">القسم 4 – ملاحظات إضافية</h4>
        <Textarea placeholder="ملاحظات أو متطلبات خاصة" value={formData.notes} onChange={(e) => setFormData({...formData, notes: e.target.value})} />
      </div>

      {/* القسم 5 – الموافقة */}
      <div className="flex items-center gap-2">
        <Checkbox checked={formData.consent} onCheckedChange={(val) => setFormData({...formData, consent: val})} />
        <Label>أوافق على أن يتواصل معي فريق WEBSCALE لمناقشة فرص الرعاية</Label>
      </div>

      {/* رسائل الحالة */}
      {status === "loading" && <p className="text-blue-500">⏳ جاري الإرسال...</p>}
      {status === "success" && <p className="text-green-500">✅ تم إرسال بياناتك!</p>}
      {status === "error" && <p className="text-red-500">⚠️ حدث خطأ أثناء الإرسال</p>}  

      {/* زر الإرسال */}
      <Button type="submit" disabled={status === "loading"} className="w-full bg-gradient-to-r from-[#fbbc05] to-[#f3ac39] hover:scale-[1.01] text-white">
        إرسال
      </Button>
    </form>
  );

  if (mode === "modal") {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
            <motion.section initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="relative z-10 w-full max-w-4xl bg-white dark:bg-neutral-900 rounded-xl shadow-xl p-6 overflow-y-auto max-h-[90vh]">
              <div className="flex justify-end">
                <button onClick={onClose} className="text-lg">✕</button>
              </div>
              <CardTitle className="text-center text-2xl font-bold mb-6">استمارة تسجيل الرعاة <span className="text-[#fbbc05]">ملتقى WEBSCALE</span></CardTitle>
              {FormUI}
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <section dir="rtl" className="py-20 dark:bg-neutral-900 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white dark:bg-neutral-800 border-none shadow-xl">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold">استمارة تسجيل الرعاة <span className="text-[#fbbc05]">ملتقى WEBSCALE</span></CardTitle>
          </CardHeader>
          <CardContent>{FormUI}</CardContent>
        </Card>
      </div>
    </section>
  );
}