import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg"; 
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <section className="mt-20 px-4">
      {/* title */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center font-bold mt-6 tracking-wide">
        رحلتك في{" "}
        <span className="bg-gradient-to-r from-[#fbbc05] to-[#e0bb57] text-transparent bg-clip-text">
          ملتقى WEBSCALE
        </span>
      </h2>
      <p className="mt-4 text-center text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
        من لحظة التسجيل حتى ختام الفعاليات، استمتع بتجربة متكاملة مليئة
        بالمحتوى، الفرص، والتواصل مع قادة الصناعة.
      </p>

      {/* contant */}
      <div className="flex flex-wrap justify-center mt-12 gap-8">
        {/* image */}
        {/* <div className="p-2 w-full lg:w-1/2">
          <img
            src={codeImg}
            alt="ملتقى WEBSCALE"
            className="rounded-lg shadow-lg border border-[#fbbc05]"
          />
        </div> */}

        {/* list */}
        <div className="pt-4 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-10">
              <div className="text-[#fbbc05] mx-6 bg-neutral-100 dark:bg-neutral-900 h-10 w-10 p-2 flex justify-center items-center rounded-full shadow">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl font-semibold">
                  {item.title}
                </h5>
                <p className="text-md text-neutral-600 dark:text-neutral-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
