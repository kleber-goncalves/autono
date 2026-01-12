
import Card from "../../../components/Card";
import CardSlideshow from "../../../components/Slide_Card";

function Carreira() {
    return (
        <section className=" bg-black xl:max-h-screen border-t sticky md:mt-90 border-white py-15 px-8 xl:px-30 2xl:px-10  overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex xl:flex-row flex-col items-stretch xl:gap-x-30 2xl:gap-x-80">
                    <div className="flex flex-col py-37 px-5 md:px-0">
                        <Card
                            classNameBaseII="md:mt-17 mt-10 md:max-w-sm gap-8"
                            classNameTitle="max-w-sm text-lg md:mt-8 mt-4"
                            classNameText="text-[11px] "
                            variant="white"
                            text="CARREIRAS"
                            title="Procuramos pessoas talentosas e inovativas para o nosso time. Veja as vagas e envie seu CV."
                            text_button="Vagas"
                            href="/carreiras"
                        />
                    </div>
                    <div className="">
                        <CardSlideshow />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Carreira;
