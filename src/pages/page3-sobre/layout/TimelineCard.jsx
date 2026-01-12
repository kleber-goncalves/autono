
const TimelineCard = ({ data, position }) => {
    // Define margens baseadas na posição apenas para Desktop
    const marginClass =
        position === "top"
            ? "md:mb-12"
            : position === "bottom"
            ? "md:mt-12"
            : ""; // No mobile (sem position definida ou "mobile"), não aplica margem vertical extra
    return (
        <div
            className={`
        w-full  md:w-[550px] p-6 md:p-8 border border-black  rounded-2xl bg-white text-left transition-all duration-300 hover:shadow-lg
        ${marginClass}
      `}
        >
            <h2 className="text-[27px] md:text-5xl text-orange-500 font-light mb-4">
                {data.year}
            </h2>
            <div className="w-20 md:w-30 h-px bg-black mb-4"></div>
            <h3 className="text-[11px] md:text-sm tracking-widest uppercase mb-4">
                {data.subtitle}
            </h3>
            <p className="text-xs md:text-base leading-relaxed ">{data.description}</p>
        </div>
    );
};

export default TimelineCard;
