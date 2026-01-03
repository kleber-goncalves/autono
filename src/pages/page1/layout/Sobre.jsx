import Card_eft from "../../../components/Card-eft";
import { useRef } from "react";
import useEfeitoGsap from "../../../hooks/Efeitos/useEfeito-simples_scrollTigger";
import ProjectImage from "/src/components/ProjectImage";

function Sobre() {
    //As referências para os elementos que serão animados
    const boxRef1 = useRef(null); // Primeira imagem de carro (lado direito)
    const boxRef2 = useRef(null); // Imagem do velocímetro (lado esquerdo)

    useEfeitoGsap(boxRef1, {
        xInitial: 50, // Valor reduzido para evitar quebra de layout
        autoAlphaInitial: 0, // Usando autoAlpha para o efeito de "aparecer"
        start: "top 90%",
    });

    useEfeitoGsap(boxRef2, {
        duration: 2,
        autoAlphaInitial: 0,
    });

    return (
        <section
            data-bg="dark"
            className="max-w-8xl bg-black border overflow-hidden border-black mx-auto lg:py-46 pt-46 pb-10 flex flex-col  "
        >
            <div className="flex flex-col lg:flex-row mx-auto sm:mx-0 lg:mx-auto gap-20 items-center sm:items-start lg:items-center">
                <div ref={boxRef2} className="flex xl:px-30 px-7">
                    <Card_eft
                        classNameBaseII="md:mt-17 mt-8 text-xs md:max-w-sm max-w-xs gap-8"
                        classNameTitle="max-w-sm text-lg mt-8"
                        classNameText="text-[11px]"
                        variant="white"
                        text="VISÃO"
                        title="Uma revolução no modo como pensamos sobre carros"
                        text_2="Sou um parágrafo. Aqui você pode adicionar e editar seu próprio texto. É fácil, basta clicar em Editar texto ou clicar duas vezes sobre mim. Você também pode alterar a fonte e mais. Sou um ótimo lugar para você compartilhar a sua história com os visitantes."
                    />
                </div>
                <div className="flex sm:mx-auto lg:mx-0 pl-4 lg:pl-0 max-w-xl lg:max-w-2xl ">
                    <ProjectImage id="car-sobre" ref={boxRef1} />
                </div>
            </div>
        </section> 
    );
}

export default Sobre;
