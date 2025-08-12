// src/constants/index.jsx 
import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
import premiumLogo from "../assets/sponsors/premium.png";
import goldLogo from "../assets/sponsors/gold.png";
import platinumLogo from "../assets/sponsors/platinum.png";
import silverLogo from "../assets/sponsors/silver.png";
import { Clock, Mic, Handshake, Presentation, Users, Coffee, Wrench, MessageSquare } from "lucide-react";


import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";


export const navItems = [
  { label: "الرئيسية", href: "#hero" },
  { label: "البرنامج", href: "#agenda" },
  { label: "عن الملتقى	", href: "#about-event" },
  // { label: "المتحدثون", href: "#speakers" }, 
  { label: "التسجيل", href: "#register" },
  // { label: "", href: "#contact" },
];


export const testimonials = [
  {
    user: "أحمد بن علي",
    company: "مؤسس شركة ناشئة",
    image: user1,
    text: "ملتقى WEBSCALE كان تجربة مميزة... استفدت من الورشات العملية وتعرفت على شركاء جدد في المجال."
  },
  {
    user: "ليلى مراد",
    company: "مديرة مشاريع",
    image: user2,
    text: "أعجبني تنوع المواضيع، خاصة الجلسات المتعلقة بالذكاء الاصطناعي. التنظيم كان ممتاز."
  },
  {
    user: "سامي يوسف",
    company: "مطور ويب",
    image: user3,
    text: "كانت فرصة ذهبية لمقابلة خبراء المجال واكتساب مهارات جديدة يمكن تطبيقها مباشرة في عملي."
  },
];


export const features = [
  {
    icon: <BotMessageSquare />,
    text: "يوم تطبيقي شامل",
    description:
      "ورش عمل وجلسات تطبيقية مع خبراء لمساعدتك على تحويل الذكاء الاصطناعي إلى نتائج عملية في التجارة الإلكترونية.",
  },
  {
    icon: <Fingerprint />,
    text: "شبكة علاقات نُخبوية",
    description:
      "فرصة للقاء أصحاب المؤسسات، المدراء، والخبراء، وبناء شراكات استراتيجية تعزز أعمالك.",
  },
  {
    icon: <ShieldHalf />,
    text: "محتوى محلي عالي القيمة",
    description:
      "دراسات حالة جزائرية قابلة للتطبيق ومحتوى موجه خصيصًا لسياق السوق المحلي.",
  },
  {
    icon: <BatteryCharging />,
    text: "أدوات وتقنيات حديثة",
    description:
      "التعرف على أحدث أدوات الذكاء الاصطناعي وأتمتة العمليات لزيادة الإنتاجية وتحسين تجربة الزبون.",
  },
  {
    icon: <PlugZap />,
    text: "فرص تطوير الأعمال",
    description:
      "عروض خاصة، ترقية العضوية في WEBSCALE، والوصول إلى موارد إضافية بعد الحدث.",
  },
  {
    icon: <GlobeLock />,
    text: "تحليلات ومؤشرات أداء",
    description:
      "متابعة أثر حضورك عبر تقارير مخصصة ومؤشرات أداء تساعدك على قياس التطور بعد الملتقى.",
  },
];

