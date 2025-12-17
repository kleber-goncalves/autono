// GSAP-IMPORTS
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// PLUGIN - ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function MouseAnimation() {
    const containerRef = useRef(null);
    const box1Ref = useRef(null);
    const box2Ref = useRef(null);
    

    useEffect(() => {
        let ctx = gsap.context(() => {
            // 1. Animação para a primeira imagem de carro (slide da direita para a esquerda)
            // animação do box1 (usa o ref diretamente)
            if (box1Ref.current) {
                gsap.fromTo(
                    box1Ref.current,
                    { opacity: 1, y: 0 },
                    {
                        opacity: 0,
                        duration: 1.5,
                        scrollTrigger: {
                            trigger: box1Ref.current,
                            start: "bottom 70%",
                            end: "bottom 100px",
                            toggleActions: "play none none reverse",
                            scrub: 1.5,
                        },
                    }
                );
            }
            if (box2Ref.current) {
                gsap.fromTo(
                    box2Ref.current,
                    { opacity: 1, y: 0 },
                    {
                        opacity: 0,
                        duration: 1.5,
                        scrollTrigger: {
                            trigger: box2Ref.current,
                            start: "top 100%",
                            end: "bottom 100px",
                            toggleActions: "play none none reverse",
                            scrub: 1.5,
                        },
                    }
                );
            }
            ScrollTrigger.refresh();
        }, containerRef);
        return () => ctx.revert(); // Limpa o contexto ao desmontar o componente
    }, [])

    return (
        <div
            ref={containerRef}
            className="flex flex-col z-4 items-center mt-45 "
        >
            <div
                ref={box1Ref}
                className="flex flex-col items-center  rounded-full border-3 border-black bg-gray-400 w-8 h-12"
            >
                <div className="w-1 h-2 bg-black my-1 rounded-full animate-custom-bounce "></div>
            </div>

            <div ref={box2Ref} className="flex flex-col text-center mt-3">
                <p className="text-xl font-semibold text-white ">Scroll down</p>
            </div>
        </div>
    );
}

export default MouseAnimation;
