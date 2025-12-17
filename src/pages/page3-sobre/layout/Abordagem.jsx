import Card from "../../../components/Card";
import ProjectImage from "../../../components/ProjectImage";

function Abordagem() {
    return (
        <section className="max-w-8xl border bg-white border-black mx-auto py-40 px-6 lg:px-9 flex flex-col items-center ">
            <div className="grid grid-cols-2 gap-y-20">
                <div className="flex flex-col  px-50  ">
                    <Card
                        classNameBarraII="h-17"
                        classNameBaseII="mt-17 gap-8"
                        variant="black"
                        text="NOSSA MISSÃO"
                        title="Revolucionar como
nos movemos"
                        text_2="Buscamos inovar a cada passo: com veículos 100% elétricos, infraestrutura moderna, recarga eficiente e sustentabilidade em cada parte do processo. Acreditamos que mover pessoas deve significar também preservar o planeta, reduzir emissões e garantir qualidade de vida às futuras gerações.

"
                        text_3="Nós acreditamos que cada viagem, cada trajeto, pode ser uma oportunidade de mudança — para o indivíduo, para a comunidade, para o planeta. Nosso compromisso é construir um transporte que faça sentido, que respeite o mundo e que leve as pessoas adiante com propósito."
                    />
                </div>
                <div className="flex flex-col  items-center ">
                    <ProjectImage
                        id="mulher-abordagem"
                        className="rounded-3xl  max-w-sm"
                    />
                </div>
            </div>
        </section>
    );
}

export default Abordagem;
