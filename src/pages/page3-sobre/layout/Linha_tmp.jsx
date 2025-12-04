import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TimelineCard from "./TimelineCard";

// Dados de exemplo expandidos para ter 8 itens, resultando em 4 slides de 2 itens
const timelineData = [
    {
        id: 1,
        year: "2013",
        subtitle: "NASCE AUTONO",
        description:
            'Nasce AUTONO, uma empresa de veiculos eletricos. Focamos em tecnologia e sustentabilidade.',
    },
    {
        id: 2,
        year: "2015",
        subtitle: "TECNOLOGIA SENSORIAL INOVADORA LANÇADA",
        description:
            "Tecnologia sensorial inovadora lançada para otimizar processos em tempo real. O crescimento foi exponencial e a equipe triplicou de tamanho em apenas dois anos.",
    },
    {
        id: 3,
        year: "2016",
        subtitle: "SEDE EM SÃO PAULO",
        description:
            "Se tornamos uma empresa global, com sede em São Paulo. Nossa equipe cresceu para atender a demanda de clientes em todo o mundo.",
    },
    {
        id: 4,
        year: "2017",
        subtitle: "TEST DRIVE DO PRIMEIRO PROTÓTIPO",
        description:
            "Teste do nosso primeiro protótipo de inteligência artificial, demonstrando a capacidade de otimizar processos em tempo real.",
    },
    {
        id: 5,
        year: "2018",
        subtitle: "INÍCIO DA PARCERIA COM A TRI-NEX E TRANSPORTE X",
        description:
            "Assinatura de uma grande parceria com uma empresa lidera em energia sustentável. O crescimento foi exponencial e a equipe triplicou de tamanho em apenas dois anos.",
    },
    {
        id: 6,
        year: "2019",
        subtitle: "TESTES EXPANDEM EM SP E DF",
        description:
            "Testes expandidos em SP e DF, redefinindo o futuro da nossa indústria. O crescimento foi exponencial e a equipe triplicou de tamanho em apenas dois anos.",
    },
    {
        id: 7,
        year: "2020",
        subtitle: "COMEÇA A PRODUÇÃO!",
        description:
            "Começamos a produzir produtos de alta qualidade e eficiência. O crescimento foi exponencial e a equipe triplicou de tamanho em apenas dois anos.",
    },
    {
        id: 8,
        year: "2021",
        subtitle: "MIL CARROS VENDIDOS",
        description:
            "Rebranding completo da marca para alinhar com nossa nova visão de futuro sustentável e tecnológico.",
    },
];

