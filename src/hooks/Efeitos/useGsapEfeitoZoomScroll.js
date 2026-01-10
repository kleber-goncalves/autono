import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Certifique-se de que o plugin está registrado UMA VEZ
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

/**
 * Hook customizado para aplicar animações de contêiner e zoom out com ScrollTrigger.
 * @param {object} containerRef - A Ref (referência) do React do contêiner principal.
 * @param {string} animatedElementsSelector - O seletor CSS dos elementos internos a serem animados (ex: ".stat-area").
 * @param {number} scrollLength - A duração da rolagem em pixels para a animação (ex: 2000).
 */
export function useGsapContainerAnimation(
    containerRef, // ⬅️ Agora aceita uma Ref
    animatedElementsSelector,
    scrollLength = 2000
) {
    useEffect(() => {
        const containerElement = containerRef.current;

        // Verifica se a Ref existe antes de continuar
        if (!containerElement) return;

        // Cria um ScrollTrigger para o container (Fixação/Pin)
        gsap.to(containerElement, {
            scrollTrigger: {
                trigger: containerElement, // Usa o elemento direto
                start: "top top",
                pin: "true",
                end: `+=${scrollLength}`,
              
               
            },
        });

        // Animação individual dos elementos internos (Zoom Out + Fade)
        // Busca APENAS os elementos filhos dentro do containerElement
        const statAreas = gsap.utils.toArray(
            animatedElementsSelector,
            containerElement
        );

        statAreas.forEach((area) => {
            gsap.to(area, {
                scale: 0.9,
                opacity: 0.6,
                scrollTrigger: {
                    trigger: containerElement,
                    start: "top top",
                    end: `+=${scrollLength}`,
                    scrub: 1,
                },
            });
        });

        // 3. Função de limpeza (cleanup)
        return () => {
            // A melhor forma de limpar é matar todos os triggers associados a este elemento Ref
            ScrollTrigger.getAll().forEach((trigger) => {
                if (trigger.trigger === containerElement) {
                    trigger.kill();
                }
            });
        };

        // A Ref deve ser passada no array de dependências
    }, [containerRef, animatedElementsSelector, scrollLength]);
}
// Observação: Não incluímos a importação de React/gsap/ScrollTrigger aqui,
// pois eles serão usados apenas no arquivo do hook.
