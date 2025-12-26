import Card from "../../../components/Card";
import { Fade } from "react-awesome-reveal";


function Sobreii() {
    return (
        <section className="bg-white min-h-screen md:pl-58 px-6 py-34 overflow-hidden bg-[url('/src/assets/fundo-sobreii.jpg')] bg-fixed bg-cover bg-center">
            <Fade duration={1300} triggerOnce>
                <div className="flex item bg-black max-w-lg rounded-2xl px-6 py-10  flex-col md:pl-10 ">
                    <Card
                        classNameBaseII="md:mt-17 mt-10 max-w-sm md:gap-8"
                        classNameTitle="max-w-sm md:mt-8 mt-4"
                        classNameButton="mt-8"
                        variant="white"
                        text="POR QUE AUTONO"
                        title="Uma abordagem diferente, com um novo método de produção."
                        text_2="Somos uma empresa que escolheu trilhar um caminho novo na mobilidade: escolhemos reinventar a produção, unindo inovação, sustentabilidade e excelência técnica. Nosso método não segue fórmulas prontas — ele nasce da convicção de que cada detalhe importa: da concepção à montagem, do design à entrega, cada etapa é pensada para gerar valor real ao motorista e ao planeta. Nós produzimos com propósito, consciente do impacto, comprometidos com qualidade, eficiência e futuro."
                        text_button="Saiba mais"
                        href="/sobre"
                    />
                </div>
            </Fade>
        </section>
    );
}

export default Sobreii;
