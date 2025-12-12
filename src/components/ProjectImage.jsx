// src/components/ProjectImage.jsx
import React from "react";
import useMediaImage from "../hooks/useMediaImage";

export default function ProjectImage({
    id,
    src: srcProp,
    alt: altProp,
    ...rest
}) {
    // <- chama o "hook" sempre, não condicionamente
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
