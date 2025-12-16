import React, { useState, useRef, useEffect } from "react";

// Hook para direção de scroll (mantive sua lógica)
function useScrollDirection() {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrollDirection, setScrollDirection] = useState("up");

    useEffect(() => {
        const update = () => {
            const y = window.scrollY;
            const dir = y > lastScrollY && y > 600 ? "down" : "up";
            if (dir !== scrollDirection) setScrollDirection(dir);
            setLastScrollY(y > 0 ? y : 0);
        };
        window.addEventListener("scroll", update, { passive: true });
        return () => window.removeEventListener("scroll", update);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lastScrollY, scrollDirection]);

    return scrollDirection;
}

function Nav() {
    const navRef = useRef(null);
    const scrollDirection = useScrollDirection();

    const [isScrolled, setIsScrolled] = useState(false);
    const [isNavOverDark, setIsNavOverDark] = useState(false);

    // Mantém isScrolled (opcional) -- sua lógica
    useEffect(() => {
        const handleScrollColor = () => setIsScrolled(window.scrollY > 80);
        window.addEventListener("scroll", handleScrollColor, { passive: true });
        window.addEventListener("resize", handleScrollColor);
        handleScrollColor();
        return () => {
            window.removeEventListener("scroll", handleScrollColor);
            window.removeEventListener("resize", handleScrollColor);
        };
    }, []);

    // Checagem rápida e imediata durante o scroll (rAF)
    useEffect(() => {
        if (!navRef.current) return;
        let raf = null;

        const parseRgb = (rgbStr) => {
            if (!rgbStr) return null;
            const m = rgbStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
            if (!m) return null;
            return [parseInt(m[1], 10), parseInt(m[2], 10), parseInt(m[3], 10)];
        };
        const brightness = (r, g, b) => (299 * r + 587 * g + 114 * b) / 1000;
        const findSectionAncestor = (el) => {
            while (el && el !== document.body) {
                if (el.tagName && el.tagName.toLowerCase() === "section")
                    return el;
                if (
                    el.dataset &&
                    (el.dataset.section !== undefined ||
                        el.dataset.bg !== undefined)
                )
                    return el;
                el = el.parentElement;
            }
            return null;
        };

        // Função que decide se está sobre fundo escuro
        const checkUnderNav = () => {
            if (!navRef.current) return;

            const rect = navRef.current.getBoundingClientRect();
            const x = Math.round(rect.left + rect.width / 2);
            const y = Math.round(
                Math.min(window.innerHeight - 1, rect.bottom + 2)
            );
            const el = document.elementFromPoint(x, y);
            if (!el) return;

            const section = findSectionAncestor(el) || el;

            // Prioriza data-bg (controle manual)
            if (section.dataset && section.dataset.bg) {
                const val = section.dataset.bg.toLowerCase();
                setIsNavOverDark(
                    val === "dark" || val === "black" || val === "preto"
                );
                return;
            }

            // Sobe para achar background-color sólido
            let cur = section;
            let bg = null;
            while (cur && cur !== document.body) {
                const style = window.getComputedStyle(cur);
                bg = style.backgroundColor;
                if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent")
                    break;
                cur = cur.parentElement;
            }
            if (!bg || bg === "rgba(0, 0, 0, 0)" || bg === "transparent") {
                bg =
                    window.getComputedStyle(document.body).backgroundColor ||
                    "rgb(255,255,255)";
            }

            const rgb = parseRgb(bg);
            if (!rgb) {
                setIsNavOverDark(false);
                return;
            }
            const b = brightness(...rgb);
            setIsNavOverDark(b < 130);
        };

        // Handler de scroll: chama checkUnderNav via rAF a cada frame enquanto rola
        const onScroll = () => {
            if (raf) cancelAnimationFrame(raf);
            raf = requestAnimationFrame(checkUnderNav);
        };

        // ADICIONA o listener direto (sem debounce) mas com rAF para limitar por frame
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        // faz um check inicial
        onScroll();

        return () => {
            if (raf) cancelAnimationFrame(raf);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navRef]);

    // Classes rápidas (quase instantâneas)
    const visibilityClass =
        scrollDirection === "down" ? "-translate-y-18" : "translate-y-0 nav-up";
    const bgColorClass = isScrolled
        ? "w-auto ml-23 mr-23 top-3 bg-white/20 rounded-2xl border border-white/60 backdrop-blur-sm "
        : "bg-transparent border-none";
    // Aqui trocamos a duração para 75ms (quase instantâneo). Se quiser sem animação: use "transition-none"
    const textColorClass = isNavOverDark ? "text-white" : "text-black";
    const linkHover = isNavOverDark
        ? "hover:text-gray-200"
        : "hover:text-gray-700";
    const containerBase =
        "w-full mx-auto flex items-center justify-between transition-all duration-150 ease-linear will-change-transform";

    const containerSizeClass = isScrolled
        ? "max-w-6xl px-4 py-3"
        : "max-w-8xl px-30 py-7";
    
       const animtion = isScrolled ? "" : "nav-up";

    return (
        <nav
            ref={navRef}
            // reduzimos duração de transição geral e usamos will-change pra performance
            className={`fixed top-0 left-0 right-0 z-20 transform ${visibilityClass}  ${animtion}  ${bgColorClass} duration-800 ease-in-out`}
            style={{ willChange: "transform, background-color" }}
        >
            <div className={`${containerBase} ${containerSizeClass}`}>
                <div className="shrink-0">
                    <a
                        href="/"
                        className={`font-bold tracking-[0.4rem] text-xl transition-colors duration-75 ease-linear ${textColorClass}`}
                        style={{ willChange: "color" }}
                    >
                        AUTONO
                    </a>
                </div>

                <div
                    className={`hidden md:flex gap-8 items-center ${textColorClass}`}
                >
                    <a
                        href="/tecnologia"
                        className={`text-base transition-colors duration-75 ease-linear ${linkHover}`}
                    >
                        Tecnologia
                    </a>
                    <a
                        href="/sobre"
                        className={`text-base transition-colors duration-75 ease-linear ${linkHover}`}
                    >
                        Sobre
                    </a>
                    <a
                        href="/carreiras"
                        className={`text-base transition-colors duration-75 ease-linear ${linkHover}`}
                    >
                        Carreiras
                    </a>

                    <a
                        role="link"
                        href="/subscribe"
                        className={`px-7 py-[3px] rounded-md border transition-colors duration-150 ease-linear ${
                            isNavOverDark
                                ? "bg-white text-black hover:bg-black hover:text-white"
                                : "bg-black text-white border-black hover:bg-white hover:text-black"
                        }`}
                        style={{ willChange: "color, border-color" }}
                    >
                        Assinar
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
