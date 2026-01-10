import React, { useEffect, useRef } from "react";
import "../style/customCursor.css"; 

const CustomCursor = ({ speed = 0.28, innerSize = 6, outerSize = 27  }) => {
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
            // Se for o primeiro movimento, teletransporta o anel para não vir do (0,0)
            if (pos.current.x === 0 && pos.current.y === 0) {
                pos.current.x = e.clientX;
                pos.current.y = e.clientY;
            }

            target.current.x = e.clientX;
            target.current.y = e.clientY;

            // Move o snap para o centro instantaneamente (snap) — cursor mais responsivo
            if (innerRef.current) {
                innerRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
            }

            // se estava escondido por mouse sair, mostra ao voltar
            if (outerRef.current && outerRef.current.style.opacity === "0") {
                outerRef.current.style.opacity = "1";
            }
            if (innerRef.current && innerRef.current.style.opacity === "0") {
                innerRef.current.style.opacity = "1";
            }
        };

        // Detectar hover em elementos clicáveis ---
        const onHoverCheck = (e) => {
            // Verifica se o alvo (target) ou algum pai dele é clicável
            // Adicione mais tags aqui se necessário (ex: label, select)
            const isClickable = e.target.closest(
                "a, button, input, textarea, [role='button'], select, .clickable"
            );

            const cursorOuter = outerRef.current;
            const cursorInner = innerRef.current;

            if (isClickable) {
                // Se for clicável, esconde nosso cursor (adicionando a classe CSS que tem opacity: 0)
                if (cursorOuter)
                    cursorOuter.classList.add("is-hover-clickable");
                if (cursorInner)
                    cursorInner.classList.add("is-hover-clickable");
            } else {
                // Se saiu de um clicável, mostra nosso cursor novamente
                if (cursorOuter)
                    cursorOuter.classList.remove("is-hover-clickable");
                if (cursorInner)
                    cursorInner.classList.remove("is-hover-clickable");
            }
        };

        // detectar quando o mouse sai da janela: mouseout com relatedTarget === null
        const onDocMouseOut = (e) => {
            // quando relatedTarget for null significa que o ponteiro saiu da janela
            if (!e.relatedTarget && !e.toElement) {
                if (outerRef.current) outerRef.current.style.opacity = "0";
                if (innerRef.current) innerRef.current.style.opacity = "0";
            }
        };

        // também esconder quando a janela perde foco (alt+tab, trocar de app, abrir devtools separado)
        const onWindowBlur = () => {
            if (outerRef.current) outerRef.current.style.opacity = "0";
            if (innerRef.current) innerRef.current.style.opacity = "0";
        };

        // mostrar quando a janela volta a foco (ou quando mouse entra com mousemove já faz isso)
        const onWindowFocus = () => {
            if (outerRef.current) outerRef.current.style.opacity = "1";
            if (innerRef.current) innerRef.current.style.opacity = "1";
        };

        // Adiciona listeners
        document.addEventListener("mousemove", onMove);
        // Usamos mouseover (que propaga/bubles) para detectar entrada em elementos
        document.addEventListener("mouseover", onHoverCheck);
        document.addEventListener("mouseout", onDocMouseOut);
        window.addEventListener("blur", onWindowBlur);
        window.addEventListener("focus", onWindowFocus);

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
            document.removeEventListener("mouseover", onHoverCheck);
            document.removeEventListener("mouseout", onDocMouseOut);
            window.removeEventListener("blur", onWindowBlur);
            window.removeEventListener("focus", onWindowFocus);
            cancelAnimationFrame(frameId);
        };
    }, [speed]);

    // JSX com dois elementos: inner (snap) e outer (suave + mix-blend)
    return (
        <>
            <div
                ref={outerRef}
                className="custom-cursor-outer"
                style={{ width: outerSize, height: outerSize}}
            />
            <div
                ref={innerRef}
                className="custom-cursor-inner"
                style={{ width: innerSize, height: innerSize}}
            />
        </>
    );
};

export default CustomCursor;
