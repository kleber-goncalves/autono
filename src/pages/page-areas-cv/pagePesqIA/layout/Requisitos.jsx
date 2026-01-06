import Sec_Lists from "../../../../components/Sec-Lists";

function Requisitos() {
    return (
        <section className=" bg-black  mx-auto py-20 md:py-36 px-6 md:px-0 lg:px-0 xl:px-0 flex flex-col  ">
            <Sec_Lists
                title="Seu perfil"
                variant="white"
                li_1="Formação acadêmica sólida em áreas técnicas, como Graduação em Ciência da Computação, Engenharia, Matemática ou áreas correlatas é essencial, com preferência por Mestrado ou Ph.D. em Inteligência Artificial, Machine Learning ou campo relacionado, garantindo base teórica e prática robusta para investigar novas soluções."
                li_2="Proficiência em programação e ferramentas de IA como Python, R e SQL, bem como domínio de linguagens como Python e experiência com frameworks e bibliotecas de aprendizado de máquina e IA (por exemplo, TensorFlow, PyTorch, Scikit-Learn), permitindo construir, treinar e validar modelos complexos."
                li_3="Conhecimento profundo de algoritmos e técnicas de IA, entendimento de algoritmos de machine learning e deep learning, matemática aplicada (estatística, probabilidade, álgebra linear) e metodologias para desenvolver e avaliar modelos de IA inovadores."
                li_4="Capacidade de conduzir pesquisa científica rigorosa, com habilidade para planejar experimentos, testar hipóteses, analisar resultados e produzir documentação ou publicações que traduzam descobertas científicas em avanços concretos."
                li_5="Comunicação clara e colaboração em equipes multidisciplinares com habilidades de negócio, boa excelente comunicação verbal e escrita para apresentar resultados, trabalhar com outras áreas (engenharia, produto, negócios) e transformar pesquisa em produtos ou soluções aplicáveis."
                text_button="Enviar CV"
            />
        </section>
    );
}

export default Requisitos