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
                            Em um mundo onde carros já não são simples máquinas,
                            mas computadores sobre rodas, nossa empresa garante
                            que seu volante também represente segurança digital
                            e confiança real. Nosso painel integrado une
                            conectividade, telemetria e controle — e é protegido
                            por camadas robustas de cibersegurança, para que
                            você dirija com tranquilidade, sem medo de invasões,
                            roubo de dados ou manipulação indevida de sistemas.
                        </p>
                    </div>
                </div>
                <div className=" text-black flex  flex-col items-center">
                    <div className="flex flex-col  gap-8">
                        <h2 className="text-xl max-w-md tracking-widest leading-relaxed">
                            INFORMAÇÕES EM TEMPO REAL
                        </h2>
                        <p className="text-base max-w-md tracking-widest leading-relaxed">
                            Nossa visão vai além de mover pessoas — queremos
                            entregar clareza, controle e segurança desde o
                            primeiro segundo da viagem. Por isso, todos os
                            nossos veículos contam com um painel digital
                            inteligente, que exibe — em tempo real — dados
                            essenciais como nível de bateria, autonomia
                            restante, consumo de energia, estado do sistema,
                            localização, navegação e status dos sensores de
                            segurança
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProdutosII;
