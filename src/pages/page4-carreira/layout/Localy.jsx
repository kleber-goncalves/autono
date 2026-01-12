import Card from "../../../components/Card"
import { IMAGES } from "../../../data/imagesSupaBase";


function Localy() {
    return (
        <section className="max-w-8xl bg-white mx-auto px-6 lg:px-9 pt-15 xl:pt-0 border-b flex flex-col ">
            <div className="xl:grid flex flex-col xl:grid-cols-2 items-center md:gap-y-20">
                <div className="flex flex-col 2xl:px-50  ">
                    <Card
                        classNameBarraII="md:h-17"
                        classNameBaseII="md:mt-17 mt-10 gap-8"
                        variant="black"
                        text="LOCAL"
                        title="Estamos no hub de inovação de São Paulo"
                        text_2="Na pulsante metrópole que respira tecnologia e futuro, nossa empresa escolheu o coração da inovação — um verdadeiro “hub” onde ideias florescem e o amanhã se constrói hoje. Estamos aqui para revolucionar a mobilidade urbana com carros elétricos, conectando tecnologia, sustentabilidade e visão de futuro."
                    />
                </div>
                <div className="hidden xl:flex flex-col   ">
                    <img
                        src={IMAGES.PAGE4.LOCALY}
                        loading="lazy"
                        decoding="async"
                        alt="localy"
                    />
                </div>
                <div className="xl:hidden flex flex-col md:w-full lg:w-auto  ">
                    <img
                        src={IMAGES.PAGE4.LOCALY_MOBILE}
                        loading="lazy"
                        decoding="async"
                        alt="localy mobile"
                    />
                </div>
            </div>
        </section>
    );
}

export default Localy