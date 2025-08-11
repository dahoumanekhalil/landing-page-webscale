import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <section className="mt-20 tracking-wide px-4">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 font-bold">
        ماذا يقول المشاركون؟
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/4 px-4 py-2"
          >
            <div className="bg-neutral-100 dark:bg-neutral-900 rounded-xl p-6 text-md border border-neutral-300 dark:border-neutral-800 shadow-lg hover:shadow-xl transition duration-300">
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {testimonial.text}
              </p>
              <div className="flex mt-8 items-center">
                <img
                  className="w-12 h-12 mr-4 rounded-full border border-[#fbbc05]"
                  src={testimonial.image}
                  alt={testimonial.user}
                />
                <div>
                  <h6 className="font-semibold">{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600 dark:text-neutral-400">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

