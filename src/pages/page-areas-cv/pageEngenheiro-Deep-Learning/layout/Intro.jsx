import Intro_cmp from "../../../../components/Intro_cmp";

function Intro() {
    return (
        <section className="max-w-8xl mx-auto bg-white px-6 lg:px-9 md:py-24 py-10 flex flex-col items-center ">
            <Intro_cmp
                className="gap-15 md:py-0"
                classNameTitle="md:text-7xl text-[26px] xl:max-w-[40rem]"
                classNameText="tracking-wide md:max-w-3xl"
                titulo="ENGENHEIRO DEEP LEARNING"
                texto="Um profissional que projeta, treina e otimiza modelos de deep learning para resolver desafios complexos usando redes neurais e grandes volumes de dados. Trabalho com frameworks como PyTorch ou TensorFlow, valido resultados e colaboro com equipes para transformar pesquisas em soluções escaláveis e eficientes na empresa."
                Tp_contrado="Fixo"
                cidade="Santa Catarina"
            />
        </section>
    );
}

export default Intro;
