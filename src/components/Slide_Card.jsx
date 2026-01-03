import { useState, useEffect } from "react";
import Card_II from "./Card_II"; 

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

export default function CardSlideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Dados dos 4 Slides
    const slides = [
        {
            id: 1,
            title: "ENGENHEIRO ELÉTRICO",
            text: "Curitiba, PR",
            text_2: "Você vai atuar em projetos elétricos e eletrotécnicos — desde planejamento, dimensionamento e especificação, até supervisão, execução e manutenção de instalações elétricas. Seu papel será garantir que sistemas, máquinas e infraestrutura elétrica funcionem com segurança, eficiência e dentro das normas técnicas.",
            text_button: "Enviar CV",
            variant: "black",
        },
        {
            id: 2,
            title: "CIENTISTA DE DADOS",
            text: "São Paulo, SP",
            text_2: "Você fará parte de um time multidisciplinar dedicado a coletar, organizar, analisar e interpretar grandes volumes de dados — de fontes diversas e com formatos variados — para gerar insights estratégicos e suporte a decisões da empresa. Sua função não será apenas analisar dados, mas construir modelos, hipóteses e soluções inteligentes que contribuam para resultados concretos e inovação.",
            text_button: "Enviar CV",
            variant: "white", // Exemplo de variação de cor
        },
        {
            id: 3,
            title: "PESQUISADOR DE INTELIGÊNCIA ARTIFICIAL",
            text: "Brasília, DF",
            text_2: "Você fará parte de um time dedicado a pesquisar e criar algoritmos e modelos de IA de ponta, com o propósito de resolver problemas complexos, gerar insights impactantes e construir as bases da próxima geração de sistemas inteligentes. Sua contribuição vai além do código: você vai contribuir para descobertas, estudar tendências, propor caminhos novos, e ajudar a dar forma a ideias que podem mudar o rumo de produtos e soluções.",
            text_button: "Enviar CV",
            variant: "black",
        },
        {
            id: 4,
            title: "ENGENHEIRO DEEP LEARNING",
            text: "Santa Catarina, SC",
            text_2: "Você fará parte de uma equipe técnica de ponta, empenhada em criar e implementar modelos complexos de aprendizagem profunda para resolver problemas reais — desde visão computacional, processamento de linguagem natural, até sistemas autônomos ou análise de dados de larga escala. Vai trabalhar desde o design da arquitetura até o deploy em produção, contribuindo para soluções inteligentes e escaláveis.",
            text_button: "Enviar CV",
            variant: "white",
        },
    ];

    // Lógica de Autoplay (muda a cada 5 segundos)
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(timer);
    }, [slides.length]);

    // Função para clicar nas bolinhas (opcional, para navegação manual)
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className=" xl:max-w-md  flex flex-col gap-6 ">
            {/* Container dos Slides (Janela de visualização) */}
            <div className="overflow-hidden hidden xl:block rounded-2xl ">
                <div
                    className="flex transition-transform duration-1200 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide) => (
                        <div key={slide.id} className="shrink-0">
                            <Card_II
                                title={slide.title}
                                text={slide.text}
                                text_2={slide.text_2}
                                text_button={slide.text_button}
                                variant={slide.variant}
                                // Forçando a largura total e removemendo margens extras para alinhar no slide
                                className="w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Indicadores (Dots) - Sem setas */}
            <div className="hidden xl:flex justify-center gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-3 rounded-full transition-all duration-1000 ${
                            currentIndex === index
                                ? "w-8 bg-gray-300" // Estilo do slide ativo
                                : "w-3 bg-gray-300 hover:bg-gray-400" // Estilo inativo
                        }`}
                        aria-label={`Ir para slide ${index + 1}`}
                    />
                ))}
            </div>

            <div className="xl:hidden w-full h-full px-4 md:px-0">
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    spaceBetween={20} // Espaço entre os cards
                    slidesPerView='auto' // Mostra um pouco do próximo card para indicar scroll
                    loop={true}
                    speed={5300}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false, // Continua rodando mesmo após toque
                    }}
                    // Melhora o comportamento do arraste manual
                    freeModeMomentum: false
                  
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <Card_II
                                title={slide.title}
                                text={slide.text}
                                text_2={slide.text_2}
                                text_button={slide.text_button}
                                variant={slide.variant}
                                // Forçando a largura total e removemendo margens extras para alinhar no slide
                               
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
