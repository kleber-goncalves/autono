import Card from "../../../components/Card"

function Localy() {
    return (
        <section className="max-w-8xl mx-auto px-6 lg:px-9  border-b flex flex-col ">
            <div className="grid grid-cols-2 items-center gap-y-20">
                <div className="flex flex-col px-50  ">
                    <Card
                        classNameBarraII="h-17"
                        classNameBaseII="mt-17 gap-8"
                        variant="black"
                        text="LOCAL"
                        title="Estamos no hub de inovação de São Paulo"
                        text_2="Sou um parágrafo. Aqui você pode adicionar e editar seu próprio texto. É fácil, basta clicar em Editar texto ou clicar duas vezes sobre mim. Você também pode alterar a fonte e mais. Sou um ótimo lugar para você compartilhar a sua história com os visitantes."
                    />
                </div>
                <div className="flex flex-col  ">
                    <img src="/public/localy.jpg" alt="localy" />
                </div>
            </div>
        </section>
    );
}

export default Localy