import { TfiArrowRight } from "react-icons/tfi";

function Sobreii() {
    return (
        <section className="bg-white min-h-screen pl-58 py-34 overflow-hidden bg-[url('/public/fundo-sobreii.jpg')] bg-fixed bg-cover bg-center">
            <div className="flex bg-black max-w-lg rounded-2xl px-6 py-10  flex-col pl-10 ">
                <div className="top-0 left-0 h-full w-full border-l-4 border-white opacity-75">
                    <div className="flex  text-white px-6 flex-col pl-10 gap-10">
                        <p className="text-sm tracking-widest uppercase">
                            POR QUE AUTONO
                        </p>
                        <h2 className=" text-3xl leading-relaxed tracking-widest ">
                            Uma abordagem
                            <br />
                            diferente, com um novo método de produção.
                        </h2>
                        <p className="text-base max-w-md tracking-widest leading-relaxed">
                            Sou um parágrafo. Aqui você pode adicionar e editar
                            seu próprio texto. É fácil, basta clicar em "Editar
                            texto" ou clicar duas vezes sobre mim. Você também
                            pode alterar a fonte e mais. Sou um ótimo lugar para
                            você compartilhar a sua história com os visitantes.
                        </p>
                        <button
                            className="bg-black flex-row  text-white  flex border border-white cursor-pointer
                                        rounded-lg w-fit max-w-xs items-center gap-2 px-8 py-3 tracking-wider hover:bg-white hover:border-black hover:text-black transition"
                        >
                            <p className=" cursor-pointer">Saiba Mais</p>
                            <div className="cursor-pointer text-2xl pl-4 border-l  border-black">
                                <TfiArrowRight />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sobreii;
