import Sec_Lists from "../../../../components/Sec-Lists";

function Requisitos() {
    return (
        <section className=" bg-black  mx-auto py-20 md:py-36 px-6 md:px-0 lg:px-0 xl:px-0 flex flex-col  ">
            <Sec_Lists
                title="Seu perfil"
                variant="white"
                li_1="Formação superior em Ciência da Computação, Estatística, Matemática, Engenharia ou área afim, com forte base em lógica e análise quantitativa."
                li_2="Domínio de linguagens de programação e ferramentas de análise de dados como Python, R e SQL, além de experiência com bibliotecas e frameworks para modelagem e processamento."
                li_3="Sólidos conhecimentos em estatística aplicada, aprendizado de máquina e modelagem preditiva para extrair valor e insights de grandes volumes de dados."
                li_4="Habilidade para visualizar dados e apresentar resultados claros e impactantes usando ferramentas como Tableau, Power BI ou similares, facilitando decisões baseadas em dados."
                li_5="Excelentes competências de comunicação e trabalho em equipe, com capacidade de traduzir análises complexas em recomendações estratégicas para públicos técnicos e não técnicos."
                text_button="Enviar CV"
            />
        </section>
    );
}

export default Requisitos