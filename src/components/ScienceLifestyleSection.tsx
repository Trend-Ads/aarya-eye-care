import Image from "next/image";
import Link from "next/link";

export default function ScienceLifestyleSection() {
  return (
    <section className="w-full bg-[#fafbfc] py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Large photo of couple enjoying wine */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/4.5] sm:aspect-[4/4.2] rounded-[32px] sm:rounded-[38px] overflow-hidden shadow-[0_16px_40px_rgba(15,23,42,0.09)] border border-slate-200/70 group">
              <Image
                src="/images/couple-wine.jpg"
                alt="Couple toasting wine enjoying vibrant healthy lifestyle"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </div>
          </div>

          {/* Right Column: Heading, snippet image, paragraph, and CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Bold Heading */}
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-[62px] text-slate-900 leading-[1.0] tracking-tight uppercase">
              Created With Science. <br />
              Made For Your Lifestyle.
            </h2>

            {/* Content Row: Small fitness photo + explanation text */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
              {/* Small Fitness / Nature Photo */}
              <div className="relative w-28 sm:w-32 lg:w-36 aspect-square rounded-2xl overflow-hidden shadow-sm flex-shrink-0 border border-slate-200">
                <Image
                  src="/images/fitness-gear.jpg"
                  alt="Outdoor wellness and hydration training equipment"
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>

              {/* Text Description */}
              <div className="flex-1">
                <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                  Our formula combines carefully selected nutrients researched for
                  their role in maintaining healthy vision and supporting everyday
                  eye wellness. Every ingredient is chosen for its evidence base,
                  not trends. Also this is the best way to recover.
                </p>

                {/* Learn More Button */}
                <div className="mt-6">
                  <Link
                    href="#science-details"
                    className="group inline-flex items-center gap-2.5 bg-[#9A4F3C] hover:bg-[#854231] text-white pl-5 pr-1.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-sm hover:shadow transition-all duration-200"
                  >
                    <span>Learn More</span>
                    <span className="w-6 h-6 rounded-full bg-white text-[#9A4F3C] flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
