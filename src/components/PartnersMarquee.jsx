// src/components/LogosCarousel.jsx
import logo1 from "@/assets/1.png";
import logo2 from "@/assets/2.png";
import logo3 from "@/assets/3.png";
import logo4 from "@/assets/4.png";
import logo5 from "@/assets/5.png";
import logo6 from "@/assets/6.png";
import logo7 from "@/assets/7.png";
import logo8 from "@/assets/8.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

export default function LogosCarousel() {
  // تكرار القائمة مرتين لعمل تأثير التمرير المستمر
  const repeatedLogos = [...logos, ...logos];

  return (
    <section className="py-16 bg-white dark:bg-neutral-900 overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee gap-8">
          {repeatedLogos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[120px] h-[120px] rounded-full 
              bg-gradient-to-r from-[#fbbc05] to-[#e0bb57] shadow-lg p-6"
            >
              <img
                src={logo}
                alt={`logo-${i}`}
                className="object-contain w-full max-w-56 h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
