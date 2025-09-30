// src/pages/QRGeneratorPage.jsx
import { motion } from "framer-motion";
import QRCode from "qrcode";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function QRGeneratorPage() {
  const [formId, setFormId] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState("");

  const generateQRCode = async () => {
    if (!formId.trim()) {
      setError("يرجى إدخال معرف النموذج");
      return;
    }

    setIsGenerating(true);
    setError("");

    try {
      // Construct the mobile form URL
      const formUrl = `${window.location.origin}/mobile-form/${formId}`;
      setQrCodeUrl(formUrl);

      // Generate QR code
      const qrDataUrl = await QRCode.toDataURL(formUrl, {
        width: 400,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });

      setQrCodeDataUrl(qrDataUrl);
    } catch (err) {
      setError("حدث خطأ أثناء إنشاء رمز QR");
      console.error("QR Code generation error:", err);
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(qrCodeUrl);
      // You could add a toast notification here
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const downloadQRCode = () => {
    if (qrCodeDataUrl) {
      const link = document.createElement('a');
      link.download = `qr-code-${formId}.png`;
      link.href = qrCodeDataUrl;
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FABC05]/10 to-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <img 
            src={logo} 
            alt="Webscale Logo" 
            className="h-20 mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            مولد رمز QR للنماذج
          </h1>
          <p className="text-gray-600 text-lg">
            أدخل معرف النموذج لإنشاء رمز QR للوصول السريع
          </p>
        </motion.div>

        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8"
        >
          <div className="max-w-2xl mx-auto">
            <label className="block text-lg font-medium mb-4 text-gray-700">
              معرف النموذج (Form ID)
            </label>
            <div className="flex gap-4">
              <input
                type="text"
                value={formId}
                onChange={(e) => setFormId(e.target.value)}
                className="flex-1 px-6 py-4 text-lg border border-gray-300 rounded-xl focus:border-[#FABC05] focus:ring-2 focus:ring-[#FABC05]/40 outline-none"
                placeholder="أدخل معرف النموذج هنا..."
                dir="ltr"
              />
              <button
                onClick={generateQRCode}
                disabled={isGenerating}
                className={`px-8 py-4 rounded-xl font-semibold text-white text-lg transition-all duration-200 ${
                  isGenerating
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#FABC05] hover:bg-[#FABC05]/90 active:scale-95 shadow-lg"
                }`}
              >
                {isGenerating ? "جاري الإنشاء..." : "إنشاء رمز QR"}
              </button>
            </div>
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-red-600 text-center"
              >
                {error}
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* QR Code Display */}
        {qrCodeDataUrl && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                رمز QR جاهز للاستخدام
              </h2>
              
              {/* QR Code Image */}
              <div className="mb-8">
                <img
                  src={qrCodeDataUrl}
                  alt="QR Code"
                  className="mx-auto border-4 border-gray-200 rounded-xl"
                />
              </div>

              {/* URL Display */}
              <div className="mb-6">
                <label className="block text-lg font-medium mb-2 text-gray-700">
                  رابط النموذج:
                </label>
                <div className="flex gap-2 max-w-2xl mx-auto">
                  <input
                    type="text"
                    value={qrCodeUrl}
                    readOnly
                    className="flex-1 px-4 py-3 text-sm border border-gray-300 rounded-lg bg-gray-50"
                    dir="ltr"
                  />
                  <button
                    onClick={copyToClipboard}
                    className="px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    title="نسخ الرابط"
                  >
                    📋
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 justify-center">
                <button
                  onClick={downloadQRCode}
                  className="px-6 py-3 bg-[#FABC05] hover:bg-[#FABC05]/90 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg"
                >
                  تحميل رمز QR
                </button>
                <button
                  onClick={() => window.print()}
                  className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg"
                >
                  طباعة
                </button>
              </div>

              {/* Instructions */}
              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  تعليمات الاستخدام:
                </h3>
                <ul className="text-blue-800 text-left space-y-1">
                  <li>• يمكن للمستخدمين مسح رمز QR للوصول المباشر إلى النموذج</li>
                  <li>• مناسب للعرض على الشاشات الكبيرة والعروض التقديمية</li>
                  <li>• يمكن طباعة رمز QR أو حفظه كصورة</li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12 pb-8"
        >
          <p className="text-gray-500">
            © 2024 Webscale. جميع الحقوق محفوظة.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
