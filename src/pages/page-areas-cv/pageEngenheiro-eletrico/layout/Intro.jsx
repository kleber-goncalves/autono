import Intro_cmp from "../../../../components/Intro_cmp";

function Intro() {
    return (
        <section className="max-w-8xl mx-auto bg-white px-6 lg:px-9 md:py-24 py-10 flex flex-col items-center ">
            <Intro_cmp
                className="gap-15 md:py-0"
                classNameTitle="md:text-7xl text-[26px]"
                classNameText="tracking-wide md:max-w-3xl"
                titulo="ENGENHEIRO ELÉTRICO"
                texto="Um profissional que projeta, desenvolve e supervisiona sistemas e soluções elétricas, garantindo eficiência, segurança e conformidade técnica em instalações, equipamentos e processos. Trabalho com desenho técnico, testes, análises e colaborações para transformar ideias em projetos confiáveis e de alto desempenho."
                Tp_contrado="Fixo"
                cidade="Curitiba"
            />
        </section>
    );
}

export default Intro;
