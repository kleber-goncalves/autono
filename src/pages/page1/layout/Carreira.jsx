
import Card from "../../../components/Card";
import CardSlideshow from "../../../components/Slide_Card";

function Carreira() {
    return (
        <section className=" bg-black max-h-screen border-t sticky mt-90 border-white py-15 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-row items-stretch gap-x-80">
                    <div className="flex flex-col py-37">
                        <Card
                            classNameBaseII="mt-17 max-w-sm gap-8"
                            classNameTitle="max-w-sm mt-8"
                            variant="white"
                            text="CARREIRAS"
                            title="Procuramos pessoas talentosas e inovativas para o nosso time. Veja as vagas e envie seu CV."
                            text_button="Vagas"
                            href="/carreiras"
                        />
                    </div>
                    <div>
                        <CardSlideshow />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Carreira;
