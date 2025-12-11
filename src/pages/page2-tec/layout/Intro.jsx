import Intro_cmp from "../../../components/Intro_cmp";
import minhaImagem from "/public/fundo-intro.jpg";

function Intro() {
    return (
        <section className="max-w-8xl mx-auto px-6 lg:px-9 py-24 flex flex-col items-center ">
            <Intro_cmp
                titulo="TECNOLOGIA PERCEPTIVA ATIVADA
"
                image={minhaImagem}
                texto="Sentimos o mundo à nossa volta, interpretamos cada movimento —
Veículos que “veem” como você, reagem antes mesmo do mundo pedir,
Transformando cada trajeto em segurança, consciência e futuro.

"
            />
        </section>
    );
}

export default Intro;
