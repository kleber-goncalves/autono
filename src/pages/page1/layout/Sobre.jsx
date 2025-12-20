import Card_eft from "../../../components/Card-eft";
import { useRef } from "react";
import useEfeitoGsap from "../../../hooks/Efeitos/useEfeito-simples_scrollTigger";
import ProjectImage from "../../../components/ProjectImage";

function Sobre() {
    //As referências para os elementos que serão animados
    const boxRef1 = useRef(null); // Primeira imagem de carro (lado direito)
    const boxRef2 = useRef(null); // Imagem do velocímetro (lado esquerdo)

    useEfeitoGsap(boxRef1, {
        fromX: 120,
        start: "top 90%", // Um pouco antes do original para variar
    });

    useEfeitoGsap(boxRef2, {
        fromX: 0,
        duration: 2,
        opacity: 0.4,
    });

    return (
        <section
            data-bg="dark"
            className="max-w-8xl bg-black border border-black mx-auto md:py-46 pt-46 pb-10 flex flex-col  "
        >
            <div className="flex flex-col md:flex-row mx-auto gap-20  items-center ">
                <div ref={boxRef2} className="flex md:px-30 px-7">
                    <Card_eft
                        classNameBaseII="md:mt-17 mt-8 text-xs md:max-w-sm max-w-xs gap-8"
                        classNameTitle="max-w-ms text-lg mt-8"
                        classNameText="text-[11px]"
                        variant="white"
                        text="VISÃO"
                        title="Uma revolução no modo como pensamos sobre carros"
                        text_2="Sou um parágrafo. Aqui você pode adicionar e editar seu próprio texto. É fácil, basta clicar em Editar texto ou clicar duas vezes sobre mim. Você também pode alterar a fonte e mais. Sou um ótimo lugar para você compartilhar a sua história com os visitantes."
                    />
                </div>
                <div className="md:max-w-2xl flex pl-4 max-w-xl">
                    <ProjectImage id="car-sobre" ref={boxRef1} />

                    {/*
                    <img
                        ref={boxRef1}
                        src="/public/car-sobre.jpg"
                        alt="car-sobre"
                    />
                    */}
                </div>
            </div>
        </section>
    );
}

export default Sobre;
