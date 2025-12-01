function Infrografico() {
    return (
        <section className="bg-white min-h-screen py-4 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-16 items-center">
                <div className="flex justify-center items-center w-full h-full ">
                    <img src="/public/braco-info.jpg" alt="infografico" />
                </div>
                <div className="flex flex-col gap-20">
                    <h2 className="text-black text-4xl leading-relaxed tracking-widest ">
                        Autono em números
                    </h2>
                    <div className="grid grid-cols-2 max-w-4xl gap-y-20 ">
                        <div className="flex flex-col gap-7">
                            <div className="flex">
                                <div className="h-full border-b-3 border-black opacity-100">
                                    {/* Usamos opacity-100 para que a parte grossa seja bem visível */}
                                    <h2 className="text-5xl leading-relaxed tracking-widest">
                                        2
                                    </h2>
                                </div>
                                <div className="h-full w-56 border-b border-black opacity-100">
                                    {/* Usamos opacity-100 para que a parte grossa seja bem visível */}
                                    <h2 className="text-5xl leading-relaxed tracking-widest">
                                        00
                                    </h2>
                                </div>
                            </div>

                            <p className="text-1xl leading-relaxed tracking-widest">
                                EMPREGADOS
                            </p>
                        </div>
                        <div className="flex flex-col gap-7">
                            <div className="flex">
                                <div className="h-full border-b-3 border-black opacity-100">
                                    {/* Usamos opacity-100 para que a parte grossa seja bem visível */}
                                    <h2 className="text-5xl leading-relaxed tracking-widest">
                                        5
                                    </h2>
                                </div>
                                <div className="h-full w-36 border-b border-black opacity-100">
                                    {/* Usamos opacity-100 para que a parte grossa seja bem visível */}
                                    <h2 className="text-5xl leading-relaxed tracking-widest">
                                        
                                    </h2>
                                </div>
                            </div>

                            <p className="text-1xl leading-relaxed tracking-widest">
                                EQUIPES
                            </p>
                        </div>
                        <div className="flex flex-col gap-7">
                            <div className="flex">
                                <div className="h-full border-b-3 border-black opacity-100">
                                    {/* Usamos opacity-100 para que a parte grossa seja bem visível */}
                                    <h2 className="text-5xl leading-relaxed tracking-widest">
                                        R
                                    </h2>
                                </div>
                                <div className="h-full w-56 border-b border-black opacity-100">
                                    {/* Usamos opacity-100 para que a parte grossa seja bem visível */}
                                    <h2 className="text-5xl leading-relaxed tracking-widest">
                                        $100M
                                    </h2>
                                </div>
                            </div>

                            <p className="text-1xl leading-relaxed tracking-widest">
                                EM CAPITAL
                            </p>
                        </div>
                        <div className="flex flex-col gap-7">
                            <div className="flex">
                                <div className="h-full border-b-3 border-black opacity-100">
                                    {/* Usamos opacity-100 para que a parte grossa seja bem visível */}
                                    <h2 className="text-5xl leading-relaxed tracking-widest">
                                        3
                                    </h2>
                                </div>
                                <div className="h-full w-36 border-b border-black opacity-100">
                                    {/* Usamos opacity-100 para que a parte grossa seja bem visível */}
                                    <h2 className="text-5xl leading-relaxed tracking-widest">
                                        26
                                    </h2>
                                </div>
                            </div>

                            <p className="text-1xl leading-relaxed tracking-widest">
                                PARCEIROS
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Infrografico