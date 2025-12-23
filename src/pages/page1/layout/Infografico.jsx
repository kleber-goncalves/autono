import { useGsapContainerAnimation } from "../../../hooks/Efeitos/useGsapEfeitoZoomScroll";
import { useRef } from "react";
import ProjectImage from "../../../components/ProjectImage";
import { Fade } from "react-awesome-reveal";


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
            className=" md:min-h-screen h-screen bg-white efeito-container sticky md:mb-0 md:mt-0 mt-20 top-0 md:py-7 overflow-hidden"
        >
            <div className="md:grid flex flex-col-reverse  lg:grid-cols-2 gap-30  md:gap-16 ">
                <div className="flex  justify-center pt-20 stat-area  md:w-full md:h-full ">
                    <ProjectImage id="braco-info2" />
                </div>
                <div className="flex stat-area flex-col md:gap-20 gap-4 px-8 mb:px-0 pt-30">
                    <h2 className="text-black md:text-4xl text-lg leading-relaxed tracking-widest ">
                        Autono em números
                    </h2>
                    <div className="grid grid-cols-2 md:max-w-4xl md:gap-y-20 md:gap-x-0 gap-y-10 gap-x-10  ">
                        <div className="flex flex-col md:gap-7 gap-4">
                            <div className="flex">
                                <div className="md:h-full border-b-3 border-black opacity-100">
                                    <Fade
                                        cascade
                                        triggerOnce
                                        duration={1400}
                                        damping={0.14}
                                    >
                                        <h2 className="md:text-5xl  text-[27px] leading-relaxed tracking-widest">
                                            2
                                        </h2>
                                    </Fade>
                                </div>
                                <div className="h-full md:w-56 w-26 border-b border-black opacity-100">
                                    <Fade
                                        cascade
                                        triggerOnce
                                        duration={1400}
                                        damping={0.14}
                                    >
                                        <h2 className="md:text-5xl md:mb-0 mb-3 text-[27px] leading-relaxed tracking-widest">
                                            00
                                        </h2>
                                    </Fade>
                                </div>
                            </div>

                            <p className="md:text-base text-[11px] leading-relaxed tracking-widest">
                                EMPREGADOS
                            </p>
                        </div>
                        <div className="flex flex-col md:gap-7 gap-4">
                            <div className="flex">
                                <div className="h-full  border-b-3 border-black opacity-100">
                                    <Fade
                                        cascade
                                        triggerOnce
                                        duration={1400}
                                        damping={0.14}
                                    >
                                        <h2 className="md:text-5xl md:mb-0 mb-2 text-[27px] leading-relaxed tracking-widest">
                                            5
                                        </h2>
                                    </Fade>
                                </div>
                                <div className="h-full md:w-36 w-[76px] border-b border-black opacity-100">
                                    <Fade
                                        cascade
                                        triggerOnce
                                        duration={1400}
                                        damping={0.14}
                                    >
                                        <h2 className="md:text-5xl  text-[27px] leading-relaxed tracking-widest"></h2>
                                    </Fade>
                                </div>
                            </div>

                            <p className="md:text-base text-[11px] leading-relaxed tracking-widest">
                                EQUIPES
                            </p>
                        </div>
                        <div className="flex flex-col md:gap-7 gap-4">
                            <div className="flex">
                                <div className="h-full  border-b-3 border-black opacity-100">
                                    <Fade
                                        cascade
                                        triggerOnce
                                        duration={1400}
                                        damping={0.14}
                                    >
                                        <h2 className="md:text-5xl  text-[27px] leading-relaxed tracking-widest">
                                            R
                                        </h2>
                                    </Fade>
                                </div>
                                <div className="h-full md:w-56 md:mb-0 mb-10 w-25 border-b border-black opacity-100">
                                    <Fade
                                        cascade
                                        triggerOnce
                                        duration={1400}
                                        damping={0.14}
                                    >
                                        <h2 className="md:text-5xl text-[27px] leading-relaxed tracking-widest">
                                            $100M
                                        </h2>
                                    </Fade>
                                </div>
                            </div>

                            <p className="md:text-base text-[11px] leading-relaxed tracking-widest">
                                EM CAPITAL
                            </p>
                        </div>
                        <div className="flex flex-col md:gap-7 gap-4">
                            <div className="flex">
                                <div className="h-full border-b-3 border-black opacity-100">
                                    <Fade
                                        cascade
                                        triggerOnce
                                        duration={1400}
                                        damping={0.14}
                                    >
                                        <h2 className="md:text-5xl text-[27px] leading-relaxed tracking-widest">
                                            3
                                        </h2>
                                    </Fade>
                                </div>
                                <div className="h-full md:w-36 w-[76px] border-b border-black opacity-100">
                                    <Fade
                                        cascade
                                        triggerOnce
                                        duration={1400}
                                        damping={0.14}
                                    >
                                        <h2 className="md:text-5xl md:mb-0 mb-10 text-[27px] leading-relaxed tracking-widest">
                                            26
                                        </h2>
                                    </Fade>
                                </div>
                            </div>

                            <p className="md:text-base text-xs leading-relaxed tracking-widest">
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
