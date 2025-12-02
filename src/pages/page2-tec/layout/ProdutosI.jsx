import Card from "../../../components/Card";

function ProdutosI() {
    return (
        <section className="bg-black max-w-8xl py-20 mx-auto flex flex-col items-center ">
            <div className="grid grid-cols-2 gap-y-20 ">
                <div className="flex flex-col  px-50  py-60">
                    <Card 
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
                            Sou um parágrafo. Aqui você pode adicionar e editar
                            seu texto. É fácil, basta clicar em "Editar texto"
                            ou clicar duas vezes sobre mim. Você também pode
                            alterar a fonte e mais. Sou um ótimo lugar para você
                            compartilhar a sua história com os visitantes.
                        </p>
                    </div>
                </div>
                <div className=" text-white flex  flex-col items-center">
                    <div className="flex flex-col  gap-8">
                        <h2 className="text-xl max-w-md tracking-widest leading-relaxed">
                            BAIXAS EMISSÕES E EFICIÊNCIA{" "}
                        </h2>
                        <p className="text-base max-w-md tracking-widest leading-relaxed">
                            Sou um parágrafo. Aqui você pode adicionar e editar
                            seu texto. É fácil, basta clicar em "Editar texto"
                            ou clicar duas vezes sobre mim. Você também pode
                            alterar a fonte e mais. Sou um ótimo lugar para você
                            compartilhar a sua história com os visitantes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProdutosI