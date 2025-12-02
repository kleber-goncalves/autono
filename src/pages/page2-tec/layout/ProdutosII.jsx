import Card from "../../../components/Card";

function ProdutosII() {
    return (
        <section className="bg-white max-w-8xl  py-10 pb-30 mx-auto border-b border-black flex flex-col items-center ">
            <div className="grid grid-cols-2 gap-y-10 ">
                <div className="flex flex-col   px-50  py-60">
                    <Card
                        variant="black"
                        text="PRODUTOS DIGITAIS AUTONO
"
                        title="Criamos um aplicativo para que cada veículo dirija com autonomia e tome decisões baseadas em percepção situacional e informações ao vivo.

"
                    />
                </div>

                <div className="flex flex-col ml-10 max-w-2xl ">
                    <img
                        src="/public/paineil-produtoII.jpg"
                        alt="paineil-produtoII"
                    />
                </div>
                <div className=" text-black flex flex-col items-center">
                    <div className="flex flex-col gap-8">
                        <h2 className="text-xl max-w-md tracking-widest leading-relaxed">
                            CIBERSEGURANÇA AVANÇADA
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
                <div className=" text-black flex  flex-col items-center">
                    <div className="flex flex-col  gap-8">
                        <h2 className="text-xl max-w-md tracking-widest leading-relaxed">
                            INFORMAÇÕES EM TEMPO REAL
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

export default ProdutosII;
