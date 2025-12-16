import React, { useState, useEffect } from "react";

// =========================================================
// 1. HOOK CUSTOMIZADO: Lógica de esconder/mostrar (Smart Navbar)
// =========================================================
function useScrollDirection() {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrollDirection, setScrollDirection] = useState("up");

    const updateScrollDirection = () => {
        const scrollY = window.scrollY;

        // Esconde se rolar para baixo e já tiver saído do topo (> 50px)
        const direction = scrollY > lastScrollY && scrollY > 600 ? "down" : "up";

        if (direction !== scrollDirection) {
            setScrollDirection(direction);
        }

        setLastScrollY(scrollY > 0 ? scrollY : 0);
    };

    useEffect(() => {
        window.addEventListener("scroll", updateScrollDirection);
        return () => {
            window.removeEventListener("scroll", updateScrollDirection);
        };
    }, [lastScrollY]);

    return scrollDirection;
}

// =========================================================
// 2. COMPONENTE NAV: Lógica de Cor de Fundo
// =========================================================
function Nav() {
    const scrollDirection = useScrollDirection();

    // ESTADO: Controla se o usuário rolou o suficiente para mudar a cor
    const [isScrolled, setIsScrolled] = useState(false);

    // EFEITO: Monitora a posição do scroll para mudar 'isScrolled'
    useEffect(() => {
        const handleScrollColor = () => {
            // Define o limite de scroll (ex: 80px)
            setIsScrolled(window.scrollY > 80);
        };

        window.addEventListener("scroll", handleScrollColor);
        handleScrollColor(); // Executa na montagem para verificar o estado inicial

        return () => {
            window.removeEventListener("scroll", handleScrollColor);
        };
    }, []);

    // Classe para esconder/mostrar (baseada na direção)
    const visibilityClass =
        scrollDirection === "down"
            ? "-translate-y-26"
            : "translate-y-0 nav-up";

    // Classe para cor de fundo (baseada na posição)
    const bgColorClass = isScrolled
        ? "w-auto ml-23 mr-23 top-3 bg-white/20 rounded-2xl border border-white/60 backdrop-blur-sm "
        : "bg-transparent border-none "; // Fundo transparente no topo

    // Classe para o logo/texto para garantir que ele seja visível
    const textColorClass = isScrolled ? "text-black" : "text-black"; // Supondo que o Hero tenha fundo escuro

    // Container interno — aqui mudamos o max-width/spacing quando scrolled
    // Isso faz o navbar "encolher" mas permanecer centralizado (mx-auto)
    const containerBase =
        "w-full mx-auto flex items-center justify-between  duration-800 ease-in-out";

    const animtion = isScrolled ? "" : "nav-up";

    const containerSizeClass = isScrolled
        ? "max-w-6xl px-4 py-3" // ENCOLHIDO quando scrolled
        : "max-w-8xl  px-30 py-7"; // LARGURA total no topo

    return (
        <nav
            // transition-all para animar tanto a posição quanto a cor
            className={`
                fixed z-20 left-0 right-0
                transform ${visibilityClass}
                ${bgColorClass}
                ${animtion}
                transition-all duration-500
            `}
        >
            <div className={`${containerBase} ${containerSizeClass}`}>
                {/* Logo */}
                <div className="shrink-0">
                    <a
                        href="/"
                        // NOVO: Aplica a classe de cor de texto dinâmica
                        className={`text-black text-xl tracking-[0.4rem] font-bold transition duration-150 ${textColorClass}`}
                    >
                        AUTONO
                    </a>
                </div>

                {/* Links de Navegação */}
                <div className="hidden md:flex gap-8 items-center">
                    {/* NOVO: Aplica a classe de cor de texto dinâmica nos links */}
                    <LinkItem href="/tecnologia" isScrolled={isScrolled}>
                        Tecnologia
                    </LinkItem>
                    <LinkItem href="/sobre" isScrolled={isScrolled}>
                        Sobre
                    </LinkItem>
                    <LinkItem href="/carreiras" isScrolled={isScrolled}>
                        Carreiras
                    </LinkItem>

                    {/* Botão de Ação (CTA) - Manter cores fortes para visibilidade */}
                    <a
                        role="link"
                        href="/subscribe"
                        className="
                            bg-black text-white px-7 py-[3px]
                            rounded-md font-medium text-base
                            hover:bg-white hover:text-black hover:border-black border-2 border-transparent transition duration-300
                        "
                    >
                        Assinar
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Nav;

// --- (Componente Auxiliar para Links) ---
// Recebe 'isScrolled' para gerenciar a cor do texto
const LinkItem = ({ href, children, isScrolled }) => (
    <a
        href={href}
        // Ajuste de cor do texto: preto quando scrollado, branco quando transparente
        className={`
            text-base transition duration-150 py-1
            ${
                isScrolled
                    ? "text-black hover:text-gray-600"
                    : "text-black hover:text-gray-300"
            }
        `}
    >
        {children}
    </a>
);
