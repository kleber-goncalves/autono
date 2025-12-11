import Card from "../../../components/Card";


function Sobre() {
    return (
        <section className="max-w-8xl  bg-black border border-black mx-auto py-46 flex flex-col  ">
            <div className="flex flex-col md:flex-row mx-auto gap-20  items-center ">
                <div className="flex px-30">
                    <Card
                        classNameBaseII="mt-17 max-w-sm gap-8"
                        classNameTitle="max-w-sm mt-8"
                        variant="white"
                        text="VISÃO"
                        title="Uma revolução no modo como pensamos sobre carros"
                        text_2="Sou um parágrafo. Aqui você pode adicionar e editar seu próprio texto. É fácil, basta clicar em Editar texto ou clicar duas vezes sobre mim. Você também pode alterar a fonte e mais. Sou um ótimo lugar para você compartilhar a sua história com os visitantes."
                    />
                </div>
                <div className="max-w-2xl">
                    <img src="/public/car-sobre.jpg" alt="car-sobre" />
                </div>
            </div>
        </section>
    );
}

export default Sobre;
