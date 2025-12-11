import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

function Rodape() {
    // 1. Estados para gerenciar o formulário
    const [email, setEmail] = useState("");
    const [feedbackMessage, setFeedbackMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Expressão regular para validação de e-mail
    const emailRegex = /^.+@.+\.[a-zA-Z]{2,63}$/;

    // 2. Função para lidar com a submissão do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        setFeedbackMessage(""); // Limpa mensagens anteriores
        setIsError(false);

        // 3. Lógica de Validação
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

        // Simulação de envio de e-mail (chame sua API real aqui)
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

    return (
        <footer className="bg-white sticky  text-black  py-28">
            <section className="max-w-7xl mx-auto px-4 flex justify-between flex-wrap">
                <div className="flex flex-col gap-6  w-full lg:w-1/2">
                    <h2 className="tracking-widest text-2xl font-bold mb-4">
                        AUTONO
                    </h2>
                    <div className="flex flex-row gap-40">
                        <div className="flex flex-col gap-2">
                            <p className="tracking-widest  mb-1">Tecnologia</p>
                            <p>Sobre</p>
                            <p>Carreiras</p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p>Tel: (11) 3456-7890</p>
                            <p>Email: info@meusite.com</p>
                            <div>
                                <p className="mt-2">Av. Bernardino de</p>
                                <p>Campos, 98, Centro</p>
                                <p>São Paulo - SP, 12345-678</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mb-8 w-full gap-5 lg:w-1/3">
                    <div>
                        <h2 className="tracking-widest text-2xl font-bold mb-4">
                            ASSINAR
                        </h2>
                    </div>

                    <div className="flex flex-col gap-2 ">
                        <p className="tracking-widest mb-4">
                            Receba notícias e atualizações sobre o Autono.
                        </p>

                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-3 w-full"
                        >
                            <label htmlFor="email" className="font-medium">
                                Email *
                            </label>
                            <div className="flex flex-row w-full">
                                <input
                                    type="email" // Alterado para type="email"
                                    id="email" // Alterado de "username" para "email"
                                    name="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={isLoading}
                                    className={`hover:border hover:border-ring-black border ${
                                        isError && feedbackMessage
                                            ? "border-ring-black bg-red-300"
                                            : "border-black"
                                    } rounded-l-lg p-3 w-full focus:outline-none focus:ring ${
                                        isError && feedbackMessage
                                            ? "focus:ring-black bg-red-300"
                                            : "focus:ring-black"
                                    }`}
                                    placeholder="seu.email@exemplo.com" // Adicionado placeholder
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="bg-black rounded-r-lg text-white px-4 py-2 hover:bg-gray-800 transition disabled:bg-gray-400"
                                >
                                    {isLoading ? "Enviando..." : "Assinar"}
                                </button>
                            </div>

                            {/* Mensagem de Feedback */}
                            {feedbackMessage && (
                                <p
                                    className={`mt-2 text-sm font-semibold ${
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

                <div className="mb-4 md: mt-14">
                    <p className="text-sm text-gray-600">
                        &copy; {new Date().getFullYear()} Autono. Todos os
                        direitos reservados.
                    </p>
                </div>

                <div className="flex space-x-5  mt-14 text-xl">
                    <a
                        href="https://www.instagram.com/kleber_goncalves.s/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram da Autono"
                        className="text-black hover:text-pink-600 transition"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/kleber-goncalve-s/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn da Autono"
                        className="text-black hover:text-blue-700 transition"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://github.com/kleber-goncalves"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub da Autono"
                        className="text-black hover:text-gray-700 transition"
                    >
                        <FaGithub />
                    </a>
                </div>
            </section>
        </footer>
    );
}

export default Rodape;
