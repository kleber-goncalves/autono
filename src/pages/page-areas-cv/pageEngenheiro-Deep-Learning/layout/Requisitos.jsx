import Sec_Lists from "../../../../components/Sec-Lists";

function Requisitos() {
    return (
        <section className=" bg-black  mx-auto py-20 md:py-36 px-6 md:px-0 lg:px-0 xl:px-0 flex flex-col  ">
            <Sec_Lists
                title="Seu perfil"
                variant="white"
                li_1="Formação superior em área técnica relevante como Bacharelado em Ciência da Computação, Engenharia, Matemática ou áreas afins é essencial, com forte base em algoritmos, estruturas de dados e ciência da computação. Muitos empregadores também valorizam mestrado ou Ph.D. em Inteligência Artificial, Machine Learning ou áreas correlatas para aprofundar conhecimentos teóricos."
                li_2="Domínio de linguagens de programação e frameworks de IA como Python, R e SQL, alem de experiência comprovada com Python e frameworks de deep learning como TensorFlow, PyTorch ou Keras para projetar, treinar e otimizar redes neurais complexas."
                li_3="Conhecimento sólido em matemática e algoritmos de aprendizagem profunda, forte compreensão de conceitos matemáticos como álgebra linear, cálculo, probabilidade e estatística, além de uma boa base em estruturas de redes neurais e técnicas de otimização usadas em deep learning."
                li_4="Experiência com grandes conjuntos de dados e pipelines de modelagem, habilidade em preparar e pré-processar datasets, criar pipelines robustos para treinamento de modelos e avaliar métricas de desempenho, garantindo eficiência e precisão para aplicações reais."
                li_5="Habilidades de comunicação, trabalho em equipe e aprendizagem contínua, capacidade de colaborar com times multidisciplinares, comunicar resultados técnicos de forma clara e manter-se atualizado com as últimas tendências e avanços na área de IA e deep learning."
                text_button="Enviar CV"
            />
        </section>
    );
}

export default Requisitos