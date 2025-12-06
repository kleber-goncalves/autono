import Card from "../../../components/Card";
import Card_II from "../../../components/Card_II";

function Sec_carreira() {
    return (
        <section className="bg-black max-w-8xl mx-auto gap-y-20 py-30 flex flex-col ">
            <div className="grid grid-cols-2 items-center gap-y-20">
                <div className="flex flex-col px-6 lg:px-59 ">
                    <Card
                        classNameBarraII="h-17"
                        classNameBaseII="mt-17 gap-8"
                        variant="white"
                        text="VAGAS"
                        title="Pensando diferente, podemos mudar o futuro do transporte"
                        text_2="Sou um parágrafo. Aqui você pode adicionar e editar seu próprio texto. É fácil, basta clicar em Editar texto ou clicar duas vezes sobre mim. Você também pode alterar a fonte e mais. Sou um ótimo lugar para você compartilhar a sua história com os visitantes."
                    />
                </div>
                <div className="flex flex-col">
                    <img src="/public/carreira.jpg" alt="carreira" />
                </div>
            </div>
            <div className="grid grid-cols-2 items-center gap-x-90 gap-y-30 px-6 pb-20 lg:px-59">
                <div>
                    <Card_II
                        mt="mtII"
                        size="sizeI"
                        variant="white"
                        title="ENGENHEIRO ELÉTRICO"
                        text="Curitiba, PR"
                        text_2="Sou um parágrafo. Aqui você pode adicionar seu texto. É fácil, basta clicar em Editar texto ou clicar duas vezes sobre mim para editar o conteúdo, a fonte e mais."
                        text_button="Enviar CV"
                    />
                </div>
                <div className="flex flex-col items-center">
                    <Card_II
                        classNameTitle="text-lg"
                        variant="white"
                        title="CIENTISTA DE DADOS"
                        text="São Paulo, SP"
                        text_2="Sou um parágrafo. Aqui você pode adicionar e editar seu próprio texto. É fácil, basta clicar em Editar texto ou clicar duas vezes sobre mim. Você também pode alterar a fonte e mais. Sou um ótimo lugar para você compartilhar a sua história."
                        text_button="Enviar CV"
                    />
                </div>
                <div>
                    <Card_II
                        mt="mtI"
                        classNameTitle="text-lg"
                        variant="white"
                        title="PESQUISADOR DE INTELIGÊNCIA ARTIFICIAL"
                        text="Brasília, DF"
                        text_2="Sou um parágrafo. Aqui você pode adicionar seu texto. É fácil, basta clicar em Editar texto ou clicar duas vezes sobre mim para editar o conteúdo, a fonte e mais."
                        text_button="Enviar CV"
                    />
                </div>
                <div className="flex flex-col items-center">
                    <Card_II
                        classNameTitle="text-lg"
                        variant="white"
                        title="ENGENHEIRO DEEP LEARNING"
                        text="Santa Catarina, SC"
                        text_2="Sou um parágrafo. Aqui você pode adicionar e editar seu próprio texto. É fácil, basta clicar em Editar texto ou clicar duas vezes sobre mim. Você também pode alterar a fonte e mais. Sou um ótimo lugar para você compartilhar a sua história."
                        text_button="Enviar CV"
                    />
                </div>
                <div>
                    <Card_II
                        size="sizeII"
                        variant="black"
                        title="Não achou a vaga que procurava? Tudo bem! Envie seu CV.
"
                        classNameText="hidden"
                        classNameTextII="hidden"
                        text_button="Enviar CV"
                    />
                </div>
            </div>
        </section>
    );
}

export default Sec_carreira;