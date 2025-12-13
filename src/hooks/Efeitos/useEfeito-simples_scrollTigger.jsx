import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registra o plugin, caso ainda não tenha sido feito globalmente
gsap.registerPlugin(ScrollTrigger);

/**
 * Hook personalizado para aplicar uma animação de slide horizontal baseada em scroll.
 * * @param {React.MutableRefObject} refElement - A referência (ref) do elemento que será animado.
 * @param {Object} config - Configurações da animação e do ScrollTrigger.
 * @param {number} [config.fromX=120] - Posição inicial no eixo X (por padrão, da direita para a esquerda).
 * @param {number} [config.duration=1.5] - Duração da animação.
 * @param {string} [config.start="top 100%"] - Ponto de início do ScrollTrigger.
 * @param {string} [config.end="top 0.7%"] - Ponto de término do ScrollTrigger.
 * @param {number} [config.scrub=1.5] - Intensidade do link entre a animação e a rolagem.
 */
const useEfeitoGsap = (refElement, config = {}) => {
    // Configurações padrão
    const {
        opacity = 0,
        fromX = 120, // O seu original era 120px
        duration = 1.5,
        start = "top 100%",
        end = "top 0.7%",
        scrub = 1.5,
    } = config;

    useEffect(() => {
        const element = refElement.current;

        if (!element) return;

        // Cria um contexto GSAP para isolar e limpar facilmente as animações
        let ctx = gsap.context(() => {
            gsap.fromTo(
                element,
                {
                    opacity: opacity, // Bom adicionar o opacity: 0 para evitar piscar antes da animação
                    x: fromX, // Posição inicial X
                },
                {
                    opacity: 1,
                    x: 0, // Posição final X
                    duration: duration,
                    scrollTrigger: {
                        trigger: element,
                        start: start,
                        end: end,
                        scrub: scrub,
                        //markers: true, // Descomente para ver os marcadores do ScrollTrigger
                    },
                }
            );
        }, element); // O elemento é o escopo do contexto

        // Função de limpeza: reverte todas as animações criadas neste contexto
        return () => ctx.revert();
    }, [refElement, opacity, fromX, duration, start, end, scrub]); // Dependências para reexecutar se as props mudarem
};

export default useEfeitoGsap;
