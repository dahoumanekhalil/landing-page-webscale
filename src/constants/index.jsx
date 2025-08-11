// src/constants/index.jsx 
import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
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
export const sponsors = [
  {
    level: "Premium Sponsor",
    color: "from-yellow-400 to-yellow-600",
    name: "شركة الذكاء المتقدم",
    logo: "/assets/gold.png", // ضع رابط أو استبدل بصورة الشعار
    description: "الراعي الرسمي الحصري للملتقى، بخبرة طويلة في حلول الذكاء الاصطناعي للأعمال.",
    benefits: [
      "كلمة افتتاحية لمدة 10 دقائق",
      "شعار على جميع الحقائب والأساور",
      "مساحة عرض خاصة",
      "10 بطاقات VIP",
    ],
  },
  {
    level: "Platinum Sponsor",
    color: "from-gray-300 to-gray-500",
    name: "حلول التقنية الحديثة",
    logo: "/assets/logo.png",
    description: "شريك رقمي للملتقى بخدمات برمجية متقدمة للمؤسسات.",
    benefits: [
      "شعار على البطاقات الرسمية",
      "مساحة عرض مشتركة",
      "6 بطاقات VIP",
    ],
  },
  {
    level: "Gold Sponsor",
    color: "from-yellow-200 to-yellow-400",
    name: "مؤسسة التجارة الذكية",
    logo: "/assets/logo.png",
    description: "راعي ذهبي يقدم حلول تجارة إلكترونية مبتكرة.",
    benefits: [
      "شعار على المواد الإعلانية",
      "مساحة عرض مشتركة",
      "4 بطاقات VIP",
    ],
  },
  {
    level: "Silver Sponsor",
    color: "from-gray-200 to-gray-400",
    name: "شركة الدفع الرقمي",
    logo: "/assets/logo.png",
    description: "راعي فضي بخدمات دفع إلكتروني موثوقة.",
    benefits: [
      "شعار على البطاقات",
      "مساحة عرض مشتركة",
      "1 بطاقة VIP",
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


export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
