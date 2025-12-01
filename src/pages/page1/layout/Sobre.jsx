function Sobre() {
    return (
        <section className="sobre  bg-black  flex justify-center items-center min-h-screen py-20">
            <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-12 items-center px-6">
                <div className="w-full md:w-1/2  flex justify-end">

                    <div className="flex flex-col gap-10">
                        <div>
                            <p className=" text-white text-sm  tracking-widest uppercase opacity-75 max-w-sm">
                                VISÃO
                            </p>
                        </div>
                        <div>
                            <h2 className="text-white text-3xl tracking-widest max-w-lg  leading-snug">
                                Uma revolução no modo como pensamos sobre carros
                            </h2>
                        </div>
                        <div>
                            <p className="text-white text-base max-w-md leading-relaxed">
                                Sou um parágrafo. Aqui você pode adicionar e
                                editar seu próprio texto. É fácil, basta clicar
                                em "Editar texto" ou clicar duas vezes sobre
                                mim. Você também pode alterar a fonte e mais.
                                Sou um ótimo lugar para você compartilhar a sua
                                história com os visitantes.
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" w-full md:w-1/2 mt-8 md:mt-0">
                    <img
                        src="/public/car-sobre.jpg"
                        alt="car-sobre"
                        className="w-full h-auto object-cover rounded-lg shadow-2xl"
                    />
                </div>
            </div>
        </section>
    );
}

export default Sobre;
