import React from "react";
import useMediaImage from "../hooks/useMediaImage";


/**
 * Componente que renderiza uma imagem com fallback para uma imagem 
 * nao encontrada com estilos personalizados.
 * 
 * @param {string} id - O id da imagem a ser buscada.
 * @param {string} srcProp - O src da imagem.
 * @param {string} altProp - O texto alternativo da imagem.
 * @param {Object} rest - Outros props do componente img.
 * @returns {JSX.Element} - O elemento img ou um fallback com estilo personalizado.
 */

export default function ProjectImage({
    id,
    src: srcProp,
    alt: altProp,
    ...rest
}) {
    
    const media = useMediaImage(id);

    const src = media?.src ?? srcProp;
    const alt = media?.alt ?? altProp ?? "";

    if (!src) {
        return (
            <div
                style={{
                    width: "100%",
                    height: "200px",
                    background: "#222",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#999",
                    fontSize: "14px",
                    borderRadius: "10px",
                }}
            >
                imagem não encontrada: {id ?? "sem id"}
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            {...rest}
        />
    );
}
