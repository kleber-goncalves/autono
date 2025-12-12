
const TimelineCard = ({ data, position }) => {
    return (
        <div
            className={`
        w-[550px] p-8 border border-black  rounded-2xl bg-white text-left transition-all duration-300 hover:shadow-lg
        ${position === "top" ? "mb-12" : "mt-12"}
      `}
        >
            <h2 className="text-5xl text-orange-500 font-light mb-4">
                {data.year}
            </h2>
            <div className="w-30 h-px bg-black mb-4"></div>
            <h3 className="text-sm tracking-widest uppercase mb-4">
                {data.subtitle}
            </h3>
            <p className="text-base leading-relaxed ">
                {data.description}
            </p>
        </div>
    );
};

export default TimelineCard;
