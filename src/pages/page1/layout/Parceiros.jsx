import Card from "../../../components/Card";
import { useGsapContainerAnimation } from "../../../hooks/Efeitos/useGsapEfeitoZoomScroll";
import { useRef } from "react";
import ProjectImage from "../../../components/ProjectImage";
import { Fade } from "react-awesome-reveal";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

function Parceiros() {
    const containerRef = useRef(null);

    useGsapContainerAnimation(containerRef, ".stat-area", 2000);

    const parceirosData = [
        { id: "TransportX-parceiros", name: "TRANSPORTE X", delay: 1200 },
        { id: "IDISoftware-parceiros", name: "IDI SOFTWARE", delay: 1800 },
        { id: "ICars-parceiros", name: "IMAGINE CARROS", delay: 2200 },
        { id: "Tri-Nex-parceiro", name: "TRI-NEX", delay: 2800 },
    ];

    return (
        <section
            ref={containerRef}
            className="bg-black min-h-screen md:max-h-screen border-b-2 sticky top-0 efeito-container border-white md:pl-50 pl-5 py-10 md:py-37 mb-70 md:mb-0 overflow-hidden md:block  flex flex-col justify-center "
        >
            {/* CSS para transição linear (essencial para o efeito de esteira) */}
            <style>{`
                .swiper-wrapper {
                    transition-timing-function: linear !important;
                }
                .swiper-slide {
                    opacity: 0.4;
                    transition: opacity 1.5s ease;
                }
                .swiper-slide-next {
                    opacity: 1;
                    transition: opacity 3.2s ease;
                }
               
                .swiper-slide-active{
                    opacity: 1;
                }
            `}</style>

            <div className="grid grid-cols-1 lg:grid-cols-2 md:pr-40 pr-5 gap-20 w-full ">
                <div className="flex md:max-w-sm stat-area flex-col justify-center">
                    <Card
                        classNameBarraII="md:h-17"
                        classNameBaseII="md:mt-17 mt-7 gap-4"
                        classNameTitle="max-w-sm  md:mt-4 text-lg"
                        classNameText="text-[11px] "
                        variant="white"
                        text="INDÚSTRIA"
                        title={"Nossos parceiros"}
                        text_2="Nossa empresa une forças com Transporte X, IDI Software, Imagine Carros e TRI-NEX para combinar logística, software, engenharia e componentes de alta qualidade. Essa colaboração integra competências complementares para criar veículos elétricos com tecnologia, confiabilidade e eficiência técnica. Juntos, transformamos ideias em realidade e ampliamos nossa capacidade de inovar e entregar produtos robustos."
                    />
                </div>

                <div className="w-full">
                    {/* MOBILE: Carrossel Contínuo (Infinito Suave) */}
                    <div className="lg:hidden block w-full">
                        <Swiper
                            modules={[Autoplay, FreeMode]}
                            spaceBetween={15}
                            slidesPerView={2.2}
                            loop={true}
                            freeMode={{
                                enabled: true,
                                momentum: false, // Desativa o impulso para não conflitar com o autoplay linear
                            }}
                            speed={4000}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true, // Pausa o movimento automático se o usuário estiver interagindo
                            }}
                            // Melhora o comportamento do arraste manual
                            touchEventsTarget="container"
                            grabCursor={true}
                            className="py-5"
                        >
                            {parceirosData.map((p) => (
                                <SwiperSlide key={p.id}>
                                    <div className="flex flex-col items-center justify-center bg-white/5 border border-white/10 p-4 rounded-lg h-36">
                                        <ProjectImage
                                            id={p.id}
                                            className="h-14 w-full object-contain mb-3"
                                        />
                                        <h2 className="text-white text-[9px] font-bold tracking-widest text-center uppercase">
                                            {p.name}
                                        </h2>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* DESKTOP: Grid Original */}
                    <div className="hidden md:grid grid-cols-2 gap-40 items-center md:pt-7 justify-items-center">
                        <Fade
                            cascade
                            duration={1200}
                            triggerOnce
                            damping={0.14}
                        >
                            <div className="flex flex-col stat-area gap-3 items-center">
                                <ProjectImage
                                    id="TransportX-parceiros"
                                    className="w-4/6"
                                />
                                <h2 className="text-white text-xl text-center tracking-widest">
                                    TRANSPORTE X
                                </h2>
                            </div>
                        </Fade>
                        <Fade
                            cascade
                            duration={1800}
                            triggerOnce
                            damping={0.14}
                        >
                            <div className="flex flex-col stat-area gap-13 items-center">
                                <ProjectImage
                                    id="IDISoftware-parceiros"
                                    className="w-2/4 flex pt-4"
                                />
                                <h2 className="text-white text-center  text-xl tracking-widest">
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
                            <div className="flex flex-col stat-area gap-9 items-center">
                                <ProjectImage
                                    id="ICars-parceiros"
                                    className="w-3/6"
                                />
                                <h2 className="text-white text-center text-xl tracking-widest">
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
                            <div className="flex flex-col stat-area  items-center">
                                <ProjectImage
                                    id="Tri-Nex-parceiro"
                                    className="w-8/6 flex pb-3"
                                />

                                <h2 className="text-white relative top-6 text-center text-xl tracking-widest">
                                    TRI-NEX
                                </h2>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Parceiros;
