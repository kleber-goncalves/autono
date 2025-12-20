import React from "react";
import videoBg from "../../public/fundo-hero.mp4"; // Importe seu vídeo ou use URL externa
import Intro_cmp from "./Intro_cmp";
import MouseAnimation from "/src/components/MouseAnimation";


function BackgroundVideo() {
    return (
        // 1. O container pai deve ser relative para conter o vídeo absolute
        <div
            className="relative z-3 w-full md:h-screen h-full overflow-hidden"
            data-bg="white"
        >
            {/* 2. O Vídeo: age como o background */}
            <video
                data-bg="white"
                className="absolute top-0  left-0 w-full h-full object-center  object-cover -z-10 "
                src={videoBg}
                autoPlay
                loop
                muted // Obrigatório para autoplay funcionar na maioria dos navegadores
                playsInline // Importante para iOS
            />

            {/* 4. O Conteúdo: Fica por cima de tudo */}
            <div data-bg="white" className="flex z-10 flex-col  ">
                <Intro_cmp
                    className=" py-30"
                    classNameTitle="md:text-7xl text-[26px] md:max-w-5xl"
                    classNameText="tracking-wide md:max-w-3xl"
                    titulo={["O FUTURO DA ", "MOBILIDADE CHEGOU"]}
                    texto="Prove uma direção autônoma mais segura com Autono."
                />

                <MouseAnimation />
                <div className="absolute z-3 inset-0 bg-linear-to-b  from-black/5 via-transparent to-black"></div>
            </div>
        </div>
    );
};

export default BackgroundVideo;
