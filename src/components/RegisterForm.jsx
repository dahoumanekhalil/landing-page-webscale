// src/components/RegisterForm.jsx
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SCRIPT_URL = "YOUR_GOOGLE_SCRIPT_URL";

export default function RegistrationForm() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");

    try {
      const formData = new FormData(e.target);
      const res = await fetch(SCRIPT_URL, { method: "POST", body: formData });

      if (res.ok) {
        setStatus("success");
        e.target.reset();
        setTimeout(() => setStatus("idle"), 2500);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="register" className="py-20 bg-neutral-50 dark:bg-neutral-900 px-4">
      <div className="max-w-3xl mx-auto">
        <Card className="bg-white dark:bg-neutral-800 border-none shadow-xl">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold">
              سجل الآن لحضور <span className="text-[#fbbc05]">ملتقى WEBSCALE</span>
            </CardTitle>
            <p className="text-center text-sm text-neutral-500 dark:text-neutral-400">
              📅 30 سبتمبر 2025 — 📍 المركز الثقافي بجامع الجزائر
            </p>
          </CardHeader>

          <CardContent>
            {status === "success" ? (
              <div className="text-center py-10">
                <h3 className="text-2xl font-bold text-green-500">✅ تم تسجيلك بنجاح!</h3>
                <p className="mt-2">شكراً لانضمامك، سنتواصل معك قريباً.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* name */}
                <div>
                  <Label htmlFor="fullName">الاسم الكامل *</Label>
                  <Input id="fullName" name="fullName" required />
                </div>

                {/* company */}
                <div>
                  <Label htmlFor="companyName">اسم المؤسسة / النشاط التجاري</Label>
                  <Input id="companyName" name="companyName" />
                </div>

                {/* job */}
                <div>
                  <Label htmlFor="role">الوظيفة / الدور</Label>
                  <Input id="role" name="role" />
                </div>

                {/* phone */}
                <div>
                  <Label htmlFor="phone">رقم الهاتف *</Label>
                  <Input id="phone" name="phone" type="tel" required />
                </div>

                {/* email */}
                <div>
                  <Label htmlFor="email">البريد الإلكتروني *</Label>
                  <Input id="email" name="email" type="email" required />
                </div>

                {/* القطاع */}
                <div>
                  <Label>القطاع</Label>
                  <RadioGroup name="sector" className="flex flex-wrap gap-3">
                    {["تجارة إلكترونية", "خدمات رقمية", "صناعات صغيرة", "تكنولوجيا", "أخرى"].map((sector) => (
                      <div key={sector} className="flex items-center space-x-2">
                        <RadioGroupItem value={sector} id={sector} />
                        <Label htmlFor={sector}>{sector}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* AI */}
                <div>
                  <Label>هل تستخدم أدوات ذكاء اصطناعي؟</Label>
                  <RadioGroup name="aiUsage" className="flex gap-6">
                    {["نعم", "لا", "أفكر في البدء"].map((opt) => (
                      <div key={opt} className="flex items-center space-x-2">
                        <RadioGroupItem value={opt} id={opt} />
                        <Label htmlFor={opt}>{opt}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label>ما أكثر محور يهمك؟</Label>
                  <RadioGroup name="interest" className="flex flex-wrap gap-3">
                    {["تحسين تجربة الزبون", "أتمتة العمليات", "تحليل البيانات", "أدوات تسويق ذكية"].map((topic) => (
                      <div key={topic} className="flex items-center space-x-2">
                        <RadioGroupItem value={topic} id={topic} />
                        <Label htmlFor={topic}>{topic}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* your message */}
                <div>
                  <Label htmlFor="message">رسالتك أو استفسارك</Label>
                  <Textarea id="message" name="message" rows={3} />
                </div>

                {/* status */}
                {status === "loading" && (
                  <p className="text-blue-500 text-sm">⏳ جاري الإرسال...</p>
                )}
                {status === "error" && (
                  <p className="text-red-500 text-sm">⚠️ حدث خطأ أثناء الإرسال، حاول مرة أخرى.</p>
                )}

                {/* send btton*/}
                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-gradient-to-r from-[#fbbc05] to-[#715a1a] text-white"
                >
                  إرسال التسجيل
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}