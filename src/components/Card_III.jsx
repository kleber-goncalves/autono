import { TfiArrowRight } from "react-icons/tfi";

export default function Card_III({
    title,
    text,
    text_button,
    children,
    variant = "black",
    size = "sizeI",
    mt = "",
    className = "",
    classNameTitle = "",
    classNameText = "",
    href = "#",
    target = "_self",
}) {
    const baseClass = "flex max-w-xs sm:max-w-none lg:max-w-xs flex-col md:gap-9 gap-6";
    const baseTitle =
        "max-w-xs sm:max-w-none  lg:max-w-xs text-wrap leading-relaxed tracking-widest";
    const baseText =
        "md:text-base text-xs tracking-wider leading-relaxed";
    const baseButtonClassName =
        "flex-row flex border cursor-pointer rounded-lg w-fit max-w-xs items-center tracking-wider transition-all duration-300 ";
    const divPClassName = "md:px-4 px-3 py-2 border-r   ";
    const divArrowClassName =
        "cursor-pointer md:text-xl text-sm md:px-3 px-2 md:py-2.5 hover:border-l transition-all";

    const variants = {
        white: {
            title: "text-white",
            text: "text-white",
            baseButtonClassName:
                "text-white border-white bg-black hover:bg-white hover:text-black hover:inset-shadow-sm hover:inset-shadow-indigo-500 hover:shadow-lg/20 hover:shadow-[#ffffff]",
            divPClassName: "border-white hover:border-black",
            divArrowClassName: "hover:border-black ",
        },
        black: {
            title: "text-black",
            text: "text-black",
            baseButtonClassName:
                "text-black border-black bg-white hover:bg-black hover:inset-shadow-sm hover:inset-shadow-indigo-500/50 hover:shadow-xl/50 hover:text-white",
            divPClassName: "border-black hover:border-white",
            divArrowClassName: "hover:border-white ",
        },
    };

    const sizes = {
        sizeI: {
            title: "text-lg",
        },
        sizeII: {
            title: "text-2xl",
        },
        sizeIII: {
            title: "md:text-[40px]",
        },
    };

    const mts = {
        mtI: "mt-4",
        mtII: "mt-12",
        mtIII: "mt-0",
    };

    const magt = mts[mt];
    const tmlh = sizes[size];
    const styles = variants[variant];
    const showPartII = children || text;

    return (
        <>
            <div
                className={`${baseClass} ${styles.baseClassName} ${className}`}
            >
                <h2
                    className={`${baseTitle} ${tmlh.title} ${styles.title} ${classNameTitle}`}
                >
                    {title}
                </h2>
                {showPartII && (
                    <div className="flex flex-col  gap-4">
                        {children ? (
                            children
                        ) : (
                            <>
                                {text && (
                                    <p
                                        className={`${baseText} ${styles.text} ${classNameText}`}
                                    >
                                        {text}
                                    </p>
                                )}
                            </>
                        )}
                    </div>
                )}

                <a
                    href={href}
                    target={target}
                    className={`${baseButtonClassName} ${magt} ${styles.baseButtonClassName} `}
                >
                    <div
                        className={`${divPClassName} ${styles.divPClassName} `}
                    >
                        <p className={` cursor-pointer text-xs md:text-base `} >{text_button}</p>
                    </div>
                    <div
                        className={`${divArrowClassName} ${styles.divArrowClassName}`}
                    >
                        <TfiArrowRight />
                    </div>
                </a>
            </div>
        </>
    );
}

