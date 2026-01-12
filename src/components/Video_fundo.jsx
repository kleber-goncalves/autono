import { useRef, useState, useEffect } from "react";
import Intro_cmp from "./Intro_cmp";
import MouseAnimation from "/src/components/MouseAnimation";
import videoBg from "../../public/fundo-hero.mp4"; // Importe seu vídeo ou use URL externa
import fotoHero from "../assets/fundo_hero.jpg";

function BackgroundVideo() {
    const containerRef = useRef(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setLoaded(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "0px", threshold: 0.1 }
        );
        if (containerRef.current) observer.observe(containerRef.current);
    }, []);

    return (
        // O container pai deve ser relative para conter o vídeo absolute
        <div
            className="relative z-3 w-full md:h-screen h-full overflow-hidden"
            data-bg="white"
        >
            {/* O Vídeo: age como o background */}
            {loaded && (
                <video
                    data-bg="white"
                    className="absolute top-0 left-0 w-full h-full
                object-center object-cover -z-10 "
                    poster={fotoHero}
                    controls
                    preload="none"
                    loop
                    muted // Obrigatório para autoplay funcionar na maioria dos navegadores
                    playsInline // Importante  para iOS
                >
                    <source src={videoBg} type="video/mp4" />
                </video>
            )}

            {/* O Conteúdo: Fica por cima de tudo */}
            <div data-bg="white" className="flex z-10 flex-col  ">
                <Intro_cmp
                    className=" py-30"
                    classNameTitle="md:text-7xl text-[26px] md:max-w-5xl"
                    classNameText="tracking-wide md:max-w-3xl"
                    titulo={["O FUTURO DA ", "MOBILIDADE CHEGOU"]}
                    texto="Prove uma direção autônoma mais segura com Autono."
                />

                <MouseAnimation />
                <div
                    data-bg="white"
                    className="absolute z-3 inset-0 bg-linear-to-b  from-black/5 via-transparent to-black"
                ></div>
            </div>
        </div>
    );
}

export default BackgroundVideo;
