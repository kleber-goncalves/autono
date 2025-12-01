import React, { useState, useEffect } from "react";

// =========================================================
// 1. HOOK CUSTOMIZADO: Lógica de esconder/mostrar (Smart Navbar)
// Mantido do código anterior.
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

    // NOVO ESTADO: Controla se o usuário rolou o suficiente para mudar a cor
    const [isScrolled, setIsScrolled] = useState(false);

    // NOVO EFEITO: Monitora a posição do scroll para mudar 'isScrolled'
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
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0";

    // Classe para cor de fundo (baseada na posição)
    const bgColorClass = isScrolled
        ? "bg-white  shadow-md"
        : "bg-transparent  shadow-none"; // Fundo transparente no topo

    // Classe para o logo/texto para garantir que ele seja visível
    const textColorClass = isScrolled ? "text-black" : "text-black"; // Supondo que o Hero tenha fundo escuro

    return (
        <nav
            // ALTERADO: transition-all para animar tanto a posição quanto a cor
            className={`
                fixed top-0 w-full z-20 
                transform transition-all duration-500
                ${visibilityClass}
                ${bgColorClass}
            `}
        >
            <div className="w-full max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div>
                    <a
                        href="/"
                        // NOVO: Aplica a classe de cor de texto dinâmica
                        className={`text-black text-xl tracking-widest font-extrabold transition duration-150 ${textColorClass}`}
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
                    <LinkItem href="/about" isScrolled={isScrolled}>
                        Sobre
                    </LinkItem>
                    <LinkItem href="/contact" isScrolled={isScrolled}>
                        Carreiras
                    </LinkItem>

                    {/* Botão de Ação (CTA) - Manter cores fortes para visibilidade */}
                    <a
                        href="/subscribe"
                        className="
                            bg-black text-white px-5 py-2 
                            rounded-full font-medium text-sm
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
// ALTERADO: Recebe 'isScrolled' para gerenciar a cor do texto
const LinkItem = ({ href, children, isScrolled }) => (
    <a
        href={href}
        // Ajusta a cor do texto: preto quando scrollado, branco quando transparente
        className={`
            text-sm font-medium transition duration-150 py-1
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
