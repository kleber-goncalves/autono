import React, { useState, useRef, useEffect } from "react";
import ModalTrigger from "./ModalTrigger";
import { useForm } from "../hooks/useForm";

// conteúdo do modal
function SubscribeContent() {



    const validateSchema = {
    email: {
        required: true,
        type: "email",
    },
    };
    
        const onSubmit = async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Payload enviado:", values);
        alert("Candidatura enviada com sucesso!");
        // await api.post("/users", values);
    };

    const { values, errors, loading, handleChange, handleSubmit } = useForm(
        {
            email: "",
        },
        validateSchema,
        onSubmit
    );

  return (
      <>
          <div className="flex flex-col gap-6">
              <h2 className="text-xl text-white tracking-widest">ASSINAR</h2>
              <p className="mt-12 text-base text-white tracking-wide">
                  Receba notícias e atualizações sobre o Autono. pelo seu
                  e-mail.
              </p>

              <form
                  className="mt-4 flex w-full max-w-md group"
                  onSubmit={handleSubmit}
              >
                  <input
                      id="email"
                      value={values.email}
                      loading={loading}
                      onChange={handleChange}
                      errors={errors}
                      aria-describedby={
                          errors.email ? "email-error" : undefined
                      }
                      aria-invalid={!!errors.email}
                      type="email"
                      name="email"
                      className="flex-1 px-4 py-2 bg-transparent border border-white/20 text-white rounded-l-lg outline-none placeholder-gray-400 focus:border-white/60 focus:bg-white/5 transition-all duration-300"
                      placeholder="seu@email.com"
                  />

                  <button
                      type="submit"
                      disabled={loading}
                      className={`flex-row flex px-6 py-2 bg-white text-black font-semibold rounded-r-lg border border-black hover:bg-gray-200  duration-300 tracking-wide cursor-pointer text-xs md:text-base transition-all transform active:scale-[0.98]
                            ${
                                loading
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "border-white bg-black hover:bg-white hover:inset-shadow-sm hover:inset-shadow-indigo-500 hover:shadow-lg/20 hover:shadow-[#ffffff] hover:text-black"
                            }`}
                  >
                      {loading ? (
                          <span className="flex items-center justify-center">
                              <svg
                                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                  viewBox="0 0 24 24"
                              >
                                  <circle
                                      className="opacity-25"
                                      cx="12"
                                      cy="12"
                                      r="10"
                                      stroke="currentColor"
                                      strokeWidth="4"
                                  ></circle>
                                  <path
                                      className="opacity-75"
                                      fill="currentColor"
                                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  ></path>
                              </svg>
                              Processando...
                          </span>
                      ) : (
                          "Enviar"
                      )}
                  </button>
              </form>
              {/* Mensagem de erro (aparece somente se errors.email existir) */}
              {errors.email && (
                  <p
                      id="email-error"
                      role="alert"
                      aria-live="assertive"
                      className="mt-2 text-sm text-red-400 flex items-center gap-2"
                  >
                      Erro de envio do {errors.email}. Por favor, tente
                      novamente.
                  </p>
              )}
          </div>

          <div className="text-xs text-slate-500">
              Dica: feche com ESC ou tocando fora do modal.
          </div>
      </>
  );
}

//888888888888888888///

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
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para o Mobile

    // --- NOVO: Estado para rastrear o link ativo ---
    const [activeLink, setActiveLink] = useState("");

    // --- NOVO: Detecta a página atual ao carregar ---
    useEffect(() => {
        // Pega o caminho atual (ex: "/tecnologia")
        const path = window.location.pathname;
        setActiveLink(path);
    }, []);

    // Bloquear scroll quando menu mobile estiver aberto
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    }, [isMenuOpen]);

    //  isScrolled
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

    // Lógica de detecção de cor de fundo
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

    // Classes rápidas
    const visibilityClass =
        scrollDirection === "down" ? "-translate-y-18" : "translate-y-0 nav-up";

    // Mudança de cor de fundo do nav bar do "isNavOverDark ( Detector de cor de fundo )" dizer
    // Se o menu estiver aberto, fundo sólido. Se fechado, mantém o efeito de vidro.
    const bgColorClassII = isMenuOpen
        ? isNavOverDark
            ? "bg-black border-white/20"
            : "bg-white border-black/10" // Fundo sólido sem transparência
        : isNavOverDark
        ? "bg-white/20 border border-white/60 backdrop-blur-sm"
        : "bg-black/20 border border-black/60 backdrop-blur-sm";

    // Mudança de cor do texto do nav bar com base do "isNavOverDark ( Detector de cor de fundo )" dizer
    const textColorClass = isNavOverDark ? "text-white" : "text-black";

    // --- Lógica Atualizada para Hover/Active ---
    const getLinkClasses = (path) => {
        const isActive = activeLink === path;

        // Se estiver ativo, usamos cores "fixas" (como se estivesse em hover constante)
        // Adicionei a classe 'nav-active' para você poder estilizar o glow no CSS se precisar
        if (isActive) {
            return isNavOverDark
                ? "text-white font-medium nav-active"
                : "text-black font-medium nav-active";
        }

        // Se não ativo, comportamento padrão
        return isNavOverDark
            ? "text-gray-300 hover:text-white hover:font-medium"
            : "text-gray-700 hover:text-black hover:font-medium";
    };



