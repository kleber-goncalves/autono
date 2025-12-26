import Card from "../../../components/Card";
import ProjectImage from "../../../components/ProjectImage";

function Abordagem() {
    return (
        <section className="max-w-8xl md:border border-t  bg-white border-black mx-auto md:py-40 py-10 px-6 lg:px-9 flex flex-col items-center ">
            <div className="md:grid md:grid-cols-2 flex flex-col-reverse items-center md:items-start gap-y-20">
                <div className="flex flex-col  md:px-50  ">
                    <Card
                        classNameBarraII="md:h-17 "
                        classNameBaseII="md:mt-17 mt-10  gap-8"
                        variant="black"
                        text="NOSSA MISSÃO"
                        title="Revolucionar como
nos movemos"
                        text_2="Buscamos inovar a cada passo: com veículos 100% elétricos, infraestrutura moderna, recarga eficiente e sustentabilidade em cada parte do processo. Acreditamos que mover pessoas deve significar também preservar o planeta, reduzir emissões e garantir qualidade de vida às futuras gerações.

"
                        text_3="Nós acreditamos que cada viagem, cada trajeto, pode ser uma oportunidade de mudança — para o indivíduo, para a comunidade, para o planeta. Nosso compromisso é construir um transporte que faça sentido, que respeite o mundo e que leve as pessoas adiante com propósito."
                    />
                </div>
                <div className="flex flex-col md:items-center max-w-xs md:max-w-none p-3 md:p-0">
                    <ProjectImage
                        id="mulher-abordagem"
                        className="rounded-3xl md:max-w-sm"
                    />
                </div>
            </div>
        </section>
    );
}

export default Abordagem;
