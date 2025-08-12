// src/components/FeatureSection.jsx 
import { features } from "../constants";

const FeatureSection = () => {
  return (
    <section className="relative mt-20 border-b border-neutral-300 dark:border-neutral-800 min-h-[600px] px-4">
      {/* title */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-6 lg:mt-12 tracking-wide font-bold">
          لماذا تختار
          <span className="bg-gradient-to-r from-[#fbbc05] to-[#e0bb57] text-transparent bg-clip-text">
            {" "}WEBSCALE
          </span>
          ؟
        </h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed">
          ملتقانا الأول يجمع القادة، الخبراء، وأصحاب المؤسسات في يوم تطبيقي
          يحوّل الذكاء الاصطناعي إلى نتائج عملية مباشرة في التجارة الإلكترونية.
        </p>
      </div>

      <div className="flex flex-wrap mt-12 lg:mt-20 gap-y-10">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4">
            <div className="flex items-start">
              <div className="flex h-12 w-12 p-3 bg-neutral-100 dark:bg-neutral-500 text-neutral-800 dark:text-[#fbbc05] justify-center items-center rounded-full shadow-md">
                {feature.icon}
              </div>
              <div className="ml-4">
                <h5 className="text-xl text-neutral-800 dark:text-neutral-100 font-semibold mb-2">
                  {feature.text}
                </h5>
                <p className="text-md text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
