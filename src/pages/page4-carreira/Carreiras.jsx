import { useEffect } from "react";
import Lenis from "lenis"; // Importe do Lenis
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Nav from "../../components/Nav";
import Rodape from "../../components/Rodape";
import Intro from "./layout/Intro";
import Localy from "./layout/Localy";
import Sec_carreira from "./layout/sec_carreira";

gsap.registerPlugin(ScrollTrigger);


function Carreiras() {
useEffect(() => {
    // Inicializa o Lenis
    const lenis = new Lenis({
        duration: 1.2, // Quanto maior, mais "manteiga"
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing padrão suave
        smoothWheel: true,

        // CONFIGURAÇÃO MOBILE CRÍTICA:
        // 'false' deixa o touch 100% nativo do celular (RECOMENDADO)
        // 'true' faz o Lenis controlar o touch (pode ser pesado)
        syncTouch: false,

        // Se quiser garantir ainda mais que o touch não seja afetado:
        touchMultiplier: 2,
    });

    // Conecta o Lenis ao GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Adiciona o Lenis ao ticker do GSAP para sincronia perfeita
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    // Desativa o lag smoothing do GSAP para evitar conflitos visuais
    gsap.ticker.lagSmoothing(0);

    // Limpeza ao desmontar
    return () => {
        gsap.ticker.remove((time) => lenis.raf(time * 1000));
        lenis.destroy();
    };
}, []);

    return (
        <>
            <Nav />
            <Intro />
            <Localy />
            <Sec_carreira />
            <Rodape />
        </>
    );
}

export default Carreiras;
