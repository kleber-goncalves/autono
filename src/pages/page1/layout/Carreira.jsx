import { TfiArrowRight } from "react-icons/tfi";

function Carreira() {
    return (
        <section className="bg-black border-b-2 border-white py-37 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-row items-stretch gap-x-80">
                    <div className="flex max-w-lg flex-col">
                        <div className="border-l-2 border-white">
                            <div className="flex text-white px-9 py-10 flex-col pl-10 gap-17">
                                <p className="text-lg tracking-widest uppercase">
                                    CARREIRAS
                                </p>
                                <h2 className="text-3xl leading-relaxed tracking-widest ">
                                    Procuramos pessoas
                                    <br />
                                    talentosas e inovativas para o nosso time.
                                    Veja as vagas e envie seu CV.
                                </h2>
                                <button
                                    className="bg-black text-white flex border border-white cursor-pointer
                                                rounded-lg w-fit max-w-xs items-center gap-2 px-8 py-3 tracking-wider hover:bg-white hover:border-black hover:text-black transition"
                                >
                                    <p className="text-2xl cursor-pointer">
                                        Vagas
                                    </p>
                                    <div className="cursor-pointer text-2xl pl-4 border-l border-white h-full flex items-center">
                                        <TfiArrowRight />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex max-w-xl text-white text-xl flex-col rounded-3xl border-2 border-white">
                        <div className="flex max-w-2xl flex-col">
                            <div className="flex text-white px-9 py-10 flex-col pl-10 gap-10">
                                <h2 className="text-3xl leading-relaxed tracking-widest ">
                                    ENGENHEIRO ELÉTRICO
                                </h2>
                                
                                    <p className="text-lg tracking-widest uppercase">
                                        Curitiba, PR
                                    </p>
                                    <p className=" text-white max-w-3xl text-lg tracking-widest leading-relaxed">
                                        Sou um parágrafo. Aqui você pode
                                        adicionar seu texto. É fácil, basta
                                        clicar em "Editar texto" ou clicar duas
                                        vezes sobre mim para editar o conteúdo,
                                        a fonte e mais.
                                    </p>
                                

                                <button
                                    className="bg-black text-white flex border border-white cursor-pointer
                                                rounded-lg w-fit max-w-xs items-center gap-2 px-8 py-3 tracking-wider hover:bg-white hover:border-black hover:text-black transition"
                                >
                                    <p className="text-2xl cursor-pointer">
                                        Candidatar
                                    </p>
                                    <div className="cursor-pointer text-2xl pl-4 border-l border-white h-full flex items-center">
                                        <TfiArrowRight />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Carreira;
