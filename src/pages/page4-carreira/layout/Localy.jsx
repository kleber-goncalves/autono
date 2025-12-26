import Card from "../../../components/Card"
import ProjectImage from "../../../components/ProjectImage";


function Localy() {
    return (
        <section className="max-w-8xl bg-white mx-auto px-6 lg:px-9 pt-15 md:pt-0 border-b flex flex-col ">
            <div className="md:grid flex flex-col md:grid-cols-2 items-center md:gap-y-20">
                <div className="flex flex-col md:px-50  ">
                    <Card
                        classNameBarraII="md:h-17"
                        classNameBaseII="md:mt-17 mt-10 gap-8"
                        variant="black"
                        text="LOCAL"
                        title="Estamos no hub de inovação de São Paulo"
                        text_2="Na pulsante metrópole que respira tecnologia e futuro, nossa empresa escolheu o coração da inovação — um verdadeiro “hub” onde ideias florescem e o amanhã se constrói hoje. Estamos aqui para revolucionar a mobilidade urbana com carros elétricos, conectando tecnologia, sustentabilidade e visão de futuro."
                    />
                </div>
                <div className="hidden md:flex flex-col   ">
                    <ProjectImage id="localy" />
                </div>
                <div className="md:hidden flex flex-col   ">
                    <ProjectImage id="localyMobile" />
                </div>
            </div>
        </section>
    );
}

export default Localy