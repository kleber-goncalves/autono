import Intro_cmp from "../../../../components/Intro_cmp";

function Intro() {
    return (
        <section className="max-w-8xl mx-auto bg-white px-6 lg:px-9 md:py-24 py-10 flex flex-col items-center ">
            <Intro_cmp
                className="gap-14 md:py-0"
                classNameTitle="md:text-7xl text-[26px]"
                classNameText="tracking-wide md:max-w-3xl"
                titulo="CIENTISTA DE DADOS"
                texto="Um profissional que coleta, organiza e analisa dados complexos para descobrir padrões e gerar insights que ajudam a empresa a tomar decisões melhores. Uso ferramentas de análise, estatística e machine learning para transformar dados em recomendações claras e valiosas, apoiando estratégias e soluções com precisão e eficiência."
                Tp_contrado="Fixo"
                cidade="São Paulo"
            />
        </section>
    );
}

export default Intro;
