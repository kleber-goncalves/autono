import Card from "../../../components/Card";
import { useGsapContainerAnimation } from "../../../Efeitos/useGsapEfeitoZoomScroll";
import React, { useRef } from "react";
import ProjectImage from "../../../components/ProjectImage";


function Parceiros() {
    const containerRef = useRef(null);

    useGsapContainerAnimation(
        containerRef, // ⬅️ Passando a Ref

        ".stat-area",
        2000
    );

    return (
        <section
            ref={containerRef}
            className="bg-black max-h-screen border-b-2 sticky top-0 efeito-container border-white pl-50 py-37 overflow-hidden"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 pr-40  gap-16">
                <div className="flex max-w-sm stat-area flex-col ">
                    <Card
                        classNameBarraII="h-17"
                        classNameBaseII="mt-17 gap-8"
                        classNameTitle="max-w-"
                        variant="white"
                        text="INDÚSTRIA"
                        title="Nossos
parceiros"
                        text_2="Nossa empresa une forças com Transporte X, IDI Software, Imagine Carros e TRI-NEX para combinar logística, software, engenharia e componentes de alta qualidade. Essa colaboração integra competências complementares para criar veículos elétricos com tecnologia, confiabilidade e eficiência técnica. Juntos, transformamos ideias em realidade e ampliamos nossa capacidade de inovar e entregar produtos robustos."
                    />
                </div>
                <div className="grid grid-cols-2 gap-30 items-center justify-items-center">
                    <div className="flex flex-col stat-area gap-3 items-center">
                        <ProjectImage
                            id="TransportX-parceiros"
                            className="w-4/6"
                        />
                        <h2 className="text-white text-xl text-center tracking-widest">
                            TRANSPORTE X
                        </h2>
                    </div>
                    <div className="flex flex-col stat-area gap-13 items-center">
                        <ProjectImage
                            id="IDISoftware-parceiros"
                            className="w-2/4 flex pt-4"
                        />
                        <h2 className="text-white text-center  text-xl tracking-widest">
                            IDI SOFTWARE
                        </h2>
                    </div>
                    <div className="flex flex-col stat-area gap-9 items-center">
                        <ProjectImage id="ICars-parceiros" className="w-3/6" />
                        <h2 className="text-white text-center text-xl tracking-widest">
                            IMAGINE CARROS
                        </h2>
                    </div>
                    <div className="flex flex-col stat-area  items-center">
                        <ProjectImage
                            id="Tri-Nex-parceiro"
                            className="w-8/6 flex pb-3"
                        />

                        <h2 className="text-white relative top-6 text-center text-xl tracking-widest">
                            TRI-NEX
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Parceiros;
