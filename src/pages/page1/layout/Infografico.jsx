import { useGsapContainerAnimation } from "../../../Efeitos/useGsapEfeitoZoomScroll";
import { useRef } from "react";
import ProjectImage from "../../../components/ProjectImage";

function Infrografico() {
    const containerRef = useRef(null);

    useGsapContainerAnimation(
        containerRef, // ⬅️ Passando a Ref

        ".stat-area",
        2000
    );

    return (
        <section
            ref={containerRef}
            className="bg-white min-h-screen efeito-container sticky mb-90 top-0 py-4 overflow-hidden"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-16 items-center">
                <div className="flex justify-center stat-area items-center w-full h-full ">
                                        <ProjectImage
                        id="braco-info"
                        
                                        />
                </div>
                <div className="flex stat-area flex-col gap-20">
                    <h2 className="text-black text-4xl leading-relaxed tracking-widest ">
                        Autono em números
                    </h2>
                    <div className="grid grid-cols-2 max-w-4xl gap-y-20 ">
                        <div className="flex flex-col gap-7">
                            <div className="flex">
                                <div className="h-full border-b-3 border-black opacity-100">
                                    <h2 className="text-5xl leading-relaxed tracking-widest">
                                        2
                                    </h2>
                                </div>
                                <div className="h-full w-56 border-b border-black opacity-100">
                                    <h2 className="text-5xl leading-relaxed tracking-widest">
                                        00
                                    </h2>
                                </div>
                            </div>

                            <p className="text-1xl leading-relaxed tracking-widest">
                                EMPREGADOS
                            </p>
                        </div>
                        <div className="flex flex-col gap-7">
                            <div className="flex">
                                <div className="h-full border-b-3 border-black opacity-100">
                                    <h2 className="text-5xl leading-relaxed tracking-widest">
                                        5
                                    </h2>
                                </div>
                                <div className="h-full w-36 border-b border-black opacity-100">
                                    <h2 className="text-5xl leading-relaxed tracking-widest"></h2>
                                </div>
                            </div>

                            <p className="text-1xl leading-relaxed tracking-widest">
                                EQUIPES
                            </p>
                        </div>
                        <div className="flex flex-col gap-7">
                            <div className="flex">
                                <div className="h-full border-b-3 border-black opacity-100">
                                    <h2 className="text-5xl leading-relaxed tracking-widest">
                                        R
                                    </h2>
                                </div>
                                <div className="h-full w-56 border-b border-black opacity-100">
                                    <h2 className="text-5xl leading-relaxed tracking-widest">
                                        $100M
                                    </h2>
                                </div>
                            </div>

                            <p className="text-1xl leading-relaxed tracking-widest">
                                EM CAPITAL
                            </p>
                        </div>
                        <div className="flex flex-col gap-7">
                            <div className="flex">
                                <div className="h-full border-b-3 border-black opacity-100">
                                    <h2 className="text-5xl leading-relaxed tracking-widest">
                                        3
                                    </h2>
                                </div>
                                <div className="h-full w-36 border-b border-black opacity-100">
                                    <h2 className="text-5xl leading-relaxed tracking-widest">
                                        26
                                    </h2>
                                </div>
                            </div>

                            <p className="text-1xl leading-relaxed tracking-widest">
                                PARCEIROS
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Infrografico;
