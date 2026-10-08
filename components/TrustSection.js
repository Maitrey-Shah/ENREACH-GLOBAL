"use client";

export default function TrustSection({
  whyChooseUsItems,
  companyStatistics,
  industryExpertise,
  globalPresenceIndicators,
  serviceOfferings,
  industryFocus,
}) {
  return (
    <section id="trust" className="scroll-mt-28 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#456055]">
            Trust & Credibility
          </p>
          <h2 className="mt-3 text-4xl leading-tight font-semibold text-[#063B24] md:text-5xl">
            Why industrial buyers choose Enreach Global.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#456055]">
            We combine sourcing discipline, documentation clarity, and responsive
            coordination to support premium scrap trading relationships that feel
            commercially reliable from the first enquiry.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {whyChooseUsItems.map((item) => (
            <article
              key={item.title}
              data-reveal
              className="rounded-[28px] border border-[#C8CCC9]/80 bg-white/90 p-6 shadow-sm transition-all duration-300 hover:-translate-y-[5px] hover:shadow-sm"
            >
              <h3 className="text-2xl font-semibold text-[#063B24]">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-[#456055]">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-6 rounded-[32px] border border-[#C8CCC9]/80 bg-white/85 p-6 shadow-sm lg:grid-cols-4">
          {companyStatistics.map((stat) => (
            <div key={stat.label} data-reveal className="rounded-[24px] bg-[#EAF8EF] p-6">
              <div className="text-3xl font-semibold text-[#063B24]">{stat.value}</div>
              <p className="mt-3 text-sm leading-6 text-[#456055]">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div
            data-reveal
            className="rounded-[30px] border border-[#C8CCC9]/80 bg-white/90 p-7 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#456055]">
              Services
            </p>
            <div className="mt-5 grid gap-4">
              {serviceOfferings.map((service) => (
                <div key={service.title} className="rounded-[20px] bg-[#EAF8EF] px-5 py-4">
                  <h3 className="text-xl font-semibold text-[#063B24]">{service.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#456055]">{service.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            data-reveal
            className="rounded-[30px] border border-[#C8CCC9]/80 bg-white/90 p-7 shadow-sm"
          >
            <p id="industries" className="text-sm font-semibold uppercase tracking-[0.24em] text-[#456055]">
              Industries
            </p>
            <div className="mt-5 grid gap-4">
              {industryFocus.map((industry) => (
                <div key={industry.title} className="rounded-[20px] bg-[#EAF8EF] px-5 py-4">
                  <h3 className="text-xl font-semibold text-[#063B24]">
                    {industry.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#456055]">{industry.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div
            data-reveal
            className="rounded-[30px] border border-[#C8CCC9]/80 bg-white/90 p-7 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#456055]">
              Industry Expertise
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {industryExpertise.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#C8CCC9] bg-[#EAF8EF] px-4 py-2 text-sm font-medium text-[#0A5C36]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div
            data-reveal
            className="rounded-[30px] border border-[#C8CCC9]/80 bg-white/90 p-7 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#456055]">
              Global Presence
            </p>
            <div className="mt-5 grid gap-3">
              {globalPresenceIndicators.map((item) => (
                <div
                  key={item}
                  className="rounded-[18px] bg-[#EAF8EF] px-4 py-3 text-sm leading-6 text-[#0A5C36]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
