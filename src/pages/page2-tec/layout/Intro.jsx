import Intro_cmp from "../../../components/Intro_cmp";
import { IMAGES } from "../../../data/imagesSupaBase";

function Intro() {
    return (
        <section className="max-w-8xl mx-auto bg-white md:px-6 lg:px-9 md:py-24 py-10 flex flex-col items-center ">
            <Intro_cmp
                classNameTitle=" text-[26px] "
                classNameText="text-sm tracking-wide"
                classNameImage=""
                titulo={["TECNOLOGIA", "PERCEPTIVA ATIVADA"]}
                image={IMAGES.FUNDOS.FUNDO_INTRO}
                imageII={IMAGES.FUNDOS.FUNDO_INTRO_MOBILE}
                rel="preload"
                decoding="async"
                as="image"
                texto="Sentimos o mundo à nossa volta, interpretamos cada movimento —
Veículos que “veem” como você, reagem antes mesmo do mundo pedir,
Transformando cada trajeto em segurança, consciência e futuro.

"
            />
        </section>
    );
}

export default Intro;