/*
    const linkHover = isNavOverDark
        ? "hover:text-white text-gray-300 hover:font-medium" // V- text-branco
        : "hover:text-black text-gray-700 hover:font-medium"; // V- text-preto
*/


    
    // Controle maior do layout do nav bar com base do "isScrolled ( Detector de rolagem )" dizer
    const bgColorClass = isMenuOpen
        ? "w-screen h-screen top-0 left-0 rounded-none border-none" // Tela cheia mobile : isScrolled
        : isScrolled
        ? "w-auto mx-4 md:mx-23 top-0 md:top-3 rounded-2xl"
        : "bg-transparent border-none w-full ";

    // Controle maior do layout do nav bar
    const containerBase =
        "md:w-full mx-auto flex items-center justify-between transition-all duration-150 ease-linear will-change-transform";

    // Mudança do layout do nav bar com base do "isScrolled ( Detector de rolagem )" dizer
    const containerSizeClass = isScrolled
        ? "max-w-6xl px-4 py-3"
        : "max-w-8xl lg:px-30 px-6 py-7";

    // animação para o nav nao ter animação quando estiver no topo do hero
    const animtion = isScrolled ? "" : "nav-padrao";

    return (
        <nav
            ref={navRef}
            // usar will-change pra performance, para o navegador ja esperar uma mudança
            className={`fixed top-0 left-0 right-0 z-20 transform ${visibilityClass}  ${animtion} ${bgColorClassII}  ${bgColorClass} duration-800 ease-in-out`}
            style={{ willChange: "transform, background-color" }}
        >
            <div className={`${containerBase} ${containerSizeClass}`}>
                <div className="shrink-0 z-110">
                    <a
                        href="/"
                        className={`font-bold tracking-[0.4rem] text-sm md:text-xl  transition-colors duration-75 ease-linear ${textColorClass}`}
                        style={{ willChange: "color" }}
                    >
                        AUTONO
                    </a>
                </div>

                {/* MOBILE TOGGLE BUTTON */}

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden z-[110] p-1 focus:outline-none relative w-10 h-10"
                    aria-label="Toggle Menu"
                >
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span
                            className={`block w-6 h-[2px] transition-all duration-300 ${textColorClass} bg-current ${
                                isMenuOpen
                                    ? "rotate-45 translate-y-[1px]"
                                    : "-translate-y-1"
                            }`}
                        ></span>
                        <span
                            className={`block w-6 h-[2px] transition-all duration-300 ${textColorClass} bg-current ${
                                isMenuOpen
                                    ? "-rotate-45 -translate-y-[1px]"
                                    : "translate-y-1"
                            }`}
                        ></span>
                    </div>
                </button>

                {/* DESKTOP LINKS*/}
                <div
                    className={`hidden md:flex gap-8 items-center ${textColorClass}`}
                >
                    <a
                        style={{ "--delay": "80ms" }}
                        href="/tecnologia"
                        onClick={() => setActiveLink("/tecnologia")}
                        className={`text-base transition-colors duration-75 link-glow  ease-linear ${getLinkClasses(
                            "/tecnologia"
                        )}`}
                    >
                        Tecnologia
                    </a>
                    <a
                        style={{ "--delay": "80ms" }}
                        href="/sobre"
                        onClick={() => setActiveLink("/sobre")}
                        className={`text-base transition-colors duration-75 link-glow  ease-linear ${getLinkClasses(
                            "/sobre"
                        )}`}
                    >
                        Sobre
                    </a>
                    <a
                        style={{ "--delay": "160ms" }}
                        href="/carreiras"
                        onClick={() => setActiveLink("/carreiras")}
                        className={`text-base transition-colors duration-75 link-glow ease-linear ${getLinkClasses("/carreiras")}`}
                    >
                        Carreiras
                    </a>
                    <ModalTrigger
                        modalContent={<SubscribeContent />}
                        modalProps={{
                            height: "60vh",
                            ariaLabel: "Assinar agora",
                        }}
                    >
                        <a
                            role="link"
                            href="/assinar"
                            className={`px-7 py-[3px] rounded-md  border transition-colors duration-150 ease-linear ${
                                isNavOverDark
                                    ? "bg-white text-black hover:bg-black hover:text-white"
                                    : "bg-black text-white border-black hover:bg-white hover:text-black"
                            }`}
                            style={{ willChange: "color, border-color" }}
                        >
                            Assinar
                        </a>
                    </ModalTrigger>
                </div>

                {/* MOBILE MENU OVERLAY */}
                {/* MOBILE MENU OVERLAY - Com o mesmo fundo do Nav */}
                <div
                    className={`
            fixed inset-0 h-screen w-screen transition-all duration-500 md:hidden flex flex-col items-center justify-center gap-8
            ${bgColorClassII}
            ${
                isMenuOpen
                    ? "opacity-100 visible"
                    : "opacity-0 invisible pointer-events-none"
            }
        `}
                >
                    <a
                        onClick={() => setIsMenuOpen(false)}
                        href="/tecnologia"
                        className={`text-2xl font-light ${textColorClass}`}
                    >
                        Tecnologia
                    </a>
                    <a
                        onClick={() => setIsMenuOpen(false)}
                        href="/sobre"
                        className={`text-2xl font-light ${textColorClass}`}
                    >
                        Sobre
                    </a>
                    <a
                        onClick={() => setIsMenuOpen(false)}
                        href="/carreiras"
                        className={`text-2xl font-light ${textColorClass}`}
                    >
                        Carreiras
                    </a>
                    <a
                        onClick={() => setIsMenuOpen(false)}
                        href="/subscribe"
                        className={`px-10 py-3 rounded-full text-xl ${
                            isNavOverDark
                                ? "bg-white text-black"
                                : "bg-black text-white"
                        }`}
                    >
                        Assinar
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
