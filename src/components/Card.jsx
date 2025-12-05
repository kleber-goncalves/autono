export default function Card({
    title,
    text,
    text_2,
    text_3,
    children,
    variant = "white",
    className = "",
    classNameBarra = "",
    classNameBarraII = "",
    classNameBaseII = "",
    classNameBarraIII = "",
    classNameTitle = "",
    classNameText = "",
    ...props
}) {
    // 🟦 BASES FIXAS
    const baseClass = "flex  flex-col  ";
    const baseClassII = "flex  px-6 pl-10 flex-col  ";
    const baseBarra = "border-l-4"; //Barra grossa - pegar o componete todo 
    const baseBarraII = "border-l h-13"; //Barra fina - o tomanho da barra é fixo
    const baseBarraIII = "border-l"; //Barra fina - pegar o componete todo
    const baseTitle = " text-2xl leading-relaxed tracking-widest ";
    const baseText = "text-base max-w-md tracking-widest leading-relaxed";

    // 🟨 VARIANTES
    const variants = {
        white: {
            text: "text-white",
            text_2: "text-white",
            text_3: "text-white",
            baseClass: "text-white ",
            baseClassII: "text-white ",
            barra: "border-white",
            barraII: "border-white",
            barraIII: "border-white",
        },
        black: {
            text_2: "text-black",
            text_3: "text-black",
            text: "text-black",
            baseClass: "text-black",
            baseClassII: "text-black",
            barra: "border-black",
            barraII: "border-black",
            barraIII: "border-black",
        },
    };
    const styles = variants[variant];
    const showBottomPart = children || text_2;

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
                        <p className={`${baseText} ${classNameText}`}>{text}</p>
                    </div>
                </div>
                {/*Barra grossa - pegar o componete todo*/}
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
                                <p className={`${baseText} ${classNameText}`}>
                                    {text_2}
                                </p>
                            )}
                            {children ? (
                                children
                            ) : (
                                <p className={`${baseText} ${classNameText}`}>
                                    {text_3}
                                </p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}