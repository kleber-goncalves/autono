import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// 1. Pequeno componente auxiliar para quebrar o texto (acessível)


export default function Intro_cmp({
    titulo,
    texto,
    image,
    className = "",
    classNameTitle = "",
    classNameText = "",
    classNameImage = "",
    ...props
}) {
    // 2. Criamos uma referência para o container principal (o escopo da animação)
    const containerRef = useRef(null);

    const baseClass =
        "max-w-8xl mx-auto px-6 lg:px-6 py-20 flex flex-col items-center ";
    const baseTitle =
        "text-6xl max-w-3xl leading-snug tracking-wide text-black text-center overflow-hidden"; // overflow-hidden opcional, dependendo do efeito
    const baseText =
        "text-black text-2xl leading-relaxed tracking-wide max-w-2xl text-center mt-8"; // adicionei mt-8 para espaçamento

    // 3. A mágica da Animação
    useGSAP(
        () => {
            // Animação do Título (SplitText manual)
            gsap.from(".char", {
                y: 100, // Vem de 100px abaixo
                opacity: 0, // Começa invisível
                rotate: 10, // Leve rotação inicial
                duration: 1, // Duração de 1 segundo
                stagger: 0.05, // Atraso de 0.05s entre cada letra (efeito cascata)
                ease: "back.out(1.7)", // Efeito elástico no final
            });

            // Animação da Imagem e Texto (fade in simples subindo)
            gsap.from(".anim-content", {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: 0.5, // Espera um pouco o título começar
                stagger: 0.2, // Anima a imagem e depois o texto
            });
        },
        { scope: containerRef }
    ); // O scope garante que só animamos coisas DENTRO deste componente

    return (
        // Adicionamos a ref aqui
        <div
            ref={containerRef}
            className={`${baseClass} ${className}`}
            {...props}
        >
            {/* Título usando o nosso componente auxiliar */}
            <h1 className={`${baseTitle} ${classNameTitle}`}>
                <TextoAnimado>{titulo}</TextoAnimado>
            </h1>

            {/* Imagem */}
            {image && (
                <img
                    src={image}
                    alt={titulo}
                    className={`anim-content ${classNameImage}`} // Adicionei classe para animar
                />
            )}

            {/* Texto descritivo */}
            <p className={`anim-content ${baseText} ${classNameText}`}>
                {texto}
            </p>
        </div>
    );
}
