import { TfiArrowRight } from "react-icons/tfi";
import { useRef } from "react";
import useEfeitoGsap from "../hooks/Efeitos/useEfeito-simples_scrollTigger";


export default function Sec_Lists({
    title,
    li_1,
    li_2,
    li_3,
    li_4,
    li_5,
    lis_v2,
    text_button,
    children,
    variant = "black",
    className = "",
    classNameTitle = "",
    classNameli = "",
    classNameliII = "",
    classNameButton = "",
    href = "#",
    target = "_self",
}) {
    const baseClass = "flex xl:px-50  flex-col  ";
    const ul =
        "flex flex-col md:grid grid-cols-2 grid-rows-3 gap-y-10 gap-x-20 xl:gap-x-100  list-disc ml-5";
    const baseTitle = " md:text-2xl text-lg  leading-relaxed tracking-widest ";
    const baseLi =
        "md:text-base  text-xs  xl:max-w-md  leading-[1.8] tracking-wider";
    const baseLiII =
        "md:text-base  text-xs  xl:max-w-md leading-[1.8] tracking-wider";
    const liBlack = "";
    const barraMenor = "anim-barra-M border-b-3  border-black w-23 opacity-100";
    const barraMaior = "anim-barra  border-b border-black md:w-80 lg:w-120 opacity-100";
    const baseButtonClassName =
        "flex-row flex border  cursor-pointer rounded-lg w-fit max-w-xs items-center tracking-wider transition-all duration-300 ";
    const divPClassName = "md:px-4 px-3 py-2 border-r   ";
    const divArrowClassName =
        "cursor-pointer md:text-xl text-sm md:px-3 px-2 md:py-2.5 hover:border-l";

    // VARIANTES
    const variants = {
        white: {
            title: "text-white",
            lis: "text-white",
            ul: "text-white",
            liBlack: "marker:text-white",
            baseClass: "text-white ",
            baseClassII: "text-white ",
            barraMenor: "border-white",
            barraMaior: "border-white",

            baseButtonClassName:
                "text-white border-white bg-black hover:bg-white hover:inset-shadow-sm hover:inset-shadow-indigo-500 hover:shadow-lg/20 hover:shadow-[#ffffff] hover:text-black",
            divPClassName: "border-white hover:border-black",
            divArrowClassName: "hover:border-black ",
        },
        black: {
            title: "text-black",
            lis: "text-black",
            ul: "text-black",
            liBlack: "marker:text-black",
            baseClass: "text-black",
            baseClassII: "text-black",
            barraMenor: "border-black",
            barraMaior: "border-black",

            baseButtonClassName:
                "text-black border-black bg-white hover:inset-shadow-sm hover:inset-shadow-indigo-500/50 hover:shadow-xl/50 hover:bg-black hover:text-white",
            divPClassName: "border-black hover:border-white",
            divArrowClassName: "hover:border-white ",
        },
    };

    //As referências para os elementos que serão animados
    const boxRef1 = useRef(null); // Primeira imagem de carro (lado direito)
    const boxRef2 = useRef(null); // Imagem do velocímetro (lado esquerdo)

    useEfeitoGsap(boxRef1, {
        xInitial: 120, // Valor reduzido para evitar quebra de layout
        autoAlphaInitial: 1, // Usando autoAlpha para o efeito de "aparecer"
        start: "top 90%",
    });

    useEfeitoGsap(boxRef2, {
        xInitial: 0, // Valor reduzido para evitar quebra de layout
        autoAlphaInitial: 0, // Usando autoAlpha para o efeito de "aparecer"
        start: "top 100%",
      
    });
    const styles = variants[variant];

    const showBottomPart = children || lis_v2 || text_button;

    return (
        <>
            <div className={`${baseClass} ${styles.baseClass} ${className}`}>
                <div className="flex flex-col mb-10">
                    <h2
                        className={`${baseTitle} ${styles.title} ${classNameTitle}`}
                    >
                        {title}
                    </h2>
                    {/*Barras - separador*/}
                    <div className="mt-4">
                        {/*Barra - menor*/}
                        <div
                            ref={boxRef1}
                            className={`${barraMenor} ${styles.barraMenor}`}
                        ></div>
                        {/*Barra - maior*/}
                        <div
                            ref={boxRef2}
                            className={`${barraMaior} ${styles.barraMaior}`}
                        ></div>
                    </div>
                </div>

                <ul className={`${ul} ${styles.ul}`}>
                    <li
                        className={`${baseLi} ${styles.li} ${classNameli} ${liBlack}`}
                    >
                        {li_1}
                    </li>
                    <li
                        className={`${baseLi} ${styles.li} ${classNameli} ${liBlack}`}
                    >
                        {li_2}
                    </li>
                    <li
                        className={`${baseLi} ${styles.li} ${classNameli} ${liBlack}`}
                    >
                        {li_3}
                    </li>
                    <li
                        className={`${baseLi} ${styles.li} ${classNameli} ${liBlack}`}
                    >
                        {li_4}
                    </li>
                    <li
                        className={`${baseLi} ${styles.li} ${classNameli} ${liBlack}`}
                    >
                        {li_5}
                    </li>

                    {/*caso queira adicionar mais elementos*/}
                    {showBottomPart && (
                        <>
                            {/* Se tiver children (divs extras), usa eles. 
                             Se não, usa o lis_2 com a formatação padrão */}
                            {children ? (
                                children
                            ) : (
                                <>
                                    {lis_v2 && (
                                        <li
                                            className={`${baseLiII} ${styles.li} ${classNameliII} ${liBlack}`}
                                        >
                                            {lis_v2}
                                        </li>
                                    )}
                                    <div>
                                        {text_button && (
                                            <a
                                                href={href}
                                                target={target}
                                                className={`${baseButtonClassName} ${styles.baseButtonClassName} ${classNameButton}`}
                                            >
                                                <div
                                                    className={`${divPClassName} ${styles.divPClassName} `}
                                                >
                                                    <p className=" cursor-pointer text-xs md:text-base">
                                                        {/*caso queira adicionar mais elementos*/}
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
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </ul>
            </div>
        </>
    );
}
