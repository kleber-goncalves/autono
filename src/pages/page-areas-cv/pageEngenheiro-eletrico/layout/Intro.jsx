import Intro_cmp from "../../../../components/Intro_cmp";

function Intro() {
    return (
        <section className="max-w-8xl mx-auto bg-white px-6 lg:px-9 md:py-24 py-10 flex flex-col items-center ">
            <Intro_cmp
                className="gap-15 md:py-0"
                classNameTitle="md:text-7xl text-[26px]"
                classNameText="tracking-wide md:max-w-3xl"
                titulo="ENGENHEIRO ELÉTRICO"
                texto="Sou um parágrafo. Aqui você pode adicionar e editar seu próprio texto. É fácil, basta clicar em Editar texto ou clicar duas vezes sobre mim. Você também pode alterar a fonte e mais. Sou um ótimo lugar para você compartilhar a sua história."
                Tp_contrado="Fixo"
                cidade="Curitiba"
            />
        </section>
    );
}

export default Intro;