// مستويات الرعاية والرعاة
// src/constants/index.jsx
export const sponsors = [
  {
    level: "الراعي الماسي – PREMIUM SPONSOR",
    color: "from-yellow-400 to-yellow-600",
    name: "الراعي الرسمي الحصري",
    logo: premiumLogo,
    description: "راعٍ حصري للملتقى مع ظهور بارز في كل جوانب الحدث.",
    benefits: [
      "شعارك بجانب WEBSCALE على جميع المواد الدعائية.",
      "ظهور حصري بنسبة 30% على البطاقات، اللافتات، و MATCHMAKING.",
      "صفحة كاملة في كتيب الملتقى.",
      "كلمة افتتاحية لمدة 10 دقائق.",
      "10 بطاقات VIP.",
      "تغطية إعلامية خاصة + تقرير تأثير مفصل.",
      "إمكانية اقتراح أنشطة إضافية.",
      "شهادة شكر رسمية.",
    ],
  },
  {
    level: "الراعي البلاتيني – PLATINUM SPONSOR",
    color: "from-gray-300 to-gray-500",
    name: "شريك رقمي مميز",
    logo: goldLogo,
    description: "شريك استراتيجي بخدمات متقدمة تدعم البيئة الرقمية.",
    benefits: [
      "ظهور بنسبة 20% على البطاقات والمواد الدعائية.",
      "نصف صفحة في كتيب الملتقى.",
      "6 بطاقات VIP.",
      "تغطية إعلامية خاصة + تقرير تأثير.",
      "شهادة شكر رسمية.",
    ],
  },
  {
    level: "الراعي الذهبي – GOLD SPONSOR",
    color: "from-yellow-200 to-yellow-400",
    name: "داعم الحلول التجارية",
    logo: platinumLogo,
    description: "راعي يقدم حلول تجارة إلكترونية مبتكرة.",
    benefits: [
      "ظهور بنسبة 18% على المواد الدعائية والبطاقات.",
      "ثلث صفحة في كتيب الملتقى.",
      "4 بطاقات VIP.",
      "تغطية إعلامية خاصة + تقرير تأثير.",
      "شهادة شكر رسمية.",
    ],
  },
  {
    level: "الراعي الفضي – SILVER SPONSOR",
    color: "from-gray-200 to-gray-400",
    name: "شريك الدفع الرقمي",
    logo: silverLogo,
    description: "راعي فضي بخدمات دفع إلكتروني موثوقة.",
    benefits: [
      "ظهور بنسبة 12%–15% على المواد الدعائية.",
      "ربع صفحة في كتيب الملتقى.",
      "بطاقة VIP واحدة.",
      "تغطية إعلامية خاصة + تقرير تأثير.",
      "شهادة شكر رسمية.",
    ],
  },
];





export const checklistItems = [
  {
    title: "التسجيل السريع",
    description:
      "احجز مكانك بسهولة عبر النموذج الإلكتروني واحصل على تأكيد فوري عبر البريد أو الواتساب.",
  },
  {
    title: "استقبال حقيبة الملتقى",
    description:
      "عند وصولك ستحصل على حقيبة تحتوي على دليل الفعاليات، مواد تدريبية، وهدايا حصرية.",
  },
  {
    title: "المشاركة في الورش والجلسات",
    description:
      "انضم إلى ورش العمل التطبيقية والجلسات النقاشية مع خبراء محليين ودوليين.",
  },
  {
    title: "بناء شبكة علاقات",
    description:
      "تواصل مع أصحاب المؤسسات، رواد الأعمال، والخبراء لبناء شراكات استراتيجية.",
  },
  {
    title: "الحصول على الشهادات والموارد",
    description:
      "استلم شهادة مشاركة مع إمكانية الوصول إلى محتوى ومواد تدريبية بعد الحدث.",
  },
];


export const pricingOptions = [
  {
    title: "تذكرة أساسية",
    price: "2000 دج",
    features: [
      "حضور جميع الجلسات الرئيسية",
      "شهادة مشاركة رقمية",
      "حقيبة الملتقى",
    ],
  },
  {
    title: "تذكرة VIP",
    price: "5000 دج",
    features: [
      "جميع مزايا التذكرة الأساسية",
      "مقاعد مميزة في الصفوف الأمامية",
      "دعوة لحفل التعارف مع المتحدثين",
      "وصول إلى مواد تدريبية إضافية بعد الحدث",
    ],
  },
  {
    title: "تذكرة جماعية",
    price: "15000 دج",
    features: [
      "5 تذاكر أساسية بسعر مخفض",
      "حجز مسبق لمقاعد مخصصة",
      "إمكانية وضع شعار الشركة على لوحة الشركاء",
    ],
  },
];


