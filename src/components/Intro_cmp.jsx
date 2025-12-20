import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { TitleMask } from "../utils/Quebrar-texto"; 

export default function Intro_cmp({
    titulo, // Pode ser string ou Array ["Minha Primeira", "Linha Incrível"]
    texto,
    texto_2,
    children,
    image,
    className = "",
    classNameTitle = "",
    classNameText = "",
    classNameTextI = "",
    classNameImage = "",
    ...props
}) {
    // 2. Criamos uma referência para o container principal (o escopo da animação)
    const containerRef = useRef(null);
    const baseClass =
        "max-w-8xl mx-auto px-6 lg:px-6 py-20 flex flex-col items-center ";

    const baseTitle =
        "text-6xl max-w-3xl leading-snug tracking-wide text-black text-center";

    const baseText =
        "text-black text-2xl leading-relaxed tracking-wide max-w-2xl text-center mt-8 overflow-hidden block";

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
        },
        { scope: containerRef }
    ); // O scope garante que só animamos coisas DENTRO deste componente

    const showPartII = children || texto_2;

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
                    className={`anim-fade ${classNameImage}`}
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
                        </>
                    )}
                </>
            )}
        </div>
    );
}
