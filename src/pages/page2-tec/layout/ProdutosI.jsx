import Card from "../../../components/Card";

function ProdutosI() {
    return (
        <section className="bg-black max-w-8xl py-20 mx-auto flex flex-col items-center ">
            <div className="grid grid-cols-2 gap-y-20 ">
                <div className="flex flex-col  px-50  py-60">
                    <Card
                        classNameBarraII="h-17"
                        classNameBaseII="mt-17 gap-8"
                        variant="white"
                        text="O CARRO AUTONO"
                        title="Com inovadora tecnologia de sensor habilitada pela percepção, o Autono é um veículo totalmente sem motorista criado para oferecer precisão e segurança. É a nova era da direção autônoma."
                    />
                </div>

                <div>
                    <img src="/public/car-produtoI.jpg" alt="car-produtoI" />
                </div>
                <div className=" text-white flex flex-col items-center">
                    <div className="flex flex-col gap-8">
                        <h2 className="text-xl max-w-md tracking-widest leading-relaxed">
                            TECNOLOGIA PARA HUMANOS
                        </h2>
                        <p className="text-base max-w-md tracking-widest leading-relaxed">
                            Somos mais do que uma fabricante de carros elétricos
                            — somos um time que acredita no ser humano, na sua
                            liberdade de ir e vir, no seu direito a conforto,
                            segurança e futuro limpo. Cada veículo que criamos
                            nasce da combinação de engenharia inteligente,
                            design humano e propósito: entregar mobilidade sem
                            ruído, sem poluição e com respeito à vida.
                        </p>
                    </div>
                </div>
                <div className=" text-white flex  flex-col items-center">
                    <div className="flex flex-col  gap-8">
                        <h2 className="text-xl max-w-md tracking-widest leading-relaxed">
                            BAIXAS EMISSÕES E EFICIÊNCIA
                        </h2>
                        <p className="text-base max-w-md tracking-widest leading-relaxed">
                            Acreditamos que mobilidade não precisa custar ao
                            planeta — por isso nossos carros elétricos nascem
                            com foco em emissões mínimas e eficiência real. Cada
                            veículo é projetado para usar energia da forma mais
                            inteligente possível, reduzindo drasticamente a
                            poluição do ar, melhorando a qualidade de vida nas
                            cidades e diminuindo nossa pegada de carbono.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProdutosI