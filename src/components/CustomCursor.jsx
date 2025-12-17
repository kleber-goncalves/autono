// CustomCursor.jsx
import React, { useEffect, useRef } from "react";
import "../style/customCursor.css"; // importe o CSS (nome sugestão)

const CustomCursor = ({ speed = 0.28, innerSize = 6, outerSize = 36  }) => {
    //speed = 0.28 → controla quanto “atraso” o anel externo terá (maior = menos atraso, mais responsivo).
    //innerSize = 6 → tamanho do ponto interno (em pixels).
    //outerSize = 36 → tamanho do anel externo (em pixels).

    const outerRef = useRef(null); // anel suave
    const innerRef = useRef(null); // ponto instantâneo (Snap)
    const pos = useRef({ x: 0, y: 0 }); // pos = posição atual do anel externo (que vai sendo aproximada até target com suavidade).
    const target = useRef({ x: 0, y: 0 }); //target = onde o mouse está agora (atualizado no evento mousemove).

    useEffect(() => {
        // Atualiza a posição alvo com o mouse
        const onMove = (e) => {
            target.current.x = e.clientX;
            target.current.y = e.clientY;

            // Move o snap para o centro instantaneamente (snap) — cursor mais responsivo
            if (innerRef.current) {
                innerRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
            }
        };

        document.addEventListener("mousemove", onMove);

        let frameId;
        const animate = () => {
            // aproxima pos de target aos poucos usando lerp (linear interpolation)
            // Lerp para suavizar o anel externo (ajusta `speed` para ficar mais rápido ou mais lento)
            pos.current.x += (target.current.x - pos.current.x) * speed;
            pos.current.y += (target.current.y - pos.current.y) * speed;

            if (outerRef.current) {
                outerRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
            }

            frameId = requestAnimationFrame(animate);
        };
        animate();

        // Ao desmontar, limpa tudo
        return () => {
            document.removeEventListener("mousemove", onMove);
            cancelAnimationFrame(frameId);
        };
    }, [speed]);

    // JSX com dois elementos: inner (snap) e outer (suave + mix-blend)
    return (
        <>
            <div
                ref={outerRef}
                className="custom-cursor-outer"
                style={{ width: outerSize, height: outerSize }}
            />
            <div
                ref={innerRef}
                className="custom-cursor-inner"
                style={{ width: innerSize, height: innerSize }}
            />
        </>
    );
};

export default CustomCursor;
