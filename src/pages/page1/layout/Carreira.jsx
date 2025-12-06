import { TfiArrowRight } from "react-icons/tfi";
import Card_II from './../../../components/Card_II';
import Card from "../../../components/Card";
import CardSlideshow from "../../../components/Slide_Card";

function Carreira() {
    return (
        <section className="bg-black border-b border-white py-37 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-row items-stretch gap-x-80">
                    <div className="flex flex-col py-17">
                        <Card
                            classNameBaseII="mt-17 max-w-sm gap-8"
                            classNameTitle="max-w-sm mt-8"
                            variant="white"
                            text="CARREIRAS"
                            title="Procuramos pessoas talentosas e inovativas para o nosso time. Veja as vagas e envie seu CV."
                            text_button="Vagas"
                        />
                    </div>
                    <div>
                        <CardSlideshow/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Carreira;
