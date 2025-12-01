import { TfiArrowRight } from "react-icons/tfi";

function Servicos() {
    return (
        <section className="bg-white min-h-screen py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="relative mb-24 pl-10">
                    <div className="absolute top-0 left-0 h-full w-20 border-l-4 border-black opacity-75"></div>

                    <div className="flex flex-col gap-4">
                        <p className="text-black text-sm tracking-widest uppercase opacity-75">
                            Serviços
                        </p>
                        <h2 className="text-black text-2xl tracking-widest max-w-md leading-10">
                            Entregamos produtos e serviços incríveis no mundo
                            todo
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2  gap-16 items-center">
                    <div className="flex flex-col pl-10 gap-8">
                        <h2 className="text-black text-4xl leading-relaxed tracking-widest ">
                            DIREÇÃO
                            <br />
                            AUTÔNOMA
                        </h2>
                        <p className="text-black text-base max-w-md leading-relaxed">
                            Sou um parágrafo. Aqui você pode adicionar e editar
                            seu próprio texto. É fácil, basta clicar em "Editar
                            texto" ou clicar duas vezes sobre mim.
                        </p>

                        <button
                            className="bg-white text-black flex-row flex border border-black cursor-pointer
                            rounded-lg w-fit max-w-xs items-center gap-2 px-8 py-3 tracking-wider hover:bg-black hover:border-white hover:text-white transition"
                        >
                            <p className=" cursor-pointer">Saiba Mais</p>
                            <div className="cursor-pointer text-2xl pl-4 border-l  border-black">
                                <TfiArrowRight />
                            </div>
                        </button>
                    </div>
                    <div className="pr-4 relative w-full">
                        <img
                            src="/public/car-servico-1.jpg"
                            alt="Carro Serviço"
                            className="w-full h-auto object-cover "
                        />
                    </div>
                    <div className="relative w-full">
                        <img
                            src="/public/velocimetro-servico.jpg"
                            alt="Carro Serviço"
                            className="w-full h-auto object-cover "
                        />
                    </div>

                    <div className="pl-20 flex flex-col gap-8">
                        <h2 className="text-black text-4xl leading-relaxed tracking-widest">
                            INFORMAÇÕES
                            <br />
                            AO VIVO
                        </h2>
                        <p className="text-black text-base max-w-md leading-relaxed">
                            Sou um parágrafo. Aqui você pode adicionar e editar
                            seu próprio texto. É fácil, basta clicar em "Editar
                            texto" ou clicar duas vezes sobre mim.
                        </p>

                        <button
                            className="bg-white text-black flex-row flex border border-black cursor-pointer
                            rounded-lg w-fit max-w-xs items-center gap-2 px-8 py-3 tracking-wider hover:bg-black hover:border-white hover:text-white transition"
                        >
                            <p className=" cursor-pointer">Saiba Mais</p>
                            <div className="cursor-pointer text-2xl pl-4 border-l  border-black">
                                <TfiArrowRight />
                            </div>
                        </button>
                    </div>
                    <div className="flex flex-col pl-10 gap-8">
                        <h2 className="text-black text-4xl leading-relaxed tracking-widest ">
                            PERCEPÇÃO
                            <br />
                            ATIVADA
                        </h2>
                        <p className="text-black text-base max-w-md leading-relaxed">
                            Sou um parágrafo. Aqui você pode adicionar e editar
                            seu próprio texto. É fácil, basta clicar em "Editar
                            texto" ou clicar duas vezes sobre mim.
                        </p>
                        <button
                            className="bg-white text-black flex-row flex border border-black cursor-pointer
                            rounded-lg w-fit max-w-xs items-center gap-2 px-8 py-3 tracking-wider hover:bg-black hover:border-white hover:text-white transition"
                        >
                            <p className=" cursor-pointer">Saiba Mais</p>
                            <div className="cursor-pointer text-2xl pl-4 border-l  border-black">
                                <TfiArrowRight />
                            </div>
                        </button>
                    </div>
                    <div className="pr-4 relative w-full">
                        <img
                            src="/public/car-servico-2.jpg"
                            alt="Carro Serviço"
                            className="w-full h-auto object-cover "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Servicos;
