import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

function Rodape() {
    // Estados para gerenciar o formulário
    const [email, setEmail] = useState("");
    const [feedbackMessage, setFeedbackMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [activeLink, setActiveLink] = useState(
        typeof window !== "undefined" ? window.location.pathname : ""
    );

    // Expressão regular para validação de e-mail
    const emailRegex = /^.+@.+\.[a-zA-Z]{2,63}$/;

    // Função para lidar com a submissão do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        setFeedbackMessage(""); // Limpa mensagens anteriores
        setIsError(false);

        // Lógica de Validação
        if (email.trim() === "") {
            setFeedbackMessage("O campo Email é obrigatório.");
            setIsError(true);
            return;
        }

        if (!emailRegex.test(email)) {
            setFeedbackMessage(
                "Por favor, insira um endereço de e-mail válido."
            );
            setIsError(true);
            return;
        }

        // Simulação de envio de e-mail (chame API real aqui)
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);

            // Simulação de sucesso (pode ser ajustado)
            const isSubmissionSuccessful = Math.random() > 0.1; // 90% de chance de sucesso simulado

            if (isSubmissionSuccessful) {
                setFeedbackMessage(
                    "E-mail enviado com sucesso! Obrigado por assinar."
                );
                setIsError(false);
                setEmail(""); // Limpa o campo após o sucesso
            } else {
                setFeedbackMessage(
                    "Erro de envio do e-mail. Por favor, tente novamente."
                );
                setIsError(true);
            }
        }, 1500); // Simula um atraso de rede
    };

    const getLinkClasses = (path) => {
        const isActive = activeLink === path;
        return isActive
            ? "text-black font-medium nav-active"
            : "text-gray-500 hover:text-black hover:font-medium";
    };

    return (
        <footer className="bg-white text-black sticky py-12 md:py-28 ">
            <section className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between flex-wrap gap-10 lg:gap-0">
                <div className="flex flex-col gap-6 w-full lg:w-1/2">
                    <h2 className="tracking-widest text-2xl font-bold mb-2">
                        AUTONO
                    </h2>
                    <div className="flex flex-col md:flex-row gap-10 md:gap-40">
                        <div className="flex flex-col gap-4 xl:gap-4 ">
                            <a
                                style={{ "--delay": "80ms" }}
                                href="/tecnologia"
                                onClick={() => setActiveLink("/tecnologia")}
                                className={`link md:link-glow ease-linear w-fit md:w-none ${getLinkClasses(
                                    "/tecnologia"
                                )}`}
                            >
                                Tecnologia
                            </a>
                            <a
                                style={{ "--delay": "80ms" }}
                                href="/sobre"
                                onClick={() => setActiveLink("/sobre")}
                                className={`link md:link-glow ease-linear w-fit ${getLinkClasses(
                                    "/sobre"
                                )}`}
                            >
                                Sobre
                            </a>
                            <a
                                style={{ "--delay": "160ms" }}
                                href="/carreiras"
                                onClick={() => setActiveLink("/carreiras")}
                                className={`link md:link-glow ease-linear w-fit ${getLinkClasses(
                                    "/carreiras"
                                )}`}
                            >
                                Carreiras
                            </a>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p>Tel: (11) 3456-7890</p>
                            <p>Email: info@meusite.com</p>
                            <div className="mt-2">
                                <p>Av. Bernardino de</p>
                                <p>Campos, 98, Centro</p>
                                <p>São Paulo - SP, 12345-678</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* LADO DIREITO */}
                <div className="flex flex-col w-full gap-9 lg:w-1/3">
                    <div>
                        <h2 className="tracking-widest text-2xl font-bold mb-4">
                            ASSINAR
                        </h2>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="tracking-widest mb-4 text-sm md:text-base">
                            Receba notícias e atualizações sobre o Autono.
                        </p>

                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-3 w-full"
                        >
                            <label
                                htmlFor="email"
                                className="font-medium sr-only"
                            >
                                Email
                            </label>
                            <div className="flex flex-row w-full">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={isLoading}
                                    className={`hover:border hover:border-black border ${
                                        isError && feedbackMessage
                                            ? "border-black bg-red-100"
                                            : "border-black"
                                    } rounded-l-lg p-3 w-full focus:outline-none focus:ring-1 ${
                                        isError && feedbackMessage
                                            ? "focus:ring-black bg-red-100"
                                            : "focus:ring-black"
                                    } transition-colors`}
                                    placeholder="seu.email@exemplo.com"
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="bg-black cursor-pointer rounded-r-lg text-white px-4 py-2 hover:bg-gray-800 transition disabled:bg-gray-400 whitespace-nowrap"
                                >
                                    {isLoading ? "Enviando..." : "Assinar"}
                                </button>
                            </div>

                            {/* Mensagem de Feedback */}
                            {feedbackMessage && (
                                <p
                                    className={`mt-1 text-sm font-semibold ${
                                        isError
                                            ? "text-red-600"
                                            : "text-green-600"
                                    }`}
                                >
                                    {feedbackMessage}
                                </p>
                            )}
                        </form>
                    </div>
                </div>

                {/* RODAPÉ INFERIOR: Copyright e Redes Sociais */}

                <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center mt-10 md:mt-14 gap-6 md:gap-0 border-t border-transparent pt-4 lg:pt-0">
                    <div className="text-center md:text-left">
                        <p className="text-sm text-gray-600">
                            &copy; {new Date().getFullYear()} Autono. Todos os
                            direitos reservados.
                        </p>
                    </div>

                    <div className="flex space-x-5 text-2xl">
                        <a
                            href="https://www.instagram.com/kleber_goncalves.s/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram da Autono"
                            className="text-black hover:text-pink-600 transition transform hover:scale-110"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/kleber-goncalve-s/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn da Autono"
                            className="text-black hover:text-blue-700 transition transform hover:scale-110"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="https://github.com/kleber-goncalves"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub da Autono"
                            className="text-black hover:text-gray-700 transition transform hover:scale-110"
                        >
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Rodape;
