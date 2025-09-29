import QRCode from 'qrcode';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const BadgeGeneration = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');
  
  const [submissionData, setSubmissionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [qrCodeDataURL, setQrCodeDataURL] = useState('');

  // Event details - you can modify these as needed
  const eventDetails = {
    event_name: 'ملتقى WEBSCALE',
    event_date: '30 سبتمبر 2025',
    event_time: '9:00 صباحاً - 5:00 مساءً',
    event_location: 'جامع الجزائر، الجزائر العاصمة',
    company_name: 'Webscale'
  };

  useEffect(() => {
    if (email) {
      fetchSubmissionData();
    } else {
      setError('لم يتم توفير البريد الإلكتروني');
      setLoading(false);
    }
  }, [email]);

  const fetchSubmissionData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://crmgo.webscale.dz/api/v1/public/submission/by-email?email=${encodeURIComponent(email)}`);
      
      if (!response.ok) {
        throw new Error('فشل في جلب بيانات الطلب');
      }
      
      const data = await response.json();
      setSubmissionData(data);
      
      // Generate QR code
      if (data.id) {
        const qrCodeContent = `https://crm.webscale.dz/attendance/${data.id}`;
        const qrCodeURL = await QRCode.toDataURL(qrCodeContent, {
          width: 200,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          }
        });
        setQrCodeDataURL(qrCodeURL);
      }
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-600">جاري تحميل بيانات الطلب...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <p className="font-bold">خطأ:</p>
            <p>{error}</p>
          </div>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
          >
            إعادة المحاولة
          </button>
        </div>
      </div>
    );
  }

  if (!submissionData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-gray-600">لم يتم العثور على بيانات الطلب</p>
        </div>
      </div>
    );
  }

  const userData = submissionData.data || {};
  const firstName = userData['الاسم الكامل'] || 'المشارك';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Print Button - Hidden in print */}
      <div className="print:hidden bg-white shadow-sm border-b px-6 py-4">
        <div className="max-w-2xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">بطاقة الحضور</h1>
          <button
            onClick={handlePrint}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-colors"
          >
            🖨️ طباعة البطاقة
          </button>
        </div>
      </div>

      {/* Badge Content */}
      <div className="max-w-2xl mx-auto p-5 badge-content">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-100 p-8 text-center relative">
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
              <img 
                src="https://www.webscale.dz/svg/djs_ministry.svg" 
                alt="وزارة الشباب والرياضة" 
                className="h-24 max-w-28 opacity-90 hover:opacity-100 transition-opacity" 
              />
              <img 
                src="https://www.webscale.dz/svg/startups_ministry.svg" 
                alt="وزارة الاقتصاد المعرفي والاقتصاد الرقمي" 
                className="h-24 max-w-28 opacity-90 hover:opacity-100 transition-opacity" 
              />
            </div>
            <div className="bg-yellow-400 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mt-10">
              ✓ PARTICIPANT
            </div>
            <h1 className="text-white text-3xl font-bold mt-4 drop-shadow-sm" style={{marginTop: '40px'}}>
              مــــــــــلـتـــقـــــــــــــى WEBSCALE
            </h1>
          </div>

          {/* Content */}
          <div className="p-10 bg-white">
            <p className="mb-5 text-lg text-gray-700">
              عزيزي/عزيزتي <span className="text-yellow-500 font-semibold">{firstName}</span>،
            </p>
            <p className="mb-5 text-gray-700">
              تم قبول طلبك لحضور <strong className="text-yellow-500">{eventDetails.event_name}</strong> بنجاح!
            </p>

            {/* Event Details */}
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl mb-6 border-r-4 border-r-yellow-400">
              <h3 className="text-yellow-500 text-xl font-semibold mb-5">📅 تفاصيل الحدث:</h3>
              <ul className="space-y-3">
                <li className="flex items-center pb-3 border-b border-yellow-200">
                  <strong className="text-yellow-500 font-semibold min-w-24 ml-4">اسم الحدث:</strong>
                  <span className="text-gray-700">{eventDetails.event_name}</span>
                </li>
                <li className="flex items-center pb-3 border-b border-yellow-200">
                  <strong className="text-yellow-500 font-semibold min-w-24 ml-4">التاريخ:</strong>
                  <span className="text-gray-700">{eventDetails.event_date}</span>
                </li>
                <li className="flex items-center pb-3 border-b border-yellow-200">
                  <strong className="text-yellow-500 font-semibold min-w-24 ml-4">الوقت:</strong>
                  <span className="text-gray-700">{eventDetails.event_time}</span>
                </li>
                <li className="flex items-center pb-3 border-b border-yellow-200">
                  <strong className="text-yellow-500 font-semibold min-w-24 ml-4">المكان:</strong>
                  <span className="text-gray-700">{eventDetails.event_location}</span>
                </li>
                <li className="flex items-center">
                  <strong className="text-yellow-500 font-semibold min-w-24 ml-4">رقم الطلب:</strong>
                  <span className="text-gray-700 font-mono">{submissionData.id}</span>
                </li>
              </ul>
            </div>

            {/* Badge Section */}
            <div className="bg-yellow-25 border border-yellow-200 p-8 rounded-xl mb-6 text-center border-r-4 border-r-yellow-400">
              <h3 className="text-yellow-500 text-xl font-semibold mb-5">🎫 بطاقة الحضور الرقمية</h3>
              <p className="mb-5 text-gray-700">
                هذه بطاقة حضورك الرقمية. يرجى الاحتفاظ بها وإحضارها معك في يوم الحدث.
              </p>
              
              {qrCodeDataURL && (
                <div className="bg-gray-50 p-5 rounded-lg mb-5 inline-block border border-gray-100">
                  <img src={qrCodeDataURL} alt="QR Code" className="mx-auto" />
                </div>
              )}
              
              <p className="text-gray-500 text-sm">
                يمكن مسح هذا الكود عند وصولك للحدث
              </p>

              {/* Sponsors Section */}
              <div className="mt-8 pt-5 border-t border-yellow-200">
                <h4 className="text-gray-500 text-sm font-medium mb-4 uppercase tracking-wider">برعاية</h4>
                <div className="flex justify-center items-center flex-wrap gap-5">
                  <img src="https://webscale.dz/svg/sp_1.svg" alt="شعار الراعي 1" className="max-h-10 max-w-24 opacity-80 hover:opacity-100 transition-opacity" />
                  <img src="https://webscale.dz/svg/sp_2.svg" alt="شعار الراعي 2" className="max-h-10 max-w-24 opacity-80 hover:opacity-100 transition-opacity" />
                  <img src="https://webscale.dz/svg/sp_3.svg" alt="شعار الراعي 3" className="max-h-10 max-w-24 opacity-80 hover:opacity-100 transition-opacity" />
                  <img src="https://webscale.dz/svg/sp_4.svg" alt="شعار الراعي 4" className="max-h-10 max-w-24 opacity-80 hover:opacity-100 transition-opacity" />
                  <img src="https://webscale.dz/svg/sp_5.svg" alt="شعار الراعي 5" className="max-h-10 max-w-24 opacity-80 hover:opacity-100 transition-opacity" />
                  <img src="https://webscale.dz/svg/sp_6.svg" alt="شعار الراعي 6" className="max-h-10 max-w-24 opacity-80 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>

            <p className="text-gray-700">نتطلع لرؤيتك في الحدث!</p>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 p-8 text-center border-t border-gray-100">
            <p className="text-gray-500 text-sm">
              مع أطيب التحيات،<br />
              <span className="text-yellow-500 font-semibold">فريق {eventDetails.company_name}</span><br />
              webscale.dz
            </p>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 10mm;
          }
          
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          body {
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
            font-size: 12px !important;
          }
          
          .print\\:hidden {
            display: none !important;
          }
          
          .badge-content {
            max-width: none !important;
            margin: 0 !important;
            padding: 10px !important;
            width: 100% !important;
            height: 100vh !important;
            display: flex !important;
            flex-direction: column !important;
          }
          
          .badge-content > div {
            flex: 1 !important;
            display: flex !important;
            flex-direction: column !important;
          }
          
          .badge-content .shadow-2xl {
            box-shadow: none !important;
            border: 1px solid #e5e5e5 !important;
          }
          
          .badge-content .rounded-xl {
            border-radius: 4px !important;
          }
          
          .bg-gray-50 {
            background: white !important;
          }
          
          .min-h-screen {
            min-height: auto !important;
          }
          
          /* Header adjustments */
          .bg-gradient-to-br {
            padding: 15px 10px !important;
          }
          
          .bg-gradient-to-br h1 {
            font-size: 18px !important;
            margin-top: 25px !important;
          }
          
          .ministry-logo {
            height: 60px !important;
            max-width: 80px !important;
          }
          
          .bg-yellow-400 {
            font-size: 10px !important;
            padding: 4px 8px !important;
          }
          
          /* Content adjustments */
          .p-10 {
            padding: 15px !important;
          }
          
          .p-8 {
            padding: 10px !important;
          }
          
          .text-3xl {
            font-size: 18px !important;
          }
          
          .text-xl {
            font-size: 14px !important;
          }
          
          .text-lg {
            font-size: 12px !important;
          }
          
          /* Event details */
          .bg-yellow-50 {
            padding: 10px !important;
            margin: 10px 0 !important;
          }
          
          .space-y-3 > * + * {
            margin-top: 8px !important;
          }
          
          .pb-3 {
            padding-bottom: 6px !important;
          }
          
          /* Badge section */
          .bg-yellow-25 {
            padding: 15px !important;
            margin: 10px 0 !important;
          }
          
          .sponsor-logo {
            max-height: 25px !important;
            max-width: 60px !important;
          }
          
          .gap-5 {
            gap: 10px !important;
          }
          
          /* QR Code */
          .bg-gray-50 img {
            width: 120px !important;
            height: 120px !important;
          }
          
          /* Footer */
          .bg-gray-50 {
            padding: 15px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default BadgeGeneration;
