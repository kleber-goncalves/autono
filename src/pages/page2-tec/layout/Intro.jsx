import Intro_cmp from "../../../components/Intro_cmp";
import fundointro from "/src/assets/fundo-intro.jpg";
import fundoIntroMobile from "/src/assets/fundo-introII.png";

function Intro() {
    return (
        <section className="max-w-8xl mx-auto bg-white md:px-6 lg:px-9 md:py-24 py-10 flex flex-col items-center ">
            <Intro_cmp
                classNameTitle=" text-[26px] "
                classNameText="text-sm tracking-wide"
                classNameImage=""
                titulo={["TECNOLOGIA", "PERCEPTIVA ATIVADA"]}
                image={fundointro}
                imageII={fundoIntroMobile}
                rel="preload"
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
