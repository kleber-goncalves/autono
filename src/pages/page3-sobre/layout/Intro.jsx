import Intro_cmp from "../../../components/Intro_cmp";

function Intro() {
    return (
        <section className="max-w-8xl mx-auto bg-white px-6 lg:px-9 py-24 flex flex-col items-center ">
            <Intro_cmp
                className="gap-15"
                classNameTitle="text-7xl"
                classNameText="tracking-wide max-w-3xl"
                classNameTextI="hidden"
                titulo="NOSSA HISTÓRIA"
                texto_2="Desde o primeiro instante, nossa jornada foi movida por sonho, propósito e a certeza de que o futuro da mobilidade deveria ser mais limpo, inteligente e humano. Tudo começou com uma visão: reimaginar o transporte, substituindo poluição e ruído por energia limpa, silêncio e eficiência — acreditando que cada trajeto poderia ser uma escolha pelo planeta"
            />
        </section>
    );
}

export default Intro;
