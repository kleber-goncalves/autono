import { TfiArrowRight } from "react-icons/tfi";
import Card from "../../../components/Card";
import Card_III from "../../../components/Card_III";

function Servicos() {
    return (
        <section className="bg-white min-h-screen py-44 overflow-hidden">
            <div className="flex flex-col max-w-7xl mx-auto gap-y-30 px-6 lg:px-8">
                <Card
                    classNameBaseII=" max-w-sm"
                    classNameTitle="max-w-sm "
                    variant="black"
                    text="SERVIÇOS"
                    title="Entregamos produtos e serviços incríveis no mundo todo"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2  gap-x-16 gap-y-40 items-center">
                    <div className="flex flex-col pl-10 gap-8">
                        <Card_III
                            size="sizeIII"
                            variant="black"
                            title="DIREÇÃO AUTÔNOMA"
                            text="Sou um parágrafo. Aqui você pode adicionar e editar seu próprio texto. É fácil, basta clicar em Editar texto ou clicar duas vezes sobre mim. Você também pode alterar a fonte e mais. Sou um ótimo lugar para você compartilhar a sua história com os visitantes."
                            text_button="Saiba mais"
                        />
                    </div>
                    <div className="">
                        <img
                            src="/public/car-servico-1.jpg"
                            alt="Carro Serviço"
                            className=""
                        />
                    </div>
                    <div className="relative w-full">
                        <img
                            src="/public/velocimetro-servico.jpg"
                            alt="Carro Serviço"
                            className="w-full h-auto object-cover "
                        />
                    </div>

                    <div className="pl-20 flex flex-col gap-8">
                        <Card_III
                            size="sizeIII"
                            variant="black"
                            title="INFORMAÇÕES AO VIVO"
                            text="Sou um parágrafo. Aqui você pode adicionar e editar seu próprio texto. É fácil, basta clicar em Editar texto ou clicar duas vezes sobre mim. Você também pode alterar a fonte e mais. Sou um ótimo lugar para você compartilhar a sua história com os visitantes."
                            text_button="Saiba mais"
                        />
                    </div>
                    <div className="flex flex-col pl-10 gap-8">
                        <Card_III
                            size="sizeIII"
                            variant="black"
                            title="PERCEPÇÃO ATIVADA"
                            text="Sou um parágrafo. Aqui você pode adicionar e editar seu próprio texto. É fácil, basta clicar em Editar texto ou clicar duas vezes sobre mim. Você também pode alterar a fonte e mais. Sou um ótimo lugar para você compartilhar a sua história com os visitantes."
                            text_button="Saiba mais"
                        />
                    </div>
                    <div className="pr-4 relative w-full">
                        <img
                            src="/public/car-servico-2.jpg"
                            alt="Carro Serviço"
                            className="w-full h-auto object-cover "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Servicos;
