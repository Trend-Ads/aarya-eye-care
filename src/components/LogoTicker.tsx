export default function LogoTicker() {
  const logos = [
    {
      id: "jadeite",
      render: () => (
        <div className="flex items-center gap-1.5 text-[#30291F] tracking-wider">
          <svg
            className="w-3.5 h-3.5 text-[#675E31]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <polygon points="12 2 2 8.5 12 15 22 8.5 12 2" />
            <polygon points="12 15 2 8.5 2 15.5 12 22 22 15.5 22 8.5 12 15" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="font-bold text-[10px] sm:text-[11px] tracking-widest leading-none">
              JADEITE
            </span>
            <span className="font-semibold text-[7px] sm:text-[8px] tracking-widest text-[#30291F]/60 uppercase leading-none mt-0.5">
              GROUP
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "yogti",
      render: () => (
        <span className="font-sans font-black text-sm sm:text-base tracking-tight text-[#30291F] lowercase">
          yogt<span className="text-[#A55322]">.i</span>
        </span>
      ),
    },
    {
      id: "hidden-stories",
      render: () => (
        <div className="flex flex-col text-left">
          <span className="font-serif font-extrabold text-[9px] sm:text-[10px] tracking-widest text-[#30291F] uppercase leading-none">
            HIDDEN STORIES
          </span>
          <span className="font-serif italic text-[7.5px] sm:text-[8px] text-[#30291F]/60 lowercase leading-none mt-0.5">
            by Jennie Hilbert
          </span>
        </div>
      ),
    },
    {
      id: "qynda",
      render: () => (
        <div className="flex items-center gap-1 text-[#30291F] font-black tracking-wider text-xs sm:text-[13px]">
          <svg
            className="w-3 h-3 fill-[#30291F]"
            viewBox="0 0 24 24"
          >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
          <span>QYNDA</span>
        </div>
      ),
    },
    {
      id: "amao",
      render: () => (
        <span className="font-sans font-black text-base sm:text-lg tracking-tighter text-[#30291F] lowercase">
          amao
        </span>
      ),
    },
  ];

  return (
    <div className="w-full bg-[#F2E9DC]/80 backdrop-blur-md py-2 sm:py-2.5 border-t border-[#C9A581]/30 overflow-hidden relative flex-shrink-0 z-30">
      {/* Gradient edge fades for seamless marquee effect */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#F2E9DC] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#F2E9DC] to-transparent z-10 pointer-events-none" />

      <div className="overflow-hidden">
        <div className="animate-ticker flex items-center gap-10 sm:gap-16">
          {/* Repeated logo lists for infinite marquee scroll */}
          {logos.map((logo) => (
            <div
              key={`first-${logo.id}`}
              className="flex-shrink-0 opacity-75 hover:opacity-100 transition-opacity"
            >
              {logo.render()}
            </div>
          ))}

          {logos.map((logo) => (
            <div
              key={`second-${logo.id}`}
              className="flex-shrink-0 opacity-75 hover:opacity-100 transition-opacity"
            >
              {logo.render()}
            </div>
          ))}

          {logos.map((logo) => (
            <div
              key={`third-${logo.id}`}
              className="flex-shrink-0 opacity-75 hover:opacity-100 transition-opacity"
            >
              {logo.render()}
            </div>
          ))}

          {logos.map((logo) => (
            <div
              key={`fourth-${logo.id}`}
              className="flex-shrink-0 opacity-75 hover:opacity-100 transition-opacity"
            >
              {logo.render()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
