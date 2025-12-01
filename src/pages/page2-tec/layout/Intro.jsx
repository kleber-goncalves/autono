import Intro_cmp from "../../../components/Intro_cmp"
import minhaImagem from "/public/fundo-intro.jpg"

function Intro() {
    return (
        <section className="max-w-8xl mx-auto px-6 lg:px-9 py-24 flex flex-col items-center ">
            <Intro_cmp
                titulo="TECNOLOGIA PERCEPTIVA ATIVADA
"
                image={minhaImagem}
                texto="Clique aqui para editar esse parágrafo e adicionar seu próprio texto. Este é um ótimo lugar para explicar o título e detalhes ou informações importantes.

"
            />
        </section>
    );
}

export default Intro