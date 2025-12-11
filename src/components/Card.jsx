import { TfiArrowRight } from "react-icons/tfi";

export default function Card({
    title,
    text,
    text_2,
    text_3,
    text_button,
    children,
    variant = "white",
    className = "",
    classNameButton = "",
    classNameBarra = "",
    classNameBarraII = "",
    classNameBaseII = "",
    classNameBarraIII = "",
    classNameTitle = "",
    classNameText = "",
    classNameTextII = "",
    classNameTextIII = "",
    href = "#",
    target = "_self",
    ...props
}) {
    // 🟦 BASES FIXAS
    const baseClass = "flex  flex-col  ";
    const baseClassII = "flex  px-6 pl-10 flex-col  ";
    const baseBarra = "border-l-4"; //Barra grossa - pegar o componete todo
    const baseBarraII = "border-l h-13"; //Barra fina - o tomanho da barra é fixo
    const baseBarraIII = "border-l"; //Barra fina - pegar o componete todo
    const baseTitle = " text-2xl  leading-relaxed tracking-widest ";
    const baseText = "text-base max-w-md tracking-widest leading-relaxed";
    const baseButtonClassName =
        "flex-row flex border  cursor-pointer rounded-lg w-fit max-w-xs items-center tracking-wider transition-all duration-300 ";
    const divPClassName = "px-4 py-2 border-r   ";
    const divArrowClassName =
        "cursor-pointer text-xl px-3 py-2.5 hover:border-l";

    // 🟨 VARIANTES
    const variants = {
        white: {
            title: "text-white",
            text: "text-white",
            text_2: "text-white",
            text_3: "text-white",
            baseClass: "text-white ",
            baseClassII: "text-white ",
            barra: "border-white",
            barraII: "border-white",
            barraIII: "border-white",

            baseButtonClassName:
                "text-white border-white bg-black hover:bg-white hover:inset-shadow-sm hover:inset-shadow-indigo-500 hover:shadow-lg/20 hover:shadow-[#ffffff] hover:text-black",
            divPClassName: "border-white hover:border-black",
            divArrowClassName: "hover:border-black ",
        },
        black: {
            title: "text-black",
            text_2: "text-black",
            text_3: "text-black",
            text: "text-black",
            baseClass: "text-black",
            baseClassII: "text-black",
            barra: "border-black",
            barraII: "border-black",
            barraIII: "border-black",

            baseButtonClassName:
                "text-black border-black bg-white hover:inset-shadow-sm hover:inset-shadow-indigo-500/50 hover:shadow-xl/50 hover:bg-black hover:text-white",
            divPClassName: "border-black hover:border-white",
            divArrowClassName: "hover:border-white ",
        },
    };
    const styles = variants[variant];
    const showBottomPart = children || text_2 || text_3 || text_button;

    return (
        <>
            <div
                className={`${baseClass} ${styles.text} ${className}`}
                {...props}
            >
                {/*Barra fina - o tomanho da barra é fixo*/}
                <div
                    className={`${baseBarraII} ${styles.barraII} ${classNameBarraII}`}
                    {...props}
                >
                    <div
                        className={`${baseClassII} ${styles.baseClassII} ${className}`}
                    >
                        <p
                            className={`${baseText} ${styles.text} ${classNameText}`}
                        >
                            {text}
                        </p>
                    </div>
                </div>
                {/*Barra grossa - pegar o componete todo*/}
                <div
                    className={`${baseBarra} ${styles.barra} ${classNameBarra}`}
                >
                    <div
                        className={`${baseClassII} ${styles.baseClassII} ${className}`}
                    >
                        <h2
                            className={`${baseTitle} ${styles.title} ${classNameTitle}`}
                        >
                            {title}
                        </h2>
                    </div>
                </div>
                {/*caso queira adicionar mais elementos*/}
                {showBottomPart && (
                    /*Barra fina - pegar o componete todo*/
                    <div
                        className={`${baseBarraIII} ${styles.barraIII} ${classNameBarraIII}`}
                    >
                        <div
                            className={`${baseClassII} ${styles.baseClassII} ${classNameBaseII}`}
                        >
                            {/* Se tiver children (divs extras), usa eles. 
                             Se não, usa o text_2 com a formatação padrão */}
                            {children ? (
                                children
                            ) : (
                                <>
                                    {text_2 && (
                                        <p
                                            className={`${baseText} ${styles.text_2} ${classNameTextII}`}
                                        >
                                            {text_2}
                                        </p>
                                    )}
                                    {text_3 && (
                                        <p
                                            className={`${baseText} ${styles.text_3} ${classNameTextIII}`}
                                        >
                                            {text_3}
                                        </p>
                                    )}
                                    {text_button && (
                                        <a
                                            href={href}
                                            target={target}
                                            className={`${baseButtonClassName} ${styles.baseButtonClassName} ${classNameButton}`}
                                        >
                                            <div
                                                className={`${divPClassName} ${styles.divPClassName} `}
                                            >
                                                <p className=" cursor-pointer">
                                                    {text_button}
                                                </p>
                                            </div>
                                            <div
                                                className={`${divArrowClassName} ${styles.divArrowClassName}`}
                                            >
                                                <TfiArrowRight />
                                            </div>
                                        </a>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
