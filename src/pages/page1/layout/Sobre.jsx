import Card_eft from "../../../components/Card-eft";
import { useRef } from "react";
import  useEfeitoGsap  from "../../../Efeitos/useEfeito-simples_scrollTigger";

/*
// GSAP-IMPORTS
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useEfeitoGsap from './../../../Efeitos/useEfeito-simples_scrollTigger';
// PLUGIN - ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

*/
function Sobre() {
    //As referências para os elementos que serão animados
    const boxRef1 = useRef(null); // Primeira imagem de carro (lado direito)
    const boxRef2 = useRef(null); // Imagem do velocímetro (lado esquerdo)

    useEfeitoGsap(boxRef1, {
        fromX: 120,
        start: "top 90%", // Um pouco antes do original para variar
    });

    useEfeitoGsap(boxRef2, {
        fromX: 0,
        duration: 2,
        opacity: 0.4,
    });

    /* useEffect(() => {
        let ctx = gsap.context(() => {
            // 1. Animação para a primeira imagem de carro (slide da direita para a esquerda)
            gsap.fromTo(
                boxRef1.current,
                {
                    opacity: 1,
                    x: 120, // Começa 120px à direita ( → )
                },
                {
                    opacity: 1,
                    x: 0, // Vai para a posição original
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: boxRef1.current,
                        start: "top 100%", // Inicia quando o topo do elemento estiver a 100% do topo da viewport
                        end: "top 0.7%", // Termina quando o botão estiver a 0.7%",
                        scrub: 1.5, // Animação suave ligada à rolagem
                    },
                }
            );
            gsap.fromTo(
                boxRef2.current,
                {
                    opacity: 1,
                    x: 0, // Começa 120px à direita ( → )
                },
                {
                    opacity: 1,
                    x: 0, // Vai para a posição original
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: boxRef1.current,
                        start: "top 100%", // Inicia quando o topo do elemento estiver a 100% do topo da viewport
                        end: "top 0.7%", // Termina quando o botão estiver a 0.7%",
                        scrub: 1.5, // Animação suave ligada à rolagem
                    },
                }
            );

        }, containerRef);

        return () => ctx.revert(); // Limpa o contexto ao desmontar o componente
    }, []); */

    return (
        <section className="max-w-8xl  bg-black border border-black mx-auto py-46 flex flex-col  ">
            <div className="flex flex-col md:flex-row mx-auto gap-20  items-center ">
                <div ref={boxRef2} className="flex px-30">
                    <Card_eft
                        classNameBaseII="mt-17 max-w-sm gap-8"
                        classNameTitle="max-w-sm mt-8"
                        variant="white"
                        text="VISÃO"
                        title="Uma revolução no modo como pensamos sobre carros"
                        text_2="Sou um parágrafo. Aqui você pode adicionar e editar seu próprio texto. É fácil, basta clicar em Editar texto ou clicar duas vezes sobre mim. Você também pode alterar a fonte e mais. Sou um ótimo lugar para você compartilhar a sua história com os visitantes."
                    />
                </div>
                <div className="max-w-2xl">
                    <img
                        ref={boxRef1}
                        src="/public/car-sobre.jpg"
                        alt="car-sobre"
                    />
                </div>
            </div>
        </section>
    );
}

export default Sobre;
