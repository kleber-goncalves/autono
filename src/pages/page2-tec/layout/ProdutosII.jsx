import Card from "../../../components/Card";
import { IMAGES } from "../../../data/imagesSupaBase";
import { Slide } from "react-awesome-reveal";

function ProdutosII() {
    return (
        <section className="bg-white max-w-8xl pb-30 pt-20 md:pt-0 mx-auto border-b border-black flex flex-col items-center ">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-y-10 ">
                <div className="flex flex-col px-7 xl:px-20 2xl:px-50 md:py-36 xl:py-60">
                    <Card
                        classNameBaseII="text-xs max-w-xs md:max-w-sm gap-8"
                        classNameTitle="max-w-sm"
                        variant="black"
                        text="PRODUTOS DIGITAIS AUTONO
"
                        title="Criamos um aplicativo para que cada veículo dirija com autonomia e tome decisões baseadas em percepção situacional e informações ao vivo.

"
                    />
                </div>

                <div className="flex flex-col md:ml-10 xl:max-w-2xl p-7 md:p-0 ">
                    <img
                        src={IMAGES.PAGE2.PAINEL_PRODUTOII}
                        alt="painel produto II"
                        loading="lazy"
                    />
                </div>
                <div className=" text-black flex flex-col px-7 xl:px-0  pb-8  items-center">
                    <Slide direction="up" triggerOnce duration={1600}>
                        <div className="flex flex-col md:gap-8 gap-5">
                            <h2 className="text-sm md:text-xl xl:max-w-md tracking-widest leading-relaxed">
                                CIBERSEGURANÇA AVANÇADA
                            </h2>
                            <p className="text-xs md:text-base xl:max-w-md tracking-widest leading-relaxed">
                                Em um mundo onde carros já não são simples
                                máquinas, mas computadores sobre rodas, nossa
                                empresa garante que seu volante também
                                represente segurança digital e confiança real.
                                Nosso painel integrado une conectividade,
                                telemetria e controle — e é protegido por
                                camadas robustas de cibersegurança, para que
                                você dirija com tranquilidade, sem medo de
                                invasões, roubo de dados ou manipulação indevida
                                de sistemas.
                            </p>
                        </div>
                    </Slide>
                </div>
                <div className=" text-black flex  flex-col px-7 xl:px-0 items-center">
                    <Slide direction="up" triggerOnce duration={1600}>
                        <div className="flex flex-col md:gap-8 gap-5">
                            <h2 className="text-sm md:text-xl xl:max-w-md tracking-widest leading-relaxed">
                                INFORMAÇÕES EM TEMPO REAL
                            </h2>
                            <p className="text-xs md:text-base xl:max-w-md tracking-widest leading-relaxed">
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
                    </Slide>
                </div>
            </div>
        </section>
    );
}

export default ProdutosII;
