import Card from "../../../components/Card";

function Abordagem() {
    return (
        <section className="max-w-8xl border border-black mx-auto py-40 px-6 lg:px-9 flex flex-col items-center ">
            <div className="grid grid-cols-2 gap-y-20">
                <div className="flex flex-col  px-50  ">
                    <Card
                        classNameBarraII="h-17"
                        classNameBaseII="mt-17 gap-8"
                        variant="black"
                        text="NOSSA MISSÃO"
                        title="Revolucionar como
nos movemos"
                        text_2="Sou um parágrafo. Aqui você pode adicionar e editar seu próprio texto. É fácil, basta clicar em Editar texto ou clicar duas vezes sobre mim. Você também pode alterar a fonte e mais. Sou um ótimo lugar para você compartilhar a sua história.

"
                        text_3="Este é um ótimo espaço para escrever um texto longo sobre sua empresa e seus serviços. Você pode dar mais detalhes sobre sua equipe, projetos e metas. Clique duas vezes sobre mim para editar o conteúdo."
                    />
                </div>
                <div className="flex flex-col  items-center ">
                    <img
                        className="rounded-3xl  max-w-sm"
                        src="/public/mulher-abordagem.jpg"
                        alt="abordagem"
                    />
                </div>
            </div>
        </section>
    );
}

export default Abordagem