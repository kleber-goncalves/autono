import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

function Rodape() {
    return (
        <footer className="bg-white text-black py-10">
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

                        <form className="flex flex-col gap-3 w-full">
                            <label htmlFor="email" className="">
                                Email *
                            </label>
                            <div className="flex flex-row w-full">
                                <input
                                    type="username"
                                    id="username"
                                    autoComplete="email"
                                    className="border border-black rounded-l-lg p-3 w-full focus:outline-none focus:bg-gray-50"
                                    placeholder=""
                                />
                                <button className="bg-black rounded-r-lg text-white px-4 py-2 hover:bg-gray-800 transition">
                                    Assinar
                                </button>
                            </div>
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
