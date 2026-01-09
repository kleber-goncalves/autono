import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { TitleMask } from "../utils/Quebrar-texto";

export default function Intro_cmp({
    titulo, // Pode ser string ou Array ["Minha Primeira", "Linha Incrível"]
    texto,
    texto_2,
    cidade,
    Tp_contrado,
    children,
    image,
    imageII,
    className = "",
    classNameTitle = "",
    classNameText = "",
    classNameTextI = "",
    classNameTextII = "",
    classNameTextIII = "",
    classNameImage = "",
    classNameImageII = "",
    ...props
}) {
    // referência para o container principal (o escopo da animação)
    const containerRef = useRef(null);
    const baseClass =
        "max-w-8xl mx-auto md:px-6 lg:px-6 py-20 flex flex-col items-center ";

    const baseTitle =
        "md:text-6xl max-w-3xl px-6 md:px-0  md:leading-snug tracking-wide text-black text-center";

    const baseText =
        "text-black md:text-2xl text-sm px-6 md:px-0 leading-relaxed tracking-wider md:max-w-2xl text-center md:mt-1 mt-3 overflow-hidden block";
    const baseTextII =
        "text-black md:text-2xl text-lg px-6 md:px-0 leading-relaxed tracking-wider md:max-w-2xl text-center md:mt-4 mt-3 overflow-hidden block";

    
    const baseTextIII =
        "text-black text-[11px] md:text-sm px-6 md:px-0 leading-relaxed tracking-[0.16rem] md:max-w-2xl text-center md:mb-4 mb-3 overflow-hidden block";
    const baseImage = "hidden md:block";
    const baseImageII = "md:hidden w-full";

    // A mágica da Animação
    useGSAP(
        () => {
            // Animação do Título (SplitText manual)
            gsap.from(".line-inner", {
                opacity: 0,
                y: "100%", // O texto começa 100% para baixo (escondido pela máscara)
                duration: 3.6, // Duração um pouco mais longa fica mais elegante
                ease: "expo.out", // Curva suave, começa rápido e desacelera no final
                stagger: 0.6, // Pequeno atraso entre a 1ª e a 2ª linha
            });

            // Animação da Imagem e Texto (fade in simples subindo)
            gsap.from(".anim-fade", {
                y: 20,
                opacity: 0,
                duration: 1,
                delay: 1.5, // Espera um pouco o título terminar
                stagger: 0.2, // Anima a imagem e depois o texto
            });
            gsap.from(".anim-fadeII", {
                y: 20,
                opacity: 0,
                duration: 1,
                delay: 1.2, // Espera um pouco o título terminar
                stagger: 0.2, // Anima a imagem e depois o texto
            });
            gsap.from(".anim-fadeIII", {
                y: 0,
                opacity: 0,
                duration: 1,
                delay: 1.2, // Espera um pouco o título terminar
                stagger: 0.2, // Anima a imagem e depois o texto
            });
            gsap.from(".anim-barra", {
                y: 0,
                opacity: 0,
                duration: 4,
                delay: 1.4, // Espera um pouco o título terminar
                stagger: 0.2, // Anima a imagem e depois o texto
            });
            gsap.from(".anim-barra-M", {
                x: 120,
                opacity: 0,
                duration: 2,
                delay: 1.4, // Espera um pouco o título terminar
                stagger: 0.2, // Anima a imagem e depois o texto
            });
        },
        { scope: containerRef }
    ); // O scope garante que só animamos coisas DENTRO deste componente

    const showPartII = children || texto_2 || cidade || Tp_contrado;

    return (
        <div
            ref={containerRef}
            className={`${baseClass} ${className}`}
            {...props}
        >
            <h1 className={`${baseTitle} ${classNameTitle}`}>
                <TitleMask>{titulo}</TitleMask>
            </h1>

            {image && (
                <img
                    src={image}
                    alt={titulo}
                    className={`anim-fade ${classNameImage} ${baseImage}`}
                />
            )}
            {imageII && (
                <img
                    src={imageII}
                    alt={titulo}
                    className={`anim-fade ${classNameImageII} ${baseImageII}`}
                />
            )}

            <p
                className={`anim-fade ${baseText} ${classNameTextI} ${classNameText}`}
            >
                {texto}
            </p>
            {showPartII && (
                <>
                    {children ? (
                        children
                    ) : (
                        <>
                            {texto_2 && (
                                <p
                                    className={`anim-fadeII ${baseText} ${classNameText}`}
                                >
                                    {texto_2}
                                </p>
                            )}
                            <div className="flex flex-col md:grid grid-cols-2 gap-10 w-full">
                                <div className="flex flex-col items-center">
                                    <p
                                        className={`anim-fadeIII ${baseTextIII} ${classNameTextIII}`}
                                    >
                                        LOCAL
                                    </p>

                                    <div className="anim-barra-M border-b-3  border-black w-23 opacity-100"></div>
                                    <div className="anim-barra border-b border-black w-50 opacity-100"></div>

                                    {cidade && (
                                        <p
                                            className={`anim-fadeIII ${baseTextII} ${classNameTextII}`}
                                        >
                                            {cidade}
                                        </p>
                                    )}
                                </div>
                                <div className="flex flex-col items-center">
                                    <p
                                        className={`anim-fadeIII ${baseTextIII} ${classNameTextIII}`}
                                    >
                                        TIPO DE CONTRATO
                                    </p>
                                    <div className="anim-barra-M border-b-3  border-black w-23 opacity-100"></div>
                                    <div className="anim-barra border-b border-black w-50 opacity-100"></div>

                                    {Tp_contrado && (
                                        <p
                                            className={`anim-fadeIII ${baseTextII} ${classNameTextII}`}
                                        >
                                            {Tp_contrado}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
}
