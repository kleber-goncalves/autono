import Card from "../../../components/Card";
import { IMAGES } from "../../../data/imagesSupaBase";

function Abordagem() {
    return (
        <section className="max-w-8xl md:border border-t  bg-white border-black mx-auto py-10 md:py-40 px-6 xl:px-9 flex flex-col items-center ">
            <div className="xl:grid xl:grid-cols-2 flex flex-col-reverse items-center xl:items-start gap-y-20 xl:gap-x-23 2xl:gap-x-0">
                <div className="flex flex-col 2xl:px-50">
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
                <div className="flex flex-col md:items-center max-w-xs lg:max-w-none p-3 md:p-0">
                    <img
                        src={IMAGES.PAGE3.MULHER_ABORDAGEM}
                        alt="mulher abordagem"
                        loading="lazy"
                        className="rounded-3xl md:max-w-xs lg:max-w-sm xl:max-w-2xl"
                    />
                </div>
            </div>
        </section>
    );
}

export default Abordagem;
