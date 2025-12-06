import { useState, useEffect } from "react";
import Card_II from "./Card_II"; // Certifique-se que o caminho está correto

export default function CardSlideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Dados dos 4 Slides
    const slides = [
        {
            id: 1,
            title: "ENGENHEIRO ELÉTRICO",
            text: "Curitiba, PR",
            text_2: "Sou um parágrafo. Aqui você pode adicionar seu texto. É fácil, basta clicar em Editar texto ou clicar duas vezes sobre mim para editar o conteúdo, a fonte e mais.",
            text_button: "Enviar CV",
            variant: "black",
        },
        {
            id: 2,
            title: "CIENTISTA DE DADOS",
            text: "São Paulo, SP",
            text_2: "Sou um parágrafo. Aqui você pode adicionar e editar seu próprio texto. É fácil, basta clicar em Editar texto ou clicar duas vezes sobre mim. Você também pode alterar a fonte e mais. Sou um ótimo lugar para você compartilhar a sua história.",
            text_button: "Enviar CV",
            variant: "white", // Exemplo de variação de cor
        },
        {
            id: 3,
            title: "PESQUISADOR DE INTELIGÊNCIA ARTIFICIAL",
            text: "Brasília, DF",
            text_2: "Sou um parágrafo. Aqui você pode adicionar seu texto. É fácil, basta clicar em Editar texto ou clicar duas vezes sobre mim para editar o conteúdo, a fonte e mais.",
            text_button: "Enviar CV",
            variant: "black",
        },
        {
            id: 4,
            title: "ENGENHEIRO DEEP LEARNING",
            text: "Santa Catarina, SC",
            text_2: "Sou um parágrafo. Aqui você pode adicionar e editar seu próprio texto. É fácil, basta clicar em Editar texto ou clicar duas vezes sobre mim. Você também pode alterar a fonte e mais. Sou um ótimo lugar para você compartilhar a sua história.",
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
        <div className=" max-w-md  flex flex-col gap-6">
            {/* Container dos Slides (Janela de visualização) */}
            <div className="overflow-hidden rounded-2xl">
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
                                // Forçamos a largura total e removemos margens extras para alinhar no slide
                                className="w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Indicadores (Dots) - Sem setas */}
            <div className="flex justify-center gap-3">
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
        </div>
    );
}
