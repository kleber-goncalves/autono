import Card from "../../../components/Card";
import Card_III from "../../../components/Card_III";

import ProjectImage from "../../../components/ProjectImage";


// GSAP-IMPORTS
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// PLUGIN - ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function Servicos() {
    const containerRef = useRef(null);
    //As referências para os elementos que serão animados
    const boxRef1 = useRef(null); // Primeira imagem de carro (lado direito)
    const boxRef2 = useRef(null); // Imagem do velocímetro (lado esquerdo)
    const boxRef3 = useRef(null); // Segunda imagem de carro (lado direito)

    


    useEffect(() => {
        let ctx = gsap.context(() => {
            // 1. Animação para a primeira imagem de carro (slide da direita para a esquerda)
            gsap.fromTo(
                boxRef1.current,
                {
                    opacity: 0,
                    x: 150, // Começa 150px à direita ( → )
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

            // 2. Animação para a imagem do velocímetro (slide da esquerda para a direita)
            gsap.fromTo(
                boxRef2.current,
                {
                    opacity: 0,
                    x: -150, // Começa 150px à esquerda ( → )
                },
                {
                    opacity: 1,
                    x: 0, // Vai para a posição original
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: boxRef2.current,
                        start: "top 100%",
                        end: "top 0.7%", // Termina quando o botão estiver a 0.7%",
                        scrub: 1.5,
                    },
                }
            );

            // 3. Animação para a segunda imagem de carro (slide da direita para a esquerda)
            gsap.fromTo(
                boxRef3.current,
                {
                    opacity: 0,
                    x: 150, // Começa 150px à direita ( ← )
                },
                {
                    opacity: 1,
                    x: 0, // Vai para a posição original
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: boxRef3.current,
                        start: "top 100%",
                        end: "top 0.7%", // Termina quando o botão estiver a 0.7%",
                        scrub: 1.5,
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert(); // Limpa o contexto ao desmontar o componente
    }, []);

    return (
        <section className="bg-white min-h-screen py-44 " ref={containerRef}>
            <div className="flex flex-col max-w-7xl  mx-auto gap-y-30 px-6 lg:px-8">
                <Card
                    classNameBaseII=" max-w-sm"
                    classNameTitle="max-w-sm "
                    variant="black"
                    text="SERVIÇOS"
                    title="Entregamos produtos e serviços incríveis no mundo todo"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2  gap-x-16 gap-y-40 items-center">
                    <div className="flex flex-col pl-10 gap-8">
                        <Card_III
                            size="sizeIII"
                            variant="black"
                            title="DIREÇÃO AUTÔNOMA"
                            text="O carro usa sensores, câmeras, radares e softwares inteligentes para “ver” ruas, tráfego, pedestres e sinais, tornando cada viagem mais segura, suave e precisa. Com direção autônoma, há menos esforço do motorista, menos erros, mais eficiência e menor impacto ambiental."
                            text_button="Saiba mais"
                            href="/tecnologia"
                        />
                    </div>
                    <div className="">
                        <ProjectImage id="car-servico-1" ref={boxRef1} />
                    </div>
                    <div className="relative w-full ">
                        <ProjectImage
                            id="velocimetroServico"
                            ref={boxRef2}
                            className="w-full h-auto object-cover "
                        />
                    </div>

                    <div className="pl-20 flex  flex-col gap-8">
                        <Card_III
                            size="sizeIII"
                            variant="black"
                            title="INFORMAÇÕES AO VIVO"
                            text="O carro entrega dados em tempo real sobre bateria, consumo de energia, autonomia e funcionamento dos sistemas — tudo direto no painel, sem mistério. Com isso, você dirige com clareza, previsão e tranquilidade, sabendo exatamente o que acontece a cada instante. Mobilidade elétrica com transparência, controle e confiança."
                            text_button="Saiba mais"
                            href="/tecnologia"
                        />
                    </div>
                    <div className="flex flex-col pl-10 gap-8">
                        <Card_III
                            size="sizeIII"
                            variant="black"
                            title="PERCEPÇÃO ATIVADA"
                            text="O carro usa sensores e software para “ver” o ambiente — ruas, tráfego, pedestres e sinais — tornando a viagem mais segura e precisa. A direção autônoma reduz o esforço do motorista, diminui erros e traz mais eficiência, com menor impacto ambiental."
                            text_button="Saiba mais"
                            href="/tecnologia"
                        />
                    </div>
                    <div className="pr-4 relative w-full">
                        <ProjectImage
                            id="car-servico-2"
                            ref={boxRef3}
                            className="w-full h-auto object-cover "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Servicos;