// روابط الموارد
export const resourcesLinks = [
  { href: "#about-event", text: "عن الملتقى" },
  { href: "#agenda", text: "جدول الفعاليات" },
  { href: "#goals", text: "الاهداف" },
  { href: "#sponsors", text: "الرعاة" },
  // { href: "#faq", text: "الأسئلة الشائعة" },
];

// روابط المنصة
export const platformLinks = [
  { href: "#register", text: "تمويل الحدث" },
  { href: "#sponsors", text: "فرص الرعاية" },
  { href: "https://maps.app.goo.gl/PVaNURZtnT4WKxTX8", text: "موقع الملتقى" },
  // { href: "#gallery", text: "معرض الصور" },
  { href: "https://www.webscale.pro/", text: "اتصل بنا" },
];

// روابط المجتمع
export const communityLinks = [
  { href: "https://www.webscale.pro/", text: "الموقع الالكتروني" },
  { href: "https://www.facebook.com/share/15utdJSobi/", text: "فيسبوك" },
  { href: "https://www.instagram.com/webscale.pro?igsh=MXg0OXRjOXk5bGExag==", text: "إنستغرام" },
  { href: "https://www.linkedin.com/company/webscalepro/", text: "لينكدإن" },
  { href: "https://youtube.com/@webscale-pro?si=KWRMamO8XO628NlY", text: "يوتيوب" },
];



export const agenda = [
  {
    time: "08:00 - 09:00",
    title: "الاستقبال",
    description: "استقبال المشاركين وتوزيع بطاقات الدخول والمواد التعريفية.",
    icon: <Handshake className="text-[#fbbc05]" size={24} />
  },
  {
    time: "09:00 - 09:15",
    title: "كلمة افتتاحية",
    description: "كلمة ترحيبية وتعريف بالملتقى وأهدافه.",
    icon: <Mic className="text-[#fbbc05]" size={24} />
  },
  {
    time: "09:15 - 09:45",
    title: "كلمة الرعاة",
    description: "عرض من الرعاة الرسميين للملتقى حول مساهماتهم ودعمهم.",
    icon: <Users className="text-[#fbbc05]" size={24} />
  },
  {
    time: "09:45 - 10:30",
    title: "محاضرة 1: دراسة حالة",
    description: "عرض دراسة حالة ملهمة من أحد المشاريع الرائدة.",
    icon: <Presentation className="text-[#fbbc05]" size={24} />
  },
  {
    time: "10:30 - 11:15",
    title: "محاضرة 2: دراسة حالة 2",
    description: "دراسة حالة ثانية تركز على الابتكار في الأعمال.",
    icon: <Presentation className="text-[#fbbc05]" size={24} />
  },
  {
    time: "11:15 - 12:30",
    title: "محاضرات فردية",
    description: "محاضرات قصيرة يقدمها خبراء في مجالات متنوعة.",
    icon: <MessageSquare className="text-[#fbbc05]" size={24} />
  },
  {
    time: "12:30 - 13:30",
    title: "استراحة",
    description: "استراحة غداء وفرصة للتعارف بين المشاركين.",
    icon: <Coffee className="text-[#fbbc05]" size={24} />
  },
  {
    time: "13:30 - 14:15",
    title: "ورشة عمل تطبيقية",
    description: "تدريب عملي على أدوات وحلول تكنولوجية حديثة.",
    icon: <Wrench className="text-[#fbbc05]" size={24} />
  },
  {
    time: "14:15 - 15:00",
    title: "محاضرة 3",
    description: "جلسة تفاعلية تركز على استراتيجيات نمو المؤسسات.",
    icon: <Presentation className="text-[#fbbc05]" size={24} />
  },
  {
    time: "15:00 - 16:30",
    title: "محاضرات فردية ومداخلات",
    description: "مداخلات مفتوحة مع الحضور وخبراء الملتقى.",
    icon: <MessageSquare className="text-[#fbbc05]" size={24} />
  },
  {
    time: "16:30 - 18:00",
    title: "تعارف وتشبيك علاقات",
    description: "جلسة مفتوحة للتعارف وبناء شراكات بين الحاضرين.",
    icon: <Handshake className="text-[#fbbc05]" size={24} />
  }
];