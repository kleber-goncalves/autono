function Parceiros() {
    return (
        <section className="bg-black max-h-screen border-b-2 border-white pl-50 py-37 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 pr-40  gap-16">
                <div className="flex max-w-lg flex-col ">
                    <div className="top-0 left-0 h-full w-full border-l-4 border-white">
                        <div className="flex min-w-dvw text-white px-9 flex-col pl-10 gap-14">
                            <p className="text-lg tracking-widest uppercase">
                                INDÚSTRIA
                            </p>

                            <h2 className="text-5xl leading-relaxed tracking-widest ">
                                Nossos
                                <br />
                                parceiros
                            </h2>

                            <p className="text-lg text-white max-w-md tracking-widest leading-relaxed">
                                Clique aqui para adicionar e personalizar seu
                                texto. Este é um ótimo espaço para contar sobre
                                a sua empresa e fazer com que os visitantes
                                saibam mais sobre sua história, sua equipe ou
                                qualquer outra informação que você desejar
                                compartilhar. É fácil, clique em “Editar texto”
                                para começar.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-30 items-center justify-items-center">
                    <div className="flex flex-col gap-3 items-center">
                        <img
                            src="/public/TransportX-parceiros.png"
                            alt="TRANSPORTEX      

"
                            className="w-4/6"
                        />
                        <h2 className="text-white text-xl text-center tracking-widest">
                            TRANSPORTE X
                        </h2>
                    </div>
                    <div className="flex flex-col gap-13 items-center">
                        <img
                            src="/public/IDISoftware-parceiros.png"
                            alt="TRANSPORTEX      

"
                            className="w-2/4 flex pt-4"
                        />
                        <h2 className="text-white text-center  text-xl tracking-widest">
                            IDI SOFTWARE
                        </h2>
                    </div>
                    <div className="flex flex-col gap-9 items-center">
                        <img
                            src="/public/ICars-parceiros.png"
                            alt="TRANSPORTEX      

"
                            className="w-3/6"
                        />
                        <h2 className="text-white text-center text-xl tracking-widest">
                            IMAGINE CARROS
                        </h2>
                    </div>
                    <div className="flex flex-col  items-center">
                        <img
                            src="/public/Tri-Nex-parceiro.png"
                            alt="TRANSPORTEX      

"
                            className="w-8/6 flex pb-3"
                        />
                        <h2 className="text-white relative top-6 text-center text-xl tracking-widest">
                            TRI-NEX
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Parceiros;
