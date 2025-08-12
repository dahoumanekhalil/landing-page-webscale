// src/components/AlgeriaWilayas.jsx
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const wilayas = [
  "أدرار", "الشلف", "الأغواط", "أم البواقي", "باتنة", "بجاية", "بسكرة", "بشار",
  "البليدة", "البويرة", "تمنراست", "تبسة", "تلمسان", "تيارت", "تيزي وزو", "الجزائر",
  "الجلفة", "جيجل", "سطيف", "سعيدة", "سكيكدة", "سيدي بلعباس", "عنابة", "قالمة",
  "قسنطينة", "المدية", "مستغانم", "المسيلة", "معسكر", "ورقلة", "وهران", "البيض",
  "إليزي", "برج بوعريريج", "بومرداس", "الطارف", "تندوف", "تيسمسيلت", "الوادي",
  "خنشلة", "سوق أهراس", "تيبازة", "ميلة", "عين الدفلى", "النعامة", "عين تموشنت",
  "غرداية", "غليزان", "تيميمون", "برج باجي مختار", "أولاد جلال", "بني عباس",
  "إن صالح", "إن قزام", "تقرت", "جانت", "المغير", "المنيعة", "أخرى"
];

export default function AlgeriaWilayas({ value, onChange,name }) {
  return (
    <Select onValueChange={onChange} value={value} name={name}>
      <SelectTrigger dir="rtl" className="w-full text-right">
        <SelectValue placeholder="اختر الولاية" />
      </SelectTrigger>
      <SelectContent dir="rtl">
        {wilayas.map((w) => (
          <SelectItem key={w} value={w}>
            {w}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
