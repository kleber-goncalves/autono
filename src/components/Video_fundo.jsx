import React from "react";
import videoBg from "../../public/fundo-hero.mp4"; // Importe seu vídeo ou use URL externa
import Intro_cmp from "./Intro_cmp";
import MouseAnimation from "./MouseAnimation";

function BackgroundVideo() {
    return (
        // 1. O container pai deve ser relative para conter o vídeo absolute
        <div
            className="relative w-full h-screen overflow-hidden"
            data-bg="white"
        >
            {/* 2. O Vídeo: age como o background */}
            <video
                data-bg="white"
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                src={videoBg}
                autoPlay
                loop
                muted // Obrigatório para autoplay funcionar na maioria dos navegadores
                playsInline // Importante para iOS
            />

            {/* 4. O Conteúdo: Fica por cima de tudo */}
            <div data-bg="white" className="z-10 flex flex-col ">
                <Intro_cmp
                    className=" py-30"
                    classNameTitle="text-7xl max-w-5xl"
                    classNameText="tracking-wide max-w-3xl"
                    titulo={["O FUTURO DA ", "MOBILIDADE CHEGOU"]}
                    texto="Prove uma direção autônoma mais segura com Autono."
                />

                <MouseAnimation />
            </div>
        </div>
    );
};

export default BackgroundVideo;
