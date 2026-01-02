import Card from "../../../components/Card";
import ProjectImage from "../../../components/ProjectImage";
import { Slide } from "react-awesome-reveal";



function ProdutosI() {
    return (
        <section className="bg-black max-w-8xl py-20 mx-auto flex flex-col items-center ">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-y-20 ">
                <div className="flex flex-col px-7 2xl:px-50 2xl:py-60 lg:pt-32 ">
                    <Card
                        classNameBaseII="md:mt-17 mt-8 text-xs md:max-w-sm max-w-xs gap-8"
                        classNameTitle="max-w-sm"
                        variant="white"
                        text="O CARRO AUTONO"
                        title="Com inovadora tecnologia de sensor habilitada pela percepção, o Autono é um veículo totalmente sem motorista criado para oferecer precisão e segurança. É a nova era da direção autônoma."
                    />
                </div>

                <div className="">
                    <ProjectImage id="car-produtoI" />
                </div>
                <div className=" text-white flex flex-col px-7 xl:px-0 items-center">
                    <Slide direction="up" triggerOnce duration={1600}>
                        <div className="flex flex-col gap-8">
                            <h2 className="text-sm md:text-xl max-w-md tracking-widest leading-relaxed">
                                TECNOLOGIA PARA HUMANOS
                            </h2>

                            <p className="text-xs md:text-base xl:max-w-md tracking-widest leading-relaxed">
                                Somos mais do que uma fabricante de carros
                                elétricos — somos um time que acredita no ser
                                humano, na sua liberdade de ir e vir, no seu
                                direito a conforto, segurança e futuro limpo.
                                Cada veículo que criamos nasce da combinação de
                                engenharia inteligente, design humano e
                                propósito: entregar mobilidade sem ruído, sem
                                poluição e com respeito à vida.
                            </p>
                        </div>
                    </Slide>
                </div>
                <div className=" text-white flex px-7 xl:px-0  flex-col items-center">
                    <Slide direction="up" triggerOnce duration={1600}>
                        <div className="flex flex-col  gap-8">
                            <h2 className="text-sm md:text-xl xl:max-w-md tracking-widest leading-relaxed">
                                BAIXAS EMISSÕES E EFICIÊNCIA
                            </h2>
                            <p className="text-xs md:text-base xl:max-w-md tracking-widest leading-relaxed">
                                Acreditamos que mobilidade não precisa custar ao
                                planeta — por isso nossos carros elétricos
                                nascem com foco em emissões mínimas e eficiência
                                real. Cada veículo é projetado para usar energia
                                da forma mais inteligente possível, reduzindo
                                drasticamente a poluição do ar, melhorando a
                                qualidade de vida nas cidades e diminuindo nossa
                                pegada de carbono.
                            </p>
                        </div>
                    </Slide>
                </div>
            </div>
        </section>
    );
}

export default ProdutosI