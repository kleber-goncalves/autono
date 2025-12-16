import { useEffect, useRef } from "react";
import Lenis from "lenis"; // Importe do Lenis
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Nav from "/src/components/Nav";
import Hero from "../page1/layout/Hero";
import Sobre from "../page1/layout/Sobre";
import Servicos from "../page1/layout/Servico";
import Sobreii from "../page1/layout/Sobreii";
import Infrografico from "../page1/layout/Infografico";
import Parceiros from "../page1/layout/Parceiros";
import Carreira from "../page1/layout/Carreira";
import Rodape from "/src/components/Rodape";


gsap.registerPlugin(ScrollTrigger);

function Autono() {
    // ✅ ESSAS LINHAS ESTAVAM FALTANDO
    const lenisRef = useRef(null);

    useEffect(() => {
        const start = () => {
            const lenis = new Lenis({
                duration: 2.0,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smoothWheel: true,
                syncTouch: false,
                touchMultiplier: 2,
            });

            lenisRef.current = lenis;
            lenis.on("scroll", ScrollTrigger.update);

            const raf = (time) => lenis.raf(time * 1000);
            gsap.ticker.add(raf);

        };

        if (document.readyState === "complete") {
            start();
        } else {
            window.addEventListener("load", start);
        }

        return () => window.removeEventListener("load", start);
    }, []);

    return (
        <>
            <Nav />
            <Hero />
            <Sobre />
            <Servicos />
            <Sobreii />
            <Infrografico />
            <Parceiros />
            <Carreira />
            <Rodape />
        </>
    );
}

export default Autono;
