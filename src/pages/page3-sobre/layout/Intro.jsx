import Intro_cmp from "../../../components/Intro_cmp";

function Intro() {
    return (
        <section className="max-w-8xl mx-auto px-6 lg:px-9 py-24 flex flex-col items-center ">
            <Intro_cmp
                className="gap-15"
                classNameTitle="text-7xl"
                classNameText="tracking-wide max-w-3xl"
                titulo="NOSSA HISTÓRIA"
                texto="Sou um parágrafo. Aqui você pode adicionar e editar seu próprio texto. É fácil, basta clicar em Editar texto ou clicar duas vezes sobre mim. Você também pode alterar a fonte e mais. Sou um ótimo lugar para você compartilhar a sua história com os visitantes."
            />
        </section>
    );
}

export default Intro;
