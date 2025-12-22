import Card from "../../../components/Card";
import { useGsapContainerAnimation } from "../../../hooks/Efeitos/useGsapEfeitoZoomScroll";
import  { useRef } from "react";
import ProjectImage from "../../../components/ProjectImage";
import { Fade } from "react-awesome-reveal";

function Parceiros() {
    const containerRef = useRef(null);

    useGsapContainerAnimation(
        containerRef, 

        ".stat-area",
        2000
    );

    return (
        <section
            ref={containerRef}
            className="bg-black min-h-screen border-b-2 sticky top-0 efeito-container border-white  md:pl-50 pl-5 md:py-37 pb-2 overflow-hidden flex flex-col justify-center"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 md:pr-40 pr-10 md:gap-16 gap-6 w-full">
                <div className="flex md:max-w-sm  stat-area flex-col justify-center">
                    <Card
                        classNameBarraII="h-17"
                        classNameBaseII="md:mt-17 mt-8 gap-8"
                        classNameTitle="max-w-sm text-lg"
                        classNameText="text-[11px] "
                        variant="white"
                        text="INDÚSTRIA"
                        title="Nossos
parceiros"
                        text_2="Nossa empresa une forças com Transporte X, IDI Software, Imagine Carros e TRI-NEX para combinar logística, software, engenharia e componentes de alta qualidade. Essa colaboração integra competências complementares para criar veículos elétricos com tecnologia, confiabilidade e eficiência técnica. Juntos, transformamos ideias em realidade e ampliamos nossa capacidade de inovar e entregar produtos robustos."
                    />
                </div>
                <div className="grid grid-cols-2 gap-8 md:gap-30 items-center justify-items-center">
                    <Fade cascade duration={1200} triggerOnce damping={0.14}>
                        <div className="flex flex-col stat-area gap-3 items-center w-full">
                            <ProjectImage
                                id="TransportX-parceiros"
                                className="md:w-4/6 w-3/4 object-contain"
                            />
                            <h2 className="text-white text-xs md:text-xl text-center tracking-widest">
                                TRANSPORTE X
                            </h2>
                        </div>
                    </Fade>
                    <Fade cascade duration={1800} triggerOnce damping={0.14}>
                        <div className="flex flex-col stat-area md:gap-13 gap-3 items-center w-full">
                            <ProjectImage
                                id="IDISoftware-parceiros"
                                className="md:w-2/4 w-2/3 object-contain flex pt-4"
                            />
                            <h2 className="text-white text-center text-xs md:text-xl tracking-widest">
                                IDI SOFTWARE
                            </h2>
                        </div>
                    </Fade>
                    <Fade
                        cascade
                        duration={2200}
                        triggerOnce
                        damping={0.14}
                        fraction={0.2}
                    >
                        <div className="flex flex-col stat-area md:gap-9 gap-3 items-center w-full">
                            <ProjectImage
                                id="ICars-parceiros"
                                className="object-contain w-2/3 md:w-3/6"
                            />
                            <h2 className="text-white text-center text-xs md:text-xl tracking-widest">
                                IMAGINE CARROS
                            </h2>
                        </div>
                    </Fade>
                    <Fade
                        cascade
                        triggerOnce
                        duration={2800}
                        damping={0.14}
                        fraction={0.2}
                    >
                        <div className="flex flex-col stat-area  items-center w-full">
                            <ProjectImage
                                id="Tri-Nex-parceiro"
                                className="w-full md:w-8/6 flex pb-3 object-contain"
                            />

                            <h2 className="text-white relative md:top-6 top-2 text-center text-xs md:text-xl tracking-widest ">
                                TRI-NEX
                            </h2>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
}

export default Parceiros;
