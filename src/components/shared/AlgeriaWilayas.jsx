// src/components/shared/AlgeriaWilayas.jsx
"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area" // استخدم مسار الـ alias

const wilayas = [
  "أدرار","الشلف","الأغواط","أم البواقي","باتنة","بجاية","بسكرة","بشار",
  "البليدة","البويرة","تمنراست","تبسة","تلمسان","تيارت","تيزي وزو","الجزائر",
  "الجلفة","جيجل","سطيف","سعيدة","سكيكدة","سيدي بلعباس","عنابة","قالمة",
  "قسنطينة","المدية","مستغانم","المسيلة","معسكر","ورقلة","وهران","البيض",
  "إليزي","برج بوعريريج","بومرداس","الطارف","تندوف","تيسمسيلت","الوادي",
  "خنشلة","سوق أهراس","تيبازة","ميلة","عين الدفلى","النعامة","عين تموشنت",
  "غرداية","غليزان","تيميمون","برج باجي مختار","أولاد جلال","بني عباس",
  "إن صالح","إن قزام","تقرت","جانت","المغير","المنيعة","أخرى"
];

export default function AlgeriaWilayas({
  value,
  onChange,
  name,
  placeholder = "اختر الولاية",
}) {
  return (
    <>
      <Select dir="rtl" value={value} onValueChange={onChange}>
        <SelectTrigger
          className="w-full rounded-xl border px-3 py-2 text-right
                     border-gray-300 bg-white text-gray-900
                     dark:border-neutral-600 dark:bg-neutral-800 dark:text-gray-100
                     focus:ring-2 focus:ring-yellow-400/40"
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent dir="rtl" className="text-right">
          <ScrollArea className="h-72 rounded-md">
            <SelectGroup>
              <SelectLabel>الولايات</SelectLabel>
              {wilayas.map((w) => (
                <SelectItem key={w} value={w} className="text-right">
                  {w}
                </SelectItem>
              ))}
            </SelectGroup>
          </ScrollArea>
        </SelectContent>
      </Select>

      {/* اختياري: لو تحب يظهر ضمن حقول form الأصلية */}
      {name ? <input type="hidden" name={name} value={value || ""} readOnly /> : null}
    </>
  );
}
