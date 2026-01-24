import React from "react";

const FAQ = () => {
  return (
    <section className=" pb-10">
      <div className="max-w-5xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-base-content">
            Cattle Feed FAQs
          </h2>
          <p className="mt-3 text-base-content/70">
            Answers to common questions about nutrition, usage, and benefits
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-xl">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title text-lg font-semibold">
              Which cattle feed is best for increasing milk production?
            </div>
            <div className="collapse-content text-base-content/80">
              Our high-protein balanced cattle feed is specially formulated to
              improve digestion, boost milk yield, and maintain animal health
              for both cows and buffaloes.
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-xl">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-semibold">
              Is this feed suitable for calves?
            </div>
            <div className="collapse-content text-base-content/80">
              Yes, we offer a dedicated calf starter feed that supports early
              growth, immunity development, and better weight gain during the
              initial stages.
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-xl">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-semibold">
              How much cattle feed should be given daily?
            </div>
            <div className="collapse-content text-base-content/80">
              The daily quantity depends on the animal’s body weight, milk
              production level, and stage of lactation. Our team recommends a
              customized feeding plan for best results.
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-xl">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-semibold">
              Does your cattle feed improve digestion and immunity?
            </div>
            <div className="collapse-content text-base-content/80">
              Absolutely. Our formulations include essential minerals,
              probiotics, and vitamins that enhance digestion, fertility, and
              overall immunity of livestock.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
