import { TfiArrowRight } from "react-icons/tfi";

export default function Card_II({
    title,
    text,
    text_2,
    text_button,
    children,
    variant = "black",
    size = "sizeI",
    mt = "",
    className = "",
    classNameTitle = "",
    classNameText = "",
    classNameTextII = "",
    href = "#",
    target = "_self",
}) {
    const baseClass =
        "flex md:max-w-md max-w-sm h-full  flex-col py-8 px-6 md:px-10 py-10 md:gap-17 gap-6  rounded-2xl border border-white";
    const baseTitle = "text-sm md:text-base leading-relaxed tracking-widest";
    const baseText =
        "md:text-sm text-xs max-w-xs tracking-wider leading-relaxed";
    const baseText_2 =
        "md:text-base text-[11px]  tracking-wider leading-relaxed";
    const baseButtonClassName =
        "flex-row flex border  cursor-pointer rounded-lg w-fit max-w-xs items-center tracking-wider transition-all duration-300 ";
    const divPClassName = "md:px-4 px-3 py-2 border-r   ";
    const divArrowClassName =
        "cursor-pointer  md:text-xl text-sm md:px-3 px-2 md:py-2.5 hover:border-l";

    const variants = {
        white: {
            title: "text-white",
            text: "text-gray-400",
            text_2: "text-white",
            baseButtonClassName:
                "text-white border-white bg-black hover:bg-white hover:text-black hover:inset-shadow-sm hover:inset-shadow-indigo-500 hover:shadow-lg/20 hover:shadow-[#ffffff]",
            divPClassName: "border-white hover:border-black",
            divArrowClassName: "hover:border-black ",
        },
        black: {
            title: "text-black",
            text: "text-black",
            text_2: "text-black",
            baseClassName: "bg-white",
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
    };

    const mts = {
        mtI: "mt-4",
        mtII: "mt-12",
        mtIII: "mt-0",
    };

    const magt = mts[mt];
    const tmlh = sizes[size];
    const styles = variants[variant];
    const showPartII = children || text || text_2;

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
                    <div className="flex flex-col gap-3 md:gap-4">
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
                                {text_2 && (
                                    <p
                                        className={`${baseText_2} ${styles.text_2} ${classNameTextII}`}
                                    >
                                        {text_2}
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
                        <p className=" cursor-pointer  text-xs md:text-base">{text_button}</p>
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

