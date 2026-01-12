import Intro_cmp from "../../../../components/Intro_cmp";

function Intro() {
    return (
        <section className="max-w-8xl mx-auto bg-white px-6 lg:px-9 md:py-24 py-10 flex flex-col items-center ">
            <Intro_cmp
                className="gap-15 md:py-0"
                classNameTitle="md:text-7xl text-[26px] xl:max-w-5xl"
                classNameText="tracking-wide md:max-w-3xl"
                titulo="PESQUISADOR DE INTELIGÊNCIA ARTIFICIAL"
                texto="Um profissional que desenvolve e testa novos algoritmos e modelos de inteligência artificial, conduz experimentos e analisa dados para gerar soluções inovadoras. Trabalho com equipes técnicas para transformar pesquisas em aplicações práticas que impulsionam tecnologia e resultados da empresa."
                Tp_contrado="Fixo"
                cidade="Brasília"
            />
        </section>
    );
}

export default Intro;
