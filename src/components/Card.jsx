export default function Card({
    title,
    text,
    variant="white",
    className = "",
    classNameBarra = "",
    classNameBarraII = "",
    classNameTitle = "",
    classNameText = "",
    ...props
}) {
    // 🟦 BASES FIXAS
    const baseClass = "flex  flex-col  ";
    const baseClassII = "flex  px-6 pl-10 flex-col  ";
    const baseBarra = "border-l-4";
    const baseBarraII = "border-l h-13";
    const baseTitle = " text-2xl leading-relaxed tracking-widest ";
    const baseText = "text-base max-w-md tracking-widest leading-relaxed";

    // 🟨 VARIANTES 
    const variants = {
        white: {
            text: "text-white",
            baseClass: "text-white ",
            baseClassII: "text-white ",
            barra: "border-white",
            barraII: "border-white",
        },
        black: {
            text: "text-black",
            baseClass: "text-black",
            baseClassII: "text-black",
            barra: "border-black",
            barraII: "border-black",
        },
    };
        const styles = variants[variant];

    return (
        <>
            <div
                className={`${baseClass} ${styles.text} ${className}`}
                {...props}
            >
                <div
                    className={`${baseBarraII} ${styles.barraII} ${classNameBarraII}`}
                    {...props}
                >
                    <div
                        className={`${baseClassII} ${styles.baseClassII} ${className}`}
                    >
                        <p className={`${baseText} ${classNameText}`}>{text}</p>
                    </div>
                </div>
                <div
                    className={`${baseBarra} ${styles.barra} ${classNameBarra}`}
                >
                    <div
                        className={`${baseClassII} ${styles.baseClassII} ${className}`}
                    >
                        <h2 className={`${baseTitle} ${classNameTitle}`}>
                            {title}
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
}