function Linha_temp() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Largura de cada item (card de 550px + 50px de espaço)
    const ITEM_WIDTH = 600;
    // Largura do passo do slide (2 itens por slide = 1200px)
    const SLIDE_STEP_WIDTH = ITEM_WIDTH * 2;
    // Total de slides lógicos (8 itens / 2 por slide = 4 slides)
    const TOTAL_SLIDES = Math.ceil(timelineData.length / 2);

    const nextSlide = () => {
        if (currentIndex < TOTAL_SLIDES - 1) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    return (
        <section>
            <div className="min-h-screen bg-white flex flex-col items-center justify-center py-40 font-sans selection:bg-orange-100">
                {/* Header */}
                <div className="w-full max-w-6xl mb-12">
                    <h1 className="text-3xl text-black tracking-wide">
                        Linha do tempo
                    </h1>
                </div>

                {/* Timeline Container */}
                {/* max-w-7xl para ter espaço para os botões */}
                <div className="relative w-full max-w-7xl flex items-center justify-center">
                    {/* Navigation Button Left */}
                    {/* Posicionado à esquerda da "janela" de 1200px */}
                    {/* translate-x-[750px] (Para afastar a seta) */}
                    <button
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        className={`
            z-20 p-2 rounded-full transition-colors hidden md:block absolute left-1/2 transform -translate-x-[750px]
            
            ${
                currentIndex === 0
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-black hover:bg-gray-100"
            }
          `}
                    >
                        <ChevronLeft size={48} strokeWidth={1} />
                    </button>

                    {/* Navigation Button Right */}
                    {/* Posicionado à esquerda da "janela" de 1200px */}
                    {/* translate-x-[750px] (Para afastar a seta) */}
                    <button
                        onClick={nextSlide}
                        disabled={currentIndex === TOTAL_SLIDES - 1}
                        className={`
            z-20 p-2 rounded-full transition-colors hidden md:block absolute right-1/2 transform translate-x-[750px]
            ${
                currentIndex === TOTAL_SLIDES - 1
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-black hover:bg-gray-100"
            }
          `}
                    >
                        <ChevronRight size={48} strokeWidth={1} />
                    </button>

                    {/* A Linha Horizontal Principal (Fundo) */}
                    {/* max-w-[1300px] para garantir que a linha fique centralizada e não se estenda demais */}
                    <div className="absolute top-1/2 h-px bg-gray-400 -translate-y-1/2 hidden md:block w-full max-w-[90%] md:max-w-[1400px]" />

                    {/* Janela do Slider - Fixada em 1200px para mostrar EXATAMENTE 2 itens de 600px */}
                    <div className="w-[1200px] overflow-hidden py-10">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{
                                // Largura total de todos os itens (8 itens * 600px = 4800px)
                                width: `${timelineData.length * ITEM_WIDTH}px`,
                                // Move o carrossel em passos de 1200px (2 itens)
                                transform: `translateX(-${
                                    currentIndex * SLIDE_STEP_WIDTH
                                }px)`,
                            }}
                        >
                            {timelineData.map((item, index) => {
                                const isEven = index % 2 === 0; // Card Par (Topo) ou Ímpar (Base)

                                // O slide é par (0, 2, 4...) ou ímpar (1, 3, 5...)?
                                const slideNumber = Math.floor(index / 2);
                                const isSlideEven = slideNumber % 2 === 0;

                                // Variável que armazenará a classe de alinhamento horizontal (justify-content)
                                let alignmentClass = "";

                                // Lógica de Alinhamento Horizontal (Efeito Degrau):
                                // Esta classe será aplicada ao container flex (h-[300px] flex w-full)
                                if (isSlideEven) {
                                    // SLIDE PAR (0, 2, 4...):
                                    // Card Par (Topo) -> justify-start (Esquerda)
                                    // Card Ímpar (Base) -> justify-end (Direita)
                                    alignmentClass = isEven
                                        ? "justify-start"
                                        : "justify-end";
                                } else {
                                    // SLIDE ÍMPAR (1, 3, 5...):
                                    // Card Par (Topo) -> justify-end (Direita)
                                    // Card Ímpar (Base) -> justify-start (Esquerda)
                                    alignmentClass = isEven
                                        ? "justify-end"
                                        : "justify-start";
                                }
                                // No seu código original, isEven era usado para TOP/BOTTOM. Vamos manter isso.

                                return (
                                    <div
                                        key={item.id}
                                        className="shrink-0 flex flex-col items-center relative"
                                        style={{ width: ITEM_WIDTH }}
                                    >
                                        {/* Seção Superior (Conteúdo ou Vazio) */}
                                        <div
                                            className={`h-[300px] flex items-end w-full ${alignmentClass}`}
                                        >
                                            {isEven && (
                                                <div
                                                    className={`relative transform transition-all duration-500 hover:-translate-y-2 `}
                                                >
                                                    <TimelineCard
                                                        data={item}
                                                        position="top"
                                                    />
                                                </div>
                                            )}
                                        </div>

                                        {/* O Marcador Central na Linha */}
                                        <div className="relative z-10 w-full flex justify-center items-center h-4">
                                            <div className="w-8 h-[3px] bg-black rounded-full shadow-sm"></div>
                                        </div>

                                        {/* Seção Inferior (Conteúdo ou Vazio) */}
                                        <div
                                            className={`h-[300px] flex items-start w-full ${alignmentClass}`}
                                        >
                                            {!isEven && (
                                                <div
                                                    className={`relative transform transition-all duration-500 hover:translate-y-2`}
                                                >
                                                    <TimelineCard
                                                        data={item}
                                                        position="bottom"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Instruções para Mobile */}
                <div className="md:hidden text-gray-400 text-sm mt-8">
                    Deslize para ver mais
                </div>
            </div>
        </section>
    );
}

export default Linha_temp;
