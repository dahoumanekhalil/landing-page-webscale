// src/components/PartnersCarousel.jsx
import Marquee from "react-fast-marquee";
import logo1 from "@/assets/1.png";
import logo2 from "@/assets/2.png";
import logo3 from "@/assets/3.png";
import logo4 from "@/assets/4.png";
import logo5 from "@/assets/5.png";
import logo6 from "@/assets/6.png";
import logo7 from "@/assets/7.png";
import logo8 from "@/assets/8.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

// نكرر القائمة حتى لا يكون هناك أي توقف أو فراغ
const repeatedLogos = [...logos, ...logos, ...logos];

export default function PartnersCarousel() {
  return (
    <section dir="rtl" className="bg-white dark:bg-neutral-900 py-10">
      <div className="max-w-6xl mx-auto">
        <Marquee
          gradient={false}
          speed={50} // السرعة
          pauseOnHover
          className="flex items-center"
        >
          {repeatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[120px] min-h-[120px] rounded-full mx-6 shadow-lg transition-transform hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #fbbc05, #715a1a)", // لون البراند بتدرج
              }}
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="max-h-40 w-auto object-contain p-4"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
