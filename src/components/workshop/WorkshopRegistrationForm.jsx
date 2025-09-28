// src/components/workshop/WorkshopRegistrationForm.jsx
import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const WorkshopRegistrationForm = ({ workshops }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessType: "",
    selectedWorkshop: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        businessType: "",
        selectedWorkshop: ""
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="registration-form" className="max-w-2xl mx-auto">
      <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
            نموذج التسجيل
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-gray-700 dark:text-gray-300 font-medium">
                الاسم الكامل *
              </Label>
              <Input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                placeholder="أدخل اسمك الكامل"
                required
                className="h-12 text-right"
                dir="rtl"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 font-medium">
                البريد الإلكتروني *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="example@email.com"
                required
                className="h-12"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300 font-medium">
                رقم الهاتف *
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="+213 XXX XXX XXX"
                required
                className="h-12 text-right"
                dir="rtl"
              />
            </div>

            {/* Business Type */}
            <div className="space-y-2">
              <Label htmlFor="businessType" className="text-gray-700 dark:text-gray-300 font-medium">
                نوع النشاط (اختياري)
              </Label>
              <Select value={formData.businessType} onValueChange={(value) => handleInputChange('businessType', value)}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="اختر نوع نشاطك" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ecommerce">تجارة إلكترونية</SelectItem>
                  <SelectItem value="retail">تجارة تقليدية</SelectItem>
                  <SelectItem value="services">خدمات</SelectItem>
                  <SelectItem value="consulting">استشارات</SelectItem>
                  <SelectItem value="other">أخرى</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Workshop Selection */}
            <div className="space-y-2">
              <Label className="text-gray-700 dark:text-gray-300 font-medium">
                اختيار الورشة *
              </Label>
              <Select value={formData.selectedWorkshop} onValueChange={(value) => handleInputChange('selectedWorkshop', value)}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="اختر الورشة التي تود حضورها" />
                </SelectTrigger>
                <SelectContent>
                  {workshops.map((workshop) => (
                    <SelectItem key={workshop.id} value={workshop.id}>
                      <div className="flex flex-col items-start">
                        <span className="font-semibold">{workshop.name}</span>
                        <span className="text-sm text-gray-500">{workshop.description}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={isSubmitting || !formData.fullName || !formData.email || !formData.phone || !formData.selectedWorkshop}
                className="w-full h-14 bg-gradient-to-r from-[#fbbc05] to-[#e0bb57] hover:from-[#fbbc05]/90 hover:to-[#e0bb57]/90 text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2 space-x-reverse">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>جاري التسجيل...</span>
                  </div>
                ) : (
                  "سجّل الآن"
                )}
              </Button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg">
                <p className="text-green-800 dark:text-green-200 text-center font-medium">
                  ✅ تم التسجيل بنجاح! سنتواصل معك قريباً لتأكيد الحضور.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg">
                <p className="text-red-800 dark:text-red-200 text-center font-medium">
                  ❌ حدث خطأ أثناء التسجيل. يرجى المحاولة مرة أخرى.
                </p>
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkshopRegistrationForm;
