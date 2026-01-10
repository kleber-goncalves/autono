import Card from "../../../components/Card";
import Card_III from "../../../components/Card_III";
import useEfeitoGsap from "../../../hooks/Efeitos/useEfeito-simples_scrollTigger";
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
    const imgRef1 = useRef(null); // Primeira imagem de carro (lado direito)
    const imgRef2 = useRef(null); // Imagem do velocímetro (lado esquerdo)
    const imgRef3 = useRef(null); // Segunda imagem de carro (lado direito)


    const boxRef1 = useRef(null); 
    const boxRef2 = useRef(null); 
    const boxRef3 = useRef(null); 

    useEfeitoGsap(boxRef1, {
        duration: 0.2,
        autoAlphaInitial: 0, // Usando autoAlpha para o efeito de "aparecer"
    });
    useEfeitoGsap(boxRef2, {
        duration: 0.2,
        autoAlphaInitial: 0, // Usando autoAlpha para o efeito de "aparecer"
    });
    useEfeitoGsap(boxRef3, {
        duration: 0.2,
        autoAlphaInitial: 0, // Usando autoAlpha para o efeito de "aparecer"
    });

    useEffect(() => {
let ctx = gsap.context(() => {
    // Animação para as imagens usando autoAlpha para suavidade
    const animacoes = [
        { ref: imgRef1, x: 100 },
        { ref: imgRef2, x: -100 },
        { ref: imgRef3, x: 100 },
    ];

    animacoes.forEach((item) => {
        gsap.fromTo(
            item.ref.current,
            {
                autoAlpha: 0,
                x: item.x,
            },
            {
                autoAlpha: 1,
                x: 0,
                duration: 1.5,
                scrollTrigger: {
                    trigger: item.ref.current,
                    start: "top 95%", // Inicia um pouco antes de entrar totalmente
                    end: "top 30%",
                    scrub: 1.5,
                },
            }
        );
    });
}, containerRef);

        return () => ctx.revert(); // Limpa o contexto ao desmontar o componente
    }, []);

    return (
        <section
            className="bg-white min-h-screen overflow-hidden md:py-44 pt-44 pb-20"
            ref={containerRef}
        >
            <div className="flex flex-col max-w-7xl  mx-auto md:gap-y-30 gap-y-20 px-6 lg:px-30 2xl:px-8">
                <Card
                    classNameBaseII="max-w-sm"
                    classNameTitle="max-w-sm text-lg"
                    classNameText="text-[11px]"
                    variant="black"
                    text="SERVIÇOS"
                    title="Entregamos produtos e serviços incríveis no mundo todo"
                />

                <div className="grid grid-templete  lg:grid-cols-2  lg:gap-x-16 lg:gap-y-40 gap-y-17 lg:items-center">
                    <div ref={boxRef1} className="um xl:flex xl:flex-col pl-10">
                        <Card_III
                            size="sizeIII"
                            classNameTitle="text-xl"
                            variant="black"
                            title="DIREÇÃO AUTÔNOMA"
                            text="O carro usa sensores, câmeras, radares e softwares inteligentes para “ver” ruas, tráfego, pedestres e sinais, tornando cada viagem mais segura, suave e precisa. Com direção autônoma, há menos esforço do motorista, menos erros, mais eficiência e menor impacto ambiental."
                            text_button="Saiba mais"
                            href="/tecnologia"
                        />
                    </div>
                    <div className="dois items-center p-0 sm:p-25 lg:p-0">
                        <ProjectImage id="car-servico-1" ref={imgRef1} />
                    </div>
                    <div className="relative quatro w-full p-0 sm:p-25 lg:p-0">
                        <ProjectImage
                            id="velocimetroServico"
                            ref={imgRef2}
                            className="w-full h-auto object-cover "
                        />
                    </div>
                    <div
                        ref={boxRef2}
                        className="tres lg:pl-20 pl-10 lg:flex lg:flex-col gap-8"
                    >
                        <Card_III
                            size="sizeIII"
                            variant="black"
                            title="INFORMAÇÕES AO VIVO"
                            text="O carro entrega dados em tempo real sobre bateria, consumo de energia, autonomia e funcionamento dos sistemas, tudo direto no painel, sem mistério. Com isso, você dirige com clareza, previsão e tranquilidade, sabendo exatamente o que acontece a cada instante. Mobilidade elétrica com transparência, controle e confiança."
                            text_button="Saiba mais"
                            href="/tecnologia"
                        />
                    </div>

                    <div
                        ref={boxRef3}
                        className="lg:flex lg:flex-col cinco pl-10 gap-8"
                    >
                        <Card_III
                            size="sizeIII"
                            p-0
                            variant="black"
                            title="PERCEPÇÃO ATIVADA"
                            text="O carro usa sensores e software para “ver” o ambiente nas ruas, tráfego, pedestres e sinais tornando a viagem mais segura e precisa. A direção autônoma reduz o esforço do motorista, diminui erros e traz mais eficiência, com menor impacto ambiental."
                            text_button="Saiba mais"
                            href="/tecnologia"
                        />
                    </div>
                    <div className="lg:pr-4 seis relative w-full p-0 sm:p-25 lg:p-0">
                        <ProjectImage
                            id="car-servico-2"
                            ref={imgRef3}
                            className="w-full h-auto object-cover "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Servicos;
